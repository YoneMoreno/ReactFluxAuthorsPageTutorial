import Dispatcher from '../components/dispatcher/appDispatcher';
import {ActionTypes} from '../../src/actions/actionTypes';
import EventEmitter from "events";
import assign from 'object-assign';
import * as _ from "lodash";

let _authors = [];

const CHANGE_EVENT = 'change';

const AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: (callback) => {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: (callback) => {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: () => {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: () => {
        return _authors;
    },
    getAuthorById: (id) => {
        return _.find(_authors, {id: id});
    }

});

Dispatcher.register((action) => {
    switch (action.ActionType) {
        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.author);
            AuthorStore.emitChange();
    }
});

export default AuthorStore;