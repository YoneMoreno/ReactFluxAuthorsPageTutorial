import Dispatcher from '../components/dispatcher/appDispatcher';
import {ActionTypes} from '../../src/actions/actionTypes';
import EventEmitter from "events";
import assign from 'object-assign';

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
    }
});
