import Square from "../square/Square"
import "./board.css"


export default function Board({board, handleClick}) {
  return (
    <>
      <div className="board-row">
        <Square handleClick={() => handleClick(0)}  player={board[0]} />
        <Square handleClick={() => handleClick(1)}  player={board[1]} />
        <Square handleClick={() => handleClick(2)}  player={board[2]} />
      </div>
      <div className="board-row">
        <Square handleClick={() => handleClick(3)}  player={board[3]} />
        <Square handleClick={() => handleClick(4)}  player={board[4]} />
        <Square handleClick={() => handleClick(5)}  player={board[5]} />
      </div>
      <div className="board-row">
        <Square handleClick={() => handleClick(6)}  player={board[6]} />
        <Square handleClick={() => handleClick(7)}  player={board[7]} />
        <Square handleClick={() => handleClick(8)}  player={board[8]} />
      </div>
    </>

  )
}