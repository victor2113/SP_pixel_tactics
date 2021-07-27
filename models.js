/*

модель карты
1) хп
2) урон, который может наносить
3) id эффекта авангарда
4) id эффекта флага
5) id эффекта тыла
6) id эффекта приказа
7) лидер:
хп и урон лидера
id эффекта лидера

*/

class Card {
    constructor(hp, damage, vanguardAbilityId, flankAbilityId, rearAbilityId, orderId, name) {
        this.hp = hp;
        this.damage = damage;
        this.vanguardAbilityId = vanguardAbilityId;
        this.flankAbilityId = flankAbilityId;
        this.rearAbilityId = rearAbilityId;
        this.orderId = orderId;
        this.img = new Image();
        this.img.src = "assets/deck/" + name + ".png"
    }
    // constructor(hp, damage, leaderId) {
    //     this.hp = hp;
    //     this.damage = damage;
    //     this.leaderId = leaderId;
    // }
}


class Container {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.object = null;
    }

    drawContent() {
        if (this.object) {
            ctx.drawImage(this.object.img, this.x, this.y, this.width, this.height)
        }
    }

    drawHoverLight() {

    }

    drawZoom() {

    }
}


class Field {
    constructor(position) {
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        for (let i = 0; i < 3 * (X_SIZE); i += X_SIZE) {
            for (let j = 0; j < 3 * (Y_SIZE); j += Y_SIZE)
                this.grid[i / (X_SIZE)][j / (Y_SIZE)] = new Container(eval("BEGIN_" + position + "_GRID_X") + i, BEGIN_GRID_Y + j, CARD_WIDTH, CARD_HEIGHT)
        }

    }

    drawGrid() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[i][j].drawContent();
            }
        }
    }
}


class Hand {
    constructor() {
        this.hand = []
    }

    add_card(card) {
        this.hand.push(card)
    }

    delete_card(index) {
        if (index >= this.hand.length) {
            this.hand.splice(index, 1);
        }
    }
}


class Deck {
    constructor(cards) {
        this.cards = cards;
    }
    shufleDeck() {
        cards.sort(() => Math.random() - 0.5);
    }
    drawCard() {
        let topcard = this.cards[0];
        this.cards.splice(0, 1);
        return topcard;
    }
}


class Models {
    constructor(name, position) {
        this.position = position;
        this.name = name;
        this.hand = new Hand();
        this.field = new Field(position);
        this.deck = new Deck();
        this.discard = [];
    }
}


class Board {
    constructor(name1, name2) {
        this.player_left = new Models(name1, "LEFT"); //создающий комнату
        this.player_right = new Models(name2, "RIGHT"); //бот или подключенный пользователь
    }

    drawBoard() {
        this.player_left.field.drawGrid();
        this.player_right.field.drawGrid();
    }
}