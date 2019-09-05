
const request = require('request')

const darkSkyKey = 'c83fdeb11eb09d52789716f93441b52a'

const performWeatherRequest = (lat, lng,placeName, callback) => {

    const url = 'https://api.darksky.net/forecast/'+darkSkyKey+'/' + encodeURIComponent(lat) + ',' + encodeURIComponent(lng) + '?units=si'
    request(url, (error, response, body) =>  {
        if (error) {
            callback(error,undefined,undefined,undefined)
        } else {
            const bodyJson = JSON.parse(body)
            const {temperature, precipProbability: chancesOfRain} = bodyJson.currently  //Destructuring
            callback(error, temperature, chancesOfRain,placeName)
        }
    })

}

module.exports = {
    performWeatherRequest,
}