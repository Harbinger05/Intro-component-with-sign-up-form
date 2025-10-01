const form = document.querySelector('form')
const err = document.querySelectorAll('.error')
const input = document.querySelectorAll('input')
const emailInput = document.querySelector('#email')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    input.forEach((input) => {
        if (input.value === '') {
            err.forEach((err) => {
                err.style.opacity = '1'
                input.style.borderColor = 'hsl(0, 100%, 74%)'
                input.placeholder = ''
                emailInput.placeholder = 'email@example.com'
                emailInput.classList.add('active')
            })
        }
        else {
            err.forEach((err) => {
                err.style.opacity = '0'
                input.style.borderColor = 'hsl(260, 2%, 69%)'

                if (input.id === 'f-name') input.placeholder = 'First Name';
                if (input.id === 'l-name') input.placeholder = 'Last Name';
                if (input.id === 'email') emailInput.placeholder = 'Email Address';
                if (input.id === 'password') input.placeholder = 'Password';

                emailInput.classList.remove('active')
                
                input.value = ''
            })
        }
    })
})