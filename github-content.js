const base64 = require('base-64');
const GitHub = require('github-base');
const jsonlint = require('jsonlint');

const github = new GitHub({
  username: "bensonitguy",
  password: "benson10benson",
});





function decodeData(file){	
	var value = {};
	value = JSON.parse(file.toString('utf8'));
	console.log(value);
	var file_data = base64.decode(value.content);
	console.log(JSON.parse(file_data));
}

function downloadGithubData(){
	console.log('hello !!');
	github.get('/repos/:bensonitguy/:blogposts-with-react/contents/:package.json')
  .then((res,err) => {

  	decodeData(res.raw);
  });

}

module.exports = { downloadGithubData };



