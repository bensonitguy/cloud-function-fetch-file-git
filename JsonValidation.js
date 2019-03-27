const jsonlint = require('jsonlint');

module.exports = function validateJson(jsonvalue){
    var json = jsonlint.parse(JSON.stringify(jsonvalue));
    console.log(json);
    if(json){
        return true;
    }else{
        return false;
    }
}