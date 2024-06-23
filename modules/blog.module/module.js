const cardElements = document.querySelectorAll('li');

const cardObserver = new IntersectionObserver((cards) => {

    cards.forEach((card) => {

        if(card.isIntersecting){

            card.target.classList.add('slide');
        }else{
        }
    });
});


cardElements.forEach((card) =>{
 cardObserver.observe(card);
})


