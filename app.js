const timerDisplay = document.querySelector(".timerdisplay");
const [startBtn, stopBtn, resetBtn] = ["startBtn", "stopBtn", "resetBtn"].map((id) => document.getElementById(id));

let [msec, secs, mins] = [0, 0, 0];
let timerId;

const updateDisplay = () => (timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(msec).padStart(2, '0')}`);

const startTimer = () => {
    if (++msec === 100) {
        msec = 0;
        if (++secs === 60) {
            secs = 0;
            mins++;
        }
    }
    updateDisplay();
};

startBtn.addEventListener('click', () => {
    if(timerId) clearInterval(timerId);
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => clearInterval(timerId));

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    [msec, secs, mins] = [0, 0, 0];
    updateDisplay();
});