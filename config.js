var config = {};

config.projectId = 'pwaweathertest';
config.keyRingId = 'benKeyRing'; // Name of the crypto key's key ring
config.cryptoKeyId = 'benKey'; // Name of the crypto key, e.g. "my-key"
config.ciphertextFileName = './Constants.js.encrypted';
config.plaintextFileName = '/tmp/Constants.js';

config.filePath = '/tmp/work.json';
config.destination = '/admin/standard/work.json';
config.decoded_file_content = "test"; //default file content
config.bucketName = 'pwaweathertest.appspot.com';

config.repository_path = '/repos/bensonitguy/blogposts-with-react/contents/package.json';

config.file_list = ['package.json'];

module.exports = config;