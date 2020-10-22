'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./gui')
const gapi = require('./gapi')
const store = require('./../store')

// New Game creates a new Game ID that is saved within store.games
// The New Game Button also clears the board
const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  gapi.newGame(data)
    .then(gui.newGameSuccess)
    .then($('.col-4').text(''))
    .catch(gui.newGameSuccess)
  // refresh the game over field saved within 'store' so the next game uses a new game id
  store.winner = 'false'
}

// if no winner then click otherwise stop further moves
// game winner locked in the 'store field' need to pass to game record...
const onClick = function (event) {
  if (store.winner === true) {
    gui.blockMove()
  } else if (store.user === undefined) {
    // force sign in if signed out and try to click board
    gui.loginFirst()
  } else if (store.game === undefined) {
    // if no game created, force user to click new game
    gui.newGameFirst()
  } else {
    const form = event.target
    const cellIndex = form.id
    // pass the exact cell and the value to update the current game array
    const sendUpdate = {
      game: {
        cell: {
          index: cellIndex,
          value: store.turn
        },
        over: 'false'
      }
    }
    // only allow clicking on empty tiles
    const currentValue = $(event.target).text()
    // after check for empty tile and click process, THEN check the winner
    // need to check for winner after so the most revent tile update is included on the evaluated array
    if (currentValue === '') {
      gapi.clicked(sendUpdate)
        .then(gui.clickedSuccess)
        .then(gapi.checkGame) // pull current game board as array
        .then(gui.checkWinner)
        .catch(gui.clickedFailure)
      $(event.target).html(store.turn)
      // alternate filling tile as x and o via store.turn field
      if (store.turn === 'X') {
        store.turn = 'O'
      } else {
        store.turn = 'X'
      }
    }
  }
}

// the GET request for the user's game record is a large object that can be reported multiple ways
// may add functionallity for win and loss
// queued from the gui tab unlike all other events
const playerStats = function (event) {
  event.preventDefault()
  const player = store.user
  // pass the user's ID to the AJAX request
  gapi.playerStatistics(player)
    .then(gui.playerStatsAll)
    .catch(gui.playerStatsFail)
}

module.exports = {
  onNewGame,
  onClick,
  playerStats
}
