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
   if (string.toLowerCase()===quiet){
     return ("I can't hear you!");
   }
  elseif (string.toUpperCase()===loud){
     return ("YES INDEED!");
   }
   if (string===love){
     return ("I love you, too.");
   }
 }
 
 sayHiToGrandma(whisper(hello));
 sayHiToGrandma(shout (HELLO));
 sayHiToGrandma("I Love you, Grandma.");
   
   