import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userData 
 */
const saveUser = async(userLike) => {
    const user = new User(userLike);

    if (user.id) {
        throw 'Not implemented';
        return;
    }

    const updateUser = await createUser(user);

    return updateUser;
}

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async(user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const response = await fetch(url,{
        method: 'POST',
        body:JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    })

    const newUser = await response.json();

    return newUser;
}