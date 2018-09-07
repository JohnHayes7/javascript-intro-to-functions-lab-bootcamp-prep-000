function shout (name){
  return name.toUpperCase()
}

function whisper (name){
  return name.toLowerCase()
}

function logShout (hello){
  console.log(`${"hello"}`.toUpperCase())
}
 
 function logWhisper(hello){
   console.log(`${"hello"}`.toLowerCase())
 }

var loud="HELLO";
var quiet="hello";
var love="I love you, Grandma.";

 function sayHiToGrandma(string){
var loud=string.toLowerCase();
var quiet=string.toUpperCase();
var love="I love you, Grandma.";
   
   if (string.toLowerCase()===quiet){
     return "I can't hear you!";
   }
    else if(string.toUpperCase()===loud){
     return "YES INDEED!";
   }
    else if (string===love){
     return "I love you, too.";
   }
 }
 
   
   