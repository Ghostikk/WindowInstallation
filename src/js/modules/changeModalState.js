import checkNumber from './checkNumber';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumber('#width');
    checkNumber('#height');

    function byActionToElems (event, elem, keyObject) {
        elem.forEach((item, index) => {
            item.addEventListener(event,() => {
                if (elem.length > 1) {
                    state[keyObject] = index+1;
                } else {
                    state[keyObject] = item.value;
                }
                
                console.log(state);
          });
      });
    }

    byActionToElems ('click', windowForm, 'windowForm');
    byActionToElems ('input', windowWidth, 'windowWidth');
    byActionToElems ('input', windowHeight, 'windowHeight');
};  

export default changeModalState;