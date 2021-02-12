const request = require('request');

exports.handler = async (event) => {
    let url = 'https://ba-restaurant-chatbot.cedexdemo.in/api/restaurant';
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
                let addr = r.data.name + "\n" + r.data.address + "\n" + r.data.phone + "\n" + r.data.email + "\n" + r.data.website
                let about = r.data.about
                let name = r.data.name
                let cuisines = r.data.cuisines
                let parking_details = r.data.parking_details
                let payment_options = r.data.payment_options
                let dining_style = r.data.dining_style
                let opening_hours = r.data.opening_hours
                let offers_discounts = r.data.offers_discounts
                let banner = r.data.banner
                let data = {
                    about: about,
                    addr: addr,
                    name: name,
                    c: cuisines,
                    pd: parking_details,
                    py: payment_options,
                    op: opening_hours,
                    ds: dining_style,
                    off: offers_discounts,
                    bann: banner
                }
                resolve(data);
            }
        });
    });

}
