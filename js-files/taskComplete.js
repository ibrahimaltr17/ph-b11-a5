const taskButtons=document.querySelectorAll('button');
let pressedButton= 0; 
for (let i=0; i<taskButtons.length; i++) {
    taskButtons[i].addEventListener('click', 
    function() {
    pressedButton+=1; 
    if(pressedButton==6){
        alert('Congrates!!! You have completed all current task')
    }
});
}

