const cardElements =  [...document.querySelectorAll("#contact-us-image"),...document.querySelectorAll('#contact-us-form') ,...document.querySelectorAll(' #contact-us-container iframe')];

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