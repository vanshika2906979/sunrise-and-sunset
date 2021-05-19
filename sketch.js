const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ="sunrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg){
    backgroundImg(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here
 

}

async function getBackgroundImg(){

    // write code to fetch time from API
 var response= await fetch(https://worldtimeapi.org/api/timezone/Asia/Kolkata)


    //change the data in JSON format
    var responseJson= await response.json()
    console.log(hour)
 

    // write code slice the datetime
     var datetime = responseJson.datetime
     var hour = datetime.slice(11,13)
     console.log ("Time",reponseJson)


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=06&&hour<=08){
        bg ="sunrise2.png"
    }
    else if(hour>=08&&hour<=010){
        bg ="sunrise3.png"
    }
    else if(hour>=010&&hour<=012){
        bg ="sunrise4.png"
    }
    else if(hour>=012&&hour<=014){
        bg ="sunrise5.png"
    }
    else if(hour>=014&&hour<=016){
        bg ="sunrise6.png"
    }
    else if(hour>=016&&hour<=018){
        bg ="sunrise7.png"
    }
    else if(hour>=018&&hour<=020){
        bg ="sunrise8.png"
    }
    else if(hour>=020&&hour<=022){
        bg ="sunrise2.png"
    }
    else if(hour>=022&&hour<=024){
        bg ="sunrise2.png"
    }
    else if(hour>=00&&hour<=03){
        bg ="sunrise2.png"
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    
