const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const mouse = new MouseControls;

function animate() {
    // requestAnimationFrame(animate);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(BACKGROUND, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // console.log(mouse.isDawn + ' - ' + mouse.isPressed);
    board.drawBoard();
    menu.drawMenu();
    mouse.update();
    setTimeout(animate, 1000 / 120);
}