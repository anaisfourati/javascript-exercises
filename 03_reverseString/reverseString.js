const reverseString = function(string) {
    let finalString = "";
    const stringArray = string.split("");
    stringArray.reverse();
    finalString = stringArray.join("");
    return finalString;
};

console.log(reverseString("Anaïs"));

// Do not edit below this line
module.exports = reverseString;
