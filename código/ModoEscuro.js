function dark() {
    const darkMode = document.body;
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "rgb(74, 80, 94)";

    const bunner = document.querySelector("#banner");
    bunner.style.borderTop = "2px solid black";
    
    const darkButtonS = document.querySelector("#darkmod");
    darkButtonS.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const darkModeB = document.querySelector("#darkmod");
    darkModeB.addEventListener("click", dark);
});