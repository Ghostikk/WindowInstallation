
const validationForms = (width, height, btn) => {
    if (!width[0].value || !height[0].value) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
};
export default validationForms;