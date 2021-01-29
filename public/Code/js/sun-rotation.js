//this script makes the sun/moon rotate
//it also chnages the colors for the sky and floor
AFRAME.registerComponent('sun-rotation', {
  schema: {
    duration: {type: 'number', default:20000.0},
  },
  init: function() {
    
    const Context_AF = this;
    Context_AF.sun = document.querySelector('#sun-rotation');           //selecting classes of objects I want to animate
    Context_AF.sky = document.querySelector('#sky');
    Context_AF.floor = document.querySelector('#floor');
    Context_AF.isButtonPressed = false;
   
    //sun animation rotates the sun around on the z axis 
    Context_AF.sun.setAttribute('animation', {property:'rotation', to:{x:0, y:0, z:-360}, loop:true, dur:Context_AF.data.duration, easing:'linear', enabled:false});

    //color animation for sky, floor, and mountains
    Context_AF.sky.setAttribute('animation', {property:'material.color', from:'#fcc5b1', to:'#2f3c66', loop:true, dur:Context_AF.data.duration, easing:'easeInOutQuad', enabled:false});
    Context_AF.floor.setAttribute('animation', {property:'material.color', from:'#aa5e47', to:'#3a587e', loop:true, dur:Context_AF.data.duration, easing:'easeInOutQuad', enabled:false});
    //Context_AF.mountains.setAttribute('animation', {property:'material.color', from:'#91433f', to:'#3c2050', loop:true, dur:Context_AF.data.duration, easing:'easeInOutQuad', enabled:false});
  

    //listen on click
    Context_AF.el.addEventListener('click', function() {
      if (Context_AF.isSpinning === true) {
        Context_AF.sun.setAttribute('animation', {enabled:false});
        Context_AF.sky.setAttribute('animation', {enabled:false});
        Context_AF.floor.setAttribute('animation', {enabled:false});
        changeColorOn();


        Context_AF.isButtonPressed = false;

    
      }
      else {
        Context_AF.sun.setAttribute('animation', {enabled:true});
        Context_AF.sky.setAttribute('animation', {enabled:true});
        Context_AF.floor.setAttribute('animation', {enabled:true});
        changeColorOff();

        Context_AF.isButtonPressed = true;
      }
    });
  },
});



const changeColorOn= function() {
  const mountains = document.querySelectorAll('.mountain');

    mountains.forEach(function(){
    mountains.setAttribute('animation', {property:'material.color', from:'#91433f', to:'#3c2050', loop:true,dur:20000, easing:'easeInOutQuad', enabled:false});
    console.log("mountain is not pressed");

   });
}

  const changeColorOff= function() {

   const mountains = document.querySelectorAll('.mountain');
  
     mountains.forEach(function(){
     mountains.setAttribute('animation', {property:'material.color', from:'#91433f', to:'#3c2050', loop:true,dur:20000, easing:'easeInOutQuad', enabled:true});
     console.log("mountain is pressed");

    });
}