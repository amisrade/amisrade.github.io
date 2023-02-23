console.log("Hi I am laoding");
$(document).ready(function() {
    // Show the loading animation with spinning circle
    $('#loading').show();
  
    // Set a timer for 3 seconds to stop the animation
    setTimeout(function() {
      // Hide the loading animation after 3 seconds
      $('#loading').hide();
      // Show the content that was being loaded
      $('#content').show();
    }, 2000); // 3 seconds
  });
  

  $(document).ready(function() {
    // Check if the sliding content element is in view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  
    // Slide in the content when it comes into view
    $(window).scroll(function() {
      $('.sliding').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css('opacity', '1');
          $(this).css('transform', 'translateY(0)');
        }
      });
    });
  });

  $(document).ready(function() {
    // Check if the sliding content element is in view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  
    // Slide in the content when it comes into view
    $(window).scroll(function() {
      $('.sliding-content').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css('opacity', '1');
          $(this).css('transform', 'translateX(0)');
        }
      });
    });
  });
  $(document).ready(function() {
    // Check if the sliding content element is in view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  
    // Slide in the content when it comes into view
    $(window).scroll(function() {
      $('.sliding-content-right').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css('opacity', '1');
          $(this).css('transform', 'translateX(0)');
        }
      });
    });
  });
  





  