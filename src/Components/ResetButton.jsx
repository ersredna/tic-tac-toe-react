import '../App.css'

export default function ResetButton(props) {
    return (
        <div className="center">
            <button onClick={props.resetGame}>Play Again?</button>
        </div>
    )
}