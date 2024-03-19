let memubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

memubar.addEventListener('click', ()=>{
    memubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll', ()=>{
    memubar.classList.remove('fa-times');
    navbar.classList.remove('active');
})


let sliders = document.querySelectorAll('.box-container');
let index = 0;

function next(){
    sliders[index].classList.remove('active');
    index = (index + 1) % sliders.length;
    sliders[index].classList.add('active');
}

function prev(){
    sliders[index].classList.remove('active');
    index = (index - 1 + sliders.length) % sliders.length;
    sliders[index].classList.add('active');
}

document.querySelectorAll('.small-img-1').forEach(image =>{
    image.addEventListener('click',()=>{
        let src = image.getAttribute('src');
        document.querySelector('.big-img-1').src = src;
    })
})


document.querySelectorAll('.small-img-3').forEach(image =>{
    image.addEventListener('click',()=>{
        let go = image.getAttribute('src');
        document.querySelector('.big-img-3').src = go;
    })

})

document.querySelectorAll('.small-img-2').forEach(image =>{
    image.addEventListener('click', ()=>{
        let home = image.getAttribute('src');
        document.querySelector('.big-img-2').src = home;
    })
})
