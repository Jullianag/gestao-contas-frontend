import {TOKEN_KEY} from "../utils/system.ts";

export function save(token: string) {
    // chave TOKEN_KEY valor token
    localStorage.setItem(TOKEN_KEY, token);
}

export function get() : string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function remove() {
    localStorage.removeItem(TOKEN_KEY);
}