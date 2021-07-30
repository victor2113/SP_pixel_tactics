function checkMouseCollision(x, y, w, h, posX, posY) {
    return (x < posX && (x + w) > posX && y < posY && (y + h) > posY);
}

class Menu {
    constructor() {
        this.actions = [
            {title: "Взять карту из колоды", y: 0},
            {title: "Разыграть карту", y: 0},
            {title: "Атака", y: 0},
            {title: "Заклинание", y: 0},
            {title: "Приказ", y: 0},
            {title: "Убрать тело", y: 0},
            {title: "Передвинуть карту", y: 0},
            {title: "Рокировка", y: 0},
            {title: "Пас", y: 0}
        ];
        this.index = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 9; i++) {
            this.actions[i].y = this.index[i] * 40;
        }

        this.x = CANVAS_WIDTH - 340;
        this.width = 340;
        this.height = 40;
    }

    drawMenu() {
        ctx.font = "32px Verdana";
        ctx.textAlign = "right";
        for (let i = 0; i < 9; i++) {
            if (checkMouseCollision(this.x, this.actions[i].y - 40, this.width, this.height, mouse.x, mouse.y)) {
                ctx.fillStyle = "#f59a9a";

            } else {
                ctx.fillStyle = "rgba(255,255,255,0.4)";
            }
            ctx.fillText(this.actions[i].title, CANVAS_WIDTH - 5, this.actions[i].y, this.width);
        }
    }
}

class MouseControls {
    constructor(container = document.body) {
        this.container = container;

        this.x = 0;
        this.y = 0;

        this.isPressed = false;
        this.isDawn = false;
        this.isUp = false;

        container.addEventListener('mouseup', event => this.changeState(event));
        container.addEventListener('mousedown', event => this.changeState(event));
        container.addEventListener('mousemove', event => this.changeState(event));
        container.addEventListener('mousewheel', event => this.changeState(event));
        container.addEventListener('mouseleave', event => this.changeState(event));
        container.addEventListener('contextmenu', event => this.changeState(event));
    }

    changeState(event) {
        // console.log(event.type);

        this.x = event.offsetX;
        this.y = event.offsetY;

        if (event.type === 'mousedown') {
            this.isPressed = true;
            this.isDawn = true;
            this.isUp = false;
        } else if (event.type === 'mouseup' || event.type === 'mouseleave') {
            this.isPressed = false;
            this.isDawn = false;
            this.isUp = true;
        } else if (event.type === 'contextmenu' || event.type === 'mousewheel') {
            event.preventDefault();
        }
    }

    update() {
        this.isDawn = false;
        this.isUp = false;
    }
}


class Container {
    constructor(x, y, width, height, object = null) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.object = object;

        this.isControl = false;
        this.isPressed = false;
        this.isSelected = false;

        this.firstColor = '#00ff00';
        this.secondColor = '#0000ff';
        this.thirdColor = '#ff0000';
    }

    drawContent() {
        this.Hover();
        if (this.object)
            ctx.drawImage(this.object.img, this.x, this.y, this.width, this.height);
    }

    Hover() {
        ctx.lineWidth = 3;
        if (checkMouseCollision(this.x, this.y, this.width, this.height, mouse.x, mouse.y)) {
            this.drawZoom();
            this.isControl = true;
            if (mouse.isDawn) {
                console.log('container pressed');
                this.isPressed = true;

            } else if (this.isPressed && mouse.isUp) {
                this.isPressed = false;
                this.isSelected = !this.isSelected;
                // console.log(selectedCards);
            }

        } else {
            // console.log('out container');
            this.isControl = false;
        }

        if (this.isSelected)
            ctx.strokeStyle = this.thirdColor;

        else
            ctx.strokeStyle = this.firstColor;

        if (this.isControl)
            ctx.strokeStyle = this.secondColor;

        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    drawZoom() {
        if (this.object)
            ctx.drawImage(this.object.img, ZOOM_CARD_X, ZOOM_CARD_Y, ZOOM_CARD_WIDTH, ZOOM_CARD_HEIGHT);
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
        this.hand = [];
        this.x = 0;
    }

    add_card(card) {
        for (let i = 0; i < card.length; i++) {
            this.hand.push(new Container(0, CANVAS_HEIGHT - 95, CARD_SMALL_WIDTH, CARD_SMALL_HEIGHT, card[i]));
        }
    }

    delete_card(index) {
        if (index >= this.hand.length) {
            this.hand.splice(index, 1);
        }
    }

    drawHand() {
        this.x = CANVAS_WIDTH / 2 - (this.hand.length * (CARD_SMALL_WIDTH + GRID_MARGIN)) / 2 - 7;

        for (let i = 0; i < this.hand.length * X_SIZE_SMALL; i += X_SIZE_SMALL) {
            if (!this.hand[i / X_SIZE_SMALL].object) {
                this.hand.splice(this.hand[i / X_SIZE_SMALL], 1);
            }
            this.hand[i / X_SIZE_SMALL].x = this.x + i;
        }

        for (let i = 0; i < this.hand.length; i++) {
            this.hand[i].drawContent();
        }
    }
}


class Deck {
    constructor() {
        this.cards = [
            new Berserk(), //00
            new Stalker(), //01
            new Scientist(), //02
            new Paladin(), //03
            new Healer(), //04
            new Shooter(), //05
            new Fighter(), //06
            new Homunculus(), //07
            new Mascot(), //08
            new Witch(), //09
            new Huntsman(), //10
            new Lord(), //11
            new Mystic(), //12
            new Pyromancer(), //13
            new Priestess(), //14
            new Dragon_mage(), //15
            new Knight(), //16
            new Illusionist(), //17
            new Vampire(), //18
            new Oracle(), //19
            new Alchemist(), //20
            new Assassin(), //21
            new Double(), //22
            new Templar(), //23
            new Summoner(), //24
        ];
    }

    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    drawCard() {
        let topCard = this.cards[0];
        this.cards.splice(0, 1);
        return topCard;
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
        this.actions = 2;
    }
}


class Board {
    constructor(name1, name2) {
        this.player_left = new Player(name1, "LEFT");
        this.player_right = new Player(name2, "RIGHT");
        this.priority = Math.random() < 0.5; //true => left player

        this.priorityCards = [
            new PriorityFirstCard(),
            new PrioritySecondCard()
        ];
    }

    drawBoard() {
        this.player_left.field.drawGrid();
        this.player_right.field.drawGrid();

        if (this.priority) {
            this.player_left.hand.drawHand();
        } else {
            this.player_right.hand.drawHand();
        }

        if (this.priority) {
            this.priorityCards[0].x = BEGIN_LEFT_GRID_X;
            this.priorityCards[1].x = BEGIN_RIGHT_GRID_X;

        } else {
            this.priorityCards[0].x = BEGIN_RIGHT_GRID_X;
            this.priorityCards[1].x = BEGIN_LEFT_GRID_X;
        }
        this.priorityCards[0].drawPriorityCard();
        this.priorityCards[1].drawPriorityCard();
    }
}