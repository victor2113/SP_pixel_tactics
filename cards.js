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

class Berserk extends Card {
    constructor() {
            super(8, 3, "P/2/00/1/P/3/00/2", "flankAbilityId", "rearAbilityId", "A/0/X", "berserk"); //NOT FINISHED
        } //Passive or Action/id/heroid/valueIfNeeded
}

class Stalker extends Card {
    constructor() {
        super(7, 3, "P/0/01/P/1/01", "P/1/X/P/1/X", "P/1/01", "A/2/5/X", "stalker");
    }
}

class Scientist extends Card {
    constructor() {
        super(5, 2, "A/17", "A/12/2", "A/0/X", "A/10/3", "scientist");
    }
}

class Paladin extends Card {
    constructor() {
        super(6, 4, "P/0/03", "A/11/X/Y", "A/11/X/Y", "A/18/X", "paladin");
    }
}

class Healer extends Card {
    constructor() {
        super(4, 1, "P/2/04/2", "A/1/4/X", "A/1/2/X/Y/Z", "A/1/10/X", "healer");
    }
}

class Shooter extends Card {
    constructor() {
        super(4, 5, "P/1/05/3/P/3/05/-3", "P/1/05/P/1/X", "P/1/05", "A/2/5/X", "shooter"); //vanguard:2)passive = 3 {герой} {+3 к силе атаки против героев с перехватом}
    }
}

class Fighter extends Card {
    constructor() {
        super(8, 4, "P/0/06", "P/3/06/2", "P/3/06/4", "A/2/5/X", "fighter");
    }
}

class Homunculus extends Card {
    constructor() {
        super(7, 3, "P/0/07/P/3/07/2", "A/6/7/X/07", "", "A/18/X", "homunculus"); //NOT FINISHED
    }
}

class Mascot extends Card {
    constructor() {
        super(4, 1, "A/0/X", "A/0/X", "A/0/X", "A/19/X", "mascot");
    }
}

class Witch extends Card {
    constructor() {
        super(5, 1, "P/3/09/X", "P/3/09/X", "A/15", "A/20", "witch"); //vanguard:passive = 3 {герой} {+1 за каждое тело во всех отрядах}
    }
}

class Huntsman extends Card {
    constructor() {
        super(5, 4, "P/0/10/P/4/10/1", "P/0/X/P/1/X", "A/13/1", "A/13/3", "huntsman"); //vanguard:passive = 0 {герой} и passive = 4 {герой} {дальних}
    }
}

class Lord extends Card {
    constructor() {
        super(7, 3, "P/0/11", "A/0/X", "A/0/X", "_PASS_", "lord"); //NOT FINISHED
    }
}
class Mystic extends Card {
    constructor() {
        super(7, 1, "P/0/12/A/1/X/Y", "P/3/X/2/P/2/X/1", "A/12/1/X", "A/10/3/X", "mystic"); //order:action = 10 {3} Вы можете потратить их на розыгрыш приказов, операций или ловушек.
    }
}

class Pyromancer extends Card {
    constructor() {
        super(3, 3, "A/2/3/X", "P/1/13/P/1/X", "P/1/13", "A/2/7/X", "pyromancer"); //vanguard:action = 2 {3} {каждому герою и лидеру соперника в ближнем бою}
    }
}

class Priestess extends Card {
    constructor() {
        super(7, 1, "A/1/4/X", "A/1/2/X", "A/9/X", "A/9", "priestess");
    }
}

class Dragon_mage extends Card {
    constructor() {
        super(3, 6, "A/5/X", "P/3/X/3", "P/1/15", "_PASS_", "dragon_mage"); //NOT FINISHED
    }
}

class Knight extends Card {
    constructor() {
        super(10, 3, "P/0/12/P/", "P/4/X/Y", "A/6/6/X/16", "A/2/4/X", "knight"); //NOT FINISHED
    }
}

class Illusionist extends Card {
    constructor() {
        super(5, 4, "A/4/X", "A/16", "A/8/X", "_PASS_", "illusionist"); //NOT FINISHED
    }
}

class Vampire extends Card {
    constructor() {
        super(6, 2, "_PASS_", "_PASS_", "A/6/7/X/Y", "A/6/X/Y/Z", "vampire"); //NOT FINISHED
    }
}

class Oracle extends Card {
    constructor() {
        super(4, 22, "A/14", "A/7", "P/5", "_PASS_", "oracle"); //NOT FINISHED
    }
}

class Alchemist extends Card {
    constructor() {
        super(4, 4, "P/0/20/P/2/20/X", "P/2/X/Y", "A/2/1/X", "A/2/7/X", "alchemist"); //vanguard:passive = 0 {герой} и passive = 2 {герой} {2, мин - 1 урон}
    }
}

class Assassin extends Card {
    constructor() {
        super(1, 1, "P/3/21/X", "P/3/21/X", "A/2/3/X", "A/5/X", "assassin"); //vanguard:passive = 3 {герой} {удваивается против лидеров}
    }
}
class Double extends Card {
    constructor() {
        super(5, 5, "A/3", "A/3", "A/3", "A/19/X", "double");
    }
}

class Templar extends Card {
    constructor() {
        super(6, 1, "P/3/23/X", "P/4/23/X", "A/11/23/X/A/0/23", "_PASS_", "templar"); //NOT FINISHED
    }
}

class Summoner extends Card {
    constructor() {
        super(5, 2, "A/4/X", "A/8", "A/12/3/X", "A/21", "summoner");
    }
}

class PriorityFirstCard{
    constructor() {
        this.img = new Image();
        this.img.src = "assets/priority cards/cover card first player.png";
    }
}

class PrioritySecondCard{
    constructor() {
        this.img = new Image();
        this.img.src = "assets/priority cards/cover card second player.png";
    }
}