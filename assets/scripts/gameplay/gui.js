'use strict'

const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#message').text('New Game Succesfully Created')
  store.game = response.game._id
}

const newGameFailure = function (error) {
  $('#message').text('New Game Failed, Try Again')
}

const clickedSuccess = function (response) {
  $('#message').text('Click Success')
  // store.games = response.games
}

const clickedFailure = function (error) {
  $('#message').text('Selection Failed, Try Again')
}

const invalidMove = function () {
  $('#message').text('That Tile Has Been Taken')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickedFailure,
  clickedSuccess,
  invalidMove
}
