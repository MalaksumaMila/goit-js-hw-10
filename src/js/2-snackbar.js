// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form')
const inputInterval = document.querySelector('input[type="number"]');
const btn = document.querySelector('button');

form.addEventListener ("submit", (event) => {
    event.preventDefault();

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
    
const isPromise = inputPromise.value;

 new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPromise === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(() => {
      console.log (`✅ Fulfilled promise in ${delay}ms`,)
      iziToast.success({
        title: 'Готово',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
      });
    })
    .catch(() => {
      console.log (`❌ Rejected promise in ${delay}ms`
)
      iziToast.error({
        title: 'Помилка',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
      });
    });
  });
