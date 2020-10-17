'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const gui = require('./gui')
const gapi = require('./gapi')
const store = require('./../store')

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
        value: store.turn
      },
      over: 'false'
    }
  }
  console.log(sendUpdate)
  gapi.clicked(sendUpdate)
    .then(gui.clickedSuccess)
    .catch(gui.clickedFailure)
  if (store.turn === 'x') {
    store.turn = 'o'
  } else {
    store.turn = 'x'
  }
  console.log(event.target)
  // turn event.target off after being clicked
  $('event.target').off('click')
  $('event.target').val(store.turn)
}

module.exports = {
  onNewGame,
  onClick
}
