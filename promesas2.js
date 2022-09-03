// Transformar todas las funciones declarativas en funciones flecha.
// Transformar las funciones en asíncronas con la palabra async.
// Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.
// Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.
// Implementar await sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.
// Selecconar las funciones retrasar, obtenerPcias, obtenerDptos, obtenerLocalidades, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta libs.
// Utilizar la palabra reservada export para exportar las funciones y que puedan ser utilizadas desde el archivo app.js. Pueden exportarlas una por una o como un solo objeto.
// Implementar bloques try catch para el manejo de errores.


const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias= async ()=>{
    await retrasar(1800);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias?aplanar=true&campos=estandar&max=24&exacto=true');
    const provinc= await consulta.json()
    return provinc.provincias
    //return provinc.provincias.map(elem=>elem)

}

promesasProvincias=async()=>{
    try{
         const respuesta=await obtenerPcias()                   
         console.log(respuesta)
    }catch(traeError){
    
        console.log(traeError,"es un error fatal  en url de  Provincias")
    }
    }
    promesasProvincias()




// const nombreProvi=async()=>{
//     const respuesta= await obtenerPcias();
//     //const newList=respuesta.map((prov)=>prov)
//     console.log(respuesta)
// }
// nombreProvi();



// Función que retorna los datos de departamentos
const obtenerDptos=async()=>{
    // await retrasar(1391);

    const consulta1 = await fetch('https://apis.datos.gob.ar/georef/api/departamentos?provincia=Santa%20Fe&aplanar=true&campos=estandar&max=200&exacto=true');
    const depar= await consulta1.json()

    return depar.departamentos
}


promesaDepartamento=async()=>{
    try{
         const respuesta=await obtenerDptos()                   
         console.log(respuesta)
    }catch(traeError){
    
        console.log(traeError,"es un errror fatal  url de Departamentos")
    }
    }
    promesaDepartamento()


// Función que retorna los datos de localidades
const obtenerLocalidades=async()=>{
    // await retrasar(900);

const consulta2 =await fetch('https://apis.datos.gob.ar/georef/api/localidades?provincia=Santa%20Fe&departamento=Rosario&municipio=Granadero%20Baigorria&localidad_censal=Granadero%20Baigorria&aplanar=true&campos=estandar&max=200&exacto=true');
const localidad= await consulta2.json()

return localidad.localidades

}

promesalocalidad=async()=>{
    try{
         const respuesta=await obtenerLocalidades()                   
         console.log(respuesta)
    }catch(traeError){
    
        console.log(traeError,"es un error fatal en url de Localidades")
    }
    }
    promesalocalidad()

// Funcion para obtener todos los datos
const consultarDatos=()=>{
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades =    obtenerLocalidades()

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();
