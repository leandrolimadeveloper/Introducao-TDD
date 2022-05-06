let app = require('../app')

describe('Operações básicas', () => {
    test('Deve retornar o valor 25 ao somar 5 + 20', () => {
        const resultado = app.soma(5, 20)
    
        expect(resultado).toEqual(25)
    })
    
    test('Deve retornar o valor 5 ao dividir 25 por 5', () => {
        const resultado = app.divisao(25, 5)
    
        expect(resultado).toEqual(5)
    })
})
