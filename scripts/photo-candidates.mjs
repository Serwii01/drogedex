// Busca fotos candidatas en Wikimedia Commons (solo metadatos; no descarga imágenes).
import fs from 'fs';
const Q = {
  heroina: 'heroin powder', morfina: 'morphine ampoule', fentanilo: 'fentanyl pills seized', oxicodona: 'oxycodone tablets',
  codeina: 'codeine tablets', metadona: 'methadone', tramadol: 'tramadol tablets', kratom: 'kratom leaves',
  cocaina: 'cocaine powder', crack: 'crack cocaine rocks', anfetamina: 'amphetamine powder', metanfetamina: 'crystal methamphetamine',
  mefedrona: 'mephedrone powder', metilfenidato: 'ritalin tablets', cafeina: 'coffee beans espresso', nicotina: 'cigarettes tobacco',
  mdma: 'ecstasy pills', lsd: 'LSD blotter', psilocibina: 'psilocybe cubensis', mescalina: 'peyote cactus Lophophora',
  dmt: 'ayahuasca brew', '2c-b': '2C-B pills', ketamina: 'ketamine vial', pcp: 'phencyclidine', dxm: 'dextromethorphan',
  'oxido-nitroso': 'nitrous oxide cartridges whipped cream chargers', alcohol: 'beer glass', ghb: 'GHB bottle',
  benzodiacepinas: 'diazepam tablets', barbituricos: 'phenobarbital tablets', cannabis: 'cannabis bud',
  'cannabinoides-sinteticos': 'synthetic cannabinoid spice', escopolamina: 'Brugmansia flower', poppers: 'poppers bottles',
  disolventes: 'glue sniffing',
};
const out = fs.existsSync('scripts/candidates.json') ? JSON.parse(fs.readFileSync('scripts/candidates.json','utf8')) : {};
for (const [slug, q] of Object.entries(Q)) {
  if (out[slug]?.length) continue;
  await new Promise((r) => setTimeout(r, 2500));
  const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=6&gsrsearch=${encodeURIComponent(q + ' filetype:bitmap')}&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=400`;
  let j;
  for (let t = 0; t < 6; t++) {
    const r = await fetch(u, { headers: { 'User-Agent': 'Drogedex-TFG/1.0 (academic project; sfmrbb-tfg)' } });
    const txt = await r.text();
    try { j = JSON.parse(txt); break; } catch { await new Promise((res) => setTimeout(res, 15000 * (t + 1))); }
  }
  if (!j) { console.log('skip', slug); continue; }
  out[slug] = Object.values(j.query?.pages ?? {}).sort((a, b) => a.index - b.index).map((p) => {
    const ii = p.imageinfo?.[0] ?? {};
    const m = ii.extmetadata ?? {};
    return { title: p.title, thumb: ii.thumburl, url: ii.url, w: ii.width, h: ii.height, page: ii.descriptionurl,
      license: m.LicenseShortName?.value, artist: (m.Artist?.value ?? '').replace(/<[^>]+>/g, '').trim() };
  });
  process.stdout.write(slug + ' ' + out[slug].length + '\n');
  fs.writeFileSync('scripts/candidates.json', JSON.stringify(out, null, 1));
}
fs.writeFileSync('scripts/candidates.json', JSON.stringify(out, null, 1));
