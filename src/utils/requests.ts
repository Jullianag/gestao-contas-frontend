import axios, {AxiosRequestConfig} from "axios";
import * as authService from "../services/auth-service.ts";
import {BASE_URL} from "./system.ts";
import {history} from "./history.ts";

export function RequestBackend(config: AxiosRequestConfig) {

    const headers = config.withCredentials
        ?
        {
            ...config.headers,
            Autorization: "Bearer " + authService.getAccessToken()
        }
        : config.headers;

    return axios({...config, baseURL: BASE_URL, headers: headers});
}

axios.interceptors.request.use(

    function (config) {
        return config;
    },

    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {

        if (error.response.status === 401) {
            history.push('/login');
        }
        if (error.response.status === 403) {
            history.push('/login');
        }

        return Promise.reject(error);
    }
)