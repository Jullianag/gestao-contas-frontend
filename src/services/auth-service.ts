import {AccessTokenPayloadDTO, CredentialsDTO, RoleEnum} from "../models/auth.ts";
import {CLIENT_ID, CLIENT_SECRET} from "../utils/system.ts";
import * as QueryString from "qs";
import {AxiosRequestConfig} from "axios";
import {RequestBackend} from "../utils/requests.ts";
import * as accessTokenRepository from "../localstorage/access-token-repository.ts";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData : CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorizathion": "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const requestBody = QueryString.stringify({...loginData, grant_type: "password"});

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
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
    accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {

    try {
        const token = accessTokenRepository.get();
        return token == null
            ? undefined
            : (jwtDecode(token) as AccessTokenPayloadDTO);
    }
    catch (error) {
        return undefined;
    }
}

export function isAuthtenticated(): boolean {

    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
        return true;
    }
    return false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {

    if(roles.length === 0) {
        return true;
    }

    // variável com os usuários logados
    const tokenPayload = getAccessTokenPayload();

    if(tokenPayload !== undefined) {
        for(let i = 0; i < roles.length; i++) {
            if(tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
    }
    return false;
}