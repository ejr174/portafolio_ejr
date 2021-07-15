const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#correo_contact')


$form.addEventListener('submit', (event) => {
  event.prevenDefault()

  const form = new FormData(this)

  $buttonMailto.setAttribute('href', `mailto:ejr1744@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
})





