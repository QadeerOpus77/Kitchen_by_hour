import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleType } from '../Enums/roleEnum';

interface RoleState {
  selectedRole: RoleType | null;
}

const initialState: RoleState = {
  selectedRole: null,
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<RoleType>) => {
      state.selectedRole = action.payload;
    },
    clearRole: state => {
      state.selectedRole = null;
    },
  },
});

export const { setRole, clearRole } = roleSlice.actions;
export default roleSlice.reducer;
