const base64 = require('base-64');
const decrypt = require('./decrypt');
const jsonvalidator = require('./JsonValidation');
const createjsonfile = require('./create-json-file');
const config = require('./config');
const cloudstorageupload = require('./cloud-storage-upload');

module.exports = function githubfetch(repositorypath,filetoupload) {

	const filePath = config.filePath;
	const destination = config.destination;
	var decoded_file_content = config.decoded_file_content;
	const bucketName = config.bucketName;



	decrypt(config.projectId, config.keyRingId, config.cryptoKeyId, config.ciphertextFileName, config.plaintextFileName)
		.then(function () {
			const fetchgit = require('./fetch-git');
			fetchgit.get(repositorypath)
				.then(function (response) {
					decoded_file_content = base64.decode(response.data.content);
					var jsonvalidation = jsonvalidator(decoded_file_content);

					if (jsonvalidation) {
						createjsonfile(decoded_file_content,filetoupload).then(function () {
                            console.log('started file upload !');
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
}