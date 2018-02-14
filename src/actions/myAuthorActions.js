import Dispatcher from '../components/dispatcher/appDispatcher';
import AuthorApi from "../components/api/authorApi";
import {ActionTypes} from './actionTypes';

const AuthorActions = {
    createAuthor: (author) => {
        let newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: (author) => {
        let updateAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updateAuthor
        });
    }
};

export {AuthorActions};