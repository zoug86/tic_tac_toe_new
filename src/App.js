import React, { useState } from 'react';
import "./App.css";
import { calculateNextValue, calculateStatus, calculateWinner } from './helpers/helpers';

//-----Start Of Board Component-----//
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) {
    // if (winner || squares[square]) {
    //   return
    // }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }
  console.log(squares);
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  )
}
//-----End Of Board Component-----//

//-----Start of Game Component-----//
function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}
//-----End of Game Component-----//

//-----Start of App Component-----//
function App() {
  return <Game />
}
//-----End of App Component-----//

export default App