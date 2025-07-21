// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


   iziToast.success({
  title: 'Готово',
  message: '✅ Fulfilled promise in ${delay}ms',
  position: 'topRight',
  timeout: 3000,
});

iziToast.error({
  title: 'Помилка',
  message: 'Rejected promise in ${delay}ms',
  position: 'topRight',
  timeout: 3000,
});

const inputInterval = document.querySelector('input[type="number"]');
const btn = document.querySelector('button');

btn.addEventListener ("click", (element) => {
    element.preventDefault();

    const delay = Number(inputInterval.value);
    const inputPromise = document.querySelector('input[name="state"]:checked');

if (!delay || !inputPromise) {
     iziToast.warning({
      title: 'Увага',
      message: 'Будь ласка, заповніть усі поля',
      position: 'topRight',
    });
    return;
}
    
const isFulfilled = inputPromise.value === "fulfilled";
const isRejected = inputPromise.value === "rejected";



})
