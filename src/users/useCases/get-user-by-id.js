import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {String|Number} page
 * @returns {Promise<User>}
 */
export const getUserById = async(id) => {
    const URL      = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const response = await fetch(URL);
    const data     = await response.json();

   const user = localHostUserToModel(data);

   return user;
}
