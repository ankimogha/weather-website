const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW5raXRtb2doYSIsImEiOiJja25yNzVicXEwNjVoMm5wanltY3Fka3VwIn0.Gzjxvgk-hpEdbbRhK_7c5Q&limit=1'
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Location Services',undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.',undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode




// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/New%20Delhi.json?access_token=pk.eyJ1IjoiYW5raXRtb2doYSIsImEiOiJja25yNzVicXEwNjVoMm5wanltY3Fka3VwIn0.Gzjxvgk-hpEdbbRhK_7c5Q&limit=1'

// request({url:geocodeURL , json:true} , (error,response)=> {
//     if (error) {
//         console.log(chalk.red.inverse.bold('Unable to connect to Location Services'))
//     } else if(response.body.features.length===0) {
//         console.log(chalk.red.inverse.bold('Unable to find the location Please try again with different search term '))
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log('longitude of New Delhi is : '+longitude +' . latitude of New Delhi is : ' +latitude)
//     }
// })