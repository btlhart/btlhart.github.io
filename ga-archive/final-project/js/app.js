var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
  });
  
  
  var tl = new TimelineMax()
      .add([
          TweenMax.to("#titles-old", .75, {opacity:1, ease: Circ.easeInOut}),
          TweenMax.to("#diagram-users", .75, {opacity:1, ease: Circ.easeInOut})
      ])
      .add([
          TweenMax.to("#users-moderator", .75, {transform: "translateX(-100px)", delay:-.4, ease: Power1.easeInOut}),
          TweenMax.to("#users-participants", .75, {transform: "translateX(100px)", delay:-.4, ease: Power1.easeInOut})
      ])
      .add([
          TweenMax.to("#attributes", 2, {opacity:1, delay:-1, ease: Circ.easeInOut}),
          TweenMax.to("#source-qual", 2, {opacity:1, delay:-1, ease: Circ.easeInOut}),
          TweenMax.to("#feedback-qual", 2, {opacity:1, delay:-1, ease: Circ.easeInOut}),
          TweenMax.to("#source-quant", 2, {opacity:1, delay:-1, ease: Circ.easeInOut}),
          TweenMax.to("#feedback-quant", 2, {opacity:1, delay:-1, ease: Circ.easeInOut})
      ])
      .add([
          TweenMax.to("#titles-old", .75, {opacity:0, delay:.75, ease: Circ.easeInOut}),
          TweenMax.to("#source-qual", .75, {opacity:0, delay:.5, ease: Circ.easeInOut}),
          TweenMax.to("#feedback-qual", .75, {transform: "translateX(98px)", delay:.75, ease: Power1.easeOut}),
          TweenMax.to("#source-quant", .75, {opacity:0, delay:.5, ease: Circ.easeInOut}),
          TweenMax.to("#feedback-quant", .75, {transform: "translate(-12px, -152px)", delay:.75, ease: Power1.easeOut})
      ])
      .add([
          TweenMax.to("#titles-new", .75, {opacity:1, ease: Circ.easeInOut}),
          TweenMax.to("#source-remesh", .75, {opacity:1, ease: Power1.easeOut}),
          TweenMax.to("#attributes-left", .25, {transform: "translateX(50px)", ease: Power1.easeOut}),
          TweenMax.to("#attributes-right", .25, {transform: "translateX(-50px)", ease: Power1.easeOut})
      ])
      .add([
          TweenMax.to("#feedback-realtime", 1, {opacity:1, delay:-.5, ease: Power1.easeOut}),
          TweenMax.to("#feedback-realtime", .25, {transform: "translatey(-20px)", ease: Power1.easeOut}),
          TweenMax.to("#no-significant", 1, {opacity:0, delay:-1, ease: Power1.easeOut}),
          TweenMax.to("#no-deep", 1, {opacity:0, delay:-1, ease: Power1.easeOut}),
      ])
  
  new ScrollMagic.Scene({
    triggerElement: "#animation-wrapper",
    duration: '500%'
  })
  .setTween(tl)
  .setPin("#animation-wrapper")
  .addTo(controller);
  
  
  
  
  
  
  $(window).resize(function(evt) {
      var $window = $(window);
      var width = $window.width();
      var scale;
  
      // early exit
      if(width <= 960) {
        scale = Math.min(width/960);
        
         $('#animation-wrapper').css({'-webkit-transform': 'scale(' + scale + ')'});
         // $('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
      }
  
      
  
  });