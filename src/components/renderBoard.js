const renderBoard = (name, cellClickFunction, rows = 10, cols = 10) => {
  const board = document.createElement('div');
  board.className = `board`;

  for (let y = rows; y >= 1; y--) {
    for (let x = 1; x <= cols; x++) {
      const cell = document.createElement('div');
      const coordinate = `${x},${y}`;
      cell.classList.add('cell');
      cell.id = coordinate;
      cell.textContent = coordinate;
      cell.addEventListener('click', () => cellClickFunction(x, y));
      board.appendChild(cell);
    }
  }

  return board;
};

export default renderBoard;
