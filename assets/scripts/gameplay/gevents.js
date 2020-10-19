'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./gui')
const gapi = require('./gapi')
const store = require('./../store')

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  gapi.newGame(data)
    .then(gui.newGameSuccess)
    .then($('.col-4').text(''))
    .catch(gui.newGameSuccess)
  store.winner = false
}
// if no winner then click otherwise stop further moves
const onClick = function (event) {
  if (store.winner === true) {
    gui.blockMove()
  } else {
    const form = event.target
    const cellIndex = form.id
    const sendUpdate = {
      game: {
        cell: {
          index: cellIndex,
          value: store.turn
        },
        over: 'false'
      }
    }
    const currentValue = $(event.target).text()
    if (currentValue === '') {
      gapi.clicked(sendUpdate)
        .then(gui.clickedSuccess)
        .then(gapi.checkGame)
        .then(gui.checkWinner)
        .catch(gui.clickedFailure)
      $(event.target).html(store.turn)
      if (store.turn === 'x') {
        store.turn = 'o'
      } else {
        store.turn = 'x'
      }
    }
  }
}

const playerStats = function (event) {
  event.preventDefault()
  const player = store.user
  gapi.playerStatistics(player)
    .then(gui.playerStatsAll)
    .catch(gui.playerStatsFail)
}

module.exports = {
  onNewGame,
  onClick,
  playerStats
}
