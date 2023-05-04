import {pedirTokenEnSpotify} from "../services/servicioSpotify.js";
import { buscarCanciones } from "../services/servicioConsultarCanciones.js";

let fila = document.querySelector("#fila")

pedirTokenEnSpotify()
.then(function(token){

    buscarCanciones(token)
    .then(function(respuesta){

        console.log(fila)

        respuesta.tracks.forEach(function(cancion){
            let columna = document.createElement("div")
            columna.classList.add("col","mb-3")

            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            let pista = document.createElement("audio")
            pista.classList.add("w-100")
            pista.setAttribute("controls","controls")
            pista.src=cancion.preview_url

            let nombre = document.createElement("h4")
            nombre.classList.add("text-center","fw-bold", "p-2", "m-3")
            nombre.textContent = cancion.name

            let foto = document.createElement("img")
            foto.classList.add("img-fluid" , "w-100")
            foto.src = cancion.album.images[0].url

            tarjeta.appendChild(nombre)
            tarjeta.appendChild(foto)
            tarjeta.appendChild(pista)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)

        })

        console.log(respuesta.tracks[0])
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)
    })  
})


