const request = require('request');
var querystring = require('querystring');

exports.handler = async (event) => {
    let url = 'https://ba-restaurant-chatbot.cedexdemo.in/api/reservation';
    return new Promise((resolve, reject) => {
        console.log(event.options)
        var form = event.options;
        var formData = querystring.stringify(form);
        var contentLength = formData.length;
        const options = {
            headers: {
                'Content-Length': contentLength,
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            },
            method: 'POST',
            url: url,
            form: form
        }
        request(options, function (err, res, body) {
            let r = JSON.parse(body)
            if (err) {
                console.log('error while getting api response');
                console.log(err);
                reject(err);
            } else {
                // console.log(r.errors)
                if(res.statusCode == 201){
                    resolve("Thanks for sharing your details. The booking has been created. Here is your booking ID "+ r.data.id +" for future reference.");
                }
                else{
                    let x = JSON.parse(body)
                    let er = Object.keys(x.errors)
                    for(let i in er){
                        console.log("Errror ",x.errors[er[i]])
                    }
                    resolve();
                }
            }
        });
    });

}
