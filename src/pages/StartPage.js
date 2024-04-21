import renderBoard from '../components/renderBoard';
import data from '../data/data.json';
import handleStartBattle from '../utils/handleStartBattle';

let deployCount = 0;
let isAxisX = true;
const deployedShips = [];

const handleDeployShip = (x, y) => {
  if (data.ships.length > deployCount) {
    const name = data.ships[deployCount].class;
    const length = data.ships[deployCount].length;
    const axis = isAxisX ? 'x' : 'y';
    deployedShips.push({ name: name, length: length, axis: axis, x: x, y: y });
    deployCount += 1;
    if (deployCount >= data.ships.length) {
      const boardContainer = document.getElementById('boardContainer');
      const btnStart = document.createElement('button');
      btnStart.textContent = 'To Battle';
      btnStart.addEventListener('click', () =>
        handleStartBattle(deployedShips)
      );
      boardContainer.appendChild(btnStart);
    }
  }
};

const toggleAxis = () => {
  isAxisX = !isAxisX;
  const axis = isAxisX ? 'Horizontal' : 'Vertical';
  console.log(`Ship axis toogled to ${axis}`);
  axisStatus.textContent = `Ship axis: ${axis}`;
};

const StartPage = () => {
  const body = document.querySelector('body');
  const title = document.createElement('h1');
  title.textContent = 'Battleship Game';
  body.appendChild(title);

  const playerContainer = document.createElement('div');
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = 'Fleet Admiral Appointment';

  const label = document.createElement('label');
  label.textContent = 'Name:';
  fieldset.appendChild(label);

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'name';
  input.required = true;
  input.minLength = 2;
  input.maxLength = 15;
  input.size = 15;
  input.placeholder = 'Admiral name';
  input.value = 'Admiral Meat';
  fieldset.appendChild(input);

  fieldset.appendChild(legend);
  playerContainer.appendChild(fieldset);
  body.appendChild(playerContainer);

  const boardContainer = document.createElement('div');
  boardContainer.classList = 'boardContainer';
  boardContainer.id = 'boardContainer';

  const instructions = document.createElement('p');
  instructions.textContent = `${data.ships[deployCount].class} is ready for deployment`;
  boardContainer.appendChild(instructions);

  const axisStatus = document.createElement('span');
  axisStatus.id = 'axisStatus';
  axisStatus.textContent = `Ship Axis: Horizontal`;
  boardContainer.appendChild(axisStatus);

  const btnAxis = document.createElement('button');
  btnAxis.id = 'btnAxis';
  btnAxis.textContent = 'Change Axis';
  btnAxis.addEventListener('click', toggleAxis);
  boardContainer.appendChild(btnAxis);

  boardContainer.appendChild(renderBoard('setupboard', handleDeployShip));
  body.appendChild(boardContainer);

  return body;
};

export default StartPage;
