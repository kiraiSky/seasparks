const faqAccordion = document.querySelector('.faq-accordion'); 

const questions = faqAccordion.querySelectorAll('.faq-question');

questions.forEach((question) =>{
  question.addEventListener('click',
   (event) => toggleAnswer(event,question));
})

function toggleAnswer(event, question){
  const answer = event.currentTarget.nextElementSibling.firstElementChild;

  question.firstElementChild.classList.toggle("active");
  question.firstElementChild.nextElementSibling.classList.toggle("active");

  if (answer.style.maxHeight){
    answer.style.maxHeight = null;
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}