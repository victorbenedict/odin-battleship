import Ship from './ship';

/**
 * Gameboard class
 * A 10 by 10 grid from top to bottom
 * @constructor
 */
export default class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
    this.hits = [];
  }

  /**
   * Placing a ship
   * @param name
   * @param length
   * @param axis
   * @param origin
   */
  placeShip({ name, length, axis, origin }) {
    const cells = [];

    const occupiedCells = this.ships
      .map((target) => target.cells)
      .join()
      .split(',')
      .map((cell) => parseInt(cell));

    const isOutBounds = (axis, cell) => {
      if (cell < 1) return true;

      const getXAxisId = (cell) => {
        return Math.floor((cell - 1) / 10);
      };

      return axis === 'x' ? getXAxisId(cell) != getXAxisId(origin) : cell > 100;
    };

    for (let i = 0; i < length; i++) {
      const increment = axis === 'x' ? i : i * 10;
      const cell = origin + increment;

      if (occupiedCells.includes(cell)) {
        return false;
      }

      if (isOutBounds(axis, cell)) {
        return false;
      }

      cells.push(cell);
    }

    const newShip = new Ship(name, length);
    this.ships.push({ ship: newShip, cells: cells });
    return true;
  }

  receiveAttack(cell) {
    if (this.missedShots.includes(cell) || this.hits.includes(cell)) {
      return false;
    }

    for (const target of this.ships) {
      const isHit = target.cells.includes(cell);
      // attack hits
      if (isHit) {
        target.ship.hit();
        this.hits.push(cell);

        return true;
      }
    }
    // attack misses
    this.missedShots.push(cell);

    return true;
  }

  isShipsSunk() {
    // Check for an active ship
    for (const target of this.ships) {
      if (!target.ship.isSunk()) return false;
    }

    // All ship has sunk
    return true;
  }
}
