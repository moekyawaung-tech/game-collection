const games = {
    'tic-tac-toe': {
        title: 'Tic Tac Toe',
        board: Array(9).fill(''),
        currentPlayer: 'X',
        render: function() {
            const container = document.getElementById('gameContainer');
            container.innerHTML = `
                <h2>${this.title}</h2>
                <div class="game-board" id="ticTacToeBoard"></div>
                <div class="game-status" id="gameStatus">Your turn: X</div>
                <button onclick="resetGame('tic-tac-toe')">New Game</button>
            `;
            renderTicTacToe();
        }
    }
    // More games...
};

function startGame(gameId) {
    document.getElementById('gameModal').classList.add('show');
    games[gameId].render();
}

function closeGame() {
    document.getElementById('gameModal').classList.remove('show');
}

function showLeaderboard() {
    document.getElementById('leaderboardModal').style.display = 'flex';
}

// Tic Tac Toe Logic
function renderTicTacToe() {
    const board = document.getElementById('ticTacToeBoard');
    board.innerHTML = games['tic-tac-toe'].board.map((cell, index) => 
        `<div class="game-cell" onclick="makeMove(${index})">${cell}</div>`
    ).join('');
}

function makeMove(index) {
    const game = games['tic-tac-toe'];
    if (game.board[index] === '' && !checkWinner()) {
        game.board[index] = game.currentPlayer;
        renderTicTacToe();
        
        if (!checkWinner()) {
            game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('gameStatus').textContent = `Your turn: ${game.currentPlayer}`;
        }
    }
}

function resetGame(gameId) {
    games[gameId].board.fill('');
    games[gameId].currentPlayer = 'X';
    games[gameId].render();
}

// Initialize
document.getElementById('leaderboardModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
});
