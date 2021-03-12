var form,database,memberCount
function preload(){
   
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-30)
database=firebase.database()
memberCount=0
form=new Form()





  

  
}

function draw(){
  background("white")
   
  
  
form.get()
  
  form.display()
  
  
    
 //sconsole.log(car2.y)
 //console.log(car2.x)

//camera.position.x=car.x
//camera.position.y=car.y
//Carspeed();

drawSprites()
}
 // drawSprites()


  




