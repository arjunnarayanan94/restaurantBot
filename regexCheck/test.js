let handler = require('./index');
let e = {
    str: "02-02-2020",
    pat: "Date"
}
let r = handler.handler(e)
console.log(r);