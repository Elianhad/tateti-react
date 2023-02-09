const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = isSelected ? 'is-selected' : ''
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={`${className} square`} onClick={handleClick}>
      {children}
    </div>
  )
}
export default Square