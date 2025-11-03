import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { getAccessToken } from '../localStoreUtil';
// import { BASE_URL, TENANT_ID } from '@env';

const base_url: string = "";

const TENANT_ID = "root"

interface FetchApiOptions {
    method: Method;
    endPoint: string;
    token?: boolean;
    data?: any;
    params?: any;
    formData?: FormData;
}

interface ApiHeaders {
    tenant: string;
    Authorization?: string;
    'Content-Type'?: string;
    'Accept'?: string;
    [key: string]: any;
}

// api helper
export const fetchApi = async ({
    method,
    endPoint,
    token = false,
    data,
    params,
    formData,
}: FetchApiOptions): Promise<AxiosResponse> => {
    // 1. Log the BASE_URL and complete request URL
    console.log('\n\n===== API REQUEST START =====');
    console.log('Endpoint:', endPoint);
    console.log('Full URL:', `${base_url}/${endPoint}`);
    console.log('Full URL:', getAccessToken());

    const headers: ApiHeaders = {
        tenant: TENANT_ID,
    };

    if (token) {
        const accessToken = await getAccessToken();
        headers.Authorization = 'Bearer ' + accessToken;
        console.log('Using token:', accessToken ? 'YES' : 'NO');
    }

    if (formData) {
        headers['Content-Type'] = 'multipart/form-data';
        headers['Accept'] = 'multipart/form-data';
    } else {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
    }

    // 2. Log all request details
    console.log('\nRequest Details:');
    console.log('Method:', method);
    console.log('Headers:', JSON.stringify(headers, null, 2));
    console.log('Data:', JSON.stringify(data, null, 2));
    console.log('Params:', JSON.stringify(params, null, 2));

    const config: AxiosRequestConfig = {
        method,
        url: `${base_url}/${endPoint}`,
        headers,
        data: data ? data : undefined,
        params: params ? params : undefined,
    };

    try {
        // 3. Make the request
        console.log('\nMaking API request...');
        const response = await axios(config);

        // 4. Log successful response
        console.log('\n===== API RESPONSE =====');
        console.log('Status:', response.status);
        console.log('Response Data:', JSON.stringify(response.data, null, 2));
        console.log('Response Headers:', JSON.stringify(response.headers, null, 2));
        console.log('===== API REQUEST END =====\n\n');

        return response;

    } catch (error) {
        // 5. Log detailed error information
        console.error('\n===== API ERROR =====');

        if (axios.isAxiosError(error)) {
            console.error('Axios Error Details:');
            console.error('Message:', error.message);
            console.error('Code:', error.code);
            console.error('URL:', error.config?.url);
            console.error('Method:', error.config?.method);
            console.error('Request Data:', error.config?.data);

            if (error.response) {
                console.error('\nServer Response:');
                console.error('Status:', error.response.status);
                console.error('Data:', error.response.data);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('\nNo response received');
                console.error('Request:', error.request);
            }
        } else {
            console.error('Non-Axios Error:', error);
        }

        console.error('===== API REQUEST END =====\n\n');
        throw error;
    }
};