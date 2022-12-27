function Submit(){guess=1;
// random value generated
  var y = Math.floor(Math.random()*10+1);
// counting the number of guesses
var x = document.getElementById("entered_number").value;
// made for correct Guess
if (x==y){
    alert("Congratulations !!! "+playername+"You guessed it right in"+
    guess+"Guess");
    guess = 1;
}
  else if(x>y)   {
    guess++;
    alert("Oops ! Try to guess a smaller number");
  }
else{
    guess++;
    alert("Oops ! Try to guess a greater number")
    
}
}
function Play_again(){
    y =Math.floor(Math.random()*10+1);
    document.getElementById("entered_number").innerHTML=" ";
}
playername=localStorage.getItem("playername");