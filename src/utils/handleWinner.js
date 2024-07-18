const handleWinner = (attackerName, opposingPlayer) => {
  if (opposingPlayer.gameboard.isShipsSunk()) {
    alert(`${attackerName} won!`);
  }
};

export default handleWinner;
