class Card {
    constructor(hp, damage, name, passive = null,) {
        this.hp = hp;
        this.damage = damage;
        this.passive = passive;
        this.img = new Image();
        this.img.src = "assets/deck/" + name + ".png"
    }
}

class Berserk extends Card {
    constructor() {
        super(8, 3, "berserk", 1);
    }
}

class Stalker extends Card {
    constructor() {
        super(7, 3, "stalker");
    }
}

class Scientist extends Card {
    constructor() {
        super(5, 2, "scientist");
    }
}

class Paladin extends Card {
    constructor() {
        super(6, 4, "paladin", 0);
    }
}

class Shooter extends Card {
    constructor() {
        super(4, 5, "shooter", 0);
    }
}

class Fighter extends Card {
    constructor() {
        super(8, 4, "fighter", 0);
    }
}

class Homunculus extends Card {
    constructor() {
        super(7, 3, "homunculus");
    }
}

class Priestess extends Card {
    constructor() {
        super(7, 1, "priestess", 1);
    }
}

class Vampire extends Card {
    constructor() {
        super(6, 2, "vampire", 1);
    }
}

class Assassin extends Card {
    constructor() {
        super(1, 1, "assassin");
    }
}

class Knight extends Card {
    constructor() {
        super(10, 3, "knight", 2);
    }
}

class Healer extends Card {
    constructor() {
        super(4, 1, "healer", 3);
    }
}

class PriorityCard {
    constructor(path, x) {
        this.img = new Image();
        this.img.src = path;
        this.x = x;
        this.y = CARD_SMALL_Y;
        this.width = CARD_SMALL_WIDTH;
        this.height = CARD_SMALL_HEIGHT;
    }

    drawPriorityCard() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class PriorityFirstCard extends PriorityCard {
    constructor() {
        super("assets/priority cards/cover card first player.png", BEGIN_LEFT_GRID_X);
    }
}

class PrioritySecondCard extends PriorityCard {
    constructor() {
        super("assets/priority cards/cover card second player.png", BEGIN_RIGHT_GRID_X);
    }
}