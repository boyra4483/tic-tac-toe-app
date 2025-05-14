import { useState } from "react"
import Board from "../board/Board";
import "./game.css"


export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [history, setHistory] = useState([board]);
  
  let isXMove = (history.slice(0, history.indexOf(board) + 1).length - 1) % 2 == 0;
  let status = (isXMove) ? "X move" : "O move";

  function handleClick(position) {
    if (board[position] || winner(board)) return;
    let currentBoard = board.slice();
    
    (isXMove) ? currentBoard[position] = "X" : currentBoard[position] = "O";
    setHistory([...history.slice(0, (history.indexOf(board) + 1)), currentBoard]);

    setBoard(currentBoard)
  }

  if (winner(board)) status = `winner ${winner(board)}`;
  if (winner(board) == "draw!") status = "draw!";

  function timeJump(index) {
    setBoard(history[index]);
  }

  const timeButton = history.map((history, index) => {
    let content = `move to ${index} way`;
    if (!index) content = `go to first move`;

    return <li key={index}> <button onClick={() => timeJump(index)}> {content} </button> </li>  
  })


  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="game-board"><Board  board={board}  handleClick={handleClick} /></div>
      <ul className="game-info">
        {timeButton}
      </ul>
    </div>
  ) 
}


function winner(board) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [A, B, C] = winLines[i];

    if (board[A] && board[A] == board[B] && board[B] == board[C]) {
      return board[A]
    }
  }

  return (board.includes(null)) ? false : "draw!"
}