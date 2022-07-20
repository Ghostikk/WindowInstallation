const forms = () => {
    const form = document.querySelectorAll('form'),
<<<<<<< HEAD
          input = document.querySelectorAll('input');

    const message = {
        loaging: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжутся!',
        failure: 'Что-то пошло не так...'
    }


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMassage = document.createElement('div');
            statusMassage.classList.add('status');
            item.appendChild(statusMassage);
        })
    })
=======
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');
          
    //Создаем объект с сообщениями, которые будет выводить пользователю
    const mess = {
          loading: 'Ожидайте, идет загрузка...',
          success: 'Спасибо! Скоро мы свяжемся с вами!',
          failure: 'Что-то пошло не так...'
    };

    //проверка, чтобы пользователь ввел в поле input[name="user_phone"] только цифры
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            //если не число замена на ""
            item.value = item.value.replace(/\D/, '');
        });
    });

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
>>>>>>> 702d8cad77e41cbf80404fb7967c51b6b2a2e7d4
};

export default forms;