// Lytter etter klikk på "addTaskButton" og kaller addtask-funksjonen
document.getElementById("addTaskButton").addEventListener("click", addtask);
// Lytter etter klikk på "removeTaskButton" og kaller removeTask-funksjonen
document.getElementById("removeTaskButton").addEventListener("click", removeTask);

// Funksjon for å legge til en oppgave i listen
function addtask() {
    // Henter verdien som er skrevet inn i tekstboksen
    let task = document.getElementById("taskInput@").value;

    // Lager et nytt listeelement <li>
    let listItem = document.createElement("li");
    // Setter tekstinnholdet til oppgaven
    listItem.textContent = task;

    // Legger til det nye listeelementet i ul-elementet med id "taskList"
    document.getElementById('taskList').appendChild(listItem);
}

// Funksjon for å fjerne en oppgave fra listen
function removeTask() {
    // Henter verdien som er skrevet inn i tekstboksen
    let task = document.getElementById("taskInput").value;
    // Henter <ul> med id "taskList"
    let taskList = document.getElementById('taskList');
    // Henter alle <li>-elementer i listen
    let listItems = taskList.getElementsByTagName('li');

    // Itererer gjennom alle listeelementene
    for (let i = 0; i < listItems.length; i++) {
        // Hvis tekstinnholdet i <li> matcher oppgaven som skal fjernes
        if (listItems[i].textContent === task) {
            // Fjerner <li> fra <ul>
            taskList.removeChild(listItems[i]);
            return; // Stopp funksjonen etter å ha fjernet oppgaven
        }
    }

    // Denne linjen ser ut til å være unødvendig, da den prøver å legge til listItem som ikke er definert
    // document.getElementById('taskList').appendChild(listItem);
}

// Variabler for å holde styr på poeng
let humanScore = 0;
let computerScore = 0;

// Lytter etter klikk på "play"-knappen og starter spillet
document.getElementById("play").addEventListener("click", function () {
    // Definerer mulige valg i spillet
    const choices = ["stein", "papir", "saks"];
    // Henter brukerens valg fra input-feltet
    const userChoice = document.getElementById("choice").value;
    // Velger et tilfeldig valg for roboten
    const robotChoice = choices[Math.floor(Math.random() * choices.length)];

    // Starter med en melding om hva som ble valgt
    let resultMessage = `Du valgte ${userChoice}. Robot valgte ${robotChoice}. `;

    // Sjekker om det er uavgjort
    if (userChoice === robotChoice) {
        resultMessage += "Det ble uavgjort!";
    } else if (
        // Sjekker om brukeren vant
        (userChoice === "stein" && robotChoice === "saks") ||
        (userChoice === "papir" && robotChoice === "stein") ||
        (userChoice === "saks" && robotChoice === "papir")
    ) {
        resultMessage += "Du vant!";
        humanScore++; // Øker brukerens poengsum
    } else {
        resultMessage += "Robot vant!";
        computerScore++; // Øker robotens poengsum
    }

    // Vist resultatet på skjermen
    document.getElementById("result").textContent = resultMessage;
    // Vist poengsummene på skjermen
    document.getElementById("score").textContent = `Poeng: Du - ${humanScore}, Robot - ${computerScore}`;
});
