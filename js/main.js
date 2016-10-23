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
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
resizeStage();


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
            url: "img/tile_grassland.png",
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
    hero = new Sprite(
        resources["hero"].textures["heroFront1"]
    );



    // Change initial position
    hero.x = viewWidth / 2;
    hero.y = viewHeight / 2;

    //hero.pivot.set(hero.width/2, hero.height/2)
    //hero.rotation = 0.5;
    // Add the hero to the stage
    stage.addChild(hero);

    // Render the stage
    renderer.render(stage);
}

function gameLoop() {

    //Loop this function at 60 frames per second
    requestAnimationFrame(gameLoop);

    //Move the cat 1 pixel to the right each frame
    hero.y += 1;

    //Render the stage to see the animation
    renderer.render(stage);
}

gameLoop();