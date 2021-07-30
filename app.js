//файл, описывающий цикл игры

function changePriority() {
    if (board.priority) {
        board.player_left.actions = 2;
    } else {
        board.player_right.actions = 2;
    }
    board.priority = !board.priority;
}


board = new Board("Red", "Blue");
menu = new Menu();

board.player_left.deck.shuffleDeck();
board.player_right.deck.shuffleDeck();

board.player_left.hand.add_card(board.player_left.deck.cards.splice(0, 5));
board.player_right.hand.add_card(board.player_right.deck.cards.splice(0, 5));


//tests
board.player_left.field.grid[2][1].object = new Berserk();
board.player_right.field.grid[1][2].object = new Stalker();
board.player_right.field.grid[2][1].object = new Dragon_mage();
board.player_left.field.grid[0][0].object = new Homunculus();

animate();