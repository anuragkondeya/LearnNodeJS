const request = require('request')

const mapBoxToken = 'pk.eyJ1IjoiYW51cmFna29uZGV5YSIsImEiOiJjanp2NmlpN3YwbmxrM2RxcTdzenF1MmwzIn0.aXROPict7P6o7dphjsNcjg'
const perfromGeoRequest = (name, callback) => {
    const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(name) + '.json?access_token=' + mapBoxToken
    request({ url: geoCodingUrl, json: true }, function (error, response) {
        if (error) {
            callback(error)
        } else if (response.body.features === undefined || response.body.features.length === 0) {
            callback(error)
        } else {
            const { center, place_name: placeName } = response.body.features[0]  //Destructuring
            const lat = center[1]
            const lng = center[0]
            callback(error, lat, lng, placeName)
        }
    })
}

module.exports = {
    perfromGeoRequest,
}