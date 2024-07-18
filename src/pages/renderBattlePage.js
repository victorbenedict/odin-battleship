import renderBoard from './components/renderBoard';
import { bot, humanPlayer } from './renderDeploymentPage';

const renderBattlePage = (containerId) => {
  const container = document.getElementById(containerId);
  const battlePage = document.createElement('div');
  battlePage.classList.add('battlepage');

  const playerGameboard = document.createElement('div');
  playerGameboard.id = 'player';
  const enemyGameboard = document.createElement('div');
  enemyGameboard.id = 'enemy';

  battlePage.append(playerGameboard);
  battlePage.appendChild(enemyGameboard);
  container.appendChild(battlePage);

  renderBoard({
    containerId: 'player',
    player: humanPlayer,
    type: 'playerGameboard',
  });

  renderBoard({ containerId: 'enemy', player: bot, type: 'enemyGameboard' });
};

export default renderBattlePage;
