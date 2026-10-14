import { County, City } from "./types";

// Part 2: Product Strategy & Market Demographics — geographic prioritization.
// Figures are ACS-derived county-level estimates cited in the platform research
// pack; margins of error are real and material, so figures are always displayed
// as approximate ("~") rather than precise counts, per the research pack's own
// caution against publishing point estimates without their margin of error.
export const counties: County[] = [
  {
    slug: "orange-county",
    name: "Orange County",
    state: "CA",
    phase: 1,
    phaseLabel: "Phase 1 — Beachhead",
    arabAncestryPopulation: "~43,900",
    arabicSpeakersAtHome: "~31,200",
    lepShare: "~27.6%",
    dialectProfile: "Primarily Egyptian and Levantine",
    blurb:
      "Home to Little Arabia, the Brookhurst Corridor cultural district designated by the Anaheim City Council in 2022, and to Irvine's Arab American Business Chamber.",
  },
  {
    slug: "san-diego-county",
    name: "San Diego County",
    state: "CA",
    phase: 2,
    phaseLabel: "Phase 2 — Depth",
    arabAncestryPopulation: "~44,400",
    arabicSpeakersAtHome: "~30,600",
    lepShare: "~47.8% (highest in California)",
    dialectProfile: "Iraqi / Chaldean-majority plurality, highly refugee-origin",
    blurb:
      "El Cajon and the Rancho San Diego / Santee / La Mesa corridor hold the state's highest limited-English-proficiency Arabic-speaking share.",
  },
  {
    slug: "los-angeles-county",
    name: "Los Angeles County",
    state: "CA",
    phase: 3,
    phaseLabel: "Phase 3 — Scale",
    arabAncestryPopulation: "~80,600",
    arabicSpeakersAtHome: "~47,300",
    dialectProfile: "Strongly Lebanese and Egyptian led",
    blurb: "The largest absolute Arab-ancestry population in the region, though highly dispersed across the county.",
  },
  {
    slug: "san-bernardino-county",
    name: "San Bernardino County",
    state: "CA",
    phase: 4,
    phaseLabel: "Phase 4 — Consolidation",
    arabAncestryPopulation: "~22,100",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Egyptian and Syrian weighted",
    blurb: "Inland Empire suburbs, including Rancho Cucamonga and Fontana, with a highly dispersed population.",
  },
  {
    slug: "riverside-county",
    name: "Riverside County",
    state: "CA",
    phase: 4,
    phaseLabel: "Phase 4 — Consolidation",
    arabAncestryPopulation: "~21,200",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Egyptian and Syrian weighted",
    blurb: "Inland Empire suburbs, including Corona and Murrieta, launching alongside San Bernardino County.",
  },

  // Michigan — a separate region from the Southern California rollout above,
  // added at the site owner's direction. Metro Detroit (Wayne / Oakland / Macomb
  // counties) has the second-largest Middle Eastern-ancestry population of any
  // U.S. metro area, after Southern California. No county-level ACS Arab-ancestry
  // breakout was available at time of writing, so those fields are marked "n/a"
  // rather than estimated; the city- and metro-level figures cited in each blurb
  // are sourced and dated in-line instead.
  {
    slug: "wayne-county-mi",
    name: "Wayne County",
    state: "MI",
    phase: 5,
    phaseLabel: "Michigan Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Lebanese-majority in Dearborn; also home to Iraqi, Yemeni, Palestinian, and Chaldean communities",
    blurb:
      "Home to Dearborn, where residents of Middle Eastern or North African ancestry made up 54.5% of the population per 2020 Census data, and to the Arab American National Museum. Historically the heart of Michigan's Arab American community.",
  },
  {
    slug: "oakland-county-mi",
    name: "Oakland County",
    state: "MI",
    phase: 5,
    phaseLabel: "Michigan Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Chaldean/Iraqi-majority, concentrated in West Bloomfield and Farmington Hills",
    blurb:
      "Home to the Chaldean American Chamber of Commerce and the Chaldean Community Foundation, both headquartered in the West Bloomfield/Farmington Hills area — the institutional center of the U.S.'s largest Chaldean community.",
  },
  {
    slug: "macomb-county-mi",
    name: "Macomb County",
    state: "MI",
    phase: 5,
    phaseLabel: "Michigan Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Chaldean/Iraqi-majority, concentrated in Sterling Heights (sometimes called \"Little Baghdad\") and Warren",
    blurb:
      "Sterling Heights and Warren form a dense corridor of Chaldean-owned restaurants, markets, and professional offices along 15 Mile and 17 Mile Roads.",
  },

  // Illinois — a third region, added at the site owner's direction after he
  // supplied a set of Chicago-area community directory and chamber URLs.
  // Cook County has the largest Palestinian-American population of any U.S.
  // county (18,000+), concentrated along the Harlem Avenue corridor in
  // Bridgeview, which received an honorary "Little Palestine Way" street
  // designation from the Illinois legislature. A separate, longstanding
  // Assyrian/Chaldean community is concentrated in the north-side/north-suburb
  // corridor (Skokie, Niles, Lincolnwood, Rogers Park/West Ridge). As with
  // Michigan, no county-level ACS Arab-ancestry breakout was available, so
  // those fields are marked "n/a"; the Cook County population figure in the
  // blurb is sourced and dated in-line instead.
  {
    slug: "cook-county-il",
    name: "Cook County",
    state: "IL",
    phase: 6,
    phaseLabel: "Illinois Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Palestinian-majority in the Bridgeview/Harlem Ave corridor; also a large Assyrian/Chaldean (Iraqi Christian) community on the north side and north suburbs, plus Yemeni, Egyptian, Syrian, and Jordanian communities",
    blurb:
      "Home to the largest Palestinian-American population of any U.S. county — over 18,000 residents per 2026 reporting — concentrated along Harlem Avenue in Bridgeview, honorarily designated \"Little Palestine Way\" by the Illinois legislature. Also home to a longstanding Assyrian/Chaldean community centered on Chicago's north side and the Skokie/Niles/Lincolnwood corridor.",
  },
  {
    slug: "dupage-county-il",
    name: "DuPage County",
    state: "IL",
    phase: 6,
    phaseLabel: "Illinois Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Mixed Levantine and Iraqi, concentrated along the Lombard/Villa Park corridor",
    blurb:
      "A cluster of Arab-owned bakeries, markets, and professional offices has grown along Roosevelt Road in Lombard and Villa Park, just west of Cook County's Harlem Avenue corridor.",
  },
  {
    slug: "will-county-il",
    name: "Will County",
    state: "IL",
    phase: 6,
    phaseLabel: "Illinois Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Small, dispersed Arab American presence in the Frankfort area",
    blurb:
      "A small but growing exurban presence southwest of Chicago, in and around Frankfort.",
  },

  // San Francisco Bay Area — a fourth region, still California so no new state code is
  // needed, but launched as its own chapter (like Michigan and Illinois) at the site
  // owner's direction. San Francisco's Tenderloin neighborhood has been the heart of
  // Arab San Francisco since the 1960s, home to the largest Yemeni community in
  // Northern California; Oakland (Alameda County) has its own 10,000+ Yemeni-American
  // community with roots in Central Valley farm labor migration; Santa Clara County
  // (San Jose/Silicon Valley) hosts a distinct, more recent wave of Arab American tech
  // professionals. No county-level ACS Arab-ancestry breakout was available, matching
  // the Michigan/Illinois pattern.
  {
    slug: "san-francisco-county",
    name: "San Francisco County",
    state: "CA",
    phase: 7,
    phaseLabel: "Bay Area Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Yemeni-majority in the Tenderloin, alongside Palestinian, Jordanian, Egyptian, Syrian, and Moroccan communities",
    blurb:
      "The Tenderloin has been the heart of Arab San Francisco since the 1960s, home to the largest Yemeni community in Northern California alongside Palestinian, Jordanian, Egyptian, Syrian, and Moroccan communities, and to St. Nicholas Antiochian Orthodox Church (est. 1937), the city's first Arabic-speaking church.",
  },
  {
    slug: "alameda-county",
    name: "Alameda County",
    state: "CA",
    phase: 7,
    phaseLabel: "Bay Area Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Yemeni-majority in Oakland, with roots tracing to Central Valley farm labor migration in the 1960s-80s",
    blurb:
      "Oakland is home to more than 10,000 Yemeni-Americans, concentrated around the downtown/14th Street corridor and East Oakland, anchored by the Lighthouse Mosque — part of a Yemeni-American community whose roots trace to farmworkers who migrated north from California's Central Valley vineyards in the 1960s-80s.",
  },
  {
    slug: "santa-clara-county",
    name: "Santa Clara County",
    state: "CA",
    phase: 7,
    phaseLabel: "Bay Area Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Mixed Levantine and Egyptian professional community concentrated in the South Bay tech sector",
    blurb:
      "Home to the Arab American Cultural Center of the Silicon Valley (AACC-SV) in San Jose, serving a professional Arab American community concentrated in the South Bay's tech sector — a distinct, more recent wave of immigration than the historic Tenderloin and Oakland communities.",
  },

  // Fifth region, added Oct 13, 2026: Sacramento and the surrounding capital
  // region. Unlike the Bay Area, no single historic ethnic enclave anchors this
  // community — it is smaller and more dispersed, built up through Iraqi/Chaldean
  // refugee resettlement into Sacramento County since the 1990s-2000s (SALAM
  // Islamic Center, Our Lady of Perpetual Help Chaldean and Assyrian Catholic
  // Church) and newer suburban growth into Placer, El Dorado, and Yolo counties.
  // No county-level ACS Arab-ancestry breakout was available, matching the
  // Michigan/Illinois/Bay Area pattern.
  {
    slug: "sacramento-county",
    name: "Sacramento County",
    state: "CA",
    phase: 8,
    phaseLabel: "Sacramento Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Iraqi/Chaldean-majority refugee-origin community, alongside a broader multi-ethnic Arab and Muslim population",
    blurb:
      "Home to Our Lady of Perpetual Help Chaldean and Assyrian Catholic Church in Orangevale — formed when the area's Chaldean community, worshiping in the Diocese of Sacramento for over 30 years, roughly doubled in size as about 40 Iraqi refugee families arrived in the late 2000s — and to the SALAM Islamic Center, serving the greater Sacramento area's Muslim community since the 1990s.",
  },
  {
    slug: "placer-county",
    name: "Placer County",
    state: "CA",
    phase: 8,
    phaseLabel: "Sacramento Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Mixed, smaller and more dispersed than Sacramento County",
    blurb:
      "Roseville and Rocklin's rapid suburban growth has drawn a smaller, more recently arrived Arab American population than Sacramento County's longer-established refugee-origin community.",
  },
  {
    slug: "el-dorado-county",
    name: "El Dorado County",
    state: "CA",
    phase: 8,
    phaseLabel: "Sacramento Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Small Chaldean/Iraqi presence historically centered on El Dorado Hills",
    blurb:
      "El Dorado Hills was the original home of what's now Orangevale's Chaldean and Assyrian Catholic parish before the congregation outgrew the property and relocated into Sacramento County.",
  },
  {
    slug: "yolo-county",
    name: "Yolo County",
    state: "CA",
    phase: 8,
    phaseLabel: "Sacramento Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Small, university- and tech-corridor-linked population in Davis and West Sacramento",
    blurb:
      "Davis, home to UC Davis, and West Sacramento, directly across the river from downtown Sacramento, anchor a smaller Arab American presence on the region's west side.",
  },

  // New York City — a fourth region, added at the site owner's direction.
  // Scoped to the two boroughs with the city's best-documented Arab American
  // commercial/cultural corridors: Brooklyn's Bay Ridge / Sunset Park (5th &
  // 3rd Avenues, widely reported as home to the largest Palestinian-American
  // population of any U.S. neighborhood, plus a large Yemeni community) and
  // Queens's Astoria (Steinway Street, historically called "Little Egypt").
  // No county-level ACS Arab-ancestry breakout was available, so those
  // fields are marked "n/a"; borough/neighborhood population figures cited
  // in each blurb are sourced and dated in-line instead.
  {
    slug: "kings-county-ny",
    name: "Kings County (Brooklyn)",
    state: "NY",
    phase: 9,
    phaseLabel: "New York City Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Palestinian-majority in Bay Ridge; also home to Yemeni, Egyptian, Syrian, and Lebanese communities",
    blurb:
      "Home to Bay Ridge, widely reported as having the largest Palestinian-American population of any neighborhood in the U.S., concentrated along 5th and 3rd Avenues, with an adjoining Yemeni American community centered on nearby Sunset Park's Fifth Avenue corridor.",
  },
  {
    slug: "queens-county-ny",
    name: "Queens County",
    state: "NY",
    phase: 9,
    phaseLabel: "New York City Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Egyptian-majority in Astoria; also home to Lebanese, Syrian, Moroccan, and other North African communities",
    blurb:
      "Home to Astoria's Steinway Street corridor, historically called \"Little Egypt,\" one of the oldest and most established Arab American commercial districts in New York City.",
  },

  // Nashville — a fifth region, added at the site owner's direction.
  // Davidson County's Nolensville Pike corridor in South Nashville is
  // nationally known as home to the largest Kurdish-American population in
  // the U.S. ("Little Kurdistan"); Kurds are a distinct ethnic/linguistic
  // community and are NOT counted as Arab per this site's Rule 1, so
  // Kurdish-specific institutions are excluded or marked not_stated. The
  // same refugee-resettlement corridor also brought a smaller but
  // well-documented Iraqi Arab, Syrian, and other Arab population, which is
  // this chapter's actual scope. No county-level ACS Arab-ancestry
  // breakout was available, so those fields are marked "n/a"; corridor-
  // level figures cited in the blurb are sourced and dated in-line instead.
  {
    slug: "davidson-county-tn",
    name: "Davidson County",
    state: "TN",
    phase: 10,
    phaseLabel: "Nashville Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Iraqi Arab and Syrian refugee-origin population along the Nolensville Pike corridor, alongside the much larger (non-Arab) Kurdish-American community",
    blurb:
      "Home to the Nolensville Pike corridor in South Nashville/Antioch, nationally known as the center of the largest Kurdish-American population in the U.S., which also hosts a smaller Iraqi Arab, Syrian, and broader Middle Eastern refugee-origin business community.",
  },

  // Columbus — a sixth region, added at the site owner's direction.
  // Franklin County's Northland/Morse Road-Cleveland Ave corridor is home to
  // one of the largest Somali-American populations in the U.S. Somalis are
  // a distinct ethnic/linguistic community and are NOT counted as Arab per
  // this site's Rule 1 (even though Somalia is an Arab League member
  // state), so Somali-specific businesses and institutions are excluded
  // entirely rather than marked not_stated. This chapter's actual scope is
  // Columbus's longstanding Lebanese-American Maronite/Melkite Catholic
  // community (one of Ohio's oldest Arab-American communities) plus a
  // smaller, more recently arrived Syrian, Iraqi Arab, Egyptian, and Yemeni
  // population. No county-level ACS Arab-ancestry breakout was available,
  // so those fields are marked "n/a".
  {
    slug: "franklin-county-oh",
    name: "Franklin County",
    state: "OH",
    phase: 11,
    phaseLabel: "Columbus Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Longstanding Lebanese-American Maronite/Melkite Catholic community, alongside a smaller Syrian, Iraqi Arab, Egyptian, and Yemeni population; distinct from the much larger (non-Arab) Somali-American community",
    blurb:
      "Home to one of Ohio's oldest Arab-American communities, rooted in Lebanese-American Maronite and Melkite Catholic parishes, alongside a smaller and more recently arrived Syrian, Iraqi Arab, Egyptian, and Yemeni business community concentrated along the Northland/Cleveland Avenue and Bethel Road corridors.",
  },

  // Philadelphia — a seventh region, added at the site owner's direction.
  // South Philadelphia is home to one of the oldest, most nationally
  // documented Arab-American communities in the U.S., historically Lebanese
  // and Palestinian, anchored by St. Maron's Maronite Catholic parish
  // (dating to the 1880s) and the Al-Aqsa mosque founded by Palestinian
  // immigrants in Kensington (1992), with more recent Syrian, Egyptian,
  // Yemeni, Tunisian, and Jordanian populations spreading into Fox Chase
  // and Northeast Philadelphia. No county-level ACS Arab-ancestry breakout
  // was available, so those fields are marked "n/a".
  {
    slug: "philadelphia-county-pa",
    name: "Philadelphia County",
    state: "PA",
    phase: 12,
    phaseLabel: "Philadelphia Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Historic Lebanese and Palestinian-American community (one of the oldest in the U.S.), concentrated in South Philadelphia and Fox Chase, alongside a smaller and more recently arrived Syrian, Egyptian, Yemeni, Tunisian, and Jordanian population",
    blurb:
      "Home to one of the oldest and most documented Arab-American communities in the U.S., rooted in South Philadelphia's Lebanese-American Maronite Catholic parish (St. Maron's, since the 1880s) and the Al-Aqsa mosque founded by Palestinian immigrants in Kensington, alongside a newer Levantine and North African restaurant scene in Fox Chase and Northeast Philadelphia.",
  },

  // Jacksonville — an eighth region, added at the site owner's direction.
  // Jacksonville has a documented Lebanese/Syrian-American community dating
  // to the early 1900s (Ottoman Syria-era immigration), historically
  // centered in LaVilla/Springfield/Eastside, with civic institutions
  // (the Salaam Club, founded 1912 as the Syrian American Club, and the
  // Ramallah American Club, founded 1953 by Palestinian families) still
  // active today, plus a Coptic Orthodox (Egyptian) parish and more recent
  // Syrian, Lebanese, and other Arab arrivals. No county-level ACS Arab-
  // ancestry breakout was available, so those fields are marked "n/a".
  {
    slug: "duval-county-fl",
    name: "Duval County",
    state: "FL",
    phase: 13,
    phaseLabel: "Jacksonville Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Longstanding Lebanese and Syrian-American community dating to the early 1900s, with Coptic Orthodox (Egyptian) and more recent Syrian/Lebanese arrivals",
    blurb:
      "Home to a Lebanese and Syrian-American community documented since the early 1900s, historically centered in LaVilla, Springfield, and the Eastside, with civic institutions including the Salaam Club (founded 1912 as the Syrian American Club) and the Ramallah American Club (founded 1953 by Palestinian families), alongside a Coptic Orthodox Egyptian parish and newer Lebanese and Syrian-owned restaurants.",
  },

  // Jersey City — a ninth region, added at the site owner's direction.
  // Jersey City, especially around Journal Square, is home to one of the
  // largest Coptic Christian (Egyptian) communities in the U.S., anchored
  // by two historic parishes (St. Mark, the first Coptic Orthodox parish
  // founded in the U.S., and St. George & St. Shenouda), plus a smaller
  // Syrian and Palestinian population. Hudson County also has very large
  // South Asian and Filipino immigrant communities, which are NOT Arab and
  // are excluded from this chapter's scope. No county-level ACS Arab-
  // ancestry breakout was available, so those fields are marked "n/a".
  {
    slug: "hudson-county-nj",
    name: "Hudson County",
    state: "NJ",
    phase: 14,
    phaseLabel: "Jersey City Chapter",
    arabAncestryPopulation: "n/a (no county-level ACS breakout available)",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Large Egyptian-American Coptic Christian community concentrated around Journal Square, alongside a smaller Syrian and Palestinian population; distinct from Hudson County's much larger (non-Arab) South Asian and Filipino communities",
    blurb:
      "Home to one of the largest Coptic Christian (Egyptian) communities in the U.S., anchored by two historic parishes around Journal Square — St. Mark, the first Coptic Orthodox parish founded in the U.S., and St. George & St. Shenouda — alongside a smaller Syrian and Palestinian restaurant and community presence.",
  },
];

export const cities: City[] = [
  {
    slug: "anaheim",
    name: "Anaheim",
    countySlug: "orange-county",
    isCulturalDistrict: true,
    blurb:
      "Home to Little Arabia — the Brookhurst Corridor between Ball Road and Broadway, designated by a 5-0-1 Anaheim City Council vote on August 23, 2022 as (by contemporaneous reporting) possibly America's first formal Arab American cultural district. Arab American-owned businesses first appeared along the corridor in the 1980s.",
  },
  {
    slug: "irvine",
    name: "Irvine",
    countySlug: "orange-county",
    blurb: "Home to the Arab American Business Chamber (AABC), serving Arab American professionals, entrepreneurs, and small business owners.",
  },
  {
    slug: "fountain-valley",
    name: "Fountain Valley",
    countySlug: "orange-county",
    blurb: "Part of the Orange County beachhead launch cluster alongside Anaheim and Irvine.",
  },
  {
    slug: "westminster",
    name: "Westminster",
    countySlug: "orange-county",
    blurb: "Home to Al-Noor Foundation, an Orange County mosque, and neighboring the Little Saigon commercial district.",
  },
  {
    slug: "placentia",
    name: "Placentia",
    countySlug: "orange-county",
    blurb: "Home to Holy Cross Melkite Greek Catholic Church, part of Orange County's Levantine Christian community.",
  },
  {
    slug: "orange",
    name: "Orange",
    countySlug: "orange-county",
    blurb: "Home to St Mary's Syrian Orthodox Church, part of Orange County's Syriac Christian community.",
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    countySlug: "orange-county",
    blurb: "Directly south of Anaheim's Little Arabia district along Brookhurst Street, with Arab American-owned restaurants of its own on the same corridor.",
  },
  {
    slug: "el-cajon",
    name: "El Cajon",
    countySlug: "san-diego-county",
    blurb: "11.33% Arab ancestry (~11,800 residents), with roughly 10,700 Arabic speakers at home — the highest local density in the region.",
  },
  {
    slug: "rancho-san-diego",
    name: "Rancho San Diego",
    countySlug: "san-diego-county",
    blurb: "An 11.86% Arab-ancestry-share community adjoining El Cajon.",
  },
  {
    slug: "santee",
    name: "Santee",
    countySlug: "san-diego-county",
    blurb: "Part of the San Diego County East County demand cluster.",
  },
  {
    slug: "la-mesa",
    name: "La Mesa",
    countySlug: "san-diego-county",
    blurb: "Part of the San Diego County East County demand cluster.",
  },
  {
    slug: "lakeside",
    name: "Lakeside",
    countySlug: "san-diego-county",
    blurb: "Home to the Islamic Center of Lakeside, part of San Diego County's East County demand cluster.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    countySlug: "san-diego-county",
    blurb: "Home to a cluster of Mediterranean and Levantine restaurants along the El Cajon Boulevard corridor in the City Heights/Rolando area, adjoining El Cajon's East County Arab American community.",
  },
  {
    slug: "spring-valley",
    name: "Spring Valley",
    countySlug: "san-diego-county",
    blurb: "An unincorporated East County community adjoining El Cajon and Rancho San Diego.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    countySlug: "los-angeles-county",
    blurb: "The county's largest single concentration, though the Arab American population here is highly dispersed rather than clustered — from Coptic churches in Pico-Robertson to Lebanese restaurants in Westwood, Koreatown, and North Hollywood.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    countySlug: "los-angeles-county",
    blurb: "An Armenian-majority city bordering Los Angeles that is also home to several long-running Levantine and Middle Eastern restaurants along San Fernando Road and Colorado Street.",
  },
  {
    slug: "burbank",
    name: "Burbank",
    countySlug: "los-angeles-county",
    blurb: "A San Fernando Valley city bordering Glendale, part of the same dispersed Los Angeles County Arab American community.",
  },
  {
    slug: "culver-city",
    name: "Culver City",
    countySlug: "los-angeles-county",
    blurb: "Home to King Fahad Mosque, one of the larger and better-known mosques on LA's Westside.",
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    countySlug: "los-angeles-county",
    blurb: "Home to Saint Peter and Saint Paul Coptic Orthodox Church, part of the dispersed Los Angeles County Coptic Christian community.",
  },
  {
    slug: "inglewood",
    name: "Inglewood",
    countySlug: "los-angeles-county",
    blurb: "Home to the Islamic Center of Inglewood, part of the dispersed Los Angeles County Muslim community.",
  },
  {
    slug: "hawthorne",
    name: "Hawthorne",
    countySlug: "los-angeles-county",
    blurb: "Home to the Islamic Center of Hawthorne, part of the dispersed Los Angeles County Muslim community.",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    countySlug: "los-angeles-county",
    blurb: "Home to Arabic Bible Christian Church in Belmont Shore, part of the dispersed Los Angeles County Arab American Christian community.",
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    countySlug: "san-bernardino-county",
    blurb: "2.37% Arab ancestry — a San Bernardino County suburb in the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "fontana",
    name: "Fontana",
    countySlug: "san-bernardino-county",
    blurb: "Part of the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "corona",
    name: "Corona",
    countySlug: "riverside-county",
    blurb: "2.98% Arab ancestry — a Riverside County suburb in the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    countySlug: "riverside-county",
    blurb: "Part of the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    countySlug: "los-angeles-county",
    blurb: "Part of the dispersed Los Angeles County Arab American community, with a handful of Levantine and Syrian restaurants and cafes.",
  },
  {
    slug: "torrance",
    name: "Torrance",
    countySlug: "los-angeles-county",
    blurb: "Home to a South Bay-area Coptic Orthodox parish, part of the dispersed Los Angeles County Arab American Christian community.",
  },
  {
    slug: "bellflower",
    name: "Bellflower",
    countySlug: "los-angeles-county",
    blurb: "Home to a Coptic Orthodox parish, part of the dispersed Los Angeles County Arab American Christian community.",
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    countySlug: "orange-county",
    blurb: "Orange County's county seat, home to a Chaldean Catholic parish and a small cluster of Levantine restaurants.",
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    countySlug: "orange-county",
    blurb: "Home to a Shia Islamic education center and a small cluster of Lebanese restaurants.",
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    countySlug: "orange-county",
    blurb: "A north Orange County city with a small cluster of halal Middle Eastern restaurants.",
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    countySlug: "orange-county",
    blurb: "A south Orange County suburb, home to a halal Lebanese restaurant.",
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    countySlug: "orange-county",
    blurb: "A south Orange County suburb, home to a Syrian-owned Mediterranean restaurant.",
  },
  {
    slug: "buena-park",
    name: "Buena Park",
    countySlug: "orange-county",
    blurb: "A north Orange County city bordering Anaheim's Little Arabia, home to a Mediterranean restaurant and banquet hall.",
  },
  {
    slug: "stanton",
    name: "Stanton",
    countySlug: "orange-county",
    blurb: "A small north Orange County city bordering Garden Grove and Anaheim.",
  },
  {
    slug: "chula-vista",
    name: "Chula Vista",
    countySlug: "san-diego-county",
    blurb: "A South Bay San Diego County city with a small halal restaurant presence.",
  },
  {
    slug: "escondido",
    name: "Escondido",
    countySlug: "san-diego-county",
    blurb: "A North County San Diego city, home to a Coptic Orthodox parish.",
  },
  {
    slug: "national-city",
    name: "National City",
    countySlug: "san-diego-county",
    blurb: "A South Bay San Diego County city, home to a Chaldean American Chamber of Commerce member business.",
  },
  {
    slug: "jamul",
    name: "Jamul",
    countySlug: "san-diego-county",
    blurb: "A rural East County community near El Cajon, home to a Chaldean American Chamber of Commerce member business.",
  },
  {
    slug: "san-bernardino",
    name: "San Bernardino",
    countySlug: "san-bernardino-county",
    blurb: "The county seat, part of the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "redlands",
    name: "Redlands",
    countySlug: "san-bernardino-county",
    blurb: "Part of the Phase 4 Inland Empire rollout, home to two long-running Lebanese-owned restaurants.",
  },
  {
    slug: "chino",
    name: "Chino",
    countySlug: "san-bernardino-county",
    blurb: "Part of the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "upland",
    name: "Upland",
    countySlug: "san-bernardino-county",
    blurb: "Part of the Phase 4 Inland Empire rollout, home to a family-owned Middle Eastern restaurant.",
  },
  {
    slug: "riverside",
    name: "Riverside",
    countySlug: "riverside-county",
    blurb: "The county seat, part of the Phase 4 Inland Empire rollout.",
  },
  {
    slug: "temecula",
    name: "Temecula",
    countySlug: "riverside-county",
    blurb: "Part of the Phase 4 Inland Empire rollout, sharing a business corridor with neighboring Murrieta.",
  },
  {
    slug: "moreno-valley",
    name: "Moreno Valley",
    countySlug: "riverside-county",
    blurb: "Part of the Phase 4 Inland Empire rollout.",
  },

  // Michigan cities
  {
    slug: "dearborn",
    name: "Dearborn",
    countySlug: "wayne-county-mi",
    isCulturalDistrict: true,
    blurb: "Home to the Arab American National Museum and, per 2020 Census data, a population that is 54.5% Middle Eastern or North African by ancestry — the highest concentration of any city in the U.S.",
  },
  {
    slug: "hamtramck",
    name: "Hamtramck",
    countySlug: "wayne-county-mi",
    isCulturalDistrict: true,
    blurb: "A small, dense city entirely surrounded by Detroit, home to a large Yemeni American community (concentrated along the Caniff Ave and Joseph Campau Ave corridors) alongside Bangladeshi and Bosnian communities, and the first U.S. city to elect an all-Muslim city council.",
  },
  {
    slug: "detroit",
    name: "Detroit",
    countySlug: "wayne-county-mi",
    blurb: "Home to Woodmere Cemetery's Chaldean and Arab American burial services, part of the wider Wayne County Arab American community.",
  },
  {
    slug: "garden-city-mi",
    name: "Garden City",
    countySlug: "wayne-county-mi",
    blurb: "A western Wayne County suburb bordering Dearborn Heights and Westland.",
  },
  {
    slug: "dearborn-heights",
    name: "Dearborn Heights",
    countySlug: "wayne-county-mi",
    blurb: "Bordering Dearborn to the west, home to a dense corridor of Arab American-owned restaurants and grocers along Warren Ave and Ford Rd.",
  },
  {
    slug: "westland",
    name: "Westland",
    countySlug: "wayne-county-mi",
    blurb: "A western Wayne County suburb bordering Garden City and Dearborn Heights.",
  },
  {
    slug: "taylor",
    name: "Taylor",
    countySlug: "wayne-county-mi",
    blurb: "A Downriver Wayne County suburb, home to Chaldean-owned businesses expanding south from Dearborn.",
  },
  {
    slug: "trenton",
    name: "Trenton",
    countySlug: "wayne-county-mi",
    blurb: "A Downriver Wayne County city on the Detroit River.",
  },
  {
    slug: "canton",
    name: "Canton",
    countySlug: "wayne-county-mi",
    blurb: "A western Wayne County township with a growing Arab American and Chaldean business presence.",
  },
  {
    slug: "livonia",
    name: "Livonia",
    countySlug: "wayne-county-mi",
    blurb: "A western Wayne County suburb bordering Farmington Hills and Redford.",
  },
  {
    slug: "grosse-pointe-farms",
    name: "Grosse Pointe Farms",
    countySlug: "wayne-county-mi",
    blurb: "An affluent Wayne County suburb along Lake St. Clair, home to a small number of Arab American professional offices.",
  },
  {
    slug: "redford-charter-township",
    name: "Redford Charter Township",
    countySlug: "wayne-county-mi",
    blurb: "A Wayne County suburb bordering Detroit and Dearborn Heights.",
  },
  {
    slug: "farmington-hills",
    name: "Farmington Hills",
    countySlug: "oakland-county-mi",
    blurb: "Home to the Chaldean American Chamber of Commerce's Michigan headquarters and Elite Medical Group.",
  },
  {
    slug: "west-bloomfield",
    name: "West Bloomfield",
    countySlug: "oakland-county-mi",
    blurb: "Home to the Chaldean Community Foundation's founding offices and a dense concentration of Chaldean-owned professional practices.",
  },
  {
    slug: "commerce-township",
    name: "Commerce Township",
    countySlug: "oakland-county-mi",
    blurb: "A northwest Oakland County suburb, part of the same Chaldean-community cluster as West Bloomfield.",
  },
  {
    slug: "southfield",
    name: "Southfield",
    countySlug: "oakland-county-mi",
    blurb: "A southern Oakland County city along the Northwestern Highway corridor, home to a cluster of Chaldean-owned law offices and medical practices.",
  },
  {
    slug: "troy",
    name: "Troy",
    countySlug: "oakland-county-mi",
    blurb: "A southeastern Oakland County city with a growing concentration of Chaldean-owned professional offices, bakeries, and restaurants.",
  },
  {
    slug: "berkley",
    name: "Berkley",
    countySlug: "oakland-county-mi",
    blurb: "A small southern Oakland County city, home to the original Mr. Kabob restaurant location.",
  },
  {
    slug: "oak-park",
    name: "Oak Park",
    countySlug: "oakland-county-mi",
    blurb: "A southern Oakland County city bordering Berkley and Huntington Woods.",
  },
  {
    slug: "rochester-hills",
    name: "Rochester Hills",
    countySlug: "oakland-county-mi",
    blurb: "A northeastern Oakland County city with a growing number of Chaldean-owned medical practices.",
  },
  {
    slug: "novi",
    name: "Novi",
    countySlug: "oakland-county-mi",
    blurb: "A western Oakland County suburb, home to a number of Chaldean-owned law and medical offices.",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    countySlug: "oakland-county-mi",
    blurb: "An affluent southern Oakland County city, home to a cluster of Chaldean-owned law firms along Old Woodward Ave.",
  },
  {
    slug: "bloomfield-hills",
    name: "Bloomfield Hills",
    countySlug: "oakland-county-mi",
    blurb: "An affluent Oakland County city bordering Birmingham, home to a number of Chaldean-owned law and medical offices.",
  },
  {
    slug: "bingham-farms",
    name: "Bingham Farms",
    countySlug: "oakland-county-mi",
    blurb: "A small Oakland County village near Southfield and Birmingham.",
  },
  {
    slug: "royal-oak",
    name: "Royal Oak",
    countySlug: "oakland-county-mi",
    blurb: "A southern Oakland County city bordering Berkley, home to a small number of Chaldean-owned professional offices.",
  },
  {
    slug: "farmington",
    name: "Farmington",
    countySlug: "oakland-county-mi",
    blurb: "A small Oakland County city bordering Farmington Hills, distinct from it.",
  },
  {
    slug: "hazel-park",
    name: "Hazel Park",
    countySlug: "oakland-county-mi",
    blurb: "A small southern Oakland County city, home to a number of Chaldean-owned medical practices along John R Rd.",
  },
  {
    slug: "pontiac",
    name: "Pontiac",
    countySlug: "oakland-county-mi",
    blurb: "Oakland County's seat, home to a small number of Chaldean-owned medical practices.",
  },
  {
    slug: "sterling-heights",
    name: "Sterling Heights",
    countySlug: "macomb-county-mi",
    isCulturalDistrict: true,
    blurb: "Home to one of the largest concentrations of Chaldean-owned businesses in Michigan along the 15 Mile and 17 Mile Road corridors, sometimes referred to locally as \"Little Baghdad.\"",
  },
  {
    slug: "warren",
    name: "Warren",
    countySlug: "macomb-county-mi",
    blurb: "A Macomb County city bordering Sterling Heights, part of the same Chaldean-community business corridor.",
  },
  {
    slug: "centerline",
    name: "Centerline",
    countySlug: "macomb-county-mi",
    blurb: "A small Macomb County city bordering Warren and Sterling Heights.",
  },
  {
    slug: "clinton-township",
    name: "Clinton Township",
    countySlug: "macomb-county-mi",
    blurb: "A Macomb County suburb east of Sterling Heights.",
  },
  {
    slug: "shelby-township",
    name: "Shelby Township",
    countySlug: "macomb-county-mi",
    blurb: "A Macomb County suburb north of Sterling Heights.",
  },
  {
    slug: "macomb-township",
    name: "Macomb Township",
    countySlug: "macomb-county-mi",
    blurb: "A fast-growing Macomb County suburb east of Sterling Heights and Shelby Township.",
  },
  {
    slug: "roseville",
    name: "Roseville",
    countySlug: "macomb-county-mi",
    blurb: "A southern Macomb County city bordering Warren, home to a small number of Chaldean-owned medical practices.",
  },

  // Illinois cities — Cook County
  {
    slug: "chicago",
    name: "Chicago",
    countySlug: "cook-county-il",
    blurb: "Home to a dispersed Arab American community across multiple neighborhoods, from the Devon Avenue corridor's Assyrian and Middle Eastern grocers to Wicker Park, River North, and the Loop's independently-owned Arab restaurants.",
  },
  {
    slug: "bridgeview",
    name: "Bridgeview",
    countySlug: "cook-county-il",
    isCulturalDistrict: true,
    blurb: "Home to the Mosque Foundation and the dense Harlem Avenue commercial corridor, honorarily designated \"Little Palestine Way\" by the Illinois legislature — the institutional and commercial heart of Chicago's Palestinian-American community.",
  },
  {
    slug: "oak-lawn",
    name: "Oak Lawn",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb bordering Bridgeview and Chicago Ridge, home to a growing number of Arab American-owned medical practices and grocers.",
  },
  {
    slug: "chicago-ridge",
    name: "Chicago Ridge",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb along the Harlem Avenue corridor, home to Arab American-owned restaurants, cafes, and physician practices.",
  },
  {
    slug: "burbank-il",
    name: "Burbank",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb bordering Bridgeview, home to a cluster of Arab American-owned jewelry stores and restaurants along Harlem Avenue.",
  },
  {
    slug: "worth",
    name: "Worth",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb along the Harlem Avenue corridor, home to Arab American Family Services and a dense cluster of Arab-owned restaurants and grocers.",
  },
  {
    slug: "justice",
    name: "Justice",
    countySlug: "cook-county-il",
    blurb: "A small southwest suburb bordering Bridgeview, home to a handful of Arab American-owned bakeries.",
  },
  {
    slug: "palos-hills",
    name: "Palos Hills",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb along Harlem Avenue, home to a concentration of Arab American-owned bakeries, restaurants, and law offices.",
  },
  {
    slug: "palos-heights",
    name: "Palos Heights",
    countySlug: "cook-county-il",
    blurb: "Home to the Arab American Chamber of Commerce Illinois Chapter's headquarters.",
  },
  {
    slug: "orland-park",
    name: "Orland Park",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb with a growing number of Arab American-owned medical, legal, and retail businesses.",
  },
  {
    slug: "orland-hills",
    name: "Orland Hills",
    countySlug: "cook-county-il",
    blurb: "A small southwest suburb bordering Orland Park.",
  },
  {
    slug: "hometown",
    name: "Hometown",
    countySlug: "cook-county-il",
    blurb: "A small southwest suburb near Oak Lawn, home to a family-owned Arab American furniture store.",
  },
  {
    slug: "evergreen-park",
    name: "Evergreen Park",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb bordering Oak Lawn, home to a small number of Arab American-owned medical practices.",
  },
  {
    slug: "hickory-hills",
    name: "Hickory Hills",
    countySlug: "cook-county-il",
    blurb: "A southwest suburb near Palos Hills, home to a couple of Arab American-owned bakeries.",
  },
  {
    slug: "cicero",
    name: "Cicero",
    countySlug: "cook-county-il",
    blurb: "A near-west suburb with a small Arab American-owned grocery presence.",
  },
  {
    slug: "skokie",
    name: "Skokie",
    countySlug: "cook-county-il",
    blurb: "A north suburb home to Mar Sargis Church and the co-located Assyrian Community Center, along with a cluster of Assyrian/Chaldean and broader Middle Eastern restaurants and grocers along Dempster Street.",
  },
  {
    slug: "niles",
    name: "Niles",
    countySlug: "cook-county-il",
    blurb: "A north suburb bordering Skokie, home to a number of Middle Eastern and Assyrian-owned restaurants and a physician practice serving the Assyrian community.",
  },
  {
    slug: "morton-grove",
    name: "Morton Grove",
    countySlug: "cook-county-il",
    blurb: "A north suburb bordering Niles and Skokie, part of the same Assyrian/Chaldean community cluster.",
  },
  {
    slug: "des-plaines",
    name: "Des Plaines",
    countySlug: "cook-county-il",
    blurb: "A north suburb near O'Hare, home to a Middle Eastern grocery market.",
  },
  {
    slug: "lincolnwood",
    name: "Lincolnwood",
    countySlug: "cook-county-il",
    blurb: "A north suburb home to the Assyrian American Bar Association's headquarters and MIRA (Middle Eastern Immigrant & Refugee Alliance).",
  },
  {
    slug: "evanston",
    name: "Evanston",
    countySlug: "cook-county-il",
    blurb: "A north suburb home to a rheumatologist and a family medicine clinic serving Arab and Assyrian patients.",
  },
  {
    slug: "rolling-meadows",
    name: "Rolling Meadows",
    countySlug: "cook-county-il",
    blurb: "A northwest suburb, home to an Arab American-owned law office.",
  },
  {
    slug: "mount-prospect",
    name: "Mount Prospect",
    countySlug: "cook-county-il",
    blurb: "A northwest suburb, home to an Arab American-owned dental implant practice.",
  },
  {
    slug: "tinley-park",
    name: "Tinley Park",
    countySlug: "cook-county-il",
    blurb: "A south suburb with a small cluster of Arab American-owned bakeries and grocers.",
  },
  {
    slug: "hoffman-estates",
    name: "Hoffman Estates",
    countySlug: "cook-county-il",
    blurb: "A northwest suburb, home to an Arab American OB-GYN practice.",
  },
  {
    slug: "elmwood-park",
    name: "Elmwood Park",
    countySlug: "cook-county-il",
    blurb: "A near-west suburb, home to an Arab American-owned law firm.",
  },
  {
    slug: "elk-grove-village",
    name: "Elk Grove Village",
    countySlug: "cook-county-il",
    blurb: "A northwest suburb near O'Hare, home to an Arab American-owned construction company.",
  },
  {
    slug: "hanover-park",
    name: "Hanover Park",
    countySlug: "cook-county-il",
    blurb: "A northwest suburb, home to an Arabic-language and Islamic studies academy.",
  },

  // Illinois cities — DuPage County
  {
    slug: "lombard",
    name: "Lombard",
    countySlug: "dupage-county-il",
    blurb: "Home to a cluster of Arab American-owned bakeries, markets, and a law office along Roosevelt Road, just west of Cook County.",
  },
  {
    slug: "villa-park",
    name: "Villa Park",
    countySlug: "dupage-county-il",
    blurb: "Home to St. John the Baptist Melkite Catholic Church, serving Chicago's Lebanese/Syrian Melkite community, and a Mediterranean grocery market.",
  },
  {
    slug: "winfield",
    name: "Winfield",
    countySlug: "dupage-county-il",
    blurb: "A DuPage County suburb, home to a halal Arab grocery store.",
  },
  {
    slug: "westmont",
    name: "Westmont",
    countySlug: "dupage-county-il",
    blurb: "Mailing address for the Ramallah Club of Chicago, a local chapter of the American Federation of Ramallah, Palestine.",
  },
  {
    slug: "willowbrook",
    name: "Willowbrook",
    countySlug: "dupage-county-il",
    blurb: "A DuPage County suburb, home to a halal Middle Eastern grocery store.",
  },
  {
    slug: "oakbrook-terrace",
    name: "Oakbrook Terrace",
    countySlug: "dupage-county-il",
    blurb: "A DuPage County suburb, home to an Arab American real estate agent.",
  },
  {
    slug: "hinsdale",
    name: "Hinsdale",
    countySlug: "dupage-county-il",
    blurb: "An affluent DuPage County suburb, home to an Arab American real estate agent.",
  },
  {
    slug: "glen-ellyn",
    name: "Glen Ellyn",
    countySlug: "dupage-county-il",
    blurb: "A DuPage County suburb, home to an Arab American general surgeon.",
  },

  // Illinois cities — Will County
  {
    slug: "frankfort",
    name: "Frankfort",
    countySlug: "will-county-il",
    blurb: "An exurban southwest suburb, home to a halal farm market and a small number of Arab American-owned businesses.",
  },
  {
    slug: "homer-glen",
    name: "Homer Glen",
    countySlug: "will-county-il",
    blurb: "A Will County suburb near Orland Park, home to an Arab American-owned professional office.",
  },

  // Illinois cities — additional suburbs identified during business-listing curation
  {
    slug: "norridge",
    name: "Norridge",
    countySlug: "cook-county-il",
    blurb: "A small Cook County suburb near O'Hare, home to a handful of Middle Eastern-owned restaurants and shops.",
  },
  {
    slug: "lyons",
    name: "Lyons",
    countySlug: "cook-county-il",
    blurb: "A near-southwest Cook County suburb along the Harlem Avenue corridor, home to a small Arab-owned restaurant.",
  },
  {
    slug: "forest-park",
    name: "Forest Park",
    countySlug: "cook-county-il",
    blurb: "A near-west Cook County suburb, home to a small Arab-owned restaurant.",
  },
  {
    slug: "countryside",
    name: "Countryside",
    countySlug: "cook-county-il",
    blurb: "A southwest Cook County suburb near La Grange, home to a small Arab-owned restaurant.",
  },
  {
    slug: "summit",
    name: "Summit",
    countySlug: "cook-county-il",
    blurb: "A near-southwest Cook County suburb, home to an Arab American-owned law office.",
  },
  {
    slug: "burr-ridge",
    name: "Burr Ridge",
    countySlug: "dupage-county-il",
    blurb: "An affluent DuPage County suburb, home to a Coptic Orthodox church serving Chicago's Egyptian community.",
  },

  // San Francisco Bay Area cities
  {
    slug: "san-francisco",
    name: "San Francisco",
    countySlug: "san-francisco-county",
    isCulturalDistrict: true,
    blurb: "The Tenderloin has been the heart of Arab San Francisco since the 1960s, home to the largest Yemeni community in Northern California alongside Palestinian, Jordanian, Egyptian, and Syrian communities.",
  },
  {
    slug: "oakland",
    name: "Oakland",
    countySlug: "alameda-county",
    isCulturalDistrict: true,
    blurb: "Home to more than 10,000 Yemeni-Americans concentrated around the downtown/14th Street corridor and East Oakland, anchored by the Lighthouse Mosque.",
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    countySlug: "alameda-county",
    blurb: "Home to UC Berkeley, which drew a wave of Arab professionals and students after the 1965 Immigration and Nationality Act; a small number of Arab-owned businesses cluster near campus.",
  },
  {
    slug: "fremont",
    name: "Fremont",
    countySlug: "alameda-county",
    blurb: "An East Bay city with a growing Arab American-owned retail and grocery presence, alongside the region's much larger Afghan community.",
  },
  {
    slug: "hayward",
    name: "Hayward",
    countySlug: "alameda-county",
    blurb: "A southern Alameda County city with a small number of Arab-owned corner stores and restaurants.",
  },
  {
    slug: "san-leandro",
    name: "San Leandro",
    countySlug: "alameda-county",
    blurb: "An Alameda County city bordering Oakland, home to a small Yemeni-owned business presence.",
  },
  {
    slug: "alameda",
    name: "Alameda",
    countySlug: "alameda-county",
    blurb: "An island city across the estuary from Oakland, home to a small number of Arab-owned businesses.",
  },
  {
    slug: "union-city",
    name: "Union City",
    countySlug: "alameda-county",
    blurb: "An East Bay city with a small Arab American-owned business presence.",
  },
  {
    slug: "dublin",
    name: "Dublin",
    countySlug: "alameda-county",
    blurb: "A Tri-Valley city with a location of Delah Coffee, part of the Bay Area's Yemeni coffeehouse wave.",
  },
  {
    slug: "pleasanton",
    name: "Pleasanton",
    countySlug: "alameda-county",
    blurb: "A Tri-Valley city with a small number of Arab American-owned professional offices.",
  },
  {
    slug: "livermore",
    name: "Livermore",
    countySlug: "alameda-county",
    blurb: "A Tri-Valley city with a small Arab American-owned business presence.",
  },
  {
    slug: "emeryville",
    name: "Emeryville",
    countySlug: "alameda-county",
    blurb: "A small East Bay city between Oakland and Berkeley, home to a handful of Arab American-owned businesses.",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    countySlug: "santa-clara-county",
    isCulturalDistrict: true,
    blurb: "Home to the Arab American Cultural Center of the Silicon Valley (AACC-SV), serving the South Bay's professional Arab American tech community.",
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    countySlug: "santa-clara-county",
    blurb: "A Silicon Valley city with a small Arab American-owned professional and retail presence.",
  },
  {
    slug: "sunnyvale",
    name: "Sunnyvale",
    countySlug: "santa-clara-county",
    blurb: "A Silicon Valley city with a small Arab American-owned professional and retail presence.",
  },
  {
    slug: "mountain-view",
    name: "Mountain View",
    countySlug: "santa-clara-county",
    blurb: "A Silicon Valley city with a small Arab American professional presence, largely tied to the tech sector.",
  },
  {
    slug: "cupertino",
    name: "Cupertino",
    countySlug: "santa-clara-county",
    blurb: "A Silicon Valley city with a small Arab American professional presence, largely tied to the tech sector.",
  },
  {
    slug: "palo-alto",
    name: "Palo Alto",
    countySlug: "santa-clara-county",
    blurb: "Home to a small number of Arab American-owned professional offices near Stanford University.",
  },
  {
    slug: "milpitas",
    name: "Milpitas",
    countySlug: "santa-clara-county",
    blurb: "A South Bay city with a small Arab American-owned retail presence.",
  },
  {
    slug: "campbell",
    name: "Campbell",
    countySlug: "santa-clara-county",
    blurb: "A South Bay city with a small Arab American-owned business presence.",
  },
  {
    slug: "los-gatos",
    name: "Los Gatos",
    countySlug: "santa-clara-county",
    blurb: "A South Bay city with a small number of Arab American-owned professional offices.",
  },
  {
    slug: "gilroy",
    name: "Gilroy",
    countySlug: "santa-clara-county",
    blurb: "A South Santa Clara County city with a small Arab American-owned business presence.",
  },
  {
    slug: "morgan-hill",
    name: "Morgan Hill",
    countySlug: "santa-clara-county",
    blurb: "A South Santa Clara County city with a small Arab American-owned business presence.",
  },
  {
    slug: "los-altos",
    name: "Los Altos",
    countySlug: "santa-clara-county",
    blurb: "Home to the Antiochian Orthodox Church of the Redeemer, founded 1962, which holds bilingual Arabic-English liturgy.",
  },

  // Sacramento region cities
  {
    slug: "sacramento",
    name: "Sacramento",
    countySlug: "sacramento-county",
    isCulturalDistrict: true,
    blurb: "Home to the SALAM Islamic Center, serving the greater Sacramento area's Muslim community since the 1990s, and to a growing cluster of Iraqi/Chaldean-owned restaurants and markets.",
  },
  {
    slug: "orangevale",
    name: "Orangevale",
    countySlug: "sacramento-county",
    blurb: "Home to Our Lady of Perpetual Help Chaldean and Assyrian Catholic Church, consecrated in 2011 after the local Chaldean congregation roughly doubled with the arrival of about 40 Iraqi refugee families.",
  },
  {
    slug: "elk-grove",
    name: "Elk Grove",
    countySlug: "sacramento-county",
    blurb: "A fast-growing Sacramento County suburb with several halal markets and restaurants serving its Iraqi and broader Middle Eastern community.",
  },
  {
    slug: "rancho-cordova",
    name: "Rancho Cordova",
    countySlug: "sacramento-county",
    blurb: "A Sacramento County suburb with a small Arab American-owned business presence.",
  },
  {
    slug: "citrus-heights",
    name: "Citrus Heights",
    countySlug: "sacramento-county",
    blurb: "A Sacramento County suburb with a small Arab American-owned business presence.",
  },
  {
    slug: "carmichael",
    name: "Carmichael",
    countySlug: "sacramento-county",
    blurb: "A Sacramento County suburb with a small Arab American-owned business presence.",
  },
  {
    slug: "folsom",
    name: "Folsom",
    countySlug: "sacramento-county",
    blurb: "An affluent eastern Sacramento County suburb with a small Arab American professional presence.",
  },
  {
    slug: "fair-oaks",
    name: "Fair Oaks",
    countySlug: "sacramento-county",
    blurb: "A Sacramento County community near Orangevale's Chaldean and Assyrian Catholic parish.",
  },
  {
    slug: "roseville-ca",
    name: "Roseville",
    countySlug: "placer-county",
    blurb: "Placer County's largest city, with a small but growing Arab American-owned business presence tied to the Sacramento area's suburban growth.",
  },
  {
    slug: "rocklin",
    name: "Rocklin",
    countySlug: "placer-county",
    blurb: "A fast-growing Placer County suburb adjacent to Roseville.",
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    countySlug: "placer-county",
    blurb: "A growing Placer County city northeast of Roseville.",
  },
  {
    slug: "auburn",
    name: "Auburn",
    countySlug: "placer-county",
    blurb: "The Placer County seat, in the Sierra foothills northeast of Sacramento.",
  },
  {
    slug: "el-dorado-hills",
    name: "El Dorado Hills",
    countySlug: "el-dorado-county",
    blurb: "The original home of what's now Orangevale's Chaldean and Assyrian Catholic parish before the congregation relocated into Sacramento County.",
  },
  {
    slug: "cameron-park",
    name: "Cameron Park",
    countySlug: "el-dorado-county",
    blurb: "An El Dorado County community near El Dorado Hills.",
  },
  {
    slug: "placerville",
    name: "Placerville",
    countySlug: "el-dorado-county",
    blurb: "The El Dorado County seat, in the Sierra foothills east of Sacramento.",
  },
  {
    slug: "davis",
    name: "Davis",
    countySlug: "yolo-county",
    blurb: "Home to UC Davis, which draws Arab American students, faculty, and a small number of Arab-owned businesses near campus.",
  },
  {
    slug: "west-sacramento",
    name: "West Sacramento",
    countySlug: "yolo-county",
    blurb: "Directly across the Sacramento River from downtown Sacramento, with a small Arab American-owned business presence.",
  },
  {
    slug: "woodland",
    name: "Woodland",
    countySlug: "yolo-county",
    blurb: "The Yolo County seat, northwest of Sacramento.",
  },

  // New York City neighborhoods (Kings County / Brooklyn and Queens County).
  // NYC has no incorporated sub-cities, so "city" here represents the
  // well-documented neighborhood-level Arab American commercial corridor,
  // consistent with how Little Arabia (Anaheim) and similar cultural
  // districts are already handled elsewhere on the site.
  {
    slug: "bay-ridge",
    name: "Bay Ridge",
    countySlug: "kings-county-ny",
    isCulturalDistrict: true,
    blurb: "A Brooklyn neighborhood widely reported as having the largest Palestinian-American population of any neighborhood in the U.S., concentrated along 5th and 3rd Avenues.",
  },
  {
    slug: "sunset-park",
    name: "Sunset Park",
    countySlug: "kings-county-ny",
    blurb: "A Brooklyn neighborhood adjoining Bay Ridge, home to a large Yemeni American community along its Fifth Avenue corridor.",
  },
  {
    slug: "astoria",
    name: "Astoria",
    countySlug: "queens-county-ny",
    isCulturalDistrict: true,
    blurb: "A Queens neighborhood whose Steinway Street corridor has long been known as \"Little Egypt,\" one of the oldest Arab American commercial districts in New York City.",
  },

  // Nashville
  {
    slug: "nashville",
    name: "Nashville",
    countySlug: "davidson-county-tn",
    isCulturalDistrict: true,
    blurb: "Home to the Nolensville Pike corridor in South Nashville and Antioch, nationally known as the center of the largest Kurdish-American population in the U.S., alongside a smaller Iraqi Arab, Syrian, and broader Arab refugee-origin business community.",
  },

  // Columbus
  {
    slug: "columbus",
    name: "Columbus",
    countySlug: "franklin-county-oh",
    isCulturalDistrict: true,
    blurb: "Home to one of Ohio's oldest Arab-American communities, rooted in Lebanese-American Maronite and Melkite Catholic parishes, alongside a smaller Syrian, Iraqi Arab, Egyptian, and Yemeni business community along the Northland/Cleveland Avenue and Bethel Road corridors — distinct from the city's much larger Somali-American population.",
  },

  // Philadelphia
  {
    slug: "philadelphia",
    name: "Philadelphia",
    countySlug: "philadelphia-county-pa",
    isCulturalDistrict: true,
    blurb: "Home to one of the oldest and most documented Arab-American communities in the U.S., rooted in South Philadelphia's Lebanese-American Maronite Catholic parish and the Al-Aqsa mosque founded by Palestinian immigrants in Kensington, alongside a newer Levantine and North African restaurant scene in Fox Chase and Northeast Philadelphia.",
  },

  // Jacksonville
  {
    slug: "jacksonville",
    name: "Jacksonville",
    countySlug: "duval-county-fl",
    isCulturalDistrict: true,
    blurb: "Home to a Lebanese and Syrian-American community documented since the early 1900s, with civic institutions including the Salaam Club (founded 1912) and the Ramallah American Club (founded 1953 by Palestinian families), a Coptic Orthodox Egyptian parish, and a historic Arab American sandwich-shop lineage along Main Street and Beach Boulevard.",
  },
  {
    slug: "jacksonville-beach",
    name: "Jacksonville Beach",
    countySlug: "duval-county-fl",
    blurb: "An incorporated beach community within Duval County, home to a small number of Lebanese- and Syrian-owned businesses and professionals.",
  },

  // Jersey City
  {
    slug: "jersey-city",
    name: "Jersey City",
    countySlug: "hudson-county-nj",
    isCulturalDistrict: true,
    blurb: "Home to one of the largest Coptic Christian (Egyptian) communities in the U.S., anchored by two historic parishes around Journal Square — St. Mark, the first Coptic Orthodox parish founded in the U.S., and St. George & St. Shenouda — alongside a smaller Syrian and Palestinian restaurant and community presence.",
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
export function citiesInCounty(countySlug: string): City[] {
  return cities.filter((c) => c.countySlug === countySlug);
}
