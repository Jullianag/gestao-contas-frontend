import axios, {AxiosRequestConfig} from "axios";

export function RequestBackend(config: AxiosRequestConfig) {

    const headers = config.withCredentials
        ?
        {
            ...config.headers,
            Autorization: "Bearer " + authService.getAccessToken();
        }
        : config.headers;
}