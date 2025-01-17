import './styles.css';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ContextToken} from "../../utils/context-toekn.ts";
import * as authService from "../../services/auth-service.ts";



export default function LoggedUser() {

    const {contextTokenPayload, setContextTokenPayload} = useContext(ContextToken);



    function handleLogoutClick() {
        authService.logout()
        // depois do comando acima nao existirá mais o token
        setContextTokenPayload(undefined);
    }

    return (

        contextTokenPayload && authService.isAuthenticated()
            ? (
            <div className="banco-logged-user banco-menu-item">
                <p>{contextTokenPayload?.user_name}</p>
                <Link to="/login">
                    <span onClick={handleLogoutClick}>Sair</span>
                </Link>

            </div>

            )
            : (


            <div className="banco-logged-entrar banco-menu-item">
                <Link to="/login">
                    Entrar
                </Link>
            </div>

            )


    );
}