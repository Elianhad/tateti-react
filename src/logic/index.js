import { WINNER_OPTIONS } from './constants'

const checkWinner = (boardToCheck) => {
  for (let option of WINNER_OPTIONS) {
    const [a, b, c] = option
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}
const checkEndGame = (checkBoard) => {
  // revisamos el array si no hay contenido null
  return checkBoard.every((square) => square !== null)
}

export { checkWinner, checkEndGame }
