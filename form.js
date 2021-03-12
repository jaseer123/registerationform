class Form{
    constructor(){
        this.button=createButton("register") 
            this.name=createInput("name")
        this.age=createInput("age")
        this.class=createInput("class")
        this.phone=createInput("phoneNumber")
    }
get(){
    var nameref=database.ref("name")
nameref.on("value",function(data){
    name=data.val()
})
}
update(name){
database.ref("/").update({
    name:this.name
})
}
display(){
    this.button.position(displayWidth/2-1,displayHeight/2-10)
    this.name.position(displayWidth/2-40,displayHeight/2-200)
  this.age.position(displayWidth/2-40,displayHeight/2-160)
  this.class.position(displayWidth/2-40,displayHeight/2-120)
  this.phone.position(displayWidth/2-40,displayHeight/2-80)
  this.button.mousePressed(()=>{
  name=this.name
  
}
  )

}
}