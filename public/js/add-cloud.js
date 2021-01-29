//this script turns the clouds visibilty on

AFRAME.registerComponent('add-cloud', {
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
            Context_AF.cloud.setAttribute("visible",true); //turning visibility on
            Context_AF.isButtonPressed = false;
        }
        else {
            Context_AF.cloud.setAttribute("visible",true); //turning visibility on
            Context_AF.isButtonPressed = true;
        }
      });
    },
  });