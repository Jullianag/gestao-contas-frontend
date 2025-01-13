import "./styles.css";
import iconAdmin from "../../assets/admin.svg";
import LoggedUser from "../LoggerUser";
import {Link} from "react-router-dom";

export default function HeaderClient() {

    return (
        <header className="banco-header-client">
            <nav className="banco-container">
                <h1>Banco</h1>
                <div className="banco-navbar-right">
                    <div className="banco-menu-items-container">

                        <Link to="/admin">
                            <div className="banco-menu-item">
                                <img src={iconAdmin} alt="admin"/>
                            </div>
                        </Link>

                    </div>
                    <LoggedUser/>
                </div>
            </nav>
        </header>
    );
}