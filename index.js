const getcontentgit = require('./github-content-fetch');
const config = require('./config');

exports.fetchContentGit2 = (
	req,
	resp
) => {

	try {
		var commits_data = {}
		commits_data = JSON.parse(req.body.payload);

		var commits_array = commits_data.commits;

		commits_array.forEach(function(element){
			var modified_array = element.modified;
		if(element.modified != null && modified_array.length > 0){
			
			modified_array.forEach(function(filepath){
					if(config.file_list.indexOf(filepath) != -1) {

						var filetoupload = getFileNameToUpload(filepath);
						var completeFilePath = config.repository_path + filepath;
						console.log(filetoupload);
						getcontentgit(completeFilePath,filetoupload);
						
					}
			});
		}

	});

	//getcontentgit(config.repository_path);

	} catch (error) {
		console.log(error);
	}



	// will throw error in terminal but will work in Cloud Functions

	//resp.send(config.decoded_file_content);


}

function getFileNameToUpload(filepath){
	
		
		var filetoupload = '';

		if(filepath != null){
			var filepath_array = filepath.split('/');
			var array_length = filepath_array.length;
			if(array_length > 0){
				filetoupload = filepath_array[array_length - 1];
			}
		}
		
		return filetoupload;

}