const base64 = require('base-64');
const decrypt = require('./decrypt');

exports.fetchContentGit = (
	projectId = '', // Your GCP projectId
  	keyRingId = '', // Name of the crypto key's key ring
  	cryptoKeyId = '', // Name of the crypto key, e.g. "my-key"
  	ciphertextFileName = '',
  	plaintextFileName = ''
) => {
	decrypt(projectId,keyRingId,cryptoKeyId,ciphertextFileName,plaintextFileName)
	.then(function(){
		const fetchgit = require('./fetch-git');
		fetchgit.get('/repos/bensonitguy/blogposts-with-react/contents/package.json')
	.then(function(response){
		var decoded_file_content = base64.decode(response.data.content);

		console.log(decoded_file_content);
		// will throw error in terminal but will work in Cloud Functions
		res.send(decoded_file_content);

		}).catch(function(error){
			console.log(error);
		});
	});
}
