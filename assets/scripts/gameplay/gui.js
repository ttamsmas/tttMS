'use strict'

const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#message').text('New Game Succesfully Created')
  store.game = response.game._id
  $('#xOTurn').text('X Goes First')
}

const newGameFailure = function () {
  $('#message').text('New Game Failed, Try Again')
}

const clickedSuccess = function (response) {
  $('#message').text('Click Success')
  $('#xOTurn').text(store.turn + ' Turn')
  // store.games = response.games
}

const clickedFailure = function () {
  $('#message').text('Selection Failed, Try Again')
}

const invalidMove = function () {
  $('#message').text('That Tile Has Been Taken')
}

const checkWinner = function (response) {
  console.log(response.game.cells)
}

const checkFail = function () {
  $('#message').text('This Game Record is Corrupt')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickedFailure,
  clickedSuccess,
  invalidMove,
  checkWinner,
  checkFail
}
