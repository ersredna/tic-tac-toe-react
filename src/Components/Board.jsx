import Tile from './Tile'

export default function Board(props) {
    
    let keyIndex = -1;
    const tileGrid = props.tiles.map((tileSet, i) => {
        keyIndex++
        return (
            <tr key={keyIndex}>
            {tileSet.map((_tile, j) => {
                keyIndex++
                return <Tile gameOver={props.gameOver} makeMove={props.makeMove} key={keyIndex} player={props.player} value={props.tiles[i][j].value} coords={{x: j, y: i}} />
            })}
            </tr>
        )
    })
    
    return (
        <table>
            <tbody>
                {tileGrid}
            </tbody>
        </table>
    )
}