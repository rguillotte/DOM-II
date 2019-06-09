// Your code goes here

let logoHead = document.querySelector('.nav-container h1');
logoHead.addEventListener('mouseover', (e)=>{
    e.target.style.fontSize = '4.5rem';
})
logoHead.addEventListener('mouseout', (e)=>{
    e.target.style.fontSize = '4rem';
})