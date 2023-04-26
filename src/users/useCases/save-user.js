import { userModelToLocalHost } from "../mappers/user-to-local-host.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userData 
 */
export const saveUser = async(userLike) => {

    
    const user = new User(userLike);
    if (!user.firstName || !user.lastName){

    }

    const userToSave = userModelToLocalHost(user);
    if (user.id) {
        throw 'Not implemented';
        return;
    }

    const updateUser = await createUser(userToSave);

    return updateUser;
}

/**
 * 
 * @param {Like<User>} user 
 */
export const createUser = async(user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const response = await fetch(url,{
        method: 'POST',
        body:JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    })

    const newUser = await response.json();
    console.log(newUser);

    return newUser;
}