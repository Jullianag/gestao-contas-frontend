import {AccountDTO} from "../models/account.ts";
import {CART_KEY} from "../utils/system.ts";


export function save(cart: AccountDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str);
}

export function get() : AccountDTO {
    const str = localStorage.getItem(CART_KEY) || '{"nickname":[]}';
    const obj = JSON.parse(str) as AccountDTO;

    return obj;
}

export function clear() {
    localStorage.setItem(CART_KEY, '{"nickname":[]}');
}