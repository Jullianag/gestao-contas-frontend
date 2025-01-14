import {BankDTO} from "./bank.ts";

export type AccountDTO = {
    id: number;
    nickname: string;
    valor: number,
    imgUrl: string;
    types: BankDTO[];
}