
const apiKey = 'HPPNCohqeoOHgif6CQltCgsVEM70ey0E';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
//promesas anidadas, no hace falta anidar los catch
peticion
.then( resp => resp.json() )
.then( ({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch ( console.warn );