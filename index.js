const base64 = require('base-64');
const decrypt = require('./decrypt');
const jsonvalidator = require('./JsonValidation');
const createjsonfile = require('./create-json-file').default;

exports.fetchContentGit = (
	req,
	resp,
	projectId = 'pwaweathertest', // Your GCP projectId
  	keyRingId = 'benKeyRing', // Name of the crypto key's key ring
  	cryptoKeyId = 'benKey', // Name of the crypto key, e.g. "my-key"
  	ciphertextFileName = './Constants.js.encrypted',
    plaintextFileName = '/tmp/Constants.js'
) => {

	try {

		var commits_data = {}
		commits_data = JSON.parse(req.body.payload);
	//	var branchName = commits_data.ref.split('/').Last();
		var commits_array = commits_data.commits;

		commits_array.forEach(function(element){
		console.log(element.modified);
	});

	} catch (error) {
		console.log(error);
	}
	
	

	const filePath = '/tmp/work.json';
	const destination = '/admin/standard/work.json';
	var decoded_file_content = "test";
	const bucketName = 'pwaweathertest.appspot.com';

	decrypt(projectId,keyRingId,cryptoKeyId,ciphertextFileName,plaintextFileName)
	.then(function(){
		const fetchgit = require('./fetch-git');
		fetchgit.get('/repos/bensonitguy/blogposts-with-react/contents/package.json')
	.then(function(response){
		decoded_file_content = base64.decode(response.data.content);
		var jsonvalidation = jsonvalidator(decoded_file_content);
		console.log(jsonvalidation)



		if(jsonvalidation){
			createjsonfile(decoded_file_content,bucketName,filePath,destination).then(function(){
				
			});
			
		}
		
		
		}).catch(function(error){
			//console.log(error);
		});
	});
	// will throw error in terminal but will work in Cloud Functions

	resp.send(decoded_file_content);

	
}
