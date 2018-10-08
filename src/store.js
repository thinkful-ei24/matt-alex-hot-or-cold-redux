import {createStore} from 'redux';

import {gameReducer} from './reducers/gameReducers';

export default createStore(gameReducer);