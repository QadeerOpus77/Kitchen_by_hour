import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../Slices/authslice';
import RoleSlice from '../Slices/roleSlice';
import bookingReducer from '../Slices/bookingSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  role: RoleSlice,
  booking: bookingReducer,
});

export default rootReducer;
