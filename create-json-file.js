const fs = require('file-system');
const {
    promisify
} = require('util');


module.exports = async function createJSONFile(json,filename) {
    try {
        console.log(json);
        const writeFile = promisify(fs.writeFile);
        var fileTowrite = '/tmp/'+ filename;
        await writeFile(fileTowrite, Buffer.from(json, 'utf8')).then(function () {
            console.log('completed wrirting file !');
        }).catch(function (error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
}