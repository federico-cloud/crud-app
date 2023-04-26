import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalHost } from "../mappers/user-to-local-host.mapper";
import { User } from "../models/user";
/**
 * 
 * @param {Like<User>} user 
 */
export const updateUser = async(user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`
    const response = await fetch(url,{
        method: 'PATCH',
        body:JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    })

    const updatedUser = await response.json();
    console.log(updatedUser);
    return updatedUser;
}

/**
 * 
 * @param {Like<User>} userData 
 */
export const saveUser = async(userLike) => {

    
    const user = new User(userLike);
    if (!user.firstName || !user.lastName){
        throw 'First & last name are required';
    }

    const userToSave = userModelToLocalHost(user);
    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }
    
    return localHostUserToModel(userUpdated);
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

    return newUser;
}

