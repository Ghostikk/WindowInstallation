const forms = () => {
    const form = document.querySelectorAll('form'),
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
};

export default forms;