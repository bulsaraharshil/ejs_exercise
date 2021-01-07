function countChar(string, char) {
    let counter = 0
    for (i = 0; i < string.length; i++) {
        if (string[i] == char) {
            counter += 1
        }
    }
    return counter
}

function countBs(string) {
    return countChar(string, "B");
}

//----ANOTHER WAY(NEW WAY)----
// var countBs = function(str) {
//     return str.match(/B/g).length;
// };

// var countChar = function(str, character) {
//     var matchExp = new RegExp(character, 'g');
//     return str.match(matchExp).length;
// };
// console.log(countChar("harshil", "h"))
// console.log(countBs("ABBCD"));