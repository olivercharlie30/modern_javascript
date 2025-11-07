const itemInput = document.querySelector('#item-input');

const onkeyPress = e => {
    console.log('keyPress.');
}

const onkeyUp = e => {
  console.log(e.key);
}

const onkeydown = e => {
  //key
    console.log(e.key);
  document.querySelector('h1').innerHTML = e.key;
  
  if (e.key === 'Enter') {
    alert('you pressed enter.');
  }


  //kedCode
  if (e.keyCode === 13) {
    alert('you pressed enter 13');
  }

  //code
  if (e.code === 'Digit1') {
    console.log('you pressed 1');
  }

  if (e.repeat) {
    console.log(`you are holding down ${e.key}`);
  }

   console.log(`Shift ${e.shiftKey}`);
   console.log(`Control ${e.ctrlKey}`);
   console.log(`Alt ${e.altKey}`);
}



//itemInput.addEventListener('keypress', onkeyPress);
//itemInput.addEventListener('keyup', onkeyUp);
itemInput.addEventListener('keydown', onkeydown);