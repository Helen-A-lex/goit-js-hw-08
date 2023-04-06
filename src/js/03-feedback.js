import throttle from 'lodash.throttle';
const feedbackFormEl = document.querySelector('.feedback-form');

feedbackFormEl.addEventListener('submit', onFeedbackForm);
function onFeedbackForm(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });
  console.log(data);
  //   localStorage.clear();
  evt.currentTarget.reset();
}

feedbackFormEl.addEventListener('input', throttle(onFeedbackFormInput, 500));
function onFeedbackFormInput(evt) {
  const FormElements = evt.currentTarget.elements;

  let email = FormElements.email.value.trim();

  let textarea = FormElements.message.value.trim();
  const formData = {
    email: email,
    message: textarea,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  if (localStorage.getItem('email') && localStorage.getItem('message')) {
    email = localStorage.getItem('email');
    textarea = localStorage.getItem('message');
  } else {
    email === '' && textarea === '';
  }
}
//  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

//  if (storedData && storedData.email && storedData.message) {
//    email = storedData.email;
//    textarea = storedData.message;
//  }

//  FormElements.email.value = email;
//  FormElements.message.value = textarea;
