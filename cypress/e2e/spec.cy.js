import Ship from '../../src/ship';
import Gameboard from '../../src/gameboard';

describe('Ship Class Test', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  it('should create a ship with the correct properties', () => {
    const ship = new Ship('Battleship', 4);
    expect(ship.name).to.equal('Battleship');
    expect(ship.length).to.equal(4);
    expect(ship.hitCount).to.equal(0);
    expect(ship.isSunk).to.be.false;
  });

  it('should correctly register hits on the ship', () => {
    const ship = new Ship('Destroyer', 3);
    ship.hit();
    ship.hit();
    expect(ship.hitCount).to.equal(2);
  });

  it('should correctly determine if the ship is sunk', () => {
    const ship = new Ship('Destroyer', 3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk).to.be.false;
    ship.hit();
    expect(ship.isSunk).to.be.true;
  });
});

// describe('Player Class Test', () => {
//   let gameboard;
//   beforeEach(() => {
//     gameboard = new Gameboard();
//   });

//   it('should create a ship with the correct properties', () => {
//     const ship = new Ship('Battleship', 4);
//     expect(ship.name).to.equal('Battleship');
//     expect(ship.length).to.equal(4);
//     expect(ship.hitCount).to.equal(0);
//     expect(ship.isSunk).to.be.false;
//   });

//   it('should correctly register hits on the ship', () => {
//     const ship = new Ship('Destroyer', 3);
//     ship.hit();
//     ship.hit();
//     expect(ship.hitCount).to.equal(2);
//   });

//   it('should correctly determine if the ship is sunk', () => {
//     const ship = new Ship('Destroyer', 3);
//     ship.hit();
//     ship.hit();
//     expect(ship.isSunk).to.be.false;
//     ship.hit();
//     expect(ship.isSunk).to.be.true;
//   });
// });
