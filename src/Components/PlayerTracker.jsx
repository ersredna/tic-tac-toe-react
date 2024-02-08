export default function PlayerTracker(props) {
    return (
        <div className="center">
            <p>It is player <strong>{props.player}</strong>'s turn</p>
        </div>
    )
}