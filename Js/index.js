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
  





  















  function newOne() {
    const fattForm = document.querySelector('.fatt-form');
    const termsC = document.querySelector('.embedded-payment .summary');
    const jsDiv = document.createElement('div');
    jsDiv.classList.add('visa');
    const blueDiv = document.createElement('div');
    blueDiv.classList.add('blueDiv');
    const terms = document.createElement('div');
    terms.classList.add('terms');
    termsC.insertBefore(terms, termsC.nextSibling);
    fattForm.insertBefore(jsDiv, fattForm.firstChild);
    fattForm.insertBefore(blueDiv, fattForm.firstChild);
    const deposit = document.getElementById('deposit-amount').innerText;
    const total = document.getElementById('total').innerText;
    var  amount=deposit;
     if(deposit===`$0.00`){
        amount=total
    };
    
    blueDiv.innerHTML = `
    <div class=" visa_head d-flex">
    <div class="blue">
        <h3 >Today's total</h3>
        <div class="total ng-binding" id="deposit-amounts">${amount}</div>
        <h3>For the initial visit</h3>
    </div>
    <div class="gray" >
        <h2>
            How we charge
        </h2>
        <div>
            We'll temporarily process a
            <strong>${amount} refundable deposit</strong> to validate your card
            and
            <strong>the remaining balance of $139 will be charged within 24 hours
                before the appointment</strong>. Tax has been included. No subscription or membership is
            needed.
        </div>
    </div>
    </div>
    
    `;
    
    jsDiv.innerHTML = `
        <div class="texts">
       
        <p> <span> <i class="fa-solid fa-lock"></i></span> Secured payment</p>
    </div>
    <div class="image">
        <img src="https://care.klarityadhd.com/images/booking/icon-visa.svg" alt="">
        <img src="https://care.klarityadhd.com/images/booking/icon-mc.svg" alt="">
        <img src="https://care.klarityadhd.com/images/booking/icon-discover.svg" alt="">
        <img src="https://care.klarityadhd.com/images/booking/icon-ae.svg" alt="">
    
    </div>
        `;
    terms.innerHTML = `
    <div class="check">
         <div class="checkbox-label mt-1">
    
    I have read and agree to the the following policies
    </div>
    <div role="dialog" class="v-dialog__container">
    </div>
    <a role="button" aria-haspopup="true" aria-expanded="false" class="text-decoration-underline">
    Terms of Services &amp; Cancellation Policy
    </a>
    <br>
    <a href="https://www.klarityadhd.com/telehealth-consent/" target="_blank">Consent to Telehealth Services</a><br>
    <div role="dialog" class="v-dialog__container"></div><a role="button" aria-haspopup="true" aria-expanded="false" class="text-decoration-underline">
    Provider’s Controlled Substances, Labs, and EKG Policies
    </a>
    </div>
        `;
    
    var checkitem = document.querySelectorAll('.visa');
    
    if (checkitem.length > 1) {
    
        document.querySelector('.visa').remove();
        document.querySelector('.blueDiv').remove();
        document.querySelector('.terms').remove();
    
    }
     document.getElementById("card_number").placeholder = "Enter your card number";
  
  
    if (checkitem.offsetHeight > 0) {
        clearInterval(newOne);
    }
    
    }
    
    function myFunction() {
    const label = document.querySelector('label[for="name"]');
    var strongTag = label.querySelector('strong');
    strongTag.innerText = "Full Name";
    
    };
    
    setInterval(myFunction, 1000);
    setInterval(newOne, 1000);
  
