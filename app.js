function checkGameOver() {
    return (!board.player_left.field.grid[1][1].object || !board.player_right.field.grid[1][1].object);
}


function resetBuffer() {
    if (mouse.buffer1){
        mouse.buffer1.isSelected = false;
    }
    if (mouse.buffer2){
        mouse.buffer2.isSelected = false;
    }
    mouse.buffer1 = null;
    mouse.buffer2 = null;
}


function replaceContent() {
    let temp = mouse.buffer1.object;
    mouse.buffer1.object = mouse.buffer2.object;
    mouse.buffer2.object = temp;
    resetBuffer();
}


function listenAction(i) {
    let currentPlayer;
    let opposite;
    let side;
    if (board.priority) {
        currentPlayer = board.player_left;
        opposite = board.player_right;
        side = "left";

    } else {
        currentPlayer = board.player_right;
        opposite = board.player_left;
        side = "right";
    }


    switch (i) {

        case 0: {
            if (currentPlayer.hand.hand.length < 5 && currentPlayer.deck.cards.length > 0) {
                currentPlayer.hand.add_card(currentPlayer.deck.cards.splice(0, 1));
                currentPlayer.actions -= 1;

            } else {
                alert("Вы не можете взять карту!");
            }
            break;
        }


        case 1: {
            if (currentPlayer.field.countCards < 9 && currentPlayer.hand.hand.length > 0) {
                if ((mouse.buffer1 && mouse.buffer2) &&
                    (mouse.buffer1.location === "hand" && mouse.buffer2.location === "grid") && (!mouse.buffer2.object) &&
                    (mouse.buffer2.side.toString() === side)) {

                    replaceContent();
                    currentPlayer.field.countCards += 1;
                    currentPlayer.actions -= 1;
                    break;
                }
            }
            alert("Вы не можете разыграть героя!");
            break;
        }


        case 2: {
            if ((mouse.buffer1 && mouse.buffer2) &&
                (mouse.buffer1.location === "grid" && mouse.buffer2.location === "grid") &&
                (mouse.buffer1.object && mouse.buffer2.object) &&
                (mouse.buffer1.side.toString() === side && mouse.buffer2.side.toString() !== side)) {

                mouse.buffer2.object.hp -= mouse.buffer1.object.damage;
                if (mouse.buffer2.object.hp <= 0) {
                    opposite.field.countCards -= 1;
                    mouse.buffer2.object = null;

                    if (checkGameOver()) {
                        alert("Game over!");
                        alert("Restart game?");
                        location.reload();
                    }
                }
                currentPlayer.actions -= 1;

            } else {
                alert("Вы не можете атаковать!");
            }

            break;
        }


        case 3: {
            if (currentPlayer.field.countCards < 9) {
                if ((mouse.buffer1 && mouse.buffer2 && mouse.buffer1.object && !mouse.buffer2.object) &&
                    (mouse.buffer1.location === "grid" && mouse.buffer2.location === "grid") &&
                    (mouse.buffer1.side.toString() === side && mouse.buffer2.side.toString() === side) &&
                    (!mouse.buffer1.object.leader)) {
                    currentPlayer.actions -= 1;
                    replaceContent();
                    break;
                }
            }
            alert("Вы не можете переместить героя!");
            break;
        }


        case 4: {
            currentPlayer.actions -= 2;
            break;
        }
    }

    resetBuffer();
    if (currentPlayer.actions < 1) {
        board.priority = !board.priority;
        currentPlayer.actions = 2;
    }
}

name1 = prompt("Введите имя первого игрока");
name2 = prompt("Введите имя второго игрока");

board = new Board(name1, name2);
menu = new Menu();

board.player_left.deck.shuffleDeck();
board.player_right.deck.shuffleDeck();

board.player_left.hand.add_card(board.player_left.deck.cards.splice(0, 5));
board.player_right.hand.add_card(board.player_right.deck.cards.splice(0, 5));

//лидеры ставятся на свои места
board.player_left.field.grid[1][1].object = new Knight();
board.player_right.field.grid[1][1].object = new Healer();

animate();