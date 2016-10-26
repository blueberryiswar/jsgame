//Test that Pixi is working
console.log("Welcome to Cheeky Demons. <3");



//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;


//Variables
var viewWidth,
    viewHeight;

//Create the stage and renderer
var stage = new Container(),
    renderer = autoDetectRenderer(1024, 960, {antialias: false, transparent: false, resolution: 1});
document.body.appendChild(renderer.view);

renderer.view.style.position = "relative";
renderer.view.style.marginLeft = "auto";
renderer.view.style.marginRight = "auto";
renderer.view.style.marginTop = "10px";
renderer.view.style.display = "block";
//renderer.autoResize = true;
//resizeStage();


//load an image and run the `setup` function when it's done
loader
    .add([
        {
            name: 'hero',
            url: "img/hero.json",
            onComplete: function () {}
        },
        {
            name: 'grassland',
            url: "img/tile_grassland.json",
            onComplete: function () {}
        }
    ])
    .on("progress", loadProgressHandler)
    .load(setup);


function resizeStage() {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
    renderer.resize(window.innerWidth, window.innerHeight);
}

/*window.addEventListener("resize", function () {
    if (viewWidth != window.innerWidth || viewHeight != window.innerHeight) {
        resizeStage();
    }
});*/

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../maps/map1.json', false); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function loadProgressHandler(loader, resource) {
    //Display the file `url` currently being loaded
    console.log("loading: " + resource.url);

    //Display the precentage of files currently loaded
    console.log("progress: " + loader.progress + "%");

    //If you gave your files names as the first argument
    //of the `add` method, you can access them like this
    //console.log("loading: " + resource.name);
}

var hero;
var mapJSON;

var jsonM ='{"tiles": {"a"  : [ "grass1", "grass1", "grass1", "grass2", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"b"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"c"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass2", "grass1", "grass1" ],"d"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass3", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"e"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass3", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"f"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"g"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"h"  : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass2", "grass1", "grass1" ],"i"  : [ "grass1", "grass1", "grass1", "grass2", "grass1", "grass1", "grass1", "grass1", "grass1", "grass3", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"j" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass2", "grass1" ],"k" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass2", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"l" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass2", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"m" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"n" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass3", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"o" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ],"p" : [ "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1", "grass1" ]}, "config": {"tile_width": 32,"tile_height": 32,"width": 14,"height": 16}}'
mapJSON = JSON.parse(jsonM);

console.log(mapJSON);

function setup() {
    console.log("All files loaded");
    //Create the `tileset` sprite from the texture
    //var heroSpriteSheet = PIXI.TextureCache['img/hero.png'];

    //var rectangle = new PIXI.Rectangle(35,41,36,42);
    //heroSpriteSheet.frame = rectangle;

    //var hero = new Sprite(heroSpriteSheet);

    /*
    var hero1 = new Sprite(
        resources["hero"].textures["heroFront1"]
    );
    var hero2 = new Sprite(
        resources["hero"].textures["heroFront2"]
    );
    var hero3 = new Sprite(
        resources["hero"].textures["heroFront3"]
    );
    var hero = [hero1, hero2, hero3];
    */

    //loadJSON(function(response) {
        // Parse JSON string into object
       //mapJSON = JSON.parse(response);
    //});

    mapGenerator();



    hero = new Sprite(
        resources["hero"].textures["heroFront1"]
    );
    hero.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    var scale = 2;
    hero.scale.x = scale;
    hero.scale.y = scale;


    // Change initial position
    hero.x = stage.width / 2;
    hero.y = stage.height / 2;

    hero.vx = 3;
    hero.vy = 3;

    //hero.pivot.set(hero.width/2, hero.height/2)
    //hero.rotation = 0.5;
    // Add the hero to the stage
    stage.addChild(hero);
    //Set the game state
    state = play;

    gameLoop();
}

function mapGenerator() {
    var tile;
    var line = 1;
    var scale = 2;
    var height = mapJSON.config.tile_height * scale;
    var width = mapJSON.config.tile_width * scale;
    var positionX = 0;
    var positionY = 0;
    var array = [];

    while (line < mapJSON.config.height) {
        if (line === 1) {
            array = mapJSON.tiles.a;
        } else if (line == 2) {
            array = mapJSON.tiles.b;
        } else if (line == 3) {
            array = mapJSON.tiles.c;
        } else if (line == 4) {
            array = mapJSON.tiles.d;
        } else if (line == 5) {
            array = mapJSON.tiles.e;
        } else if (line == 6) {
            array = mapJSON.tiles.f;
        } else if (line == 7) {
            array = mapJSON.tiles.g;
        } else if (line == 8) {
            array = mapJSON.tiles.h;
        } else if (line == 9) {
            array = mapJSON.tiles.i;
        } else if (line == 10) {
            array = mapJSON.tiles.j;
        } else if (line == 11) {
            array = mapJSON.tiles.k;
        } else if (line == 12) {
            array = mapJSON.tiles.m;
        } else if (line == 13) {
            array = mapJSON.tiles.n;
        } else if (line == 14) {
            array = mapJSON.tiles.o;
        } else if (line == 15) {
            array = mapJSON.tiles.p;
        }

        for (var i = 0; i < array.length; i++) {
            tile = new Sprite(resources["grassland"].textures[array[i]]);
            tile.x = positionX;
            tile.y = positionY;
            tile.scale.x = scale;
            tile.scale.y = scale;
            stage.addChild(tile);
            positionX += width;
        }
        line += 1;
        positionY += height;
        positionX = 0;
    }
    tile.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
}

function gameLoop() {

    //Loop this function at 60 frames per second
    requestAnimationFrame(gameLoop);

    //Move the cat 1 pixel to the right each frame
    state();

    //Render the stage to see the animation
    renderer.render(stage);
}

function play() {
    hero.y += hero.vy * moveY;
    hero.x += hero.vx * moveX;
}