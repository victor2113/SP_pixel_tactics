//файл, описывающий цикл игры

function listenAction(i) {
    //пока ставлю заглушки
    let currentPlayer;
    if (board.priority) {
        currentPlayer = board.player_left;

    } else currentPlayer = board.player_right;

    switch (i) {

        case 0: {
            if (currentPlayer.hand.hand.length < 8 && currentPlayer.deck.cards.length > 0) {
                currentPlayer.hand.add_card(currentPlayer.deck.cards.splice(0, 1));
                currentPlayer.actions -= 1;

            } else {
                alert("Вы не можете взять карту!");
            }
            break;
        }
        case 1: {
            alert("Разыграйте героя.");
            if (currentPlayer.field.countCards < 9) { do }
            else {
                alert("Вы не можете разыграть героя!");
            }
            //выбрать карту из руки
            //выбрать пустую клетку своего поля
            //разыграть героя
            break;
        }
        case 2: {
            alert("Выберите героя, которым будете атаковать.");
            if (currentPlayer.field.countCards > 0) { do }
            else {
                alert("Нет доступных героев для атаки!");
            }
            //выбрать героя на своем поле
            //выбрать героя на чужом поле
            //совершить атаку
            break;
        }
        case 3: {
            alert("Переместите героя.");
            if (currentPlayer.field.countCards > 0) { do }
            else {
                alert("Нет доступных героев для перемещения!");
            }
            //выбрать героя на своем поле
            //выбрать другую клетку
            //переместить героя
            break;
        }
        case 4: {
            board.priority = !board.priority;
            currentPlayer.actions = 2;
            break;
        }
    }
    if (currentPlayer.actions < 1){
        board.priority = !board.priority;
        currentPlayer.actions = 2;
    }
}

function checkPriority() {
    if (board.priority && board.player_left.actions < 1) {
        board.player_left.actions = 2;
        board.priority = !board.priority;

    } else {
        board.player_right.actions = 2;
        board.priority = !board.priority;
    }
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

