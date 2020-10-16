'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./gui')
const gapi = require('./gapi')

// const onSignUp = function (event) {
//   event.preventDefault()
//   // get the form from the event
//   const form = event.target
//   // get the data from the form
//   const data = getFormFields(form)
//   // send the data to the api
//   api.signUp(data)
//     // handle successful response
//     .then(ui.signUpSuccess)
//     // handle failed response
//     .catch(ui.signUpFailure)
// }

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  gapi.newGame(data)
    .then(gui.newGameSuccess)
    .catch(gui.newGameSuccess)
}

module.exports = {
  onNewGame
}
