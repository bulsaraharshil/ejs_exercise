//need to see this problem but can be easily understood


function loop(value, test, update, body) {
    for (let start = value; test(start); start = update(start)) {
        body(start)
    }
}

loop(3, n => n > 0, n => n - 1, console.log)