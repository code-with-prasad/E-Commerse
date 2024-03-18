const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// light mood in webpage 
// let light_mood = document.getElementById('light-mood');
// light_mood.addEventListener('click',()=>{
    
//     light_mood.innerHTML = '<i class="fa-solid fa-moon"></i>';

// })

