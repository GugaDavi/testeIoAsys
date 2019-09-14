import { combineReducers } from 'redux';

import auth from './auth/reducer';
import profile from './profile/reducer';
import enterprise from './enterprise/reducer';

export default combineReducers({
  auth,
  profile,
});
