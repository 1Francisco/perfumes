const https = require('https');

https.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.parfumo.com/Perfumes/Dior/Sauvage_Eau_de_Parfum'), (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const match = json.contents.match(/<meta property="?og:image"? content="([^"]+)"/i);
      console.log(match ? 'Found image: ' + match[1] : 'Image not found in proxy HTML.');
    } catch(e) {
      console.log('Error parsing proxy response:', e.message);
    }
  });
}).on('error', err => console.error(err));
