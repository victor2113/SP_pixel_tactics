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
        this.grid = [[null, null, null], [null, null, null], [null, null, null]];

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
    constructor() {
        //TODO
    }
}


class Player {
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
        this.player_left = new Player(name1, "LEFT"); //создающий комнату
        this.player_right = new Player(name2, "RIGHT");//бот или подключенный пользователь
    }

    drawBoard() {
        this.player_left.field.drawGrid();
        this.player_right.field.drawGrid();
    }
}