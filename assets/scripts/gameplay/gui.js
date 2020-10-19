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
  const currentGame = response.game.cells
  if (currentGame[0] !== '' && currentGame[0] === currentGame[1] && currentGame[1] === currentGame[2]) {
    $('#xOTurn').text(currentGame[0] + ' is our winner!')
  } else if (currentGame[3] !== '' && currentGame[3] === currentGame[4] && currentGame[4] === currentGame[5]) {
    $('#xOTurn').text(currentGame[3] + ' is our winner!')
  } else if (currentGame[6] !== '' && currentGame[6] === currentGame[7] && currentGame[7] === currentGame[8]) {
    $('#xOTurn').text(currentGame[6] + ' is our winner!')
  } else if (currentGame[0] !== '' && currentGame[0] === currentGame[3] && currentGame[3] === currentGame[6]) {
    $('#xOTurn').text(currentGame[0] + ' is our winner!')
  } else if (currentGame[1] !== '' && currentGame[1] === currentGame[4] && currentGame[4] === currentGame[7]) {
    $('#xOTurn').text(currentGame[1] + ' is our winner!')
  } else if (currentGame[2] !== '' && currentGame[2] === currentGame[5] && currentGame[5] === currentGame[8]) {
    $('#xOTurn').text(currentGame[2] + ' is our winner!')
  } else if (currentGame[0] !== '' && currentGame[0] === currentGame[4] && currentGame[4] === currentGame[8]) {
    $('#xOTurn').text(currentGame[0] + ' is our winner!')
  } else if (currentGame[6] !== '' && currentGame[6] === currentGame[4] && currentGame[4] === currentGame[2]) {
    $('#xOTurn').text(currentGame[6] + ' is our winner!')
  } else if (currentGame[0] !== '' && currentGame[1] !== '' && currentGame[2] !== '' && currentGame[3] !== '' && currentGame[4] !== '' && currentGame[5] !== '' && currentGame[6] !== '' && currentGame[7] !== '' && currentGame[8] !== '') {
    $('#xOTurn').text('Game is a Draw')
  }
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
