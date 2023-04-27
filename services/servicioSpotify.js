//promesas que hace el front
//programar consumo de api

export async function pedirTokenEnSpotify (){
    //receta para consumir apis con js == pasos para ir a un restaurante
    //1.para donde vas(url + endpoint)
    const URL = "https://accounts.spotify.com/api/token"

    let dato1="grant_type=client_credentials"
    let dato2="client_id=5938fd7d0e5f4d889ba4db749d5780ad"
    let dato3="client_secret=63d8eca3cf88416ca881b4f92588b05b"

    //2. que vas a hacer (configurar la peticion o request)
    const PETICION = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`${dato1}&${dato2}&${dato3}`
    }

    //3. arranque pues (consuma el api)
    let respuesta=await fetch(URL,PETICION)
    let respuestaTOKEN=await respuesta.json()


    let token=respuestaTOKEN.token_type+" "+respuestaTOKEN.access_token
    return(token)
}