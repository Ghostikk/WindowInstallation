import checkNumber from './checkNumber';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
    //Создаем объект с сообщениями, которые будет выводить пользователю
    const mess = {
          loading: 'Ожидайте, идет загрузка...',
          success: 'Спасибо! Скоро мы свяжемся с вами!',
          failure: 'Что-то пошло не так...'
    };

    // функция для отправки запроса (асинх)
    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = mess.loading;
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await result.text();
    };
    // Очищаем импуты форм
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };
    //
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            // Создаем блок для оповещения пользователя
            let statusMessadge = document.createElement('div');
            statusMessadge.classList.add('status');
            item.appendChild(statusMessadge);

            //сборка данных с формы (нужно учеть в каком формате их примет сервер и подкорректировать при необходимости)
            const formData = new FormData(item);
            // если у объекта item появляется атрибут data-calc = 'end' (последнее модальное окно), то добавляем туда еще данные 
            if(item.getAttribute('data-calc') === 'end') {
                for (let  key  in state) {
                    formData.append(key, state[key]);
                }
            }
            // впревращает объект в матрицу (массив массивов), далее в объект, а далее в JSON
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // обработка промиса формы
            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessadge.textContent = mess.success;
                })
                .catch(() => {
                    statusMessadge.textContent = mess.failure; 
                })
                .finally(() => {
                    clearInputs();

                    setTimeout(() => {
                        statusMessadge.remove();
                    },5000);

                });

        });
  });

    //проверка, чтобы пользователь ввел в поле input[name="user_phone"] только цифры
    checkNumber ('input[name="user_phone"]');
};

export default forms;