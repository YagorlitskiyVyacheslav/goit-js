import './styles.css';

const ref = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]')
};
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
class GenerateRandomColor {
    constructor () {
    this.intervalId = null;  
    }
start() {
    this.intervalId = setInterval(() => {
        document.body.style = `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]};`;
    }, 1000);
    ref.buttonStart.disabled = true;
}
stop() {
    console.log(this)
    clearInterval(this.intervalId);
    this.intervalId = null;
    ref.buttonStart.disabled = false;
}
}
const randomColor = new GenerateRandomColor();
// randomColor.start
// const GenerateRandomColor = {
//     intervalId: null,
//     start() {
//          this.intervalId = setInterval(() => {
//         document.body.style = `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]};`;
//         }, 1000);
//         ref.buttonStart.disabled = true;
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.intervalId = null;
//         ref.buttonStart.disabled = false;
//     }
// } 

ref.buttonStart.addEventListener('click', randomColor.start.bind(randomColor));
ref.buttonStop.addEventListener('click', randomColor.stop.bind(randomColor));
