import './styles.css';
import {Link} from "react-router-dom";

export default function LoggedUser() {

    return (
        <>
            <div className="banco-logged-user banco-menu-item">
                <span>Sair</span>
            </div>

            <div className="banco-logged-entrar banco-menu-item">
                <Link to="/login">
                    Entrar
                </Link>
            </div>
        </>

    );
}