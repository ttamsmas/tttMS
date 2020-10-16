'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./gui')
const gapi = require('./gapi')

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
