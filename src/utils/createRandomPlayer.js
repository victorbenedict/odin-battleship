import shipData from '../data/ships.json';
import Player from '../models/player';

// Returns bot object with random ship placement
const createRandomPlayer = (name, type) => {
  const randomPlayer = new Player({ name: name, type: type });

  const placeShipInRandom = (name, length) => {
    const randomAxis = Math.floor(Math.random() * 2) ? 'x' : 'y';
    const randomOrigin = Math.floor(Math.random() * 100);

    return randomPlayer.gameboard.placeShip({
      name: name,
      length: length,
      axis: randomAxis,
      origin: randomOrigin,
    });
  };

  shipData.forEach((ship) => {
    let isSuccess = false;
    while (!isSuccess) {
      isSuccess = placeShipInRandom(ship.name, ship.length);
    }
  });

  return randomPlayer;
};

export default createRandomPlayer;
