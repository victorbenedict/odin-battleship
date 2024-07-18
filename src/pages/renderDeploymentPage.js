// import renderBoard from './renderBoard';
import bbImage from '../assets/bb.png';
import ccImage from '../assets/cc.png';
import cvImage from '../assets/cv.png';
import ddImage from '../assets/dd.png';
import ssImage from '../assets/ss.png';
import shipData from '../data/ships.json';
import Player from '../models/player';
import createRandomPlayer from '../utils/createRandomPlayer';
import renderBoard from './components/renderBoard';
import renderBattlePage from './renderBattlePage';

export const humanPlayer = new Player({ name: 'player', type: 'human' });
export const bot = createRandomPlayer('bot', 'computer');

const handleDeployment = ({ player, shipName, shipLength, axis, origin }) => {
  player.gameboard.placeShip({
    name: shipName,
    length: shipLength,
    axis: axis,
    origin: parseInt(origin),
  });
};

const renderShipsPanel = (deploymentContainerId) => {
  const shipImageMap = {
    cv: cvImage,
    bb: bbImage,
    cc: ccImage,
    dd: ddImage,
    ss: ssImage,
  };

  const panel = document.createElement('div');
  shipData.forEach((ship, index) => {
    const div = document.createElement('div');
    const name = document.createElement('div');
    name.textContent = ship.name;
    div.appendChild(name);

    const inputOrigin = document.createElement('input');
    inputOrigin.type = 'number';
    inputOrigin.name = `origin-${ship.code}`;
    inputOrigin.id = `origin-${ship.code}`;
    inputOrigin.value = index + 1;
    div.appendChild(inputOrigin);

    const inputAxis = document.createElement('input');
    inputAxis.name = `axis-${ship.code}`;
    inputAxis.id = `axis-${ship.code}`;
    inputAxis.value = 'y';
    div.appendChild(inputAxis);

    const btnDeploy = document.createElement('button');
    btnDeploy.textContent = 'Deploy';
    div.appendChild(btnDeploy);

    btnDeploy.addEventListener('click', () => {
      handleDeployment({
        player: humanPlayer,
        shipName: ship.name,
        shipLength: ship.length,
        axis: inputAxis.value,
        origin: inputOrigin.value,
      });
      const deploymentBoard = document.getElementById(deploymentContainerId);
      deploymentBoard.innerHTML = '';
      renderBoard({
        containerId: deploymentContainerId,
        player: humanPlayer,
        type: 'deployment',
      });
    });

    panel.appendChild(div);
  });

  // render ship images
  // shipData.map((data) => {
  //   const imgDiv = document.createElement('div');
  //   const label = document.createElement('span');
  //   label.textContent = _.startCase(data.class);
  //   imgDiv.appendChild(label);
  //   const id = data.class;
  //   const shipImage = new Image();
  //   shipImage.id = id;
  //   const imageCode = shipImageMap[data.code];
  //   imgDiv.className = 'shipDiv';
  //   shipImage.src = imageCode;
  //   imgDiv.appendChild(shipImage);
  //   panel.appendChild(imgDiv);
  // });
  return panel;
};

const renderDeploymentPage = (containerId) => {
  const container = document.getElementById(containerId);
  const title = document.createElement('h1');
  title.textContent = 'Battleship Game';
  // body.appendChild(title);

  const playerpanel = document.createElement('div');
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = 'Admiral';

  const label = document.createElement('span');
  label.textContent = 'Name: ';
  fieldset.appendChild(label);

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'name';
  input.id = 'name';
  input.autocomplete = 'name';
  input.required = true;
  input.minLength = 2;
  input.maxLength = 15;
  input.size = 15;
  input.value = 'Player';
  fieldset.appendChild(input);

  fieldset.appendChild(legend);
  playerpanel.appendChild(fieldset);
  // body.appendChild(playerpanel);

  const setupPanel = document.createElement('div');
  setupPanel.classList = 'setupPanel';

  const deploymentBoard = document.createElement('div');
  deploymentBoard.classList = 'deploymentBoard';
  deploymentBoard.id = 'deployment';

  const btnStartGame = document.createElement('button');
  btnStartGame.textContent = 'Start Game';
  btnStartGame.addEventListener('click', () => {
    container.innerHTML = '';
    renderBattlePage(containerId, humanPlayer);
  });

  setupPanel.appendChild(deploymentBoard);
  setupPanel.appendChild(renderShipsPanel('deployment'));
  setupPanel.appendChild(btnStartGame);
  container.appendChild(setupPanel);
  renderBoard({
    containerId: 'deployment',
    player: humanPlayer,
    type: 'deployment',
  });
};

export default renderDeploymentPage;
