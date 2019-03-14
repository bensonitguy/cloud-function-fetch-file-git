const axios = require('axios');


module.exports = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		Authorization: 'token 50ffbfc0e9d6b7a95d80fa736fc93e15fcc1575f'
	}
});