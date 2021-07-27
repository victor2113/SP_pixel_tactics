let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

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





