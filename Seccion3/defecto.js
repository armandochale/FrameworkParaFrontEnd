//Parametros por defecto
var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return "Se llama " + nombre + " su apellido es " + apellido + " y tiene " + edad + " a\u00F1os";
};
console.log(mostrar('Manuel', 'Muñoz', 37));
console.log(mostrar('Victoria', 'Mas'));
