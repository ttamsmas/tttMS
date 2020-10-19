'use strict'

const store = require('../store.js')
const gapi = require('./gapi')

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
}

const clickedFailure = function () {
  $('#message').text('Selection Failed, Try Again')
}

const invalidMove = function () {
  $('#message').text('That Tile Has Been Taken')
}

// the check winner function matches values horizontally, vertically, and diagonally
// if winner is selected, the store.winner value is changed to true, blocking future moves
const checkWinner = function (response) {
  const currentGame = response.game.cells
  if (currentGame[0] !== '' && currentGame[0] === currentGame[1] && currentGame[1] === currentGame[2]) {
    $('#xOTurn').text(currentGame[0] + ' is our winner!')
    store.winner = true
    const data = { over: true } // pass over = true value to server's revords
    gapi.updateGameWinner(data)
  } else if (currentGame[3] !== '' && currentGame[3] === currentGame[4] && currentGame[4] === currentGame[5]) {
    $('#xOTurn').text(currentGame[3] + ' is our winner!')
    store.winner = true
  } else if (currentGame[6] !== '' && currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8]) {
    $('#xOTurn').text(currentGame[6] + ' is our winner!')
    store.winner = true
  } else if (currentGame[0] !== '' && currentGame[0] === currentGame[3] && currentGame[3] === currentGame[6]) {
    $('#xOTurn').text(currentGame[0] + ' is our winner!')
    store.winner = true
  } else if (currentGame[1] !== '' && currentGame[1] === currentGame[4] && currentGame[4] === currentGame[7]) {
    $('#xOTurn').text(currentGame[1] + ' is our winner!')
    store.winner = true
  } else if (currentGame[2] !== '' && currentGame[2] === currentGame[5] && currentGame[5] === currentGame[8]) {
    $('#xOTurn').text(currentGame[2] + ' is our winner!')
    store.winner = true
  } else if (currentGame[0] !== '' && currentGame[0] === currentGame[4] && currentGame[4] === currentGame[8]) {
    $('#xOTurn').text(currentGame[0] + ' is our winner!')
    store.winner = true
  } else if (currentGame[6] !== '' && currentGame[6] === currentGame[4] && currentGame[4] === currentGame[2]) {
    $('#xOTurn').text(currentGame[6] + ' is our winner!')
    store.winner = true
  } else if (currentGame[0] !== '' && currentGame[1] !== '' && currentGame[2] !== '' && currentGame[3] !== '' && currentGame[4] !== '' && currentGame[5] !== '' && currentGame[6] !== '' && currentGame[7] !== '' && currentGame[8] !== '') {
    $('#xOTurn').text('Game is a Draw')
    store.winner = true
  }
}

const checkFail = function () {
  $('#message').text('This Game Record is Corrupt')
}

const blockMove = function () {
  $('#message').text('We have a winner! Click New Game to play again')
}

const playerStatsAll = function (response) {
  console.log(response.games)
  $('#message').text(response.games.length + ' games played')
}

const playerStatsFail = function () {
  $('#message').text('No Player Record')
}

const loginFirst = function () {
  $('#message').text('Sign In or Select New Game to Begin')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickedFailure,
  clickedSuccess,
  invalidMove,
  checkWinner,
  checkFail,
  blockMove,
  playerStatsAll,
  playerStatsFail,
  loginFirst
}
