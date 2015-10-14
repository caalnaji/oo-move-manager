function MoveManager() {
  this.board = [
  ['x','x','x'],
  ['x','x','x'],
  ['x','x','x']
  ];
}

MoveManager.prototype.insert = function(i, j) {
  this.board[i].splice(j, 1, 'o');
  return this.board;
}

MoveManager.prototype.movePlayer = function(i, j, dir) {
  if (this.board[i][j] != 'o') throw new Error('Piece does not exist');
  this.board[i].splice(j, 1, 'x');
  if (dir === 'right' && j+1 <= 2) j++;
  else if (dir === 'left' && j-1 >= 0) j--;
  else if (dir === 'up' && i-1 >= 0) i--;
  else if (dir === 'down' && i+1 <= 2) i++;
  else {
    this.board[i].splice(j, 1, 'o');
    throw new Error("Invalid Move");
  }
  this.board[i].splice(j, 1, 'o');
  return this.board;
}

module.exports = MoveManager;