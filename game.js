import Board from './board.js'

let board
let boardUI = document.querySelector('#board')
let scoreUI = document.querySelector('h1')
let score = 0

function resetGame() {
    boardUI.classList.remove('shaking')
    init()
}

function updateScore() {
    score++
    scoreUI.textContent = score
}

boardUI.addEventListener('click', function(e) {
    e.stopPropagation()
    if(e.target.classList.length === 2) {
        updateScore()
        board.updateBoard()
    } else {
        boardUI.classList.add('shaking')
        setTimeout(function(){
            resetGame()
        }, 2000)
    }
})


function init() {
    score = -1
    updateScore()
    board = new Board(3, boardUI)
    board.createBoard()
}

init()