const CANVAS_WIDTH = 1370;
const CANVAS_HEIGHT = 628;

const CARD_WIDTH = 92;
const CARD_HEIGHT = 138;

const CARD_SMALL_WIDTH = 55;
const CARD_SMALL_HEIGHT = 82;
const CARD_SMALL_Y = 10;

const BACKGROUND = new Image();
BACKGROUND.src = "assets/background.png";

const RED_CARD = new Image();
RED_CARD.src = "assets/player covers/red.png";

const BLUE_CARD = new Image();
BLUE_CARD.src = "assets/player covers/blue.png";

const BEGIN_GRID_Y = 100;
const BEGIN_left_GRID_X = 325;
const BEGIN_right_GRID_X = 743;
const GRID_MARGIN = 5;

const ZOOM_CARD_X = 30;
const ZOOM_CARD_Y = BEGIN_GRID_Y + GRID_MARGIN;
const ZOOM_CARD_WIDTH = CARD_WIDTH * 3;
const ZOOM_CARD_HEIGHT = CARD_HEIGHT * 3;

const X_SIZE = CARD_WIDTH + GRID_MARGIN
const Y_SIZE = CARD_HEIGHT + GRID_MARGIN

const X_SIZE_SMALL = CARD_SMALL_WIDTH + GRID_MARGIN;