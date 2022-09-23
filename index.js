// // var food = prompt("amount of food")
// // var foodtip = prompt("tip amount")
// // var tax = prompt("enter tax")*12
// // var calculate = food*foodtip+tax
// // alert(calculate) 



// var text = prompt("try typing hi,hello,how are you and open browser on your keyboard");

// if(text=="hi"){
//     alert("hello");
// }else if (text=="hello") {
//     alert("welcome i am your chat bot try reloding me");
// } else if(text=="how are you"){
//     alert("i will be fine if cpu takes less load");
// }else if(text=="open browser"){
//     alert("sorry this developer is not a pro coder")
// }else{
//     alert("something went wrong try reloding me");
// }



var rock = 0;
var paper = 1;
var sicsor = 3;
var count =1;
var computer=0;
var player = 0;
while(count>0){


var comp = Math.floor(Math.random()*3);
var you = prompt("enter your choice number for rock : 0, for paper : 1, for scissor :2");
var count=10;



    if(comp==you){
        alert("comp selected"+" "+ comp+" "+"you pressed "+" "+you);
        player++
        alert("your score"+" "+player);
    }else if(comp!=you){
        alert("comp selected"+" "+ comp+" "+"you pressed "+" "+you);
        computer++
        alert("computer score"+" "+computer);
    }else{
        
        alert("wrong input provided");
    }
count++;
if(computer==5){
    alert("comouter wins"+" "+"score"+computer);
    alert("game ended reload for play again");
    break;   
}else if(player==5){
    alert("player wins"+" "+"score"+player);
    alert("game ended reload for play again");
    break; 
}
}   

