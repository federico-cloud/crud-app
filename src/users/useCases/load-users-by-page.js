import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page
 * @returns {Promise<User>}
 */
export const loadUsersByPage = async(page = 1) => {
    const URL = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const response = await fetch(URL);
    const data = await response.json();


   const users = data.map(localHostUserToModel);

   return users;
}
