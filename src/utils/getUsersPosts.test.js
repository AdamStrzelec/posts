const users = require('../mockedData/mockedUsers');
const posts = require('../mockedData/mockedPosts');

const getUsersPosts = require('./getUsersPosts');


test('display users posts', () => {
    expect(getUsersPosts(users, posts)[1]).toBe("Ervin Howell napisał 3 postów");
});