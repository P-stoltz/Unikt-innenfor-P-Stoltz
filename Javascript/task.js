document.getElementById("addTaskButton").addEventListener("click", addtask)
document.getElementById("removeTaskButton").addEventListener("click", removeTask)

function addtask() {
    let task = document.getElementById("taskInput").value

    let listItem = document.createElement("li");
    listItem.textContent = task

    document.getElementById('taskList').appendChild(listItem)
}
function removeTask() {
    let task = document.getElementById("taskInput").value;
    let taskList = document.getElementById('taskList');
    let listItems = taskList.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++){
        if (listItems[i].textContent === task) {
            taskList.removeChild(listItems[i]);
            return
        }
    }
    document.getElementById('taskList').appendChild(listItem)
}

let humanScore = 0;
let computerScore = 0;

document.getElementById("play").addEventListener("click", function () {
    const choices = ["stein", "papir", "saks"];
    const userChoice = document.getElementById("choice").value;
    const robotChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = `Du valgte ${userChoice}. Robot valgte ${robotChoice}. `;
    if (userChoice === robotChoice) {
        resultMessage += "Det ble uavgjort!";
    } else if (
        (userChoice === "stein" && robotChoice === "saks") ||
        (userChoice === "papir" && robotChoice === "stein") ||
        (userChoice === "saks" && robotChoice === "papir")
    ) {
        resultMessage += "Du vant!";
        humanScore++;
    } else {
        resultMessage += "Robot vant!";
        computerScore++;
    }

    document.getElementById("result").textContent = resultMessage;
    document.getElementById("score").textContent = `Poeng: Du - ${humanScore}, Robot - ${computerScore}`;
});
