//async
//ejemplo: uso normal de las promesas

export const getImagen2 = async() =>{
    //para el async await se requiere el uso del try catch
    try{
        const apiKey = 'HPPNCohqeoOHgif6CQltCgsVEM70ey0E';
        //el await fuerza a que se terminete la ejecucion del fetch para continuar con 
        //el codigo de abajo
        //el await si y solo si, debe usarse en una funcion async
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
        const {data} = await resp.json()
        const {url} = data.images.original;
        return url;

    }catch (error){
        //manejo del error
        return 'No existe';
    }

}

//getImagen2();
