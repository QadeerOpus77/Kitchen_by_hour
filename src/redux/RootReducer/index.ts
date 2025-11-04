import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../Slices/authslice';
import RoleSlice from '../Slices/roleSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  role: RoleSlice,
});

export default rootReducer;
