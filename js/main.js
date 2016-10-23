//Test that Pixi is working
console.log("Welcome to Cheeky Demons.");



//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;


//Variables
var windowWidth,
    windowHeight;

//Create the renderer
var renderer = autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
renderer.resize(window.innerWidth, window.innerHeight);

//Create a container object called the `stage`
var stage = new Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

