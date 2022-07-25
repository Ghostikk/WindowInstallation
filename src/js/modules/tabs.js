const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block', borderSelector = 'fadeInLeft', textSelector = '.glazing_block a') => {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector),
          text = document.querySelectorAll(textSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
            item.classList.remove(borderSelector);
          });
    }

    function showTabContent(i = 0) {
      // передаем в функци. display = 'block', чтобы утановить это значение по умолчанию. А в случае необходимости передать другое состояние дисплей
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
        tab[i].classList.add(borderSelector);
    }
    
    //Доработать плавное переключение цвета ссылок вместе с табами
    function changeColorText() {
        text.forEach(item => {
            item.classList.toggle('linkColor');
        });
    }
  
    header.addEventListener('click', (e) => {
        const target = e.target;

        // убираем точку с класса tabSelector с помощью регулярного выражения
        if (target && target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, index) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent(); 
                    showTabContent(index);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();
    changeColorText();
};


export default tabs;