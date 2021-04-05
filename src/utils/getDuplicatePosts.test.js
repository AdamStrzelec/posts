const posts = require('../mockedData/mockedPosts');

const getDuplicatePosts = require('./getDuplicatePosts');

test('display duplicate posts length', () => {
    expect(getDuplicatePosts(posts).length).toBe(1);
});