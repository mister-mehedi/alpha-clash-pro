function handleKeyboardKeyUpEvent(event){
  const playerPressed=event.key;
  // console.log('player pressed',playerPressed);
  if(playerPressed==='Escape'){
    gameOver();
  }

  const currentAlphabetElement=document.getElementById('current-alphabet');
  const currentAlphabet=currentAlphabetElement.innerText;
  const expectedAlphabet= currentAlphabet.toLocaleLowerCase();
  // console.log(playerPressed,expectedAlphabet);

  if(playerPressed===expectedAlphabet){
    // console.log('you got a point');
    const currentScore=getTextElelmentValueById('current-score');
    const updatedScore=currentScore+1;
    setTextElelmentValueById('current-score',updatedScore);

    // Update score:
    // 1. get the current score
    // const currentScoreElement=document.getElementById('current-score');
    // const currentScoreText=currentScoreElement.innerText;
    // const currentScore=parseInt(currentScoreText);

    // // 2. increase the score by 1
    // const newScore= currentScore + 1;
  
    // // 3. show the updated score
    // currentScoreElement.innerText= newScore;

    // Start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }else{
    // console.log('you missed. you los a life!');
    const currentLife=getTextElelmentValueById('current-life');
    const updatedLife=currentLife-1;
    setTextElelmentValueById('current-life',updatedLife);

    if(updatedLife===0){
      // console.log('game over');
      gameOver();
    }

    // get the cuurent life number
    // const currentLifeElement=document.getElementById('current-life');
    // const currentLifeText=currentLifeElement.innerText;
    // const currentLife=parseInt(currentLifeText);

    // // decrease life
    // const newLife=currentLife-1;

    // // show the updated life
    // currentLifeElement.innerText=newLife;
  }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame(){
  const alphabet= getARandomAlphabet();

  // set randomly generated alphabet to the screen
  const currentAlphabetElement=document.getElementById('current-alphabet');
  currentAlphabetElement.innerText=alphabet;

  // set backgrounf color
  addBackgroundColorById(alphabet);
}

function play(){
  // Hide the pages
  hideElementById('home-screen');
  hideElementById('final-score');

  // Show the playtground
  showElementById('play-ground');


  // reset score & life
  setTextElelmentValueById('current-life',5);
  setTextElelmentValueById('current-score',0);

  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  // update last score
  const lastScore=getTextElelmentValueById('current-score');
  setTextElelmentValueById('last-score',lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet= getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
}