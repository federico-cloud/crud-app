import { User } from "../models/user"

/**
 * 
 * @param {User} user 
 */

export const userModelToLocalHost = (user) => { 

    const { 
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = user

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    };

}