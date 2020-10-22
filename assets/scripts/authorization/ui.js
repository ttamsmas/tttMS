'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#message').text('You have Been Signed Up ' + response.user.email)
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signUpFailure = function () {
  $('#message').text('Account Creation Failed, Please Try Again')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signInSuccess = function (response) {
  $('#message').text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#new-game').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
  $('#player-stats').show()
}

const signInFailure = function () {
  $('#message').text('Sign In Failed, Try Again')
}

const updateSucces = function () {
  $('#message').text('Password Has Been Updated Successfully')
  $('#old-password').val('')
  $('#new-password_confirmmation').val('')
}

const updateFail = function () {
  $('#message').text('Update Password Failed, Please Try Again')
}

const signOutSuccess = function (response) {
  $('#message').text('Sign Out Successful, Please Sign In Again To Play')
  $('#xOTurn').text('')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmation').val('')
  $('#new-game').hide()
  delete store.user
  delete store.game
  store.turn = 'X'
  $('#player-stats').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  updateFail,
  updateSucces,
  signOutSuccess
}
