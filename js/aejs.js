//HIDE JS DISABLED NOTICE
$('.jsDisabled').hide();

//SHOW BIOBUTTON
$('.bioButton').show();

//--------------------------------------------------------------RADIO-----------------------------------------------------------------
//ESTABLISH MUSIC OFF WITH VARIABLE SET TO FALSE
var currentPlay = false; 

//CREATE BACKBUTTON VARIABLE
const backButton = document.querySelector("button.backButton");

//CREATE BIO VARIABLE
const bio = document.querySelector("div#bio");

//CREATE BIOBUTTON VARIABLE
const bioButton = document.querySelector("button.bioButton");

//CREATE EVENT LISTENER
//HIDE BIO WHEN BACKBUTTON CLICKED
backButton.addEventListener("click", () => {
    bio.style.display ="none";
});

//CREATE EVENT LISTENER
//SHOW BIO WHEN BIOBUTTON CLICKED
bioButton.addEventListener("click", () => {
    bio.style.display ="initial";
});

//PLAY ON CLICK
$('.Off').on('click', function() {
    $(this).hide();
    if (currentPlay == true) {
        $('.audioPlayers').trigger('pause');
        $('.Off').show();
        $('.On').hide();
    }
    $(this).prev().trigger('play');
    $(this).next().show();
    currentPlay = true;
});

//PAUSE ON CLICK
$('.On').on('click', function() {
    $(this).hide();
    $(this).prev().prev().trigger('pause');
    $(this).prev().show();
});

//FUNCTION TO DISPLAY HINT IF USER DOES NOT CLICK ON SONGBUTTONS AND TIMER WILL RESET IF USER ONLY CLICKS ON BIO
$(document).ready(function() {
    //SET TIMER VALUE
    let timer = 0;
    //SET HINT VALUE
    let hint = true;
    //CREATE COUNTER
    let seconds = setInterval(stopWatch, 1000);
    //SET HINT TO FALSE IF USER CLICKS ON SONGBUTTONS
    $('.songButton').on('click', function() {
      hint = false;
    });
    //RESET TIME IF MOUSE ENTERS SONGBUTTONS OR SOUNDCLOUDBUTTON
    $('.songButton').on('mouseenter mouseleave', function() {
       timer = 0; 
    });
    $('.bioButton').on('mouseenter', function() {
        timer = 0;
    });
    //RESET TIME IF USER CLICKS OR MOUSEENTERS BIOBUTTON
    $('.bioButton').on('click', function() {
        timer = -15;
    });
    //  CREATE STOPWATCH FUNCTION TO DISPLAY HINT IF TIMER REACHES 15 SECONDS AND HINT IS TRUE
    function stopWatch() {
        timer++;
        if (timer == 15 && hint == true) {
            $('.hints').fadeIn(2000).delay(5000).fadeOut(2000);
        }
    }
});


