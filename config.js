var config = {};

config.projectId = 'pwaweathertest';
config.keyRingId = 'benKeyRing'; // Name of the crypto key's key ring
config.cryptoKeyId = 'benKey'; // Name of the crypto key, e.g. "my-key"
config.ciphertextFileName = './Constants.js.encrypted';
config.plaintextFileName = '/tmp/Constants.js';

config.filePath = '/tmp/';
config.destination = '/admin/standard/';
config.decoded_file_content = "test"; //default file content
config.bucketName = 'pwaweathertest.appspot.com';

config.repository_path = '/repos/bensonitguy/blogposts-with-react/contents/';

config.file_list = ['package.json','src/index.js'];

module.exports = config;