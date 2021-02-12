exports.handler = async (event) => {
    let str = event.str;
    let pat = event.pat;
    if (pat == "Date") {
        let r1 = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(str)
        var date = new Date()
        var month = date.getMonth() + 1;
        var day = date.getDay();
        var year = date.getFullYear();
        var currdate = new Date(month + '-' + day + '-' + year);
        console.log(currdate);
        let mydate = new Date(str);
        console.log(mydate)
        let r2 = mydate > currdate
        console.log(r1,r2)
        if (r1 == true && r2 == true) {
            return 0
        }
        else if(r1 == false){
            return 1
        }
        else if(r2 == false){
            return 2
        }
    }
    else if (pat == "Size") {
        let r =/^-?[0-9]+$/.test(str)
        return r
    }
}