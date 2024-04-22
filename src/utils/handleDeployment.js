import data from '../data/data.json';

const handleDeployment = () => {
  let draggedShip = null;
  let length = 1;

  const shipImages = document.getElementsByClassName('shipDiv');

  for (const shipImage of shipImages) {
    shipImage.addEventListener('dragstart', (event) => {
      draggedShip = event.target.id;
      const ship = data.ships.find((ship) => ship['class'] === draggedShip);
      length = ship.length;
    });
  }

  const targets = document.getElementsByClassName('cell');
  for (const target of targets) {
    let cellGroup = [];

    target.addEventListener('dragenter', (event) => {
      const cellId = event.target.id;
      const coordinates = cellId.split(',');
      const x = parseInt(coordinates[0]);
      const y = parseInt(coordinates[1]);

      cellGroup = [];
      for (let count = 0; count < length; count++) {
        const coordinate = `${x + count},${y}`;
        cellGroup.push(coordinate);
      }

      event.preventDefault();
    });
    target.addEventListener('dragover', (event) => {
      cellGroup.map((cellId) => {
        const cell = document.getElementById(cellId);
        cell.style.backgroundColor = 'LightSteelBlue';
      });
      event.preventDefault();
    });

    target.addEventListener('dragleave', (event) => {
      console.log('cellGroup', cellGroup);
      cellGroup.map((cellId) => {
        const cell = document.getElementById(cellId);
        console.log('dragleave', cell);
        cell.style.backgroundColor = 'white';
      });
      event.preventDefault();
    });

    target.addEventListener('drop', (event) => {
      event.preventDefault();
      const drop = event.target;

      cellGroup.map((cellId) => {
        const cell = document.getElementById(cellId);
        cell.style.backgroundColor = 'cornflowerblue';
      });
    });
  }
};

export default handleDeployment;
