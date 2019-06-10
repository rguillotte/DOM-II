// Your code goes here

let logoHead = document.querySelector('.nav-container h1');
logoHead.addEventListener('mouseover', (e)=>{
    e.target.style.fontSize = '4.5rem';
})
logoHead.addEventListener('mouseout', (e)=>{
    e.target.style.fontSize = '4rem';
})

let navBar = document.querySelector('header');

navBar.addEventListener('dblclick', (e)=>{
    e.target.style.backgroundColor = 'lightgrey';
});

let firstImg = document.querySelector('.content-section .img-content img');

firstImg.addEventListener('click', (e)=>{
    firstImg.classList.toggle('large');
})

let secondImg = document.querySelector('.inverse-content img');

secondImg.addEventListener('click', (e)=>{
    secondImg.classList.toggle('large');
})

let headerImg = document.querySelector('.intro img');

headerImg.addEventListener('click', (e)=>{
    headerImg.classList.toggle('large');
})

let bottomImg = document.querySelector('.content-destination img');

bottomImg.addEventListener('click', (e)=>{
    bottomImg.classList.toggle('large');
})

window.addEventListener('scroll', (e)=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(Math.ceil(scrolled) === scrollable){
        alert(`You've reached the bottom!`)
    }
})

window.addEventListener('keydown', (e)=>{
    if (e.key === 'a'){
        alert(`AHHHHHHH!`);
    }
})












