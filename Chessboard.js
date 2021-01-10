let size = 8;
let board = "";
for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        if ((i + j) % 2 == 1) {
            board += "#"
        } else {
            board += " "
        }
    }
    board += "\n"
}
console.log(board);

//need to see this