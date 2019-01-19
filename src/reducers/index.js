import { combineReducers } from 'redux'

import cep from './cep';
import map from './map';

export default combineReducers({ cep, map })
