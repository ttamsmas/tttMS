'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#message').text('You have Been Signed Up ' + response.user.email)
}

const signUpFailure = function (error) {
  $('#message').text('Account Creation Failed, Please Try Again')
}

const signInSuccess = function (response) {
  $('#message').text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#sign-in-form').hide(true)
  $('#sign-up-form').hide(true)
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  updateFail,
  updateSucces
}
