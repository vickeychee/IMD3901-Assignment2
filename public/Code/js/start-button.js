//this script is responsible for displaying the loading gif and start button
AFRAME.registerComponent('start-experience', {
    init: function () {
      document.querySelector('#loading-animation').style.display='none';
      document.querySelector('#user-gesture-button').style.display='block';
    }
  });

  const startExperience = function() {
    //hiding  user-gesture overlay
    document.querySelector('#user-gesture-overlay').style.display='none';
    
    //start all ambient music
    const ambientSounds = document.querySelectorAll('.ambient-music');
    ambientSounds.forEach(function(soundEntity) {
    soundEntity.components.sound.playSound();
    
    
  });
}