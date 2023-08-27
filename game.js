const cl = console.log
const ct = console.table
// Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
class Ship {
  constructor(name, size){
    this.name = name
    this.size = size
    this.damage = 0
  }

  isHit() {
    this.damage++
  }

  isSunk() {
    return this.damage >= this.size
  }
} 

// Create Gameboard factory
class Gameboard {
  constructor(player) {
    this.player = player
    this.ships = []
    this.occupiedPositions = []
    this.missedAttacks = []
  }

   // Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
  placeship(shipName, position, orientation) {
    const shipSizes = [
      {'name': 'carrier',     'size': 5},
      {'name': 'battleship',  'size': 4},  
      {'name': 'destroyer',   'size': 3},  
      {'name': 'submarine',   'size': 3},  
      {'name': 'patrolboat',  'size': 2},  
    ]
    const shipSize = shipSizes.find(ship => ship.name === shipName).size
    const positionArr = []

    // return null/exit the function if the position is off the board
    if (orientation == 'vertical') {
      if (position[1] + shipSize > 9) return null
    } else {
      if (position[0] + shipSize > 9) return null
    }

    // return null/exit the function if the positions are occupied
    if (orientation == 'vertical') {
      for (let i = 0; i < shipSize; i++) {
        const verticalPositionStr = `${position[0]}${position[1] + i}`
        if (this.occupiedPositions.includes(verticalPositionStr)) {
          return null
        }
      }
    } else {
        for (let i = 0; i < shipSize; i++) {
        const horizontalPositionStr = `${position[0] + i}${position[1]}`
        if (this.occupiedPositions.includes(horizontalPositionStr)) {
          return null
        }
      }   
    }

    // add ship data
    if (orientation == 'vertical') {
      for (let i = 0; i < shipSize; i++) {
        const verticalPositionStr = `${position[0]}${position[1] + i}`
        positionArr.push(verticalPositionStr)
        this.occupiedPositions.push(verticalPositionStr)      
      }
    } else {
      
      for (let i = 0; i < shipSize; i++) {
        const horizontalPositionStr = `${position[0] + i}${position[1]}`
        positionArr.push(horizontalPositionStr)
        this.occupiedPositions.push(horizontalPositionStr)
      }   
    }
    this.ships.push([new Ship(shipName, shipSize), positionArr])
  }

  // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
  // Check ship position array from this.ships to match the parameter value
  // if true, call ship.isHit() 
  // if false, push the parameter value to this.missedAttacks as string.
  receiveAttack(attackPosition) {
    let isMissed = true
    this.ships.forEach((positionArr, index)=> {
      positionArr[1].forEach(singlePosition => {
        if (attackPosition == singlePosition) {
          isMissed = false
          this.ships[index][0].isHit()
        } 
      });
    });
    if (isMissed == true) this.missedAttacks.push(attackPosition)
  }

  isAllSunk() {
  // check all ship.isSunk()
  // if one is false, return false
  // else return true
    let allSunk = true
    this.ships.forEach(ship => {
      if (ship[0].isSunk() == false) {
        allSunk = false
      }
    });
    return allSunk
  }
}

// Create Player
function createPlayer() {

  const player1 = new Gameboard('player1')
  player1.placeship('carrier', [0,0], 'horizontal')
  player1.placeship('battleship', [0,1], 'horizontal')
  player1.placeship('battleship', [0,2], 'horizontal')
  player1.placeship('destroyer', [0,3], 'horizontal')
  player1.placeship('submarine', [0,4], 'horizontal')
  player1.placeship('patrolboat', [0,5], 'horizontal')
  player1.placeship('patrolboat', [0,6], 'horizontal')
  player1.placeship('patrolboat', [0,7], 'horizontal')
  player1.placeship('patrolboat', [0,8], 'horizontal')
  
  const computer = new Gameboard('computer')
  computer.placeship('carrier', [0,0], 'horizontal')
  computer.placeship('battleship', [0,1], 'horizontal')
  computer.placeship('battleship', [0,2], 'horizontal')
  computer.placeship('destroyer', [0,3], 'horizontal')
  computer.placeship('submarine', [0,4], 'horizontal')
  computer.placeship('patrolboat', [0,5], 'horizontal')
  computer.placeship('patrolboat', [0,6], 'horizontal')
  computer.placeship('patrolboat', [0,7], 'horizontal')
  computer.placeship('patrolboat', [0,8], 'horizontal')
}

// Players can take turns playing the game by attacking the enemy Gameboard.
function playerTurn() {
  let turn = 0
  while (turn < 4) {
    ++turn
    cl(turn % 2 == 0 ? 'Computer turn' : 'Player turn')
  }
}

// The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
const computerMoves_Arr = []
for (let i = 0; i < 100; i++) {
  if (i < 10) {
    computerMoves_Arr.push(`0${i}`)
  } else {
    computerMoves_Arr.push(`${i}`)
  }
}
cl(computerMoves_Arr)

function computerPlays() {
  
}
