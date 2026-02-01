const email = document.getElementById('email')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const btn = document.getElementById('btn')
const form = document.getElementById('form')
const empty = document.getElementById('empty')
const error = document.getElementById('error')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})
btn.addEventListener('click', () => {
    if (email.value.trim() === "") {
        empty.classList.add('show-empty')
    }
    else if (!regex.test(email.value.trim())) {
        error.classList.add('show-error')


    }
    else {
        alert("SENT")
    }
})
email.addEventListener('input', () => {
    empty.classList.remove('show-empty')
    if (regex.test(email.value.trim()) || email.value.trim() === "") {
        error.classList.remove('show-error')
    }
})