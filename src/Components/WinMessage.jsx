export default function WinMessage(props) {
    let message = ''
    
    if (props.gameOver && props.winner) {
        message = `Player ${props.winner} wins!`
    }
    else if (props.gameOver) {
        message = `It's a tie!`
    }
    
    return (
        <div className="center">
            <p>{message}</p>
        </div>
    )
}