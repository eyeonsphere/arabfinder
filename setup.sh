#!/usr/bin/env bash
# Arab Finder — one-time setup: unpack source, install deps, init git,
# create a GitHub repo, build, and deploy to the Netlify project that's
# already been created for you (forms are already turned on there).
#
# Run this from inside ~/Desktop/arabfinder:
#   cd ~/Desktop/arabfinder && bash setup.sh
#
# Requires: node/npm, git, and the `gh` CLI already logged in
# (you said you already have these set up).

set -euo pipefail

REPO_NAME="arabfinder"          # change if you want a different GitHub repo name
REPO_VISIBILITY="--private"     # change to --public if you'd rather it be public
NETLIFY_SITE_ID="c6f71b15-640a-447c-9d00-4a36f9a379c0"

echo "==> Unpacking source"
if [ -f arab-finder-source.tar.gz ]; then
  tar xzf arab-finder-source.tar.gz
  rm arab-finder-source.tar.gz
fi

echo "==> Installing dependencies"
npm install

echo "==> Setting up git"
if [ ! -d .git ]; then
  git init
  git add -A
  git commit -m "Arab Finder: Phase 0 foundation (category tree, listing schema, compliance pages)"
else
  echo "    (git already initialized here — skipping init/commit)"
fi

echo "==> Creating GitHub repo and pushing"
if git remote get-url origin >/dev/null 2>&1; then
  echo "    (a git remote 'origin' already exists — skipping repo creation, just pushing)"
  git push -u origin "$(git branch --show-current)"
else
  gh repo create "$REPO_NAME" $REPO_VISIBILITY --source=. --remote=origin --push
fi

echo "==> Building the site"
npm run build

echo "==> Linking and deploying to Netlify"
npx --yes netlify-cli@latest link --id "$NETLIFY_SITE_ID"
npx --yes netlify-cli@latest deploy --prod --dir=out --site="$NETLIFY_SITE_ID"

echo ""
echo "Done. Your site is live, and the code is pushed to GitHub."
echo ""
echo "Optional next step for true CI/CD (auto-deploy on every push):"
echo "  Open https://app.netlify.com/projects/arab-finder/settings/deploys"
echo "  -> 'Link repository' / 'Link site to Git' -> pick the '$REPO_NAME' repo you just created."
echo "  After that, every 'git push' automatically redeploys — no more running this script."
