import { loadUsersByPage } from "../useCases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

//TODO
const loadNextPage = async() => {
   await loadUsersByPage(state.currentPage + 1);
}

const loadPreviousPage = async() => {
    throw new Error('Not implemented');
}

//TODO:
const onUserChanged = () => {
    throw new Error('Not implemented');
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}