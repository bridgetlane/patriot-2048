// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "img/212/212_2.png",
        "img/212/212_4.png",
        "img/212/212_8.png",
        "img/212/212_16.png",
        "img/212/212_32.png",
        "img/212/212_64.png",        
        "img/212/212_128.png",
        "img/212/212_256.png",
        "img/212/212_512.png",        
        "img/212/212_1024.png",
        "img/212/212_2048.png",
        "img/114/114_2.png",
        "img/114/114_4.png",
        "img/114/114_8.png",
        "img/114/114_16.png",
        "img/114/114_32.png",
        "img/114/114_64.png",        
        "img/114/114_128.png",
        "img/114/114_256.png",
        "img/114/114_512.png",        
        "img/114/114_1024.png",
        "img/114/114_2048.png",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
