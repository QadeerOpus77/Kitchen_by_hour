import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authServices from '../../services/authServices';
import localStoreUtil, { saveAccessToken } from '../../utils/localStoreUtil';

interface AuthState {
    user: any | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    isRegister: boolean;
    isProfile: boolean;
    forgotPasswordSuccess: boolean;
    validateCodeSuccess: boolean;
    resetPasswordSuccess: boolean;
    changePasswordSuccess: boolean;
    validatePasswordToken?: string | null;
}

interface ApiError {
    message: string;
    errors?: {
        email?: string[];
    };
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    isRegister: false,
    isProfile: false,
    forgotPasswordSuccess: false,
    validateCodeSuccess: false,
    resetPasswordSuccess: false,
    changePasswordSuccess: false,
    validatePasswordToken: null
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await authServices.register(userData);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue({
                    message: error.response.data.message[0] || 'Registration failed',
                    errors: error.response.data.errors || {}
                });
            }
            return rejectWithValue({
                message: error.message || 'Registration failed',
                errors: {}
            });
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: any, { rejectWithValue }) => {
        try {
            const response = await authServices.loginUser(credentials);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.message[0] || 'Login failed');
            }
            return rejectWithValue(error.message || 'Login failed');
        }
    }
);

export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (email: string, { rejectWithValue }) => {
        try {
            await authServices.forgotPassword({ email });
            return { success: true };
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.message[0] || 'Passwchange failed');
            }
            return rejectWithValue(error.message || 'Password reset failed');
        }
    }
);

export const validatePasswordCode = createAsyncThunk(
    'auth/validatePasswordCode',
    async (codeData: { email: string; otp: string }, { rejectWithValue }) => {
        try {
            const response = await authServices.validatePasswordCode(codeData);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.message[0] || 'Code validation failed');
            }
            return rejectWithValue(error.message || 'Code validation failed');
        }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (resetData: { password: string, confirm_password: string }, { rejectWithValue }) => {
        try {
            const response = await authServices.resetPassword(resetData);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.message[0] || 'Password reset failed');
            }
            return rejectWithValue(error.message || 'Password reset failed');
        }
    }
);

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async (resetData: { old_password: string, new_password: string, confirm_new_password: string }, { rejectWithValue }) => {
        try {
            const response = await authServices.changePassword(resetData);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.message[0] || 'Password reset failed');
            }
            return rejectWithValue(error.message || 'Password reset failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.isRegister = false;
            state.isProfile = false;
            state.error = null;
            localStoreUtil.removeData('accessToken');
        },
        clearError(state) {
            state.error = null;
            state.forgotPasswordSuccess = false,
                state.changePasswordSuccess = false,
                state.resetPasswordSuccess = false,
                state.validateCodeSuccess = false
        },
        setProfileComplete: (state, action: PayloadAction<boolean>) => {
            state.isProfile = action.payload;
        },
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Register cases
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isRegister = true;
                state.isAuthenticated = true;
                saveAccessToken(action.payload.data.token);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                const payload = action.payload as ApiError;
                const emailError = payload.errors?.email?.[0];
                state.error = emailError || payload.message;
            })

            // Login cases
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isAuthenticated = true;
                saveAccessToken(action.payload.data.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Forgot password cases
            // In your authSlice.ts
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.forgotPasswordSuccess = false;
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
                state.forgotPasswordSuccess = true;
                state.error = null;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.forgotPasswordSuccess = false;
                state.error = action.payload as string;
            })

            .addCase(validatePasswordCode.pending, (state) => {
                state.loading = true;
                state.validateCodeSuccess = false;
                state.error = null;
            })
            .addCase(validatePasswordCode.fulfilled, (state, action) => {
                state.loading = false;
                state.validateCodeSuccess = true;
                state.validatePasswordToken = action.payload.data.token;
                state.error = null;
            })
            .addCase(validatePasswordCode.rejected, (state, action) => {
                state.loading = false;
                state.validateCodeSuccess = false;
                state.error = action.payload as string;
            })

            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.loading = false;
                state.resetPasswordSuccess = true;
                state.error = null;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(changePassword.pending, (state) => {
                console.log('pending')
                state.loading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                console.log('fulfilled')
                state.loading = false;
                state.changePasswordSuccess = true;
                state.error = null;
            })
            .addCase(changePassword.rejected, (state, action) => {
                console.log('rejeced')
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const { logout, clearError, setProfileComplete, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;