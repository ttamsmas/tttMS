'use strict'

const config = require('./../config')
const store = require('./../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const updatePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'PATCH',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {'Authorization': 'Bearer ' + store.user.token},
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  updatePassword,
  signOut
}
