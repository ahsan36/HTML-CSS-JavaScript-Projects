const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


// Mobile Device: For active bar

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// Mobile Device: For remove bar

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}