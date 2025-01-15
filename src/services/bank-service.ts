import {RequestBackend} from "../utils/requests.ts";
import {AxiosRequestConfig} from "axios";

export function findAllRequest() {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/banks",
    }

    return RequestBackend(config);
}