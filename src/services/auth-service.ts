import {AccessTokenPayloadDTO, CredentialsDTO, RoleEnum} from "../models/auth.ts";
import {CLIENT_ID, CLIENT_SECRET} from "../utils/system.ts";
import * as QueryString from "qs";
import {AxiosRequestConfig} from "axios";
import {RequestBackend} from "../utils/requests.ts";
import * as accessTokenRepository from "../localstorage/access-token-repository.ts";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    // desestruturar o loginData e acrescentar o grant_type
    const requestBody = QueryString.stringify({...loginData, grant_type: "password"});

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth2/token",
        data: requestBody,
        headers: headers
    }

    return RequestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        // pega o token do localStorage
        const token = accessTokenRepository.get();
        return token == null
            ? undefined
            : (jwtDecode(token) as AccessTokenPayloadDTO);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return undefined;
    }
}

export function isAuthenticated(): boolean {
    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
        return true
    }
    return false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {

    if (roles.length === 0) {
        return true;
    }

    // esta variável tem a lista dos roles de usuários logados
    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload !== undefined) {
        // percorre a lista de roles
        for (let i = 0; i < roles.length; i++) {
            if (tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
        // função de alta ordem
        //return roles.some(role => tokenData.authorities.includes(role));
    }
    return false;
}