//Create variables here
var dogimg,happyDogimg,dog;
var database;
var food,foodStock;
var foodStockref;
    
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  happyDogimg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStockRef  = database.ref('food');
  foodStockRef.on("value",function(data){
       food = data.val();
       console.log(food);
    })
    
  dog = createSprite(250 ,250);
  dog.addImage("dog", dogimg);
 
  dog.scale = 0.4
}


function draw() {  
background (46, 139, 87)
  drawSprites();
  if(keyWentDown("UP_ARROW")){
    writeStock(food);
    dog.addImage("happydog",happyDog);

  }
  //add styles here
}
function writeStock(x){
  if (x>0){
    x=x-1
  }
  else{
    x=0
  }
  database.ref('/').update({
    food:x
  })
}

