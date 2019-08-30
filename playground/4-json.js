const request = require('request')
const location = (lat, lng) => {
    console.log('Lat ' + lat + ' Lng' + lng); 
}

const getGeoCode = (name,callback) => {
    const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+name+'.json?access_token=pk.eyJ1IjoiYW51cmFna29uZGV5YSIsImEiOiJjanp2NmlpN3YwbmxrM2RxcTdzenF1MmwzIn0.aXROPict7P6o7dphjsNcjg'
    
    request({url : geoCodingUrl, json :true}, function (error, response) {
        if(error){
            console.log('Unable to fecth geocoding data')
        } else if(response.body.features === undefined) {
            console.log('something went wrong')
        } else{
        const lat = response.body.features[0].center[1]
        const lng = response.body.features[0].center[0]
       callback(lat,lng)
        }
      
    })
}
getGeoCode("Mumbai",location)