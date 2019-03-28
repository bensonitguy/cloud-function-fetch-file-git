const fs = require('fs');

module.exports = async function createJSONFile(json){
    try {
        
    fs.writeFile('work.json', json, 'utf8',function(){});

    console.log("created json file work.json");
    } catch (error) {
        console.log(error);
    }
}
