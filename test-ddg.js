const { image_search } = require('duckduckgo-images-api');

(async () => {
    try {
        const results = await image_search({ query: 'Dior Sauvage Eau de Parfum bottle sephora', moderate: true });
        console.log(results.slice(0, 3).map(r => r.image));
    } catch (e) {
        console.error(e);
    }
})();
