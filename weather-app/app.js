const request = require('request')

const darkSkyKey = ''
const mapBoxToken = ''

const showWeatherData = (error, temperature, chancesOfRain,placeName) => {
    if (error) {
        console.log('Something went wrong')
    } else {
        console.log('In '+placeName +', It is currently ' + temperature + ' out there with ' + chancesOfRain + '% chances of rain');
    }
}

const performWeatherRequest = (lat, lng,placeName, callback) => {

    const url = 'https://api.darksky.net/forecast/'+darkSkyKey+'/' + encodeURIComponent(lat) + ',' + encodeURIComponent(lng) + '?units=si'
    request(url, function (error, response, body) {
        if (error) {
            callback(error)
        } else {
            const bodyJson = JSON.parse(body)
            const {temperature, precipProbability: chancesOfRain} = bodyJson.currently  //Destructuring
            callback(error, temperature, chancesOfRain,placeName)
        }
    })

}

const location = (error, lat, lng,placeName) => {
    debugger
    if (error) {
        console.log('Something went wrong while fetching location')
    } else {
        performWeatherRequest(lat, lng, placeName, showWeatherData)
    }
}

const perfromGeoRequest = (geoCodingUrl, callback) => {
    request({ url: geoCodingUrl, json: true }, function (error, response) {
        if (error) {
            callback(error)
        } else if (response.body.features === undefined || response.body.features.length === 0 ) {
            callback(error)
        } else {
            const {center, place_name: placeName } = response.body.features[0]  //Destructuring
            const lat = center[1]
            const lng = center[0]
            callback(error, lat, lng,placeName)
        }

    })
}

const getGeoCode = (name, callback) => {
    const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(name) + '.json?access_token=' + mapBoxToken
    perfromGeoRequest(geoCodingUrl, callback)
}

const place = process.argv[2]
if (place === undefined || place.length === 0) {
    console.log('Please provide a location')
} else {
    getGeoCode(place, location)
}
