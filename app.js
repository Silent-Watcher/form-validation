const inputs = Array.from(document.getElementsByClassName('char_input'));
console.log('🚀 ~ file: app.js ~ line 2 ~ inputs', inputs);
const seePassIcons = Array.from(
  document.getElementsByClassName('see_Password')
);
const rememberMeInputs = document.getElementsByClassName('remember_input');
const signupForm = document.getElementById('signup__form');
const loginForm = document.getElementById('login__form');
const showSignUpBtn = document.getElementById('sign_up_ct_link');
const showLoginBtn = document.getElementById('login_ct_link');
const passWordStatus = document.getElementById('password_status');

// initial bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
//

inputs.forEach((input) => {
  // input label animation & emptiness check
  input.addEventListener('blur', function () {
    passWordStatus.hidden = true;
    if (this.value !== '') {
      this.nextElementSibling.classList.add('filled');
      this.parentElement.lastElementChild.hidden = true;
      this.style.borderColor = '#404040';
    } else {
      this.parentElement.lastElementChild.hidden = false;
      this.parentElement.lastElementChild.style.color = '#e13a5a';
      const tooltip = new bootstrap.Tooltip(
        this.parentElement.lastElementChild,
        {
          title: 'the value is empty !😑',
          placement: 'right',
          customClass: 'custom_tooltip',
        }
      );
      this.style.borderColor = '#e13a5a';
      this.nextElementSibling.classList.remove('filled');
    }
  });
  //   
  input.addEventListener('focus', function () {
    if(this.type === 'password'){
        if (this.value.length > 0) passWordStatus.hidden = false;
        else passWordStatus.hidden = true;
    }
    this.parentElement.lastElementChild.hidden = true;
    this.style.borderColor = 'peru';
  });
  if (input.type === 'password') {
    input.addEventListener('input', function () {
        passWordStatus.hidden = false;
      if (input.value.length > 0 && input.value.length < 8) {
        passWordStatus.style.color = '#fd7e14';
        passWordStatus.innerHTML =
          'password is weak <i class="fa-solid fa-circle-exclamation"></i>';
      } else if (input.value.length >= 8) {
        passWordStatus.innerHTML ='password is strong 💪';
          passWordStatus.style.color = '#90ee90';
      } else {
        passWordStatus.hidden = true;
      }
    });
  }
});
//  data-bs-toggle="tooltip" data-bs-title="Default tooltip"
// show & hide password
seePassIcons.forEach((seePassIcon) => {
  seePassIcon.addEventListener('click', function () {
    if (this.classList.contains('fa-eye-slash')) {
      this.nextElementSibling.type = 'password';
      this.classList.remove('fa-eye-slash');
    } else {
      this.nextElementSibling.type = 'text';
      this.classList.add('fa-eye-slash');
    }
  });
});
// show & hide password

// form animations
showSignUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  signupForm.classList.remove('animate__backOutUp');
  signupForm.classList.add('animate__backInDown');
  signupForm.style.zIndex = 2;
  signupForm.style.transform = 'translateY(0)';
});
showLoginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  signupForm.classList.add('animate__backOutUp');
});
// form animations
