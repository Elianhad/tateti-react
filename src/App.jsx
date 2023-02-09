import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import BoardGame from './components/BoardGame'
import './App.css'

import { TURNS } from './logic/constants.js'
import { checkEndGame, checkWinner } from './logic'
import Winner from './components/Winner'

function App() {
  const [board, setBoard] = useState(() => {
    const boardOnStorage = JSON.parse(window.localStorage.getItem('board'))
    return boardOnStorage ??  Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnOnStorage = window.localStorage.getItem('turn')
    return turnOnStorage ?? TURNS.x
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    window.localStorage.setItem('board', JSON.stringify(newBoard))

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  return (
    <main className='board'>
      <h1>TATETI</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <BoardGame board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <Winner winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
