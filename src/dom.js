const { player} = require('./gameLoop');

function renderOccupiedCell1(x, y) {
  return player[1].board.fleetGrid[y][x] !== null
}

function renderHitCell1(x, y) {
  return player[1].board.hitGrid[y][x] == 'hit'
}

function renderMissCell1(x, y) {
  return player[1].board.hitGrid[y][x] == 'miss'
}

function renderOccupiedCell2(x, y) {
  return player[2].board.fleetGrid[y][x] !== null
}
function renderHitCell2(x, y) {
  return player[2].board.hitGrid[y][x] == 'hit'
}

function renderMissCell2(x, y) {
  return player[2].board.hitGrid[y][x] == 'miss'
}
function aiAttack() {
  let attackState = false
  let x, y
  while (attackState == false) {
    const randomNumX = Math.floor(Math.random() * 10)
    const randomNumY = Math.floor(Math.random() * 10)
    attackState = player[1].board.receiveAttack(randomNumX, randomNumY)
    x = randomNumX
    y = randomNumY
    console.log(x, y)
  }
  console.log(x, y)

  const id = `p1_${y}${x}`
  const div = document.getElementById(id)
  // console.log(player[1].board.hitGrid)
  if (renderHitCell1(x, y)) {
    div.textContent = 'x'
    div.classList.add('hit')
  } 
  if (renderMissCell1(x, y)) {
    div.textContent = 'x'
    div.classList.add('miss')
  }  
}
const grid_1 = document.querySelector('.grid_1');
const grid_2 = document.querySelector('.grid_2');
function renderboards() {
  for (let i = 0; i < 100; i++) {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    
    const coordinates = i.toString().padStart(2, '0')
    const x = coordinates[1]
    const y = coordinates[0]
    div1.classList.add(`cell`);
    div2.classList.add(`cell`);
    div1.id = `p1_${coordinates}`
    div2.id = `p2_${coordinates}`

    div2.addEventListener('click', function() {
      // console.log(`Clicked ${coordinates}`)
      player[2].board.receiveAttack(x, y)
      if (renderHitCell2(x, y)) {
        div2.textContent = 'x'
        div2.classList.add('hit')
      }
      if (renderMissCell2(x, y)) {
        div2.textContent = 'x'
        div2.classList.add('miss')
      }
      aiAttack()

      
    })

    if (renderOccupiedCell1(x, y)) div1.classList.add('occupied')
    // if (renderHitCell1(x, y)) {
    //   div1.textContent = 'x'
    //   div1.classList.add('hit')
    // }  
    // if (renderHitCell2(x, y)) {
    //   div2.textContent = 'x'
    //   div2.classList.add('hit')
    // }
    // if (renderMissCell1(x, y)) {
    //   div1.textContent = 'x'
    //   div1.classList.add('miss')
    // }  
    // if (renderMissCell2(x, y)) {
    //   div2.textContent = 'x'
    //   div2.classList.add('miss')
    // }
  
    grid_1.appendChild(div1);
    grid_2.appendChild(div2);
  }

}

module.exports = {
  renderboards,
};