'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./authorization/events.js')
const gevents = require('./gameplay/gevents.js')

$(() => {
  // sign in & account creation actions
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onUpdatePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  // game actions
  $('#new-game').on('submit', gevents.onNewGame)
  $('.container').on('click', gevents.onClick)
  $('#player-stats').on('click', gevents.playerStats)
})
