import Player from './player';

const RenderShips = () => {
  const avatar = new Player('avatar', 'human');
  avatar.gameboard.placeShip('CV', 5, 'x', 1, 1);
  avatar.gameboard.placeShip('BB', 4, 'x', 1, 2);
  avatar.gameboard.placeShip('CC', 3, 'x', 1, 3);
  avatar.gameboard.placeShip('DD', 2, 'x', 1, 4);
  avatar.gameboard.placeShip('SS', 1, 'x', 1, 5);

  avatar.gameboard.ships.map((target) => {
    const shipName = target.ship.name;
    target.coordinates.map((coordinate) => {
      const coordinateId = `${coordinate.x},${coordinate.y}`;
      const cell = document.getElementById(coordinateId);
      cell.textContent = shipName;
      cell.classList.add('ship');
    });
  });
};

export default RenderShips;
