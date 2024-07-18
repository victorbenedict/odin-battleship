import Gameboard from './gameboard';
/**
 * Player class
 * @param name
 * @param type
 * @constructor
 */
export default class Player {
  constructor({ name, type }) {
    this.name = name;
    this.type = type;
    this.gameboard = new Gameboard();
  }
}
