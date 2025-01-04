var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var gameOverMessage = document.getElementById("gameOverMessage");
var gameActive = true;  // Variabel for å kontrollere om spillet er aktivt

function jump() {
    if (character.classList == "animate") {
        return;
    }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // Sjekker om blokken treffer karakteren
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130 && gameActive) {
        block.style.animation = "none";
        
        // Vist Game Over-melding på nettsiden
        gameOverMessage.textContent = "Game Over. Din score: " + Math.floor(counter / 100);
        gameActive = false; // Deaktiverer poengsum-økningen
        counter = 0;
        
        // Starter spillet på nytt etter kort tid
        setTimeout(function() {
            block.style.animation = "block 1s infinite linear";
            gameOverMessage.textContent = ""; // Fjerner Game Over-meldingen
            gameActive = true; // Aktiverer poengsum-økningen igjen
        }, 1000); // Starter på nytt etter 1 sekund
    } else if (gameActive) {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
