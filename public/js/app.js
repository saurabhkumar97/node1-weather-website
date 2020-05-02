const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2') 
const messageThree = document.querySelector('#message-3') 

weather_form.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = 'Location: ' + data.Location
            messageTwo.textContent = 'Currently Temperature is ' + data.weather_data.temperature +' degrees out. ' + 'There is a ' + data.weather_data.prob_of_rain +' % chance of rain. '
            messageThree.textContent = 'weather Description: ' + data.weather_data.weather_description
            }
    })
})

})