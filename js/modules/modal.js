export default function initiModal(){
  
  const abrirModalBtn = document.getElementById('abrir-modal');
  const modal = document.querySelector('.modal')
  
  const body = document.querySelector('.body');
  
  abrirModalBtn.addEventListener('click', (event) => openModal(event, modal));
  
  body.addEventListener('click', (event) => closeModal(event, modal));
  
  
  function openModal(event, modal){
    event.preventDefault();
    modal.classList.add('modal-on')
  }
  
  function closeModal(event, modal){
     if(event.target.closest(".modal") !== modal && !event.target.matches('.btn-blue')){
      modal.classList.remove('modal-on');
    }
  
  }
}

