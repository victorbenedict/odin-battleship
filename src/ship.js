export default class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.isSunk = false;
  }

  hit() {
    this.hitCount += 1;
    if (this.hitCount >= this.length) {
      this.isSunk = true;
    }
  }
}
