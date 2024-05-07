import _ from 'underscore';


/**
 * 
 * @param {Array<String>} tiposDeCartas ejemplo ['C', 'D', 'H', 'S'];
 * @param {Array<String>} tiposEspeciales  ejemplo ['A', 'J', 'Q', 'K'];
 * @returns {Array<String>} retorna un nuevo deck
 */


export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas === 0) throw new Error('TipoDeCartas es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}
