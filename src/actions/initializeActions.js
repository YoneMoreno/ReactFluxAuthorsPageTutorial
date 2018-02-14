import Dispatcher from '../components/dispatcher/appDispatcher';
import ActionTypes from './actionTypes';
import AuthorApi from '../components/api/authorApi';

const initializeActions = {
    initApp: () => {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

export default initializeActions;