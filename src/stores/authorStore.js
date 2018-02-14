import Dispatcher from '../components/dispatcher/appDispatcher';
import {ActionTypes} from '../../src/actions/actionTypes';
import EventEmitter from "events";
import assign from 'object-assign';
import * as _ from "lodash";

let _authors = [];

var eventEmitter = new EventEmitter();

const CHANGE_EVENT = 'change';

const AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: (callback) => {
        eventEmitter.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: (callback) => {
        eventEmitter.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: () => {
        eventEmitter.emit(CHANGE_EVENT);
    },
    getAllAuthors: () => {
        return _authors;
    },
    getAuthorById: (id) => {
        return _.find(_authors, {id: id});
    }

});

function replaceActualAuthorWithUpdatedAuthor(action) {
    const existingAuthor = _.find(_authors, {id: action.author.id});
    const existingAuthorIndex = _.findIndex(_authors, existingAuthor);
    _authors.splice(existingAuthorIndex, 1, action.author);
}

Dispatcher.register((action) => {
    console.log('current actionType is: ' + action.actionType);
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            // console.log('after authorStore updates, the authors list is: ' + _authors);
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            replaceActualAuthorWithUpdatedAuthor(action);

            AuthorStore.emitChange();
            break;
    }
});

export default AuthorStore;