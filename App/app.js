function actSilly(){
    let farmerGlizbag = document.getElementById("farmer-glizbag");
    let keyframes = [
        { transform: 'translateX(0px) translateY(0px)' },
        { transform: 'translateX(100px) translateY(100px)' },
        { transform: 'translateX(-100px) translateY(100px)' },
        { transform: 'translateX(0px) translateY(0px)' }
      ];
    let animation = new KeyframeEffect(farmerGlizbag, keyframes, { duration: 10000 });
    let anim = new Animation(animation);
    anim.play();    
};

// I want to create a function to move the text off to the top of the screen when Glizzard is clicked

// function moveTextOffScreen(){
//     let textToMove = document.getElementById("main-text");
//     let keyframes = [
//         { transform: 'translateX(0px) translateY(10000px)'}
//       ];
//     let animation = new keyframeEffect(textToMove, keyframes, { duration: 10000 });
//     let anim = new Animation(animation);
//     anim.play();
// 
// };

// document.getElementById("move-button").addEventListener("click", moveTextOffScreen);

function freezeGlizzard(){
    let glizzardText = document.getElementById("Glizzard-Title")
    // I want to create a frozen theme for the text
};