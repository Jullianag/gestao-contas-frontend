import {AccessTokenPayloadDTO} from "../models/auth.ts";
import {createContext} from "react";

export type ContextTokenType = {
    contextTokenPayload: AccessTokenPayloadDTO | undefined;
    setContextTokenPayload: (accessTokenPayload: AccessTokenPayloadDTO | undefined) => void;

};

export const ContextToken = createContext<ContextTokenType>({
    contextTokenPayload: undefined,
    setContextTokenPayload: () => {
    }
});