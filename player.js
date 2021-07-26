class Field {
    constructor() {
        this.grid = [[null, null, null], [null, null, null], [null, null, null]];
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
        if (index >= this.hand.length){
            this.hand.splice(index, 1);
        }
    }
}

class Deck{
    constructor() {
    }
}

class player {
    constructor(name, position) {
        this.position = position;
        this.name = name;
        this.hand = new Hand();
        this.field = new Field();
        this.deck = new Deck();
        this.discard = [];
    }
}

class Board {
    constructor(name1, name2) {
        this.player_left = new player(name1, "left"); //создающий комнату
        this.player_right = new player(name2, "right");//бот или подключенный пользователь
    }
}