'use strict'

const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#message').text('New Game Succesfully Created')
  store.games = response.games
}

const newGameFailure = function (error) {
  $('#message').text('New Game Failed, Try Again')
}

const clickedSuccess = function (error) {
  $('#message').text('Click Success')
  store.games = response.games
}

const clickedFailure = function (error) {
  $('#message').text('New Game Failed, Try Again')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickedFailure,
  clickedSuccess
}
