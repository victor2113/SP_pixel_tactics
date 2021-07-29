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


const mouse = new MouseControls;



function updateContainers() {
    // let selectedCards = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mouse.x >= board.player_left.field.grid[i][j].x &&
                mouse.y >= board.player_left.field.grid[i][j].y &&
                mouse.x <= board.player_left.field.grid[i][j].x + board.player_left.field.grid[i][j].width &&
                mouse.y <= board.player_left.field.grid[i][j].y + board.player_left.field.grid[i][j].height) {
                // console.log('in container' + ' ' + mouse.x, mouse.y);
                board.player_left.field.grid[i][j].isControl = true;
                if (mouse.isDawn) {
                    console.log('container pressed');
                    board.player_left.field.grid[i][j].isPressed = true;
                }
                else if (mouse.isUp && board.player_left.field.grid[i][j].isPressed) {
                    board.player_left.field.grid[i][j].isPressed = false;
                    board.player_left.field.grid[i][j].isSelected = !board.player_left.field.grid[i][j].isSelected;
                    // selectedCards.push(board.player_left.field.grid[i][j]);
                    // console.log(selectedCards);
                }
            }
            else {
                // console.log('out container');
                board.player_left.field.grid[i][j].isControl = false;
            }
        }
    }
}

requestAnimationFrame(animate);
function animate() {
    requestAnimationFrame(animate);

    // console.log(mouse.isDawn + ' - ' + mouse.isPressed);
    board.drawBoard();
    updateContainers();
    mouse.update();
}



