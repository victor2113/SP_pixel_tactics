/*
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
    constructor(hp, damage, vanguardAbilityId, flankAbilityId, rearAbilityId, orderId) {
        this.hp = hp;
        this.damage = damage;
        this.vanguardAbilityId = vanguardAbilityId;
        this.flankAbilityId = flankAbilityId;
        this.rearAbilityId = rearAbilityId;
        this.orderId = orderId;
    }
    constructor(hp, damage, leaderId) {
        this.hp = hp;
        this.damage = damage;
        this.leaderId = leaderId;
    }
}