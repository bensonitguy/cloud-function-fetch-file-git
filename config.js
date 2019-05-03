var config = {};

config.projectId = ''; // Name of your project
config.keyRingId = ''; // Name of the crypto key's key ring
config.cryptoKeyId = ''; // Name of the crypto key, e.g. "my-key"
config.ciphertextFileName = './Constants.js.encrypted'; // encrypted file name
config.plaintextFileName = '/tmp/Constants.js'; // plain text file to be written.

config.filePath = '/tmp/'; // temporary folder
config.destination = '/admin/standard/'; // cloud storage destination folder
config.decoded_file_content = "test"; //default file content
config.bucketName = ''; // Google Cloud Storage Bucket name

config.repository_path = '/repos/{github-name}/{repo-name}/contents/'; // Github repo path to reterive the file

config.file_list = ['package.json','src/index.js']; // list of file to be upload if updated in github.

module.exports = config;