const https = require('https');

https.get('https://www.sephora.com/api/users/autocomplete?keyword=Dior%20Sauvage', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'application/json'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Sephora Autocomplete Status:', res.statusCode, data.substring(0, 200)));
}).on('error', err => console.error(err));
