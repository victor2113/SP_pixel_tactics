function checkGameOver() {
    return (!board.player_left.field.grid[1][1].object || !board.player_right.field.grid[1][1].object);
}


function resetBuffer() {
    if (mouse.buffer1) {
        mouse.buffer1.isSelected = false;
    }
    if (mouse.buffer2) {
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
    let attackingPlayer;
    let defendingPlayer;
    let side;

    if (board.priority) {
        attackingPlayer = board.player_left;
        defendingPlayer = board.player_right;
        side = "left";
    } else {
        attackingPlayer = board.player_right;
        defendingPlayer = board.player_left;
        side = "right";
    }


    switch (i) {

        //take the card
        case 0: {
            if (attackingPlayer.hand.hand.length < 5 && attackingPlayer.deck.cards.length > 0) {
                attackingPlayer.hand.add_card(attackingPlayer.deck.cards.splice(0, 1));
                attackingPlayer.actions -= 1;
            } else {
                alert("Вы не можете взять карту!");
            }
            break;
        }

        //play hero
        case 1: {
            if (attackingPlayer.field.countCards < 9 && attackingPlayer.hand.hand.length > 0) {
                if ((mouse.buffer1 && mouse.buffer2) &&
                    (mouse.buffer1.location === "hand" && mouse.buffer2.location === "grid") && (!mouse.buffer2.object) &&
                    (mouse.buffer2.side.toString() === side)) {

                    replaceContent();
                    attackingPlayer.field.countCards += 1;
                    attackingPlayer.actions -= 1;
                    break;
                }
            }
            alert("Вы не можете разыграть героя!");
            break;
        }

        //make attack
        case 2: {

            if (board.truceTime > 0) {
                alert("Нельзя атаковать во время перемирия!");
            }

            else if ((mouse.buffer1 && mouse.buffer2) &&
                (mouse.buffer1.location === "grid" && mouse.buffer2.location === "grid") &&
                (mouse.buffer1.object && mouse.buffer2.object) &&
                (mouse.buffer1.side.toString() === side && mouse.buffer2.side.toString() !== side)) {

                if (mouse.buffer2.object.leader &&
                    (side === "right" && defendingPlayer.field.grid[2][1].object || side === "left" && defendingPlayer.field.grid[0][1].object)) {
                    alert("Вы не можете атаковать лидера, когда впереди него стоит герой!");
                    break;
                }

                mouse.buffer2.object.hp -= mouse.buffer1.object.damage;
                if (mouse.buffer2.object.hp <= 0) {
                    defendingPlayer.field.countCards -= 1;
                    mouse.buffer2.object = null;

                    if (checkGameOver()) {
                        alert("Game over!");
                        alert("Restart game?");
                        location.reload();
                    }
                }
                attackingPlayer.actions -= 1;

            } else {
                alert("Вы не можете атаковать!");
            }

            break;
        }

        //move hero
        case 3: {

            if (mouse.buffer1.object.leader) {
                alert("Нельзя перемещать лидера!");
                break;
            }

            else if (attackingPlayer.field.countCards < 9) {
                if ((mouse.buffer1 && mouse.buffer2 && mouse.buffer1.object && !mouse.buffer2.object) &&
                    (mouse.buffer1.location === "grid" && mouse.buffer2.location === "grid") &&
                    (mouse.buffer1.side.toString() === side && mouse.buffer2.side.toString() === side)) {
                    attackingPlayer.actions -= 1;
                    replaceContent();
                    break;
                }
            }
            else {
                alert("Вы не можете переместить героя!");
            }
            break;
        }

        //pass
        case 4: {
            attackingPlayer.actions -= 2;
            break;
        }
    }

    resetBuffer();
    if (attackingPlayer.actions < 1) {
        board.priority = !board.priority;
        attackingPlayer.actions = 2;
        if (board.truceTime > 0) {
            board.truceTime -= 1;
        }
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