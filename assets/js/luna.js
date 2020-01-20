new fullpage('.luna', {
  //options here
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  sectionSelector: '.luna__section',
  autoScrolling: true,
  verticalCentered: true,
  fitToSection: false,
  onLeave: function(origin, dest, dir) {
    var selector = "";
    var destNum = 0;
    if (dest.index === 1) {
      selector = ".second" 
      destNum = 24;
    }
    else if (dest.index === 2) {
      selector = ".third";
      destNum = 23;
    }
    else if (dest.index === 3) {
      selector = ".fourth";
      destNum = 31;
    }
    else if (dest.index === 4) {
      selector = ".fifth";
      destNum = 3630;
    } 
    else if (dest.index === 5) {
      selector = ".last";
      destNum = 8;
    }
    else {
      return true;
    }

    var toAnimateList = document.querySelectorAll(selector + " .to-animate");
    toAnimateList.forEach(function(elem) {
      elem.classList.add("to-animate--active")
    });

    if (dest.index === 5) {
      anime({
        targets: selector + " .number",
        textContent: destNum,
        easing: 'easeOutSine',
        round: 1, 
        duration: 2000,
        complete: function(anim) {
          var number = document.querySelector(selector + " .number");
          number.classList.add("number--rotated");
        }
      });
    }
    else {
      anime({
        targets: selector + " .number",
        textContent: destNum,
        easing: 'easeOutSine',
        round: 1, 
        duration: 2000,
      });
    }
  }
});