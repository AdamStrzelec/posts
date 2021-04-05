const getPosts = require('./src/api/getPosts');
const getUsers = require('./src/api/getUsers');

const app = async () => {
    const users = await getUsers().then(response => response.data);
    const posts = await getPosts().then(response => response.data);
}

app();