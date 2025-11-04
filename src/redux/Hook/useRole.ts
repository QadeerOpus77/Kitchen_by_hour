import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import { setRole, clearRole } from '../Slices/roleSlice';
import { RoleType } from '../Enums/RoleEnum';

export const useRoleDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();

  return {
    setRole: (role: RoleType) => dispatch(setRole(role)),
    clearRole: () => dispatch(clearRole()),
  };
};

export const useRoleState = () => {
  return useSelector((state: RootState) => ({
    selectedRole: state.role.selectedRole,
  }));
};
