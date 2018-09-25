const supertest = require('supertest');
const should = require('should');
const operacion = require('./app');

describe('#Test idiota para probar', () =>{

  it('Debería dar la suma como resultado', (done)=>{
    valor1 = 5;
    valor2 = 8;
    resultadoEsperado = valor1 + valor2;
    const resultado = operacion.sumar(valor1,valor2);
    resultado.should.be.eql(resultadoEsperado);
    done();
  })

});
