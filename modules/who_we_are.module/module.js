const cardElements =  [...document.querySelectorAll("#who-we-header"),...document.querySelectorAll('#who-we-are-image') ,...document.querySelectorAll('#who-we-are-text')];

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