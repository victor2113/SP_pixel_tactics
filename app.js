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

//лидеры ставятся на свои места
board.player_left.field.grid[1][1].object = new Knight();
board.player_right.field.grid[1][1].object = new Healer();


//после этого начинается базовый цикл игры с иерархией:
//  раунд:
    //3 волны
    //подсчет потерь
    //смена очередности игроков


//tests
board.player_right.field.grid[2][1].object = new Shooter();
board.player_left.field.grid[0][0].object = new Homunculus();

animate();

