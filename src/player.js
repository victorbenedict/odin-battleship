const { Gameboard} = require('./gameboard.js');

function Player(name, type) {
  this.name = name
  this.type = type
  this.board = new Gameboard()
}

module.exports = { Player};