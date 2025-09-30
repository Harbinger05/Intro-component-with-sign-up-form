const form = document.querySelector('form')
const err = document.querySelectorAll('.error')
const input = document.querySelectorAll('input')
const emailInput = document.querySelector('.email')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    input.forEach((input) => {
        if (input.value === '') {
            err.forEach((err) => {
                err.style.display = 'block'
                input.style.borderColor = 'hsl(0, 100%, 74%)'
            })
            if(emailInput === '') {
                emailInput.value = 'email@emaple.com'
            }
        }
        else {
            err.forEach((err) => {
                err.style.display = 'none'
            })
        }
    })
})