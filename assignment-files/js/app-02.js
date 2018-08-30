/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

var registerForm = document.forms['registration-form']
// console.log(registerForm);

document.querySelector('.btn').addEventListener('click', function Validation(e){
  e.preventDefault()

/*USERNAME VALIDATION*/
  var userName = registerForm.elements.username.value
  var userNameFeedBack = registerForm.querySelector('.validation--username')

  if (userName === '' ) {
    userNameFeedBack.textContent = 'Username cannot be blank'
  }
  if (userName !== '' ) {
    userNameFeedBack.textContent = 'Success'
  }

/*PASSWORD VALIDATION*/
  var passwordEl = registerForm.elements.userpassword.value
  var passwordFeedBack = registerForm.querySelector('.validation--user-password')

  if (passwordEl.length < 8) {
    passwordFeedBack.textContent = "Password must have at least 8 characters"
  }
  if (passwordEl.length >= 8) {
    passwordFeedBack.textContent = "Success"
  }

/*PASSWORD CONFIRMATION VALIDATION*/
  var passwordConfEl = registerForm.elements.confirmpassword.value
  var passwordConfFeedBack = registerForm.querySelector('.validation--confirm-password')

  if (passwordConfEl !== passwordEl) {
    passwordConfFeedBack.textContent = "Passwords must match"
  }
  if (passwordConfEl === passwordEl) {
    passwordConfFeedBack.textContent = "Success"
  }

/*TAX ID VALIDATION*/
  var taxIdEl = registerForm.elements.taxid.value
  var taxIdFeedback = registerForm.querySelector('.validation--tax-id')

  if (taxIdEl === '') {
    taxIdFeedback.textContent = 'Must provide a Tax ID'
  }
  if (taxIdEl.length === 10 && /^([0-9]{10})$/i.test(taxIdEl)) {
    taxIdFeedback.textContent = 'Success'
  }
  if (!(taxIdEl.length === 10 && /^([0-9]{10})$/i.test(taxIdEl))) {
    taxIdFeedback.textContent = 'Tax ID must be a 10 digit number'
  }

/*ACCOUNT TYPE VALIDATION*/
  var accountTypeEl = registerForm.elements.account.value
  var accountTypeFeedBack = registerForm.querySelector('.validation--account')

  if (accountTypeEl === '') {
    accountTypeFeedBack.textContent = 'Must select an account type'
  }
  if (accountTypeEl !== '') {
    accountTypeFeedBack.textContent = 'Success'
  }

/*CHECKBOX VALIDATION*/
  var checkboxEl = registerForm.elements.termsofservice
  var checkboxFeedback = registerForm.querySelector('.validation--terms-of-service')

  if (checkboxEl.checked === true) {
    checkboxFeedback.textContent = 'Success'
  }
  if (checkboxEl.checked !== true) {
    checkboxFeedback.textContent = 'Must accept terms & conditions'
  }
})
