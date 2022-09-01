const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

const rot13 = str => {

    let accumulator = "";

    for (i = 0; i < str.length; i++) {
        let capStr = str.toUpperCase();
        if (alphabet.includes(capStr[i])) {
            let charIndex = alphabet.findIndex(char => char === capStr[i]);
            charIndex <= 13 ? accumulator += alphabet[charIndex + 13] : accumulator += alphabet[charIndex - 13];
        }else{
            accumulator += str[i];
        }
    }

    return accumulator;

}

console.log(rot13("Hello World"));
