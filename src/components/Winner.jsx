import React from 'react'
import Square from './Square'

const Winner = ({ winner, resetGame }) => {
  if (winner === null) return
  const winnerText = winner === false ? 'Empate' : 'Ganó '
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText} </h2>
        <header className='win'>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Jugar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

export default Winner
