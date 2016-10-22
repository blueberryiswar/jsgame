/**
 * Created by blueberry on 10/23/16.
 */

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        console.log('W was pressed');
    }
    else if(event.keyCode == 65) {
        console.log('A was pressed')
    }
    else if(event.keyCode == 83) {
        console.log('S was pressed')
    }
    else if(event.keyCode == 68) {
        console.log('D was pressed')
    }
    else if(event.keyCode == 32) {
        console.log('Space was pressed')
    }
    else if(event.keyCode == 27) {
        console.log('Esc was pressed')
    }
    else if(event.keyCode == 13) {
        console.log('Enter was pressed')
    }
    else if(event.keyCode == 38) {
        console.log('Up was pressed')
    }
    else if(event.keyCode == 40) {
        console.log('Down was pressed')
    }
    else if(event.keyCode == 37) {
        console.log('Left was pressed')
    }
    else if(event.keyCode == 39) {
        console.log('Right was pressed')
    }
    else {
        console.log(event.keyCode);
    }
});