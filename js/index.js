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

window.addEventListener('resize', (e) =>{
    alert(`You've resized me!!!`);
})

function wheelZoom(event) {
    var y = event.deltaY;
    var currentSize = event.target.style.width;
    if (y > 0) {
      newSize = parseInt(currentSize) + 10;
    } else {
      newSize = parseInt(currentSize) - 10;
    }
    event.target.style.width = newSize + "px";
    event.target.style.height = newSize + "px";
  }

headerImg.addEventListener('wheel', (wheelZoom));

let scale = 1;

function wheelZoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 5);
  
    // Apply scale transform
    headerImg.style.transform = `scale(${scale})`;

  }


  let dragImg = document.querySelector('.content-section .img-content');
  console.log(dragImg);
  
  firstImg.addEventListener('drag', (e)=>{
      console.log(e);
        dragImg.style.order = "-1";
  })

  let navItems = document.querySelectorAll('a');

  navItems.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            e.preventDefault();
        })
  })

  let textContainer = document.querySelector('.text-content');
  textContainer.addEventListener('click', (e)=>{
      textContainer.style.backgroundColor = 'lightgrey';
  })

  let textHeader = document.querySelector('.text-content h2');
  textHeader.addEventListener('click',(e)=>{
      e.stopPropagation();
      textHeader.style.backgroundColor = 'darkgrey';
  })

  let mainContainer = document.querySelector('html');

  mainContainer.addEventListener('keypress', (e)=>{
      if(e.key === 'b'){
          mainContainer.style.backgroundColor = 'blue';
      }
      if(e.key === 'r'){
        mainContainer.style.backgroundColor = 'red';
      }
      if(e.key === 'g'){
        mainContainer.style.backgroundColor = 'green';
      }
      if(e.key === 'y'){
        mainContainer.style.backgroundColor = 'yellow';
      }
      if(e.key === 'p'){
        mainContainer.style.backgroundColor = 'purple';
      }
      if(e.key === 'o'){
        mainContainer.style.backgroundColor = 'orange';
      }
  })




















