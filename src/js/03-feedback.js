import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('[name="email"]');
const textAreaRef = document.querySelector('[name="message"]');

onResetPage();

formRef.addEventListener('input', throttle(onInputHandler, 500));

function onInputHandler(e) {
  let currentLocalStorage = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: inputRef.value, message: textAreaRef.value }),
  );
  currentLocalStorage ? JSON.parse(localStorage.getItem('feedback-form-state')) : {};
}