// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  seconds: document.querySelector('[data-seconds]'),
  minutes: document.querySelector('[data-minutes]'),
  hours: document.querySelector('[data-hours]'),
  days: document.querySelector('[data-days]'),

  start: document.querySelector('[data-start]'),
  text: document.querySelector('#datetime-picker'),
};
refs.start.disabled = true;
refs.start.addEventListener('click', timer);

// функция таймера

function timer() {
  refs.text.disabled = true;
  refs.start.disabled = true;
  setInterval(() => {
    const difference = picker - Date.now();
    if (difference < 0) {
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(difference);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }, 1000);
}

// функция выбора даты

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const datePicker = Date.parse(selectedDates[0]);
    console.log(datePicker);
    picker = selectedDates[0];
    pastDate(selectedDates[0]);
  },
};
flatpickr(refs.text, options);

const todayDate = new Date();
// функция запрета выбора прошедшей даты
const pastDate = date => {
  if (date < todayDate) {
    Notiflix.Notify.failure('Please choose a date in the future.');
    refs.start.disabled = true;
  } else refs.start.disabled = false;
};

function addingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addingZero(Math.floor(ms / day));

  const hours = addingZero(Math.floor((ms % day) / hour));

  const minutes = addingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
