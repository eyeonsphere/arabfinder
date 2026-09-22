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
