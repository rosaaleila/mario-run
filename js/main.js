'use strict'

import { abrirModal } from "./modal.js"

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const score = document.querySelector('.score')
let userScore = 0

const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
    
    userScore++
}

const loopGame = setInterval(() => {
    score.textContent = userScore
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '')

    if (pipePosition <= 70 && pipePosition > 0 && marioPosition < 90) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './imgs/game-over.png'
        mario.style.marginLeft = '15px'
        mario.style.width = '60px'

        clouds.style.animation = 'none'
        clouds.style.right = `${cloudsPosition}px`
        
        clearInterval(loopGame)

        if (localStorage.bestScore) {
            if (userScore > +localStorage.getItem('bestScore')) {
                localStorage.bestScore = userScore.toString()
            }
        } else {
            localStorage.setItem('bestScore', userScore.toString())
        }

        setTimeout(() => {
            abrirModal(userScore)
        }, 500);
        
    } 
}, 10)

document.querySelector('.game-board').addEventListener('click', jump)