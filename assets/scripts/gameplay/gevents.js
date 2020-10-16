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

const onClick = function (event) {
  const form = event.target
  const cellIndex = form.id
  const sendUpdate = {
    game: {
      cell: {
        index: cellIndex,
        value: 'x'
      },
      over: 'false'
    }
  }
  console.log(sendUpdate)
  gapi.clicked(sendUpdate)
    .then(gui.clickedSuccess)
    .catch(gui.clickedFailure)
}

module.exports = {
  onNewGame,
  onClick
}
