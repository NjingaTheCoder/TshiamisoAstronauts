const cardElements =  [...document.querySelectorAll("#testimonial-text"),...document.querySelectorAll('#member-title') ,...document.querySelectorAll('#member-name')  ,...document.querySelectorAll(' #member-image')];

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