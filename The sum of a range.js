let array = []

function range(start, end, step) {
    if (step > 0) {
        for (i = start; i <= end; i += step) {
            array.push(i)
        }
    } else {
        for (i = start; i >= end; i += step) {
            array.push(i)
        }
    }
    return array
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}
console.log(range(1, 10))

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));