
function taskCompleteFunction(btn,h3){
    document.getElementById(btn).addEventListener('click',
        function(e){
            e.preventDefault()
            alert('Board Updated Successfully');
            let sum= textToNum('task-remain')-1;
            textUpdate('task-remain',sum);
            let sum2=textToNum('finished-task')+1;
            textUpdate('finished-task',sum2);
            disableButton(btn)
            let time = new Date();
            let timeString = time.toLocaleTimeString();
            let theTask=document.getElementById(h3).innerText;
            let notification=document.createElement('div');
            notification.classList.add('task-title')
            notification.innerHTML=
            `
            <div class="rounded-lg bg-[#F4F7FF] text-sm p-2">
                <p class="">You have Complete The ${theTask} at ${timeString}</p>
            </div>
            `
            let notificationBox=document.getElementById('notification-box');
            notificationBox.appendChild(notification);
        }
    )
}
taskCompleteFunction('shop-ease-btn','shop-ease-task');
taskCompleteFunction('soft-pay-btn','cloud-sync-task');
taskCompleteFunction('meta-btn','swift-pay-task');
taskCompleteFunction('ph-btn','meta-task');
taskCompleteFunction('google-llc-btn','google-llc-task');
taskCompleteFunction('glassdoar-btn','glassdoar-task');