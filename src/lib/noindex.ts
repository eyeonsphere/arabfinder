// Part 8: Programmatic SEO & Google Spam Policy Guardrails.
//
// "Enforce a minimum database record threshold before allowing a category-city
// page to be indexed. Any page with fewer than 3 listings must receive a
// noindex header until populated."
export const MIN_LISTINGS_TO_INDEX = 3;

export function shouldIndex(listingCount: number): boolean {
  return listingCount >= MIN_LISTINGS_TO_INDEX;
}
