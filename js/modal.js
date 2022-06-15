'use strict'

const board = document.querySelector('main')

export const abrirModal = (score) => {
    const containerModal = document.createElement('div')
    containerModal.classList.add('container-modal')

    const modal = document.createElement('div')
    modal.classList.add('modal')

    const title = document.createElement('h2')
    title.textContent = 'GAME OVER'
    modal.appendChild(title)

    const scoreUser = document.createElement('span')
    scoreUser.textContent = 'SCORE: ' + score
    scoreUser.classList.add('score-user')
    modal.appendChild(scoreUser)

    const bestScore = document.createElement('span')
    bestScore.textContent = 'BEST SCORE: ' + localStorage.bestScore
    bestScore.classList.add('best-score')
    modal.appendChild(bestScore)

    const restart = document.createElement('button')
    restart.textContent = 'RESTART'
    restart.classList.add('restart')
    modal.appendChild(restart)
    
    containerModal.appendChild(modal)
    
    board.appendChild(containerModal)
    
    restart.addEventListener('click', restartGame)
}


const restartGame = () => {
    window.location.href = './index.html'
}