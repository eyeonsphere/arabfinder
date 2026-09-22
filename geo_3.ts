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
    phase: 4,
    phaseLabel: "Phase 4 — Consolidation",
    arabAncestryPopulation: "~21,200",
    arabicSpeakersAtHome: "n/a",
    dialectProfile: "Egyptian and Syrian weighted",
    blurb: "Inland Empire suburbs, including Corona and Murrieta, launching alongside San Bernardino County.",
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
    slug: "los-angeles",
    name: "Los Angeles",
    countySlug: "los-angeles-county",
    blurb: "The county's largest single concentration, though the Arab American population here is highly dispersed rather than clustered.",
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
