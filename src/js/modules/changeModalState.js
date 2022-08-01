import checkNumber from './checkNumber';

const changeModalState = (state) => {
    let windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          buttonCalc = document.querySelectorAll('.popup_calc_button'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumber('#width');
    checkNumber('#height');
      
    

    function byActionToElems (event, elem, keyObject) {

        // тут должна быть проверка на пустоту полей windowWidth и windowHeight, если они путсые дезактивировать кнопку 
        // цикл для тестирования, без него тоже не работает
        buttonCalc.forEach (btn => {
            btn.addEventListener('click', ()=> {
                // стоит ли обращаться с значения ключей объекта? через windowHeight.value тоже не работает
                if (state.windowHeight != null && typeof state.windowHeight !== "undefined") {
                    buttonCalc.disabled = true;
                }
            });
        });

        elem.forEach((item, index) => {
            item.addEventListener(event,() => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[keyObject] = index+1;
                        break;

                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[keyObject] = 'Холодное' : state[keyObject] = 'Теплое';
                            elem.forEach((box, indexElem) => {
                                index == indexElem ? box.checked = true : box.checked = false; 
                            });
                        } else state[keyObject] = item.value;

                        

                        break;

                    case 'SELECT' : 
                        state[keyObject] = item.value;
                        break; 
                }
            
            console.log(state);

          });
      });
    }

    byActionToElems ('click', windowForm, 'windowForm');
    byActionToElems ('input', windowWidth, 'windowWidth');
    byActionToElems ('input', windowHeight, 'windowHeight');
    byActionToElems ('change', windowType, 'typeWindow');
    byActionToElems ('change', windowProfile, 'profileWindow');

  

};  

export default changeModalState;