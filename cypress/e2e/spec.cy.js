import Ship from '../../src/ship';
import Gameboard from '../../src/gameboard';
import Player from '../../src/player';

describe('Ship Class Test', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship('Battleship', 4);
  });
  it('should create a ship with the correct properties', () => {
    expect(ship.name).to.equal('Battleship');
    expect(ship.length).to.equal(4);
    expect(ship.hitCount).to.equal(0);
    expect(ship.isSunk()).to.be.false;
  });

  it('should correctly register hits on the ship', () => {
    ship.hit();
    ship.hit();
    expect(ship.hitCount).to.equal(2);
  });

  it('should correctly determine if the ship is sunk', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).to.be.false;
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).to.be.true;
  });
});

describe('Gameboard Class Test', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  it('should create a gameboard with empty ships and missed shots arrays', () => {
    expect(gameboard.ships).to.be.an('array').that.is.empty;
    expect(gameboard.missedShots).to.be.an('array').that.is.empty;
  });

  it('should place a ship on the gameboard correctly', () => {
    gameboard.placeShip('Battleship', 4, 'x', 0, 0);
    expect(gameboard.ships).to.have.lengthOf(1);
    const placedShip = gameboard.ships[0];
    expect(placedShip.ship.name).to.equal('Battleship');
    expect(placedShip.ship.length).to.equal(4);
    expect(placedShip.ship.hitCount).to.equal(0);
    expect(placedShip.ship.isSunk()).to.be.false;
    expect(placedShip.coordinates).to.deep.equal([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ]);
  });

  it('should receive an attack and hit the correct ship', () => {
    gameboard.placeShip('Carrier', 5, 'y', 3, 3);
    gameboard.receiveAttack(3, 5);
    expect(gameboard.ships[0].ship.hitCount).to.equal(1);
    expect(gameboard.receiveAttack(3, 3)).to.be.true;
    expect(gameboard.ships[0].ship.hitCount).to.equal(2);
  });

  it('should register missed shots correctly', () => {
    gameboard.receiveAttack(1, 1);
    expect(gameboard.missedShots).to.deep.include({ x: 1, y: 1 });
  });

  it('should correctly determine if all ships are sunk', () => {
    gameboard.placeShip('Submarine', 3, 'x', 1, 1);
    gameboard.placeShip('Destroyer', 3, 'y', 5, 5);

    expect(gameboard.isShipsSunk()).to.be.false;

    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(3, 1);
    expect(gameboard.isShipsSunk()).to.be.false;

    gameboard.receiveAttack(5, 5);
    gameboard.receiveAttack(5, 6);
    gameboard.receiveAttack(5, 7);
    expect(gameboard.isShipsSunk()).to.be.true;
  });
});

describe('Player Class Test', () => {
  it('should create a player with the correct properties', () => {
    const playerName = 'Player 1';
    const playerType = 'human';
    const player = new Player(playerName, playerType);

    expect(player.name).to.equal(playerName);
    expect(player.type).to.equal(playerType);
    expect(player.gameboard).to.be.an.instanceOf(Gameboard);
  });
});
