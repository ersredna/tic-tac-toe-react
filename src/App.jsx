import React, { setState } from 'react'
import Board from './Components/Board'
import PlayerTracker from './Components/PlayerTracker'
import WinMessage from './Components/WinMessage'
import ResetButton from './Components/ResetButton'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}]
      ],
      player: 'x',
      turn: 0,
      gameOver: false,
      winner: ''
    }
  }

  switchPlayer() {
    this.setState(state => {
      return {player: state.player === 'x' ? 'o' : 'x'}
    })
  }

  rowWin(y, value) {
    const row = this.state.tiles[y]

    for (const tile of row) {
      if (tile.value !== value) return false
    }

    return true
  }

  
  colWin(x, value) {
    for (const row of this.state.tiles) {
      if (row[x].value !== value) return false
    }

    return true
  }

  leftDiagWin(value) {
    for (let i = 0; i <= this.state.tiles.length - 1; i++) {
      const row = this.state.tiles[i]
      if (row[i].value !== value) return false
    }

    return true
  }

  rightDiagWin(value) {
    for (let i = this.state.tiles.length - 1, j = 0; i >= 0 && j <= this.state.tiles.length - 1; i--, j++) {
      const row = this.state.tiles[j]

      if (row[i].value !== value) return false
    }

    return true
  }

  endGame(winner = '') {
    this.setState({
      gameOver: true,
      winner
    })
    return true
  }
  
  checkWin(x, y, value) {
    if (this.rowWin(y, value)) {
      return this.endGame(this.state.player)
    }

    if (this.colWin(x, value)) {
      return this.endGame(this.state.player)
    }

    if (this.leftDiagWin(value)) {
      console.log('diagLeft')
      return this.endGame(this.state.player)
    }

    if (this.rightDiagWin(value)) {
      console.log('diagRight')
      return this.endGame(this.state.player)
    }

    if (this.state.turn >= 9) {
      console.log('tie')
      return this.endGame()
    }
  }

  makeMove = (x, y, value) => {
    if (this.state.tiles[y][x].value) {
      alert('Must only claim empty spaces')
      return;
    }
    
    this.setState(state => {
      let curTiles = state.tiles

      curTiles[y][x].value = value
      
      return {
        tiles: curTiles,
        turn: state.turn + 1
      }
    }, () => {
      if (this.checkWin(x, y, value) === true) return
      this.switchPlayer()
    })
  }

  resetGame = () => {
    this.setState({
      tiles: [
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}]
      ],
      player: 'x',
      turn: 0,
      gameOver: false,
      winner: ''
    })
  }

  render() {
    return (
      <div className="main">
        {!this.state.gameOver ? <PlayerTracker player={this.state.player} /> : <ResetButton resetGame={this.resetGame} />}
        <Board gameOver={this.state.gameOver} makeMove={this.makeMove} tiles={this.state.tiles} player={this.state.player} />
        <WinMessage gameOver={this.state.gameOver} winner={this.state.winner} />
      </div>
    )
  }
}

export default App