const expect = require('chai').expect
const weirdom = require('..').default // .. require el modulo que esta en el nivel superior, y va a buscarlo al archivo main del package.json
                                      // Al utilizar babel para transpilar, debemos poner .default para importar la funciton  en los test

describe('#weirdom44', function(){

  it('Si la palabra termina con ar, se le quita esas dos letras', function(){
    const translation = weirdom("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le añaden pe al final', function(){
    const translation = weirdom("Zorro")
    const translation2 = weirdom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio', function(){
    const translation = weirdom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Si la palabra es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas', function(){
    const translation = weirdom("sometemos")

    expect(translation).to.equal("SoMeTeMoS")
  })

})

/*

const expect = require('chai').expect
const platzom = require('..').default
Require lo que hace es un llamado a una función de un módulo y lo almacena en una constante.

En este caso expect y platzom son las constantes.

chai y ‘…’ son los módulos a los que se están llamando.

expect y default hacen referencia a las funciones que se están llamando de dichos módulos, siendo expect una función de chai y default es la función por defecto del módulo de platzom.

Es por esa razón que se cambia ‘mocha’ por ‘chai’, expect no es una función de mocha y por ende si haces el test con ‘mocha’ va a dar error y no va a reconocer a expect como función.

Algo que me sucedió es que necesitaba hacer test a dos funciones del mismo módulo.

En ese caso puedes hacerlo de la siguiente manera:

const función = require('..').nombreDeLaFunción
Y almacenas cada función en una constante diferente.

*/
