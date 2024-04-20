import Player from './player';

const RenderBoard = () => {
  const main = document.createElement('div');
  const board = document.createElement('div');
  board.className = 'board';

  const rows = 10;
  const cols = 10;

  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= cols; j++) {
      const cell = document.createElement('div');
      const coordinate = `${j},${i}`;
      cell.classList.add('cell');
      cell.id = coordinate;
      cell.textContent = coordinate;
      board.appendChild(cell);
    }
  }

  main.appendChild(board);

  return main;
};

export default RenderBoard;
