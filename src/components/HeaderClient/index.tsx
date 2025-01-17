import "./styles.css";
import iconAdmin from "../../assets/admin.svg";
import LoggedUser from "../LoggerUser";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ContextToken} from "../../utils/context-toekn.ts";
import * as authService from "../../services/auth-service.ts";


export default function HeaderClient() {

    const {contextTokenPayload} = useContext(ContextToken);

    return (
        <header className="banco-header-client">
            <nav className="banco-container">
                <Link to="/">
                    <h1>Banco</h1>
                </Link>

                <div className="banco-navbar-right">
                    <div className="banco-menu-items-container">
                        {
                            contextTokenPayload &&
                            authService.hasAnyRoles(['ROLE_ADMIN']) &&

                            <Link to="/bank">
                                <div className="banco-menu-item">
                                    <img src={iconAdmin} alt="admin"/>
                                </div>
                            </Link>
                        }

                    </div>
                    <LoggedUser/>
                </div>
            </nav>
        </header>
    );
}