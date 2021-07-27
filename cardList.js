class berserk extends Card {
    constructor() {
            super(8, 3, "P/2/00/1/P/3/00/2", "flankAbilityId", "rearAbilityId", "A/0/X"); //NOT FINISHED
        } //Passive or Action/id/heroid/valueIfNeeded
}

class stalker extends Card {
    constructor() {
        super(7, 3, "P/0/01/P/1/01", "P/1/X/P/1/X", "P/1/01", "A/2/5/X");
    }
}

class scientist extends Card {
    constructor() {
        super(5, 2, "A/17", "A/12/2", "A/0/X", "A/10/3");
    }
}

class paladin extends Card {
    constructor() {
        super(6, 4, "P/0/03", "A/11/X/Y", "A/11/X/Y", "A/18/X");
    }
}

class healer extends Card {
    constructor() {
        super(4, 1, "P/2/04/2", "A/1/4/X", "A/1/2/X/Y/Z", "A/1/10/X");
    }
}

class gunner extends Card {
    constructor() {
        super(4, 5, "P/1/05/3/P/3/05/-3", "P/1/05/P/1/X", "P/1/05", "A/2/5/X"); //avangard:2)passive = 3 {герой} {+3 к силе атаки против героев с перехватом}
    }
}

class warrior extends Card {
    constructor() {
        super(8, 4, "P/0/06", "P/3/06/2", "P/3/06/4", "A/2/5/X");
    }
}

class homunculus extends Card {
    constructor() {
        super(7, 3, "P/0/07/P/3/07/2", "A/6/7/X/07", "", "A/18/X"); //NOT FINISHED
    }
}

class talisman extends Card {
    constructor() {
        super(4, 1, "A/0/X", "A/0/X", "A/0/X", "A/19/X");
    }
}

class witch extends Card {
    constructor() {
        super(5, 1, "P/3/09/X", "P/3/09/X", "A/15", "A/20"); //avangard:passive = 3 {герой} {+1 за каждое тело во всех отрядах}
    }
}

class huntsman extends Card {
    constructor() {
        super(5, 4, "P/0/10/P/4/10/1", "P/0/X/P/1/X", "A/13/1", "A/13/3"); //avangard:passive = 0 {герой} и passive = 4 {герой} {дальних}
    }
}

class lord extends Card {
    constructor() {
        super(7, 3, "P/0/11", "A/0/X", "A/0/X", orderId); //NOT FINISHED
    }
}
class mystic extends Card {
    constructor() {
        super(7, 1, "P/0/12/A/1/X/Y", "P/3/X/2/P/2/X/1", "A/12/1/X", "A/10/3/X"); //order:action = 10 {3} Вы можете потратить их на розыгрыш приказов, операций или ловушек.
    }
}

class pyromancer extends Card {
    constructor() {
        super(3, 3, "A/2/3/X", "P/1/13/P/1/X", "P/1/13", "A/2/7/X"); //avangard:action = 2 {3} {каждому герою и лидеру соперника в ближнем бою}
    }
}

class priest extends Card {
    constructor() {
        super(7, 1, "A/1/4/X", "A/1/2/X", "A/9/X", "A/9");
    }
}

class dragon_mage extends Card {
    constructor() {
        super(3, 6, "A/5/X", "P/3/X/3", "P/1/15", orderId); //NOT FINISHED
    }
}

class knight extends Card {
    constructor() {
        super(10, 3, "P/0/12/P/", "P/4/X/Y", "A/6/6/X/16", "A/2/4/X"); //NOT FINISHED
    }
}

class illusionist extends Card {
    constructor() {
        super(5, 4, "A/4/X", "A/16", "A/8/X", orderId); //NOT FINISHED
    }
}

class vampire extends Card {
    constructor() {
        super(6, 2, vanguardAbilityId, flankAbilityId, "A/6/7/X/Y", "A/6/X/Y/Z"); //NOT FINISHED
    }
}

class oracle extends Card {
    constructor() {
        super(4, 22, "A/14", "A/7", "P/5", orderId); //NOT FINISHED
    }
}

class alchemist extends Card {
    constructor() {
        super(4, 4, "P/0/20/P/2/20/X", "P/2/X/Y", "A/2/1/X", "A/2/7/X"); //avangard:passive = 0 {герой} и passive = 2 {герой} {2, мин - 1 урон}
    }
}

class assassin extends Card {
    constructor() {
        super(1, 1, "P/3/21/X", "P/3/21/X", "A/2/3/X", "A/5/X"); //avangard:passive = 3 {герой} {удваивается против лидеров}
    }
}
class double extends Card {
    constructor() {
        super(5, 5, "A/3", "A/3", "A/3", "A/19/X");
    }
}

class templar extends Card {
    constructor() {
        super(6, 1, "P/3/23/X", "P/4/23/X", "A/11/23/X/A/0/23", orderId); //NOT FINISHED
    }
}

class summoner extends Card {
    constructor() {
        super(5, 2, "A/4/X", "A/8", "A/12/3/X", "A/21");
    }
}



cards = [
    new berserk(), //00
    new stalker(), //01
    new scientist(), //02
    new paladin(), //03
    new healer(), //04
    new gunner(), //05
    new warrior(), //06
    new homunculus(), //07
    new talisman(), //08
    new witch(), //09
    new huntsman(), //10
    new lord(), //11
    new mystic(), //12
    new pyromancer(), //13
    new priest(), //14
    new dragon_mage(), //15
    new knight(), //16
    new illusionist(), //17
    new vampire(), //18
    new oracle(), //19
    new alchemist(), //20
    new assassin(), //21
    new double(), //22
    new templar(), //23
    new summoner(), //24
];