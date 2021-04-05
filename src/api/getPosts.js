const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
    return axios.get(URL)
}

module.exports = getPosts;