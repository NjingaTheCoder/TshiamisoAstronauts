const cardElements = [...document.querySelectorAll('#event-details'), ...document.querySelectorAll("#event-header-text")] ;

const cardObserver = new IntersectionObserver((cards) => {

    cards.forEach((card) => {

        if(card.isIntersecting){

            card.target.classList.add('fade-in');
        }else{
        }
    });
});


cardElements.forEach((card) =>{
 cardObserver.observe(card);
})