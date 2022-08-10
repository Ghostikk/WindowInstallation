const checkNumber = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            //если не число замена на ""
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumber;