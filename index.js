const base64 = require('base-64');
const decrypt = require('./decrypt');
const jsonvalidator = require('./JsonValidation');
const createjsonfile = require('./create-json-file');
const config = require('./config');
const cloudstorageupload = require('./cloud-storage-upload');

exports.fetchContentGit2 = (
	req,
	resp,
	projectId = config.projectId, // Your GCP projectId
	keyRingId = config.keyRingId, // Name of the crypto key's key ring
	cryptoKeyId = config.cryptoKeyId, // Name of the crypto key, e.g. "my-key"
	ciphertextFileName = config.ciphertextFileName,
	plaintextFileName = config.plaintextFileName
) => {

	try {

		var commits_data = {}
		commits_data = JSON.parse(req.body.payload);

		var commits_array = commits_data.commits;

		commits_array.forEach(function(element){
		console.log(element.modified);

	});

	} catch (error) {
		console.log(error);
	}



	const filePath = config.filePath;
	const destination = config.destination;
	var decoded_file_content = config.decoded_file_content;
	const bucketName = config.bucketName;
	const repository_path = config.repository_path;



	decrypt(projectId, keyRingId, cryptoKeyId, ciphertextFileName, plaintextFileName)
		.then(function () {
			const fetchgit = require('./fetch-git');
			fetchgit.get(repository_path)
				.then(function (response) {
					decoded_file_content = base64.decode(response.data.content);
					var jsonvalidation = jsonvalidator(decoded_file_content);

					if (jsonvalidation) {
						createjsonfile(decoded_file_content, bucketName, filePath, destination).then(function () {
							cloudstorageupload(bucketName, filePath, destination).then(function () {
								console.log('completed file upload !');
							}).catch(function (error) {
								console.log(error);
							});
						}).catch(function (error) {
							console.log("jsonvalidation" + error);
						});

					}
				}).catch(function (error) {
					console.log(error);
				});
		});
	// will throw error in terminal but will work in Cloud Functions

	resp.send(decoded_file_content);


}