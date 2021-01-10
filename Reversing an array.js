function reverseArray(array) {
    let output = []
    while (array.length) {
        output.push(array.pop())
    }
    return output
}

// Need to see this function and how it works
function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array;
}

array = reverseArray(["A", "B", "C"])
console.log(array);

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue);