const Scraper = require('images-scraper');
const fs = require('fs');

const google = new Scraper({
  puppeteer: {
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});

(async () => {
  const content = fs.readFileSync('src/lib/api.ts', 'utf-8');
  const regex = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*brand:\s*"([^"]+)"/g;
  let matches;
  const urls = {};

  while ((matches = regex.exec(content)) !== null) {
      const pid = matches[1];
      const name = matches[2];
      const brand = matches[3];
      const query = `${name} ${brand} perfume bottle sephora notino 1000px`;
      console.log(`Searching for: ${query}`);
      try {
          const results = await google.scrape(query, 5);
          if (results && results.length > 0) {
              // Prefer urls that don't have pinterest, ebay or fragrantica (to avoid low res/bad backgrounds)
              const filtered = results.filter(r => 
                !r.url.includes('pinterest') && 
                !r.url.includes('ebay') && 
                !r.url.includes('fimgs.net')
              );
              const url = filtered.length > 0 ? filtered[0].url : results[0].url;
              console.log(`  -> Found: ${url}`);
              urls[pid] = url;
          } else {
              console.log(`  -> Not found.`);
          }
      } catch (err) {
          console.error(`  -> Error: ${err.message}`);
      }
  }

  fs.writeFileSync('image_urls_final.json', JSON.stringify(urls, null, 2));
  console.log('Done generating image_urls_final.json');
})();
