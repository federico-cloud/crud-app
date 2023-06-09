import { loadUsersByPage } from "../useCases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;
    

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    
    
    state.currentPage -= 1;
    state.users = users;
}

/**
 * 
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {

    let wasFound = false;

    state.users = state.users.map( user =>{
        if(user.id === updatedUser.id){
            wasFound = true
            return updatedUser;
        }
        return user;
    });

    if(state.users.length < 10 && !wasFound){
        state.users.push(updatedUser);
    }

}

//TODO:
const reloadPage = () => {
    throw new Error('Not implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}