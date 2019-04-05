const fs = require('file-system');
const {promisify} = require('util');
const cloudstorageupload = require('./cloud-storage-upload');

module.exports = async function createJSONFile(json,bucketName,filePath,destination){
    try {

    const writeFile = promisify(fs.writeFile);

    await writeFile('/tmp/work.json', Buffer.from(json, 'utf8')).then(function(){
        cloudstorageupload(bucketName,filePath,destination);
    });
    } catch (error) {
        console.log(error);
    }
}
