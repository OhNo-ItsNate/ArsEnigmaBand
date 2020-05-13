//HIDE JS DISABLED NOTICE
$('.jsDisabled').hide();

//SHOW BIOBUTTON
$('.bioButton').show();

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