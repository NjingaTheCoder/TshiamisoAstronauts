const cardElements =  [...document.querySelectorAll("#sub-featured-image-header-text") ,...document.querySelectorAll("#sub-featured-image-text"),...document.querySelectorAll("#sub_featured_image_header_cta") ];

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