import renderBoard from '../pages/components/renderBoard';
import { humanPlayer } from '../pages/renderDeploymentPage';
import handleWinner from './handleWinner';

const handleBotAttack = () => {
  let isSuccess = false;
  while (!isSuccess) {
    const randomAttack = Math.floor(Math.random() * 101);
    isSuccess = humanPlayer.gameboard.receiveAttack(randomAttack);
  }
  renderBoard({
    containerId: 'player',
    player: humanPlayer,
    type: 'playerGameboard',
  });
  handleWinner('bot', humanPlayer);
};

export default handleBotAttack;
