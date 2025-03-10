import { getUsers } from './dal';


async function getUser () {
    const users = await getUsers();

    return users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username

    }));
}


module.exports = {
    getUser
}