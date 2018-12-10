//Do stuff
const var1 = 8;
const var2 = 7;

function sumar(var1, var2) {
  const valor1 = parseInt(var1);
  const valor2 = parseInt(var2);
  const resultado = valor1 + valor2;
  return (resultado);
}

module.exports.sumar = sumar;
