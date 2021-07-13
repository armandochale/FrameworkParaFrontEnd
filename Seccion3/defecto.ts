//Parametros por defecto

const mostrar = (nombre:string, apellido:string,edad:number = 32) =>{
    return `Se llama ${nombre} su apellido es ${apellido} y tiene ${edad} años`
}

console.log(mostrar('Manuel','Muñoz',37))
console.log(mostrar('Victoria','Mas'))
