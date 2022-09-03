// Transformar todas las funciones declarativas en funciones flecha.
// Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.
// Simplificar el código de las funciones.
// Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await.
//     // Promesa almacenada en una constante
    // const promesa = new Promise((resolve,reject)=>{

    //     if( 11 === 11){
    //         resolve('Los valores son iguales');
    //     } else {
    //         reject('Los valores son distintos')
    //     }

    // });

    

    // promesa.then((respuesta)=>{
    //         console.log(respuesta);
    //     }).catch((error)=>{
    //         console.log(error)
    //     });

//     // Promesa dentro en una función.
    // const promesaDos=(provincia)=>{

    //     const promesa = new Promise( (resolve, reject)=> {
        
    //             if('Formosa' === provincia){
    //                 resolve('Usted está ubicado en Formosa');
    //             } else {
    //                 reject('Error al realizar la consulta')
    //             }

    //     });

    //     return promesa;
    // }

    // promesaDos("Formosa")
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
    


 

    // const promesaTres=(valorBooleano)=>{

    //    const promesas= new Promise( (resolve,reject)=> {             //tiene que estar declarada una constante que adentro tenga ( new promise(resolve,reject)  )  y siempre debe retornar esta variable en este caso promesas
    //         ( true === valorBooleano )
    //         ? resolve('Los valores son iguales')
    //         : reject('Los valores son distintos')
    //     })
    //     return promesas
    // }

    // promesaTres(true)
    // .then(respuesta=>console.log(respuesta))
    // .catch(error=>console.log(error))    



const promesaCuatro=(arguments)=>{

      const valores=  new Promise( (resolve,reject)=> {
            ( "Mati4s" === arguments )
            ? resolve('Matias eres un genio en Programacion')
            : reject('Los valores son distintos')
        })

     return valores
}
  
promesaDos=async()=>{
try{
     const respuesta=await promesaCuatro("Mati4s")                   
     console.log(respuesta)
}catch(traeError){

    console.log(traeError)
}
}
promesaDos()

   
     

    // Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await.