import './Tile.css'

export default function Tile(props) {

    function makeMove() {
        if (props.gameOver) return

        props.makeMove(props.coords.x, props.coords.y, props.player)
    }

    return (
        <td>
            <button onClick={makeMove}>{props.value}</button>
        </td>
    )
}