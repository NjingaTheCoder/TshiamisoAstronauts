const cardElements = [...document.querySelectorAll(' #side-image'), ...document.querySelectorAll("#side-text-container")] ;

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