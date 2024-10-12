import React, { useState } from 'react';
import './App.css';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore if cell is already filled or there's a winner

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div>
      <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>
      <div className="board">
        <div className="row">
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
        </div>
      </div>
      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const App = () => {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default App;
