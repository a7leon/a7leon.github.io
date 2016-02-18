  //please note! This is the JS for the menu with sub-items, which I'm still messing up and building!

 $( '.menu-btn' ).hover(function(){
           $('.responsive-menu').toggleClass('expand');
           })
        

 (document).ready(function($){
     $(".menu-item-has-children").append("<div class='open-menu-link open'>+</div>");
     $('.menu-item-has-children').append("<div class='open-menu-link close'>-</div>");
 
     $('.open').addClass('visible');
 
     $('.open-menu-link').click(function(e){
         var childMenu =  e.currentTarget.parentNode.children[1];
         if($(childMenu).hasClass('visible')){
             $(childMenu).removeClass("visible");
 
             $(e.currentTarget.parentNode.children[3]).removeClass("visible");
             $(e.currentTarget.parentNode.children[2]).addClass("visible");
         } else {
             $(childMenu).addClass("visible");
 
             $(e.currentTarget.parentNode.children[2]).removeClass("visible");
             $(e.currentTarget.parentNode.children[3]).addClass("visible");
         }
     });
 });

 $(document).ready(function() {
    window.pulse_image = null;
    window.pulse_continue_loop = false;
    
    $('.pulse_image').mouseover(function() {
      // User is hovering over the image.
      window.pulse_continue_loop = true;
      window.pulse_image = $(this);
      
      PulseAnimation(); // start the loop   
    }).mouseout(function() {
      window.pulse_continue_loop = false;
      window.pulse_image.stop();
      window.pulse_image.css('opacity',1);
    });
  });
})(jQuery);

// #############################################

//Hi!Please note, this is for a pulsing image effect! it's not really working yet either!
function PulseAnimation()
{
  var minOpacity = .33;
  var fadeOutDuration = 650;
  var fadeInDuration = 650;
  
  window.pulse_image.animate({
    opacity: minOpacity
  }, fadeOutDuration, function() {
    window.pulse_image.animate({
      opacity: 1
    }, fadeInDuration, function() {
      if(window.pulse_continue_loop) {
        PulseAnimation();
      }
    })
  });
}

//THIS IS THE REALLY IMPORTANT ONE:
//this is to be used on the  writing projects section of site after a certain amount of time has elapsed. All content will be 'wiped' tho can be re-acessed by reloading page/the 
//function of the "Aleph" icon is to reset pages after this has happened. The page/div will 'un-write' itself, leaving a blank space, excepting the menu and header
//Can you please look at this and let me know if it is feasible? and how I might get it working?
/*
function eraseLetters(element) {
      element.text(element.text().slice(0,-1))
        if (element.text() != '') {
          setTimeout(function() {
            eraseLetters(element);
          }, 75);
        } else {
          element.remove();
          eraseElement();
        }
    }

    function eraseElement() {
        i--;
        var element = $($elements[i]);

        if (element.is('.content-container')) {
          return;
        }

        if (element.text().trim().length) {
            if (element.children().length == 0) {
              eraseLetters(element);              
            } else {
              if (i > 11) {
                setTimeout(function() {
                  eraseElement();
                }, 60);
              }
            }
        } else {
          element.remove();
          if (i > 11) {
            setTimeout(function() {
              eraseElement();
            }, 60);
          }
        }
    }

    var timeout = ($('body').hasClass('home')) ? 25000 : 50000;

    setTimeout(function() {
      eraseElement();
    }, timeout);
  }
}
*/