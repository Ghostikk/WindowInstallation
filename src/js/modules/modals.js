const modals = () => {
  // trigger - селектор кнопки modal(close) селекторы для открытия и закрытия окна
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
            // если e.target существ., то отменяет стандартное поведение браузера
              if (e.target) {
                  e.preventDefault();
              }
              modal.style.display = 'block';
              // позволяет скролить только модальное окно, остальная страница "замораживается"
              document.body.style.overflow = 'hidden';
              // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        });  
  }

  // вызов модального окна через 60 секунд
  function showModalByTime (selector, time) {
      setTimeout(() => {
          document.querySelector(selector).style.display = 'block';
          document.body.style.overflow = 'hidden';
      }, time);
  }

  
  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  // вызываем модальное окно для .phone_link
  bindModal('.phone_link', '.popup', '.popup .popup_close');

  showModalByTime ('.popup', 60000);
};


export default modals;