import Dispatcher from '../components/dispatcher/appDispatcher';
import {ActionTypes} from './actionTypes';
import AuthorApi from '../components/api/authorApi';

const initializeActions = {
    initApp: () => {
        console.log('initApp has been triggered');
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
            }
        });
        console.log(AuthorApi.getAllAuthors());
        console.log('authors list has been updated using the initializeAction');
    }
};

export default initializeActions;