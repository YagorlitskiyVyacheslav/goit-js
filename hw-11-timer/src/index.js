import './styles.css';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
}
// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

const timer = {
    start() {
        const deadline = Date.parse(new Date('Jul 30, 2019'));
        let targetDate = Date.parse(new Date('Jul 17, 2019'));
        setInterval(() => {
            const deltaTime = deadline - targetDate;
            targetDate += 1000;
            console.log(deltaTime)
            return updateClockface(deltaTime);
        }, 1000);
    }
};
timer.start()

function updateClockface(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
    
}

function pad(value) {
    return String(value).padStart(2, '0');
}

