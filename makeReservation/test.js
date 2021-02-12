let handler = require('./index');
let options = {
    "name": "Frank",
    "email": "frank@gmail.com",
    "phone": "",
    "size": "4",
    "date": "2-2-201",
    "time": ""
}
let e = {
    options: options
}
handler.handler(e)