module.exports = function toReadable(number) {

    const numeral = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty"
    ];

    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let readableString = '';
    
    if (number == 0) {
        readableString = 'zero';
    }

    let arrayFromNumber = number.toString().split("");

    if (number <= 20 && number > 0 ) {
        readableString = numeral[number];
    } else if (number >= 21 && number < 100) {
        readableString = dozens[arrayFromNumber[0]] + " " + numeral[arrayFromNumber[1]]
    } else if (number > 99 && number < 1000) {
        readableString = numeral[arrayFromNumber[0]] + " hundred " + (number % 100 == 0 ? "" : toReadable(number % 100));
    }

    return readableString.trim();
};
