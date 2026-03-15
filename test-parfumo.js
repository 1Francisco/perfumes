const https = require('https');

https.get('https://www.parfumo.com/Perfumes/Dior/Sauvage_Eau_de_Parfum', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="?og:image"? content="([^"]+)"/i);
    console.log(match ? 'Found image: ' + match[1] : 'Image not found. Status: ' + res.statusCode);
  });
}).on('error', err => console.error(err));
