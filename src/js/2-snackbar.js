// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


   iziToast.success({
  title: 'Готово',
  message: '✅ Fulfilled promise in ${delay}ms',
  position: 'topRight',
  timeout: this.delay,
});

iziToast.error({
  title: 'Помилка',
  message: 'Rejected promise in ${delay}ms',
  position: 'topRight',
  timeout: this.delay,
});