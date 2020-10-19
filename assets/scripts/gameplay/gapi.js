'use strict'

const config = require('./../config')
const store = require('./../store.js')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'POST',
    data: data
  })
}

const clicked = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'PATCH',
    data: data
  })
}

const checkGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'GET',
    data: data
  })
}

module.exports = {
  newGame,
  clicked,
  checkGame
}
