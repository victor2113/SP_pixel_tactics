let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let background = new Image();
background.src = GAME_BACKGROUND;

ctx.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

let card = new Image()
card.src = "assets/deck/berserk.png"

for (let i = 0; i < 3 * (GRID_MARGIN + CARD_WIDTH); i += GRID_MARGIN + CARD_WIDTH) {
    for (let j = 0; j < 3 * (GRID_MARGIN + CARD_HEIGHT); j += GRID_MARGIN + CARD_HEIGHT)
        ctx.drawImage(card, BEGIN_RIGHT_GRID_X + i, BEGIN_GRID_Y + j, CARD_WIDTH, CARD_HEIGHT);
}

for (let i = 0; i < 3 * (GRID_MARGIN + CARD_WIDTH); i += GRID_MARGIN + CARD_WIDTH) {
    for (let j = 0; j < 3 * (GRID_MARGIN + CARD_HEIGHT); j += GRID_MARGIN + CARD_HEIGHT)
        ctx.drawImage(card, BEGIN_LEFT_GRID_X + i, BEGIN_GRID_Y + j, CARD_WIDTH, CARD_HEIGHT);
}


