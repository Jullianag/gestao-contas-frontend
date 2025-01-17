import {Route, Routes} from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Login from "./routes/ClientHome/Login";
import Bank from "./routes/ClientHome/Bank";
import {useEffect, useState} from "react";
import * as authService from "./services/auth-service.ts";
import {ContextToken} from "./utils/context-toekn.ts";
import {AccessTokenPayloadDTO} from "./models/auth.ts";
import {ContextCartCount} from "./utils/context-cart.ts";
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {history} from './utils/history';


export default function App() {

    const [contextCartCount, setContextCartCount] = useState<number>(0);

    const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

    useEffect(() => {

        // inicia a aplicação com o carrinho salvo do localStorage

        // se está autenticado salva no contexto, pois pega o token no localStorage
        if (authService.isAuthenticated()) {
            const payload = authService.getAccessTokenPayload();
            setContextTokenPayload(payload);
        }
    }, []);

    return (
        <ContextToken.Provider value={{contextTokenPayload, setContextTokenPayload}}>
            <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
                <HistoryRouter history={history}>
                    <Routes>

                        <Route path="/" element={<ClientHome/>}>
                            <Route index element={<Login/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="bank" element={<Bank/>}/>
                        </Route>

                    </Routes>
                </HistoryRouter>
            </ContextCartCount.Provider>
        </ContextToken.Provider>
    )
}

