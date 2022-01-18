import {combineReducers} from 'redux';
import giphsReducer from './giphsReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const allReducers = combineReducers({
  Giphs: persistReducer(persistConfig, giphsReducer),
});
