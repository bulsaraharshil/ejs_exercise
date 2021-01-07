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
console.log(countChar("harshil", "h"))
console.log(countBs("ABBCD"));