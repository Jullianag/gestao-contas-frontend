import {AxiosRequestConfig} from "axios";
import {RequestBackend} from "../utils/requests.ts";


export function findMe() {

    const config : AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true,
    }

    return RequestBackend(config);
}