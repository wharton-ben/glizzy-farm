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

function freezeGlizzard(){
    let glizzardText = document.getElementById("Glizzard-Title");
    glizzardText.style.fontSize = ".5px";
    // I want to create a frozen theme for the text
};

function changeBackgroundColor(){
    // let farmColor = document.getElementsByTagName("Body");
    // farmColor[0].style.backgroundcolor = "green";
    actSilly();
    let bgcolor = document.getElementById("mainbody");
    bgcolor.style.backgroundColor = "green";

};

function moveTextOffScreenUpward(){
    let allTextOnScreen = document.getElementById("allText");
    
};

function controlFarmerGlizBag(){
    const glizbag = document.getElementById("farmer-glizbag");
    let xPos = 0;
    let yPos = 0;

    document.addEventListener("keydown", function(event){
        switch(event.key) {
            case "ArrowUp":
                yPos -= 10;
                break;
            case "ArrowDown":
                yPos += 10;
                break;
            case "ArrowLeft":
                xPos -= 10;
                break;
            case "ArrowRight":
                xPos += 10;
                break;
            default:
                return;
        }

        glizbag.style.top = yPos + "px";
        glizbag.style.left = xPos + "px";
    });

};
function playGame(){
    // This will be the function that will start the game
    let mainWindow = document.getElementById("mainbody");
    mainWindow.innerHTML = "";
    changeBackgroundColor();
    mainWindow.innerHTML = '<img src="Images/glizbag.gif" alt="Glizbag" id="farmer-glizbag" onclick="controlFarmerGlizbag()"></img>';
    controlFarmerGlizBag();
};