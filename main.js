let members = document.getElementById("members");
let poem = document.getElementById("poem");
let song = document.getElementById("song");

trains.addEventListener("click", function(){
   trains.style.color="rgb(2, 253, 2)";
   members.style.color="white";
   programs.style.color="white";
   connects.style.color="white";

})

programs.addEventListener("click", function(){
   trains.style.color="white";
   members.style.color="white";
   programs.style.color="rgb(2, 253, 2)";
   connects.style.color="white";

})

members.addEventListener("click", function(){
   trains.style.color="white";
   members.style.color="rgb(2, 253, 2)";
   programs.style.color="white";
   connects.style.color="white";

})

connects.addEventListener("click", function(){
   trains.style.color="white";
   members.style.color="white";
   programs.style.color="white";
   connects.style.color="rgb(2, 253, 2)";

})


next.addEventListener("click", function(){
   count++;
   if(count == slide.length-2){
       count=0;
   }
   myFun();
})

prev.addEventListener("click", function(){
   count--;
   if(count == -1){
       count=slide.length-3;
   }
   myFun();
})
function myFun(){
   slide.forEach(function(curImg){
       curImg.style.transform = `translateX(-${count * 114}%)`
   })
}
