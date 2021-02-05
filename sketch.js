var canvas;
var gameState = 0;
var contestantCount,databse,quiz,question,contestant;

function setup(){
  canvas = createCanvas(850,400);

  quiz = new  Quiz();
  database = firebase.database
}


function draw(){
  background("pink");
quiz.display();

if (contestantCount === 4){
    quiz.update(1)

}

if (gameState === 1){
  quiz.play();
}
}
  
}
