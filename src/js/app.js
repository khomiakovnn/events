let randomCell = Math.floor(Math.random() * 16) + 1;
document.getElementById(randomCell).className = 'selected_cell';
let activCell = randomCell

setInterval(() => {
    randomCell = Math.floor(Math.random() * 16) + 1
    while (randomCell == activCell) {
        randomCell = Math.floor(Math.random() * 16) + 1
    }

    document.getElementById(activCell).className = 'cell'
    document.getElementById(randomCell).className = 'selected_cell'
    activCell = randomCell
}, 1000)