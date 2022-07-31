import checkNumber from './checkNumber';

const changeModalState = (state) => {
    let windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumber('#width');
    checkNumber('#height');
      
    function byActionToElems (event, elem, keyObject) {
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