const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const mouse = new MouseControls;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(BACKGROUND, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.drawImage(RED_CARD, BEGIN_LEFT_GRID_X, CANVAS_HEIGHT - 95, CARD_SMALL_WIDTH, CARD_SMALL_HEIGHT);
    ctx.drawImage(BLUE_CARD, CANVAS_WIDTH - 395, CANVAS_HEIGHT - 95, CARD_SMALL_WIDTH, CARD_SMALL_HEIGHT);

    // console.log(mouse.isDawn + ' - ' + mouse.isPressed);
    board.drawBoard();
    mouse.update();
}