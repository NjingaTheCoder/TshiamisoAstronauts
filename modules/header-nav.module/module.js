///component js variables
      
      var icount  = 0;
      var checkDisplayType = false;
      var runSlideDown = false;
      const contact = document.querySelector(".contact");
      const sideBar = document.querySelector(".sideBar");
      const imgaeIcon = document.querySelector(".donations");
      const contactContainer = document.querySelector(".contact-container");
      const closeIcon = document.querySelector(".close-icon")
      const navigationContainer = document.querySelector("#navigation-container");
      const menuIcon = document.querySelector(".menu-icons");
      var mediaQuery975px = window.matchMedia("(min-width: 974px)");
      var mediaQuery974px = window.matchMedia("(max-width: 974px)");
      var mediaQuery825px = window.matchMedia("(max-width: 825px)");
      var mediaQuery500px = window.matchMedia("(max-width: 500px)");
      var dontRun = false;


      //function for replacing burger menu
      const replaceMenu = () => {
            if (mediaQuery500px.matches) {
                menuIcon.src = ""; 
            }
            return menuIcon.src; // Corrected typo here
              
      }

      //function for checking the high of the screen and displaying some animation accordingly
      const checkHeight = (height) => {



            //function for only displaying the animation on specific screen sizes
            let cutCount = () => {

            if(mediaQuery975px.matches){   
                   checkDisplayType = false;
            }else if(mediaQuery974px.matches){
                  checkDisplayType = true;
                  return 6;
            }else if(mediaQuery825px.matches){
                  checkDisplayType = true;
                  return 4;
            }
            return 10;
            }
            

            // function for check where the screen height is at

            if(checkDisplayType){
            }else{
                  if(height > cutCount() ){
                        contact.classList.add('anime');
                        runSlideDown = false;
                        icount++;
                  }else if(height < cutCount() && icount > 0){
                        runSlideDown = true;
                        contact.classList.remove('anime');
                  }

                  //if to add or remove the animeDown animation
                  if(runSlideDown ){
                        contact.classList.add('animeDown');
                  }else{
                        contact.classList.remove('animeDown');
                  }
            }
      

      }


      
      //function for checking the Navigation Container's Display status
      const checkDisplayStatus = () => {

            if(navigationContainer.style.display === "none"){
                  return false;
            }else{
                 return true;
            }       
      }

      const screenController = () => {
            console.log(replaceMenu());
            if(mediaQuery974px.matches){
                  if(checkDisplayStatus()){
                        contact.style.display = "none";
                  }
            }else if(mediaQuery975px.matches){
                  if(checkDisplayType ){
                        contact.style.display = "flex";
                        contact.classList.remove('anime');
                        contact.classList.remove('animeDown');
                        checkDisplayType = false;
                  }
            }
      }

      //function for controling the contact us navigation logo
      window.onscroll = () => {
            screenController();

      }
      

      //function for controling the contact us navigation logo
      window.onresize = () => {
            screenController(); 
      }      
            

      //function for getting the scroll hight of the screen
      const getScrollHeight = () => {

      const HtmlElement = document.documentElement;
      const ScrollHieght = Math.min((HtmlElement.scrollTop / HtmlElement.clientHeight) * 100  , 100);
      checkHeight(ScrollHieght)
      }



      // an onload function for attaching method to an event listerner at run time
      window.onload = () => {
  
        window.addEventListener('scroll' ,getScrollHeight);
        closeIcon.addEventListener("click" , () => {  sideBar.classList.remove('animateIn'); sideBar.classList.add('animateMe') } );
        menuIcon.addEventListener("click" , () => { sideBar.classList.remove('animateIn'); sideBar.classList.add('animateIn') } );

      }
