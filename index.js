function scuberGreetingForFeet(distanceCovered) {

  if (distanceCovered <= 400){
          return "This one is on me!";
  }
  else if (distanceCovered > 400 && distanceCovered < 2000){
    return "That will be twenty bucks.";
}
  else if (distanceCovered > 2000 && distanceCovered < 2500){
      return "I will gladly take your thirty bucks.";
  }
  else if(distanceCovered > 2500){
      return "No can do.";
  }

}

function ternaryCheckCity(destinationCity){
  if (destinationCity === "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(Tip){
 if (Tip === "generous"){
  return "Thank you so much.";
 }
 else if (Tip === "not as generous"){
  return "Thank you.";
 }
 else{
  return "Bye."
 }
}