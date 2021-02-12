let handler = require('./index');
async function call(){
    let r = await handler.handler()
    console.log(r);
}
call();