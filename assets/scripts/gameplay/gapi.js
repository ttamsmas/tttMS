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

const clicked = function (form) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user.games,
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'PATCH',
    // take the button's index and change the game's array to represent the click
  })
}

// const updatePassword = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     headers: {'Authorization': 'Bearer ' + store.user.token},
//     method: 'PATCH',
//     data: data
//   })
// }

module.exports = {
  newGame,
  clicked
}
