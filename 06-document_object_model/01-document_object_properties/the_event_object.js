/**
 * 
 * -- Target ===>  the element that triggered the event
 * -- CurrentTarger ===>  the element that the event listener is attached to these are the same in this case
 * -- Type ===>  the type of event that was triggered
 * -- TimeStamp ===>  the time that the event was triggered
 * -- ClientX   ===>  the x position of the mouse click relative to the window
 * -- ClientY ===>  the y position of the mouse click relative to the window
 * -- offsetX ===>  the x posittion of the mouse click relative to the element
 * -- offsetY ===>  the y position of the mouse click relative to the element
 * -- pageX  ===>   the x position of the mouse click relative to the page
 * -- pageY  ===>   the y position of the mouse click relative to the page
 * -- screenX ===>  the x position of the mouse click relative to the screen
 * -- screenY ===>  the y position of the mouse click relative to the screen
 */


const logo = document.querySelector('img');

logo.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.style.width = '100%';

})
