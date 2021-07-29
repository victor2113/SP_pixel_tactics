//файл, описывающий цикл игры


// let firstPlayerName = prompt("Имя первого игрока", "Red");
// let secondPlayerName = prompt("Имя второго игрока", "Blue");

board = new Board("Red", "Blue");
menu = new Menu();

board.player_left.deck.shuffleDeck();
board.player_right.deck.shuffleDeck();


//tests
board.player_left.field.grid[1][1].object = new Berserk();
board.player_right.field.grid[1][2].object = new Stalker();
board.player_right.field.grid[2][2].object = new Dragon_mage();
board.player_left.field.grid[0][0].object = new Homunculus();

animate();