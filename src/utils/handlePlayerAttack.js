import renderBoard from '../pages/components/renderBoard';
import { bot } from '../pages/renderDeploymentPage';
import handleWinner from './handleWinner';

const handlePlayerAttack = (cellId) => {
  bot.gameboard.receiveAttack(cellId);
  renderBoard({
    containerId: 'enemy',
    player: bot,
    type: 'enemyGameboard',
  });
  handleWinner('Player', bot);
};

export default handlePlayerAttack;
