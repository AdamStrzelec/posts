const users = require('../mockedData/mockedUsers');

const getClosestUsers = require('./getClosestUsers');

test('display closest users', () => {
    expect(getClosestUsers(users)[0]).toBe("Leanne Graham => Ervin Howell");
});