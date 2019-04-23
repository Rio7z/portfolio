$(document).ready(function(){

$('#section0');

tl = new TimelineMax();
tlUser = new TimelineMax();

tl
  .from($('.line1'), 0.5,  {y: 50, autoAlpha: 0, ease: Power1.easeOut})
  .from($('.line2'), 0.5,  {y: 50, autoAlpha: 0, ease: Power1.easeOut})
  .from($('#O'), 0.5,  {y: -50, autoAlpha: 0, ease: Power3.easeOut})
  .from($('#R'), 0.5,  {autoAlpha: 0, ease: Power3.easeOut})
  .from($('#I'), 0.5,  {autoAlpha: 0, ease: Power3.easeOut})
  .from($('#T'), 0.5,  {autoAlpha: 0, ease: Power3.easeOut})
  .from($('#Z'), 0.5,  {autoAlpha: 0, ease: Power3.easeOut})
  .from($('#D'), 0.5,  {autoAlpha: 0, ease: Power3.easeOut})

});