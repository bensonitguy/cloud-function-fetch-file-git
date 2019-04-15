const fs = require('file-system');
const {
    promisify
} = require('util');


module.exports = async function createJSONFile(json) {
    try {
        console.log(json);
        const writeFile = promisify(fs.writeFile);

        await writeFile('/tmp/work.json', Buffer.from(json, 'utf8')).then(function () {

        }).catch(function (error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
}