function keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = function(event) {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = function(event) {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}


var moveX = 0;
var moveY = 0;

var moveUp = keyboard(87);
var moveDown = keyboard(83);
var moveLeft = keyboard(65);
var moveRight = keyboard(68);

moveUp.press = function () {
    moveY = -1;
};
moveUp.release = function () {
    if (!moveDown.isDown) {
        moveY = 0;
    }
};

moveDown.press = function () {
    moveY = 1;
};
moveDown.release = function () {
    if (!moveUp.isDown) {
        moveY = 0;
    }
};

moveLeft.press = function () {
    moveX = -1;
};
moveLeft.release = function () {
    if (!moveRight.isDown) {
        moveX = 0;
    }
};

moveRight.press = function () {
    moveX = 1;
};
moveRight.release = function () {
    if (!moveLeft.isDown) {
        moveX = 0;
    }
};