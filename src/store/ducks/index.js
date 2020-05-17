import { combineReducers } from 'redux';

import weather from './weather';
import loader from './loader';

export default combineReducers({ weather, loader });
