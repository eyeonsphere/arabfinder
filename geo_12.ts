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
