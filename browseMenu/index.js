const request = require('request');

exports.handler = async (event) => {
    let id = event.id.split("|");
    let flag = event.flag;
    if(flag == 1){
        let url = 'https://ba-restaurant-chatbot.cedexdemo.in/api/menu?category_id='+id[1];
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                url: url
            }
            request(options, function (err, res, body) {
                let r = JSON.parse(body)
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
    else if(flag == 2){
        let url = 'https://ba-restaurant-chatbot.cedexdemo.in/api/menu/'+id[1];
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                url: url
            }
            request(options, function (err, res, body) {
                let r = JSON.parse(body)
                if (err) {
                    console.log('error while getting api response');
                    console.log(err);
                    reject(err);
                } else {
                    let r = JSON.parse(body);
                    console.log(r.data)
                    data = r.data;                    
                    resolve(data);
                }
            });
        });
    }

}
