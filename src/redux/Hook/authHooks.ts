import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import {
    login,
    logout,
    clearError,
    registerUser,
    setProfileComplete,
    forgotPassword,
    setAuthenticated,
    validatePasswordCode,
    resetPassword,
    changePassword,
} from '../Slices/authslice';

export const useAuthDispatch = () => {
    const dispatch = useDispatch<AppDispatch>();

    return {
        login: (credentials: { email: string; password: string, device_id: string, token: string }) => dispatch(login(credentials)),
        logout: () => dispatch(logout()),
        clearAuthError: () => dispatch(clearError()),
        register: (userData: any) => dispatch(registerUser(userData)),
        setProfileComplete: (isComplete: boolean) => dispatch(setProfileComplete(isComplete)),
        forgotPassword: (email: string) => dispatch(forgotPassword(email)),
        setAuthenticated: (isAuthenticated: boolean) => dispatch(setAuthenticated(isAuthenticated)),
        validatePasswordCode: (codeData: { email: string; otp: string }) =>
            dispatch(validatePasswordCode(codeData)),
        resetPassword: (resetData: {  password: string, confirm_password: string }) =>
            dispatch(resetPassword(resetData)),
        changePassword: (resetData: { old_password: string, new_password: string, confirm_new_password: string }) =>
            dispatch(changePassword(resetData)),
    };
};

export const useAuthState = () => {
    return useSelector((state: RootState) => ({
        user: state.auth.user,
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        isRegister: state.auth.isRegister,
        isProfile: state.auth.isProfile,
        forgotPasswordSuccess: state.auth.forgotPasswordSuccess,
        resetPasswordSuccess: state.auth.resetPasswordSuccess,
        changePasswordSuccess: state.auth.changePasswordSuccess,
        validateCodeSuccess: state.auth.validateCodeSuccess,
        validatePasswordToken: state.auth.validatePasswordToken,
    }));
};