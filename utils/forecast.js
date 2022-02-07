const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=df0a1645d70ab89763c0b1bea96f6bbf&query=' + latitude + ',' + longitude ;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,   ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast