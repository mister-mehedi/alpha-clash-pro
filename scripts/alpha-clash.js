function continueGame(){
  const alphabet= getARandomAlphabet();

  // set randomly generated alphabet to the screen
  const currentAlphabetElement=document.getElementById('current-alphabet');
  currentAlphabetElement.innerText=alphabet;

  // set backgrounf color
  addBackgroundColorById(alphabet);
}

function play(){
  // Hide the gome screen
  hideElementById('home-screen')

  // Show the playtground
  showElementById('play-ground')

  continueGame();
}