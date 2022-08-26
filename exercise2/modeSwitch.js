let IsFunMode = false;
/* This is the intial value of the boolean. This function runs on a button click. */
/* I also decided to changed the 'Dark Mode' function with 'Fun Mode' which instead
changes everything around to make it ironically harder to read. I did this 
purely to experiment with colours and animations*/

function switchModes(){
    if(IsFunMode === false){
        /* If the current boolean is set to "false", define it as "normal mode :(" and keep the colours the same */
        document.documentElement.style.setProperty("--col-01", "#b700ff");
        document.documentElement.style.setProperty("--col-02", "#6fff00");
        /* Each of the elements will change to different colours cascading down the page */
        document.getElementById("bio").style.backgroundColor = "red";
        document.getElementById("bands-collab").style.backgroundColor = "yellow";
        document.getElementById("discography").style.backgroundColor = "blue";
        document.getElementById("composition").style.backgroundColor = "pink";
        document.getElementById("filmography").style.backgroundColor = "orange";
        document.getElementById("references").style.backgroundColor = "aqua";
        document.getElementById("modeButtonFUN").innerHTML = "normal mode :(";
        IsFunMode = true;
    } else{
        /* If the current boolean is set to "True", define it as "FUN MODE!" and change the colours to reflect the numbering below*/
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
        /* This defaults all the elements back to their background colour */
        document.getElementById("bio").style.backgroundColor = "#f2fbeb";
        document.getElementById("bands-collab").style.backgroundColor = "#f2fbeb";
        document.getElementById("discography").style.backgroundColor = "#f2fbeb";
        document.getElementById("composition").style.backgroundColor = "#f2fbeb";
        document.getElementById("filmography").style.backgroundColor = "#f2fbeb";
        document.getElementById("references").style.backgroundColor = "#f2fbeb";
        document.getElementById("modeButtonFUN").innerHTML = "FUN MODE!";
        IsFunMode = false;
    }
}