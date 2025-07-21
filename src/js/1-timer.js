// Описаний в документації
import flatpickr from "flatpickr";

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



   const startBtn = document.querySelector('button[data-start]');
const dataInput = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


let userSelectedDate = null;
let countdownInterval = null;
startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const dataNow = new Date();

    if (selectedDate <= dataNow) {
    
      iziToast.warning({
    title: 'Invalid date',
    message: 'Please choose a date in the future',
    position: 'topRight',
    timeout: 3000,
  });

      startBtn.disabled = true;
      userSelectedDate = null;

    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
    }
  },
 
};
 

flatpickr(dataInput, options);

class Timer {
  start() {

    if (!userSelectedDate) return;

      startBtn.disabled = true;
    dataInput.disabled = true;
        
    countdownInterval = setInterval(() => {

      const currentTime = Date.now();

      const deltaTime =  userSelectedDate - currentTime;
     if (deltaTime <= 0) {
        clearInterval(countdownInterval);

         this.updateClock(0);
return;
}

 this.updateClock(deltaTime);
    }, 1000)
  }

  updateClock(ms) {

     const { days, hours, minutes, seconds } = this.convertMs(ms);
    dataDays.textContent = this.addLeadingZero(days);
    dataHours.textContent = this.addLeadingZero(hours);
    dataMinutes.textContent = this.addLeadingZero(minutes);
    dataSeconds.textContent = this.addLeadingZero(seconds);
  } 

  
convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
} 

addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}


const time = new Timer;

startBtn.addEventListener ("click", time.start.bind(time));





// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



