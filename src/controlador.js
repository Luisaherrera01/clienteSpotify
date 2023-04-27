import {pedirTokenEnSpotify} from "../services/servicioSpotify.js";
import { buscarCanciones } from "../services/servicioConsultarCanciones.js";

pedirTokenEnSpotify()
.then(function(token){

    buscarCanciones(token)
    .then(function(respuesta){
        console.log(respuesta.tracks[0])
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)
    })  
})


