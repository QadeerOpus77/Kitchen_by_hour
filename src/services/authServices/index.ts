import endPoints from '../../redux/constant/endPoints';
import { fetchApi } from '../../utils/helper';

interface IApiResponse {
    [key: string]: any;
}

interface IAuthData {
    [key: string]: any;
}

class AuthServices {
    register = async (data: IAuthData): Promise<IApiResponse> => {
        const response = await fetchApi({
            method: 'POST',
            endPoint: endPoints.SIGN_UP,
            data,
            params: undefined,
            formData: undefined
        });
        return response;
    };

    loginUser = async (data: IAuthData): Promise<IApiResponse> => {
        try {
            const response = await fetchApi({
                method: 'POST',
                endPoint: endPoints.LOGIN,
                data,
                params: undefined,
                formData: undefined
            });
            console.log('API response:', response);
            return response;
        } catch (error) {
            console.error('API error:', error);
            throw error;
        }
    };

    forgotPassword = async (data: IAuthData): Promise<IApiResponse> => {
        const response = await fetchApi({
            method: 'POST',
            endPoint: endPoints.FORGOT_PASSWORD,
            data,
            params: undefined,
            formData: undefined
        });
        return response;
    };

    validatePasswordCode = async (data: IAuthData): Promise<IApiResponse> => {
        const response = await fetchApi({
            method: 'POST',
            endPoint: endPoints.VALIDATE_PASSWORD_CODE,
            data,
            params: undefined,
            formData: undefined
        });
        return response;
    };

    resetPassword = async (data: IAuthData): Promise<IApiResponse> => {
        const response = await fetchApi({
            method: 'POST',
            endPoint: endPoints.RESET_PASSWORD,
            data,
            params: undefined,
            formData: undefined
        });
        return response;
    };

    changePassword = async (data: IAuthData): Promise<IApiResponse> => {
        const response = await fetchApi({
            method: 'POST',
            endPoint: endPoints.CHANGE_PASSWORD,
            data,
            params: undefined,
            formData: undefined,
            token: true,
        });
        return response;
    };

}

const authServices = new AuthServices();
export default authServices;