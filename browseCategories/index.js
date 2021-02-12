const request = require('request');

exports.handler = async (event) => {
    let url = 'https://ba-restaurant-chatbot.cedexdemo.in/api/category';
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            url: url
        }
        request(options, function (err, res, body) {
            if (err) {
                console.log('error while getting api response');
                console.log(err);
                reject(err);
            } else {
                let r = JSON.parse(body);
                console.log(r.data)
                data = []
                for(let i in r.data){
                    if(r.data[i].is_active == true){
                        data.push(r.data[i]);
                    }
                }
                resolve(data);
            }
        });
    });

}
