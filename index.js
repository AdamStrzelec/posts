const getPosts = require('./src/api/getPosts');
const getUsers = require('./src/api/getUsers');

const getUsersPosts = require('./src/utils/getUsersPosts');

const app = async () => {
    const users = await getUsers().then(response => response.data);
    const posts = await getPosts().then(response => response.data);

    console.log(getUsersPosts(users, posts))
}

app();