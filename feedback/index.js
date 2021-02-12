const request = require('request');
var querystring = require('querystring');

exports.handler = async (event) => {
    let url = 'https://ba-restaurant-chatbot.cedexdemo.in/api/feedback';
    switch(event.options.rating){
        case "one": event.options.rating = 1;
        break;
        case "two": event.options.rating = 2;
        break;
        case "three": event.options.rating = 3;
        break;
        case "four": event.options.rating = 4;
        break;
        case "five": event.options.rating = 5;
        break;
        default: break
    }
    return new Promise((resolve, reject) => {
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
                resolve("Thank you. We appreciate your feedback.");
            }
        });
    });

}
