export default function  dayNight(){
  const btn = document.querySelector('.nightMode');
  const circle = document.querySelector('.circle');
  const containers = [];

  containers.push(document.querySelector('.seaSparks'));
  containers.push(document.querySelector('.associate-container'));
  containers.push(document.querySelector('.body'));
  containers.push(document.querySelector('.cases-container'));
  containers.push(document.querySelector('.gallery-container'));
  containers.push(document.querySelector('.faq-bg'));
  containers.push(document.querySelector('.footer-container'));
  
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('dawn');
    circle.classList.toggle('move');
    containers.forEach((container) =>{
      container.classList.toggle('white');
    })
  });
};
