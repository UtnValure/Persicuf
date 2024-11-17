import axios from "axios"

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
//Tengo que hacer este archivo un service campera

export const getCampera = async () => {
    const resultado = await axios.get("https://localhost:7050/api/Campera/obtenerCamperas")
    console.log(resultado.data)
    return resultado.data
}

export const postColor = async (codigoHexa, nombre) => {
    await axios.post("https://localhost:7050/api/Color/crearColor", {codigoHexa, nombre})
}