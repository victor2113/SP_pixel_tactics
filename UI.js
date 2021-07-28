const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let background = new Image();
background.src = GAME_BACKGROUND;

ctx.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

board = new Board("a", "b");

//tests
board.player_left.field.grid[1][1].object = new Berserk();
board.player_right.field.grid[1][2].object = new Stalker();
board.player_right.field.grid[2][2].object = new Dragon_mage();
board.player_left.field.grid[0][0].object = new Homunculus();

board.drawBoard();

class MouseControls {
    constructor(container = document.body) {
        this.container = container;

        this.x = 0;
        this.y = 0;

        this.isPressed = false;
        this.isDawn = false;
        this.isUp = false;

        container.addEventListener('mouseup',     event => this.changeState(event));
        container.addEventListener('mousedown',   event => this.changeState(event));
        container.addEventListener('mousemove',   event => this.changeState(event));
        container.addEventListener('mousewheel',  event => this.changeState(event));
        container.addEventListener('mouseleave',  event => this.changeState(event));
        container.addEventListener('contextmenu', event => this.changeState(event));
    }

    changeState(event) {
        // console.log(event.type);

        this.x = event.clientX;
        this.y = event.clientY;

        if (event.type === 'mousedown') {
            this.isPressed = true;
            this.isDawn = true;
            this.isUp = false;
        }
        else if (event.type === 'mouseup') {
            this.isPressed = false;
            this.isDawn = false;
            this.isUp = true;
        }
    }

    update() {
        this.isDawn = false;
        this.isUp = false;
    }
}

const mouse = new MouseControls;

requestAnimationFrame(animate);
function animate() {
    requestAnimationFrame(animate);

    console.log(mouse.isDawn + ' - ' + mouse.isPressed);

    mouse.update();
}



