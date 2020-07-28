import './styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start () {
        setInterval(() => {
            const nowDate = new Date();
            const deltaTime = +this.targetDate - +nowDate;
            console.log(deltaTime.getDate())
            return this.updateClockface(deltaTime);
        }, 1000); 
    }
    updateClockface(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        const refs = {
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]'),
        }
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;

    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
};

const FirstTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 1, 2020'),
});

FirstTimer.start()

