// Working of email button
document.getElementById('email-button').addEventListener('click', function() {
    window.location.href = 'form.html'; 
});

// To know the screen size
const screenWidth = window.innerWidth;

if (screenWidth <= 1023) {
    document.getElementById('call-button').addEventListener('click', function() {
    window.location.href = 'tel:+919704882298';
  })
} else if (screenWidth >= 1024) {
    document.getElementById('call-button').addEventListener('click', function() {
    alert("Our Mobile Number: +919704882298")
  })
}

// To check if element is in the screen
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  for (var i = 0; i < 4; i++){
    const element = document.querySelectorAll('.exam-card')[i];
  
  if (isElementInViewport(element)) {
    element.classList.add('active');
  }
  }
  
}

function lastChild(el){
  console.log(el.childNodes);
  var last = el.childNodes.length - 1;
  return el.childNodes[last];
  
}

// details of exam onclick
function displayInfo(el){
  const element = el;
  var infoBlock = lastChild(element);
  if (infoBlock.style.display === 'none')
  {
    console.log('working')
  }
}

handleScroll();

// calls handleScroll function when the site is scrolled
window.addEventListener('scroll', handleScroll);


for (var i = 0; i < 4; i++){
  const element = document.querySelectorAll('.exam-card')[i];
  element.addEventListener('click',displayInfo);
}

// Toggle display of the details in exam-card
const examCards = document.querySelectorAll('.exam-card');
examCards.forEach((card) => {
    card.addEventListener('click', () => {
        const cardContent = card.querySelector('.text-box');
        if (cardContent.style.display === 'none' || cardContent.style.display === '') {
            cardContent.style.display = 'block';
            card.style.height = 'auto';
        } else {
            cardContent.style.display = 'none';
            if(screenWidth <= 576)
            {
              card.style.height = '130px';
            }else{
              card.style.height = '150px';
            }
        }
    });
});



