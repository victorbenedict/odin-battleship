import Player from '../models/player';
import BattlePage from '../pages/BattlePage';

export const createPlayer = (name, type, deployedShips) => {
  const player = new Player(name, type);
  deployedShips.map((shipData) => {
    const { name, length, axis, x, y } = shipData;
    player.gameboard.placeShip(name, length, axis, x, y);
  });

  return player;
};

const handleStartBattle = (deployedShips) => {
  const name = document.getElementById('name').value;
  const playerData = createPlayer(name, 'human', deployedShips);
  sessionStorage.setItem('player', JSON.stringify(playerData));

  const body = document.querySelector('body');
  body.innerHTML = '';
  body.appendChild(BattlePage());
};

export default handleStartBattle;
