import renderBoard from '../components/renderBoard';
import shipPanel from '../components/renderShipPanel';
import handleDeployment from '../utils/handleDeployment';

const deployedShips = [];

const StartPage = () => {
  const body = document.querySelector('body');
  const title = document.createElement('h1');
  title.textContent = 'Battleship Game';
  body.appendChild(title);

  const playerContainer = document.createElement('div');
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = 'Admiral Appointment';

  const label = document.createElement('label');
  label.textContent = 'Name: ';
  fieldset.appendChild(label);

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'name';
  input.required = true;
  input.minLength = 2;
  input.maxLength = 15;
  input.size = 15;
  input.value = 'Player';
  fieldset.appendChild(input);

  fieldset.appendChild(legend);
  playerContainer.appendChild(fieldset);
  body.appendChild(playerContainer);

  const setupPanel = document.createElement('div');
  setupPanel.classList = 'setupPanel';

  const boardContainer = document.createElement('div');
  boardContainer.classList = 'boardContainer';
  boardContainer.id = 'boardContainer';

  boardContainer.appendChild(renderBoard('setupboard'));

  setupPanel.appendChild(boardContainer);
  setupPanel.appendChild(shipPanel());
  body.appendChild(setupPanel);

  handleDeployment();

  return body;
};

export default StartPage;
