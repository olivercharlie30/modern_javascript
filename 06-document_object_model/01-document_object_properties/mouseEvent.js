const logo = document.querySelector('img');

const onClick = () => console.log('click events');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};
const onRightClick = () => console.log('Right click events');
const onMOuseDown = () => {
    if (document.body.style.backgroundColor !== 'red') {
          document.body.style.backgroundColor = 'red';
          document.body.style.color = 'blue';
    } else {
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
      }
}
const onMouseUp = () => console.log('Mouse Up');
const onMouseWheel = () => console.log('Mouse Wheel');
const onMouseOver = () => console.log('Mouse Over');
const onMouseOut = () => console.log('Mouse Out');
const onDragStart = () => console.log('Drag Start Element');
const onDrag = () => console.log('Drag Element');
const onDragEnd = () => console.log('Drag End Element');

//Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMOuseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);