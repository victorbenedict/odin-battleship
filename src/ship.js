function Ship(shipClass){
  this.shipClass = shipClass
  this.length = this.setLength(shipClass)
  this.timesHit = 0
}

Ship.prototype.setLength = function(shipClass) {
  switch (shipClass) {
    case 'Carrier': return 5
    case 'Battleship': return 4
    case 'Cruiser': return 3
    case 'Destroyer': return 3
    case 'Submarine': return 2
    default: return 'shipClass error';
  }
}

Ship.prototype.hit = function() {
  this.timesHit += 1
}

Ship.prototype.isSunk = function() {
  return this.timesHit >= this.length 
}

module.exports = { Ship};