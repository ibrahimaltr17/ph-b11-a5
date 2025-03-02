
function textToNum(id){
    let theText= document.getElementById(id).innerText;
    let convertedText=parseInt(theText);
    return convertedText;
}
function textUpdate(id,value){
    let newText=document.getElementById(id).innerText=value;
    return newText;
}

function disableButton(id){
    let theButton=document.getElementById(id);
    theButton.setAttribute('disabled','true');
}
// date
let date=new Date();
let dateToday=date.toDateString()
document.getElementById('date').innerText=dateToday;

// Clear Activity
document.getElementById('clear-btn').addEventListener('click',
    function (){
        let notificationBox=document.getElementById('notification-box');
        notificationBox.remove();
    }
)
