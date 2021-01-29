//this script turns the clouds visibiltiy off

AFRAME.registerComponent('del-cloud', {
    schema: {
      duration: {type: 'number', default:20000.0},
    },
    init: function() {
      
      const Context_AF = this;
      Context_AF.cloud = document.querySelector('#cloud-group');
      Context_AF.isButtonPressed = false;
      
      //listen on click
      Context_AF.el.addEventListener('click', function() {
        if (Context_AF.isButtonPressed === true) {
            Context_AF.cloud.setAttribute("visible",false); //turning visibility off
            Context_AF.isButtonPressed = false;
        }
        else {
            Context_AF.cloud.setAttribute("visible",false); //turning visibility off
            Context_AF.isButtonPressed = true;
        }
      });
    }, 
  });