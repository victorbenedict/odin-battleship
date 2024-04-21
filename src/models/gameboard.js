import Ship from './ship';

export default class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(name, length, axis, x, y) {
    const coordinates = [];

    for (let count = 0; count < length; count++) {
      const newX = axis === 'x' ? x + count : x;
      const newY = axis === 'y' ? y + count : y;
      coordinates.push({ x: newX, y: newY });
    }

    const ship = new Ship(name, length);
    this.ships.push({ ship: ship, coordinates: coordinates });
  }

  receiveAttack(x, y) {
    for (const target of this.ships) {
      for (const coordinate of target.coordinates) {
        if (coordinate.x === x && coordinate.y === y) {
          target.ship.hit();

          return true;
        }
      }
    }

    this.missedShots.push({ x: x, y: y });

    return false;
  }

  isShipsSunk() {
    for (const status of this.ships) {
      if (!status.ship.isSunk()) {
        return false;
      }
    }

    return true;
  }
}
