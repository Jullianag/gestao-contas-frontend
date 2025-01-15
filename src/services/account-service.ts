import {AxiosRequestConfig} from "axios";
import {RequestBackend} from "../utils/requests.ts";
import {AccountDTO} from "../models/account.ts";

export function findPageRequest() {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/accounts/",

    }

    return RequestBackend(config);
}

export function findById(id: number) {
    return RequestBackend({url: `/accounts/${id}`});
}

export function deleteById(id: number) {

    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/accounts/${id}`,
        withCredentials: true,
    }

    return RequestBackend(config);
}

export function updateRequest(obj: AccountDTO) {
    const config: AxiosRequestConfig = {
        method: "PUT",
        url: `/accounts/${obj.id}`,
        withCredentials: true,
        data:obj
    }

    return RequestBackend(config);
}

export function insertRequest(obj: AccountDTO) {
    const config: AxiosRequestConfig = {
        method: "POST",
        url: `/accounts/`,
        withCredentials: true,
        data:obj
    }

    return RequestBackend(config);
}