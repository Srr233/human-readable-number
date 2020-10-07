module.exports = function toReadable(number) {
    const arrNumber = number.toString().split('');
    const numberTwenty = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

    if (number <= 20) {
        return numberTwenty[number];
    } else if (number > 20 && number < 100) {
        return getReadTwoNumber(number);
    } else if (number >= 100 && number < 1000) {
        if (arrNumber[1] === '0' && arrNumber[2] === '0') {
            return `${numberTwenty[+arrNumber[0]]} hundred`;
        }
        return `${numberTwenty[+arrNumber[0]]} hundred ${getReadTwoNumber(+(arrNumber[1] + arrNumber[2]))}`;
    }
}

function getReadTwoNumber(number) {

    const numberTwenty = ["zero", "one", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety",
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    const numberTen = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"];
    const strNumber = number.toString();

    if (number < 10) return numberTen[number];

    if (strNumber[1] === '0' && number < 20) {
        return numberTwenty[number];
    } else if (strNumber[1] === '0') {
        return `${numberTwenty[+strNumber[0]]}`;
    } else if (number < 20) {
        return numberTwenty[number];
    } else {
        return `${numberTwenty[+strNumber[0]]} ${numberTen[+strNumber[1]]}`;
    }
}