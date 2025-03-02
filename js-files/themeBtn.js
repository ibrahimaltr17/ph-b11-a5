let theme=['bg-[#D29DC0]','bg-[#E6C9C5]','bg-[#CFDFEF]','bg-[#CCCAF0]','bg-[#F7CEE2]','bg-[#F7E3CC]','bg-[#F7E3CC]','bg-[#C2D6C4]','bg-[#FFFAE6]'];

document.getElementById('thm-btn').addEventListener('click',
   function(){
    let randomTheme=theme[(Math.floor(Math.random()*(theme.length)))]
    let theBody=document.getElementById('body');
    for (let i=0; i<theme.length; i++){
        theBody.classList.remove(theme[i]);
    }
    theBody.classList.add(randomTheme);
    console.log(randomTheme)
   }
)

