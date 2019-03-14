const fetchgit = require('./fetch-git');
const base64 = require('base-64');

exports.fetchContentGit = (req,res) => {

	fetchgit.get('/repos/bensonitguy/blogposts-with-react/contents/package.json')
	.then(function(response){
		var decoded_file_content = base64.decode(response.data.content);

		console.log(decoded_file_content);

		// will throw error in terminal but will work in Cloud Functions
		res.send(decoded_file_content);

}).catch(function(error){
	console.log('This is an error');
});



}
