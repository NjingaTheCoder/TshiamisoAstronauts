const cardElements = [...document.querySelectorAll('.blog-listing-card') , ...document.querySelectorAll('#Pagination') ];
  
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