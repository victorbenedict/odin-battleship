import shipData from '../../data/ships.json';
import handleBotAttack from '../../utils/handleBotAttack';
import handlePlayerAttack from '../../utils/handlePlayerAttack';

// Converts ship name eg. carrier to cv
const getShipCode = (shipName) => {
  return shipData
    .find((item) => {
      return item['name'] === shipName;
    })
    .code.toUpperCase();
};

const markOccupiedCells = (ships, box, cellId) => {
  ships.forEach((target) => {
    if (target.cells.includes(cellId)) {
      box.textContent = ' ' + getShipCode(target.ship.name);
      box.classList.add('ship');
    }
  });
};

const markAttackedCells = (hits, missedShots, box, cellId) => {
  if (hits.includes(cellId)) box.classList.add('hit');
  if (missedShots.includes(cellId)) box.classList.add('miss');
};

const markEnemyCells = (hits, missedShots, box, cellId) => {
  const isCellEmpty = !(hits.includes(cellId) || missedShots.includes(cellId));
  if (isCellEmpty) {
    box.classList.add('target');
    box.addEventListener('click', () => {
      handlePlayerAttack(cellId);
      handleBotAttack();
    });
  }
};

const renderBoard = ({ containerId, player, type }) => {
  const hits = player.gameboard.hits;
  const missedShots = player.gameboard.missedShots;
  const ships = player.gameboard.ships;
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const gameboard = document.createElement('div');
  gameboard.className = 'gameboard';

  // Iterate every cell/box of the 10x10 grid
  for (let cellId = 1; cellId <= 100; cellId++) {
    const box = document.createElement('div');
    box.textContent = cellId;
    box.classList.add('cell');

    switch (type) {
      case 'deployment':
        markOccupiedCells(ships, box, cellId);
        break;

      case 'playerGameboard':
        markOccupiedCells(ships, box, cellId);
        markAttackedCells(hits, missedShots, box, cellId);
        break;

      case 'enemyGameboard':
        markEnemyCells(hits, missedShots, box, cellId);
        markAttackedCells(hits, missedShots, box, cellId);
        break;
    }

    gameboard.appendChild(box);
  }
  container.appendChild(gameboard);
};

export default renderBoard;
