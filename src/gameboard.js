const { Ship} = require('./ship.js');

// note: The fleet and hit Grids index value is [Y axis][X axis]

function Gameboard() {
  this.ships = {}
  this.fleetGrid = this.createGrid()
  this.hitGrid = this.createGrid()
}

Gameboard.prototype.createGrid = function () {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr[i] = Array(10).fill(null)
  }
  return arr
}

Gameboard.prototype.placeShip = function(shipName, shipClass, x, y, orientation) {
  const _ship = this.ships[shipName] = new Ship(shipClass)
  switch (orientation) {
    case 'horizontal':
      if (_ship.length + x > 10) {
        delete this.ships[shipName];
        return 'out of bounds'
      }
      for (let i = x; i < _ship.length + x ; i++) {
        if (this.fleetGrid[y][i] !== null) {
          delete this.ships[shipName];
          return 'location is already taken'
        }
        this.fleetGrid[y][i] = shipName
      }
      return 'placement success'

    case 'vertical':
      if (_ship.length + y > 10) {
        delete this.ships[shipName];
        return 'out of bounds'
      } 
      for (let i = y; i < _ship.length + y ; i++) {
        if (this.fleetGrid[i][x] !== null) {
          delete this.ships[shipName];
          return 'location is already taken'
        } 
        this.fleetGrid[i][x] = shipName
      }
      return 'placement success'

    default: return 'orientation error';
  }
}

Gameboard.prototype.receiveAttack = function(x, y) {
  const _cell = this.fleetGrid[y][x]
  if (this.hitGrid[y][x] == 'miss' || this.hitGrid[y][x] == 'hit') {
    return false
  }
  if (_cell !== null) {
    this.ships[_cell].hit()
    this.hitGrid[y][x] = 'hit'
    return true
  }
  this.hitGrid[y][x] = 'miss'
  return true
};

Gameboard.prototype.isAllSunk = function() {
  for (let shipName in this.ships ) {
    const _shipObj = this.ships[shipName]
    if (_shipObj.isSunk() == false) {
      return false
    }
  }
  return true
}

module.exports = { Gameboard};

