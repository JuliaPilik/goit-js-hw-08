import throttle from 'lodash.throttle';

const formRef = document.querySelector(".feedback-form");
const savedFormData = localStorage.getItem("feedback-form-state");
let parsedFormData = {};

if (savedFormData !== null) {
    try {
        parsedFormData = JSON.parse(savedFormData);
    } catch (error) {
        console.log(error.message);
    }
   
    formRef.elements.email.value = parsedFormData.email;
    formRef.elements.message.value = parsedFormData.message;
} else {
    formRef.elements.email.value = "";
    formRef.elements.message.value = "";
}
formRef.addEventListener("input", throttle(onFormInputChange,500));

function onFormInputChange(e)  {
    
    const formData = {
        email: formRef.elements.email.value,
        message: formRef.elements.message.value
    }
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const formData = {
        email: formRef.elements.email.value,
        message: formRef.elements.message.value
    }
    localStorage.clear();
    formRef.reset();
    console.log(formData);
}
