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
  const currentValue = $(event.target).text()
  console.log(currentValue)
  if (currentValue === '') {
    gapi.clicked(sendUpdate)
      .then(gui.clickedSuccess)
      .catch(gui.clickedFailure)
    $(event.target).html(store.turn)
    if (store.turn === 'x') {
      store.turn = 'o'
    } else {
      store.turn = 'x'
    }
  } else {
    gui.invalidMove
  }
  console.log(event.target)
  // turn event.target off after being clicked
  // document.querySelector(this).off()
}

module.exports = {
  onNewGame,
  onClick
}
