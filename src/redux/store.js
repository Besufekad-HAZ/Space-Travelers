// import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionsSlice from './missions/slice-Missions';

const reducers = combineReducers({
  rockets: rocketsSlice,
  missions: missionsSlice,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
