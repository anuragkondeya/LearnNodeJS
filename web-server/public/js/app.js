const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

const fetchWeatherData = (url) => {
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.forecast
                message2.textContent = data.location
            }
        })
    })
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    message1.textContent = "Searching..."
    message2.textContent = ""
    const location = search.value
    const url = "/weather?address=" + location
    fetchWeatherData(url)

})