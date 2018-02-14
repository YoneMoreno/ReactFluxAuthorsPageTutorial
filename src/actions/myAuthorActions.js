import Dispatcher from '../components/dispatcher/appDispatcher';
import AuthorApi from "../components/api/authorApi";

const AuthorActions = {
    createAuthor: (author) => {
        let newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType:
            author:
        })
    }

};

export {AuthorActions};