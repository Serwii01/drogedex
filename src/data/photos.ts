/**
 * Fotografías reales de Wikimedia Commons (licencias libres). Se cargan desde
 * upload.wikimedia.org; cada ficha muestra autor, licencia y enlace a la fuente.
 * Generado con scripts/photo-candidates.mjs + revisión manual.
 */
export interface Photo { file: string; src: string; w: number; h: number; page: string; license: string; author: string }

export const photos: Record<string, Photo> = {
  "heroina": {
    "file": "Heroin black tar.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Heroin_black_tar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2312,
    "h": 1688,
    "page": "https://commons.wikimedia.org/wiki/File:Heroin_black_tar.jpg",
    "license": "Public domain",
    "author": "Desconocido"
  },
  "morfina": {
    "file": "Morphine Ampoule For Veterinary Use.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Morphine_Ampoule_For_Veterinary_Use.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4284,
    "h": 2718,
    "page": "https://commons.wikimedia.org/wiki/File:Morphine_Ampoule_For_Veterinary_Use.jpg",
    "license": "CC BY-SA 4.0",
    "author": "DanielTahar"
  },
  "fentanilo": {
    "file": "Fentanyl. 2 milligrams. A lethal dose in most people.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Fentanyl._2_milligrams._A_lethal_dose_in_most_people.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2190,
    "h": 1766,
    "page": "https://commons.wikimedia.org/wiki/File:Fentanyl._2_milligrams._A_lethal_dose_in_most_people.jpg",
    "license": "Public domain",
    "author": "United States Drug Enforcement Administration (DEA)."
  },
  "oxicodona": {
    "file": "OnyNorm förpackning.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/6/6d/OnyNorm_f%C3%B6rpackning.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 5472,
    "h": 3648,
    "page": "https://commons.wikimedia.org/wiki/File:OnyNorm_f%C3%B6rpackning.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Praetorian11"
  },
  "codeina": {
    "file": "Codeine Tablets Package Teva 60 mg 2017.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Codeine_Tablets_Package_Teva_60_mg_2017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4036,
    "h": 1397,
    "page": "https://commons.wikimedia.org/wiki/File:Codeine_Tablets_Package_Teva_60_mg_2017.jpg",
    "license": "CC0",
    "author": "Stefan Bellini"
  },
  "metadona": {
    "file": "Methadone Clinic 1973.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Methadone_Clinic_1973.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 5125,
    "h": 3411,
    "page": "https://commons.wikimedia.org/wiki/File:Methadone_Clinic_1973.jpg",
    "license": "Public domain",
    "author": "Marion S. Trikosko"
  },
  "tramadol": {
    "file": "Tenox and Tramal tablets.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Tenox_and_Tramal_tablets.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1600,
    "h": 1200,
    "page": "https://commons.wikimedia.org/wiki/File:Tenox_and_Tramal_tablets.jpg",
    "license": "CC BY-SA 3.0",
    "author": "ZngZng"
  },
  "kratom": {
    "file": "Kratom plant.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Kratom_plant.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 3024,
    "h": 3024,
    "page": "https://commons.wikimedia.org/wiki/File:Kratom_plant.jpg",
    "license": "CC0",
    "author": "Philipola"
  },
  "cocaina": {
    "file": "CocaineHydrochloridePowder.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/82/CocaineHydrochloridePowder.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 3008,
    "h": 1960,
    "page": "https://commons.wikimedia.org/wiki/File:CocaineHydrochloridePowder.jpg",
    "license": "Public domain",
    "author": "An employee of the DEA"
  },
  "crack": {
    "file": "Rocks of crack cocaine.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Rocks_of_crack_cocaine.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1686,
    "h": 1870,
    "page": "https://commons.wikimedia.org/wiki/File:Rocks_of_crack_cocaine.jpg",
    "license": "Public domain",
    "author": "DEA"
  },
  "anfetamina": {
    "file": "Amphetamine (Drug).jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Amphetamine_%28Drug%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2400,
    "h": 1800,
    "page": "https://commons.wikimedia.org/wiki/File:Amphetamine_(Drug).jpg",
    "license": "CC BY-SA 4.0",
    "author": "DMTrott"
  },
  "metanfetamina": {
    "file": "Crystal methamphetamine (2).jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Crystal_methamphetamine_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2664,
    "h": 2372,
    "page": "https://commons.wikimedia.org/wiki/File:Crystal_methamphetamine_(2).jpg",
    "license": "CC0",
    "author": "WikiLinuz"
  },
  "mefedrona": {
    "file": "Mephedrone.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Mephedrone.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4129,
    "h": 2174,
    "page": "https://commons.wikimedia.org/wiki/File:Mephedrone.jpg",
    "license": "CC BY-SA 4.0",
    "author": "DMTrott"
  },
  "metilfenidato": {
    "file": "Ritalin Pill.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/87/Ritalin_Pill.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1148,
    "h": 1032,
    "page": "https://commons.wikimedia.org/wiki/File:Ritalin_Pill.jpg",
    "license": "Public domain",
    "author": "Kooty-sentinel at English Wikipedia"
  },
  "cafeina": {
    "file": "Roasted coffee beans.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1600,
    "h": 1200,
    "page": "https://commons.wikimedia.org/wiki/File:Roasted_coffee_beans.jpg",
    "license": "Public domain",
    "author": "MarkSweep"
  },
  "nicotina": {
    "file": "L&M Finely Cut cigarettes 02.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/16/L%26M_Finely_Cut_cigarettes_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2851,
    "h": 1659,
    "page": "https://commons.wikimedia.org/wiki/File:L%26M_Finely_Cut_cigarettes_02.jpg",
    "license": "CC BY-SA 4.0",
    "author": "LoMit"
  },
  "mdma": {
    "file": "Ecstasy pills.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/2/24/Ecstasy_pills.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2816,
    "h": 2112,
    "page": "https://commons.wikimedia.org/wiki/File:Ecstasy_pills.jpg",
    "license": "Public domain",
    "author": "Originally uploaded by Willy turner (Transferred by Gyrobo)"
  },
  "lsd": {
    "file": "LSD blotter paper.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/13/LSD_blotter_paper.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 800,
    "h": 521,
    "page": "https://commons.wikimedia.org/wiki/File:LSD_blotter_paper.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Drogadicta"
  },
  "psilocibina": {
    "file": "Psilocybe Cubensis Imire (Psilocybe Cubensis Zimbabwe) 9.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Psilocybe_Cubensis_Imire_%28Psilocybe_Cubensis_Zimbabwe%29_9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4608,
    "h": 3456,
    "page": "https://commons.wikimedia.org/wiki/File:Psilocybe_Cubensis_Imire_(Psilocybe_Cubensis_Zimbabwe)_9.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Robert van der Horst"
  },
  "mescalina": {
    "file": "Peyote Cactus.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Peyote_Cactus.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1050,
    "h": 697,
    "page": "https://commons.wikimedia.org/wiki/File:Peyote_Cactus.jpg",
    "license": "Public domain",
    "author": "Desconocido"
  },
  "dmt": {
    "file": "Ayahuasca brewing 02.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ayahuasca_brewing_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 5184,
    "h": 3456,
    "page": "https://commons.wikimedia.org/wiki/File:Ayahuasca_brewing_02.jpg",
    "license": "CC BY 2.0",
    "author": "Apollo"
  },
  "2c-b": {
    "file": "2cb pill.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/3/36/2cb_pill.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 989,
    "h": 629,
    "page": "https://commons.wikimedia.org/wiki/File:2cb_pill.jpg",
    "license": "CC BY-SA 2.5",
    "author": "Retinafunk"
  },
  "ketamina": {
    "file": "Ketamine Vials.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/83/Ketamine_Vials.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2560,
    "h": 1920,
    "page": "https://commons.wikimedia.org/wiki/File:Ketamine_Vials.jpg",
    "license": "CC0",
    "author": "Psychonaught"
  },
  "pcp": {
    "file": "Phencyclidine (PCP).jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Phencyclidine_%28PCP%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 210,
    "h": 199,
    "page": "https://commons.wikimedia.org/wiki/File:Phencyclidine_(PCP).jpg",
    "license": "Public domain",
    "author": "Desconocido"
  },
  "dxm": {
    "file": "Dextromethorphan (DXM).jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Dextromethorphan_%28DXM%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4018,
    "h": 2260,
    "page": "https://commons.wikimedia.org/wiki/File:Dextromethorphan_(DXM).jpg",
    "license": "CC BY 2.0",
    "author": "The Drug Users Bible"
  },
  "oxido-nitroso": {
    "file": "Mosa cream chargers fly-tipped at Bakers Hill car park 04.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mosa_cream_chargers_fly-tipped_at_Bakers_Hill_car_park_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4608,
    "h": 3456,
    "page": "https://commons.wikimedia.org/wiki/File:Mosa_cream_chargers_fly-tipped_at_Bakers_Hill_car_park_04.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Philafrenzy"
  },
  "alcohol": {
    "file": "Beer wuerzburger hofbraue v.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Beer_wuerzburger_hofbraue_v.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1511,
    "h": 2266,
    "page": "https://commons.wikimedia.org/wiki/File:Beer_wuerzburger_hofbraue_v.jpg",
    "license": "CC BY-SA 3.0",
    "author": "Christian \"VisualBeo\" Horvat"
  },
  "ghb": {
    "file": "Γ-butyrolactone.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/cc/%CE%93-butyrolactone.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2976,
    "h": 3968,
    "page": "https://commons.wikimedia.org/wiki/File:%CE%93-butyrolactone.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Leiem"
  },
  "benzodiacepinas": {
    "file": "Diazepam tablets.jpeg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Diazepam_tablets.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1161,
    "h": 2064,
    "page": "https://commons.wikimedia.org/wiki/File:Diazepam_tablets.jpeg",
    "license": "CC BY-SA 3.0",
    "author": "Tmeers91"
  },
  "barbituricos": {
    "file": "Veronal from Bayer in glass tubes with cork caps - 10 tablets probably produced around 1940 in the Third Reich.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Veronal_from_Bayer_in_glass_tubes_with_cork_caps_-_10_tablets_probably_produced_around_1940_in_the_Third_Reich.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 20812,
    "h": 11663,
    "page": "https://commons.wikimedia.org/wiki/File:Veronal_from_Bayer_in_glass_tubes_with_cork_caps_-_10_tablets_probably_produced_around_1940_in_the_Third_Reich.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Lupus in Saxonia"
  },
  "cannabis": {
    "file": "5 grams of cannabis buds.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/3/35/5_grams_of_cannabis_buds.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 4608,
    "h": 3456,
    "page": "https://commons.wikimedia.org/wiki/File:5_grams_of_cannabis_buds.jpg",
    "license": "CC BY-SA 4.0",
    "author": "RoodyAlien"
  },
  "cannabinoides-sinteticos": {
    "file": "Synthetic cannabinoids visual classification dictionary.png",
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Synthetic_cannabinoids_visual_classification_dictionary.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 2550,
    "h": 2868,
    "page": "https://commons.wikimedia.org/wiki/File:Synthetic_cannabinoids_visual_classification_dictionary.png",
    "license": "Public domain",
    "author": "Centers for Disease Control and Prevention"
  },
  "escopolamina": {
    "file": "Brugmansia sanguinea flower translucency.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Brugmansia_sanguinea_flower_translucency.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 1574,
    "h": 2098,
    "page": "https://commons.wikimedia.org/wiki/File:Brugmansia_sanguinea_flower_translucency.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Flobbadob"
  },
  "poppers": {
    "file": "Poppers bottle.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/d/da/Poppers_bottle.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 910,
    "h": 915,
    "page": "https://commons.wikimedia.org/wiki/File:Poppers_bottle.jpg",
    "license": "Public domain",
    "author": "Xyboi at Dutch Wikipedia"
  },
  "disolventes": {
    "file": "Contact-cement 000000.jpg",
    "src": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Contact-cement_000000.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "w": 596,
    "h": 798,
    "page": "https://commons.wikimedia.org/wiki/File:Contact-cement_000000.jpg",
    "license": "CC BY-SA 3.0",
    "author": "Mwnuk"
  }
};

/** URL redimensionada por el servidor de miniaturas de Commons. */
export const photoAt = (p: Photo, width: number) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.file)}?width=${Math.min(width, p.w)}`;
