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
    }
});

export default AuthorStore;