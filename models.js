function checkMouseCollision(x, y, w, h, posX, posY) {
    return (x < posX && (x + w) > posX && y < posY && (y + h) > posY);
}


class Menu {
    constructor() {
        this.actions = [
            {title: "Взять карту", y: 0},
            {title: "Разыграть героя", y: 0},
            {title: "Провести атаку", y: 0},
            {title: "Переместить героя", y: 0},
            {title: "Пас", y: 0}
        ];
        this.index = [1, 2, 3, 4, 5];
        for (let i = 0; i < 5; i++) {
            this.actions[i].y = this.index[i] * 40;
        }

        this.x = CANVAS_WIDTH - 340;
        this.width = 340;
        this.height = 40;
    }

    drawMenu() {
        ctx.font = "32px cursive";
        ctx.textAlign = "right";

        for (let i = 0; i < 5; i++) {
            if (checkMouseCollision(this.x, this.actions[i].y - 40, this.width, this.height, mouse.x, mouse.y)) {
                if (mouse.isUp) {
                    listenAction(i);
                }
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
        this.isDown = false;
        this.isUp = false;

        this.underControl = false;
        this.buffer1 = null;
        this.buffer2 = null;

        container.addEventListener('mouseup', event => this.changeState(event));
        container.addEventListener('mousedown', event => this.changeState(event));
        container.addEventListener('mousemove', event => this.changeState(event));
        container.addEventListener('mousewheel', event => this.changeState(event));
        container.addEventListener('mouseleave', event => this.changeState(event));
        container.addEventListener('contextmenu', event => this.changeState(event));
    }

    changeState(event) {
        this.x = event.offsetX;
        this.y = event.offsetY;

        if (event.type === 'mousedown') {
            this.isPressed = true;
            this.isDown = true;
            this.isUp = false;
        } else if (event.type === 'mouseup' || event.type === 'mouseleave') {
            this.isPressed = false;
            this.isDown = false;
            this.isUp = true;
        } else if (event.type === 'contextmenu' || event.type === 'mousewheel') {
            event.preventDefault();
        }
    }

    update() {
        this.isDown = false;
        this.isUp = false;
    }
}


class Container {
    constructor(x, y, width, height, side, object = null, location = "grid") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.object = object;
        this.location = location;
        this.side = side;

        this.isControl = false;
        this.isPressed = false;
        this.isSelected = false;

        this.firstColor = '#ffba2c';
        this.secondColor = '#0000ff';
        this.thirdColor = '#ff0000';
    }

    drawContent() {
        this.Hover();
        if (this.object) {
            ctx.drawImage(this.object.img, this.x, this.y, this.width, this.height);
            ctx.font = "10px Verdana";
            ctx.fillStyle = "white";
            ctx.strokeStyle = "green";
            ctx.strokeText(this.object.hp, this.x + this.width * 0.34, this.y + this.height * 0.884, this.width / 12);
            ctx.fillText(this.object.hp, this.x + this.width * 0.34, this.y + this.height * 0.884, this.width / 12);
            ctx.strokeStyle = "#c11717";
            ctx.strokeText(this.object.damage, this.x + this.width * 0.58, this.y + this.height * 0.884, this.width / 12);
            ctx.fillText(this.object.damage, this.x + this.width * 0.58, this.y + this.height * 0.884, this.width / 12);
        }
    }

    Hover() {
        ctx.lineWidth = 3;
        if (checkMouseCollision(this.x, this.y, this.width, this.height, mouse.x, mouse.y)) {
            this.drawZoom();
            this.isControl = true;
            this.selectedState();
        } else {
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

    selectedState() {
        if (mouse.isDown) {
            this.isPressed = true;
        } else if (this.isPressed && mouse.isUp) {
            this.isPressed = false;
            if (!this.isSelected) {
                this.isSelected = true;
                mouse.underControl = true;
                if (!mouse.buffer1) {
                    mouse.buffer1 = this;
                } else if (!mouse.buffer2) {
                    mouse.buffer2 = this;
                }
                console.log(mouse);
            } else {
                this.isSelected = false;
                mouse.underControl = false;
            }
        }
    }

    drawZoom() {
        if (this.object) {
            ctx.drawImage(this.object.img, ZOOM_CARD_X, ZOOM_CARD_Y, ZOOM_CARD_WIDTH, ZOOM_CARD_HEIGHT);
            ctx.font = "32px serif";
            ctx.fillStyle = "white";
            ctx.strokeStyle = "green";
            ctx.strokeText(this.object.hp, ZOOM_CARD_X + 97, ZOOM_CARD_Y + ZOOM_CARD_HEIGHT - 50, 20);
            ctx.fillText(this.object.hp, ZOOM_CARD_X + 97, ZOOM_CARD_Y + ZOOM_CARD_HEIGHT - 50, 20);
            ctx.strokeStyle = "#c11717";
            ctx.strokeText(this.object.damage, ZOOM_CARD_X + 165, ZOOM_CARD_Y + ZOOM_CARD_HEIGHT - 50, 20);
            ctx.fillText(this.object.damage, ZOOM_CARD_X + 165, ZOOM_CARD_Y + ZOOM_CARD_HEIGHT - 50, 20);
        }
    }
}


class Field {
    constructor(side) {
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.countCards = 1;

        for (let i = 0; i < 3 * (X_SIZE); i += X_SIZE) {
            for (let j = 0; j < 3 * (Y_SIZE); j += Y_SIZE)
                this.grid[i / (X_SIZE)][j / (Y_SIZE)] = new Container(eval("BEGIN_" + side + "_GRID_X") + i, BEGIN_GRID_Y + j, CARD_WIDTH, CARD_HEIGHT, side)
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
    constructor(side) {
        this.hand = [];
        this.x = 0;
        this.side = side;
    }

    add_card(card) {
        for (let i = 0; i < card.length; i++) {
            this.hand.push(new Container(0, CANVAS_HEIGHT - 95, CARD_SMALL_WIDTH, CARD_SMALL_HEIGHT, this.side, card[i], "hand"));
        }
    }

    drawHand() {
        this.x = CANVAS_WIDTH / 2 - (this.hand.length * (CARD_SMALL_WIDTH + GRID_MARGIN)) / 2 - 7;

        for (let i = 0; i < this.hand.length * X_SIZE_SMALL; i += X_SIZE_SMALL) {
            if (!this.hand[i / X_SIZE_SMALL].object) {
                this.hand.splice(i / X_SIZE_SMALL, 1);
                break
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
            new Berserk(),
            new Stalker(),
            new Scientist(),
            new Paladin(),
            new Shooter(),
            new Fighter(),
            new Homunculus(),
            new Priestess(),
            new Vampire(),
            new Assassin(),
        ];
    }

    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5);
    }
}


class Player {
    constructor(name, side) {
        this.name = name;
        this.hand = new Hand(side);
        this.field = new Field(side);
        this.deck = new Deck();
        this.actions = 2;
        this.side = side;
    }

    drawActions(){
        ctx.font = "50px cursive";
        if (this.side === "left"){
            ctx.fillStyle = "#de1e1e";
            ctx.strokeStyle = "#000000";
            ctx.strokeText(this.actions.toString(), 451, CANVAS_HEIGHT - 35);
            ctx.fillText(this.actions.toString(), 451, CANVAS_HEIGHT - 35);
        }
        if (this.side === "right"){
            ctx.fillStyle = "#236ce0";
            ctx.strokeStyle = "#000000";
            ctx.strokeText(this.actions.toString(), 873, CANVAS_HEIGHT - 35);
            ctx.fillText(this.actions.toString(), 873, CANVAS_HEIGHT - 35);
        }
    }
}


class Board {
    constructor(name1, name2) {
        this.menu = new Menu();
        this.player_left = new Player(name1, "left");
        this.player_right = new Player(name2, "right");
        this.priority = Math.random() < 0.5; //true => left player
        this.priorityCards = [
            new PriorityFirstCard(),
            new PrioritySecondCard()
        ];
    }

    drawBoard() {
        this.menu.drawMenu();

        ctx.textAlign = "left";
        ctx.font = "50px cursive";
        ctx.strokeStyle = "rgba(2,0,0,0.6)";
        ctx.fillStyle = "#de1e1e";
        ctx.fillText(this.player_left.name, BEGIN_left_GRID_X + 60, BEGIN_GRID_Y - 20);
        ctx.fillStyle = "#236ce0";
        ctx.fillText(this.player_right.name, BEGIN_right_GRID_X + 60, BEGIN_GRID_Y - 20);

        if (this.priority) {
            ctx.strokeText(this.player_left.name, BEGIN_left_GRID_X + 60, BEGIN_GRID_Y - 20);
            this.player_left.hand.drawHand();
            this.priorityCards[0].x = BEGIN_left_GRID_X;
            this.priorityCards[1].x = BEGIN_right_GRID_X;
            this.player_left.drawActions();

        } else {
            ctx.strokeText(this.player_right.name, BEGIN_right_GRID_X + 60, BEGIN_GRID_Y - 20);
            this.player_right.hand.drawHand();
            this.priorityCards[0].x = BEGIN_right_GRID_X;
            this.priorityCards[1].x = BEGIN_left_GRID_X;
            this.player_right.drawActions();
        }

        this.priorityCards[0].drawPriorityCard();
        this.priorityCards[1].drawPriorityCard();

        this.player_left.field.drawGrid();
        this.player_right.field.drawGrid();
    }
}