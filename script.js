const taskInput = document.getElementById("taskInput");
const startBtn = document.getElementById("startBtn");
const currentTask = document.getElementById("currentTask");

let currentActivity = "";
let seconds = 0;
let timer = null;
    startBtn.addEventListener("click", () => {
    currentActivity = taskInput.value;
    if (currentActivity === "") {
        return;
    }
    taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startBtn.click();
    }
});
    currentTask.textContent = currentActivity;
    taskInput.value = "";
    seconds = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const mins = String(
            Math.floor((seconds % 3600) / 60)
        ).padStart(2, "0");
        const secs = String(
            seconds % 60
        ).padStart(2, "0");
        currentTask.textContent =
        `${currentActivity} | ${hrs}:${mins}:${secs}`;

    }, 1000);

});