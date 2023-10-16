const { Player} = require('./player.js')

// function aiAttack() {
//   let attackState = false
//   while (attackState == false) {
//     const randomNumX = Math.floor(Math.random() * 10)
//     const randomNumY = Math.floor(Math.random() * 10)
//     attackState = player[1].board.receiveAttack(randomNumX, randomNumY)
//   }
//   console.log(player[1].board.hitGrid)
// }

const player = {}

player[1] = new Player('Major', 'human')
player[2] = new Player('T1OZ', 'AI')
player[1].board.placeShip('cv', 'Carrier', 5, 0,'vertical')
player[1].board.placeShip('bb', 'Battleship', 6, 0,'vertical')
player[1].board.placeShip('cc', 'Cruiser', 7, 0,'vertical')
player[1].board.placeShip('dd', 'Destroyer', 8, 0,'vertical')
player[1].board.placeShip('ss', 'Submarine', 9, 0,'vertical')

player[2].board.placeShip('cv', 'Carrier', 0, 0,'horizontal')
player[2].board.placeShip('bb', 'Battleship', 0, 1,'horizontal')
player[2].board.placeShip('cc', 'Cruiser', 0, 2,'horizontal')
player[2].board.placeShip('dd', 'Destroyer', 0, 3,'horizontal')
player[2].board.placeShip('ss', 'Submarine', 0, 4,'horizontal')

let currentPlayer = 1
currentPlayer = playerTurn()

function playerTurn(){
  console.log(`playerTurn ${currentPlayer}`)
  return currentPlayer == 1 ? 2 : 1
}

module.exports = { player, playerTurn};