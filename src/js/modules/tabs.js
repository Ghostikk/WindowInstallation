const tabs = (headerSelector, tabSelector, contentSelector, activeClass, borderSelector, textSelector) => {
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
    };

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
        tab[i].classList.add(borderSelector);
    };
    
    // Доработать плавное переключение цвета ссылок вместе с табами
    // function changeColorText() {
    //     text.forEach(item => {
    //         item.classList.toggle('linkColor');
    //     });
    // }


    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        // убираем точку с класса tabSelector с помощью регулярного выражения
        if (target && target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, index) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent(); 
                    showTabContent(index);
                    // changeColorText();
                }
            });
        }
    });
};


export default tabs;