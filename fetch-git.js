const axios = require('axios');
const constants = require('./Constants')


module.exports = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Authorization: 'token ' + constants.github_token
	}
});