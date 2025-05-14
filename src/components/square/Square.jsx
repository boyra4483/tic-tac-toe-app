import "./square.css"


export default function Square({handleClick, player}) {
  return (
    <button className="square"  onClick={handleClick}> {player} </button>
  )
}