'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#message').text('You have Been Signed Up ' + response.user.email)
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signUpFailure = function (error) {
  $('#message').text('Account Creation Failed, Please Try Again')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signInSuccess = function (response) {
  $('#message').text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmmation').val('')
}

const signInFailure = function (error) {
  $('#message').text('Sign In Failed, Try Again')
}

const updateSucces = function (error) {
  $('#message').text('Password Update Complete')
}

const updateFail = function (error) {
  $('#message').text('Update Failed, Please Try Again')
}

const signOutSuccess = function (response) {
  $('#message').text('Sign Out Successful')
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password_confirmation').val('')
  store.user = ''
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
