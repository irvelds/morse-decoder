const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {

    /*Разбиваем на 10*/
    expr = expr.match(/.{1,10}/g)
    /*Разбиваем на 2*/
    let array2 = [];
    for (let i = 0; i < expr.length; i++) {
        array2.push(expr[i].match(/.{1,2}/g));
    }
    for (let i = 0; i < array2.length; i++) {
        array2[i] = array2[i].filter(i => i == '10' || i == '11').reduce((acc, e) => {
            return e === '10' ? acc += '.' : (e === '11' ? acc += "-" : '')
        }, '')
    }
    const result = [];
    for (let i = 0; i < array2.length; i++) {
        if (typeof MORSE_TABLE[array2[i]] !== "undefined") {
            result.push(MORSE_TABLE[array2[i]])
        }
        else result.push(' ')

    }
    return result.join('')

}

module.exports = {
    decode
}

