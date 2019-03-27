const base64 = require('base-64');
const decrypt = require('./decrypt');
const jsonvalidator = require('./JsonValidation');

exports.fetchContentGit = (
	request,
	response,
	projectId = 'pwaweathertest', // Your GCP projectId
  	keyRingId = 'benKeyRing', // Name of the crypto key's key ring
  	cryptoKeyId = 'benKey', // Name of the crypto key, e.g. "my-key"
  	ciphertextFileName = './Constants.js.encrypted',
    plaintextFileName = '/tmp/Constants.js'
) => {
	var decoded_file_content = "test";
	decrypt(projectId,keyRingId,cryptoKeyId,ciphertextFileName,plaintextFileName)
	.then(function(){
		const fetchgit = require('./fetch-git');
		fetchgit.get('/repos/bensonitguy/blogposts-with-react/contents/package.json')
	.then(function(response){
		decoded_file_content = base64.decode(response.data.content);
		var jsonvalidation = jsonvalidator(decoded_file_content);
		console.log(jsonvalidation)
		
		
		}).catch(function(error){
			//console.log(error);
		});
	});
	// will throw error in terminal but will work in Cloud Functions

	response.send(decoded_file_content);

	
}
