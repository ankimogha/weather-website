const request = require('request')

const forecast = (latitude, longitude , callback) => { 
const url = 'http://api.weatherstack.com/current?access_key=cc3997f0accff7806aca7b5bdbd1bbd1&query=' + latitude + ',' + longitude
request({ url:url , json:true },(error,response)=> {
    if (error) {
        callback('Unable to connect to Web Services',undefined)
    } else if (response.body.error) {
        callback('Unable to find the location',undefined)
    } else {
        callback(undefined, response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degress out. But it feels like ' + response.body.current.feelslike + ' degress out.')
    }
})

 }


module.exports = forecast






// const url = 'http://api.weatherstack.com/current?access_key=cc3997f0accff7806aca7b5bdbd1bbd1&query=37.8267,-122.4233'

// request({ url:url , json:true },(error,response)=> {
//     if (error) {
//         console.log(chalk.red.inverse.bold('Unable to connect to Web Services'))
//     } else if (response.body.error) {
//         console.log(chalk.red.inverse.bold('Unable to find the location'))
//     } else {
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degress out . But it feels like ' + response.body.current.feelslike + ' degress out .')
//     }
// })
