import './styles.css';
import nuIcon from "../../assets/nuicon.svg";
import closeIcon from "../../assets/close.svg";

export default function BankCard() {

    return (
        <>



                <div className="banco-card-bank banco-card banco-mt20">
                    <div className="banco-bank">
                        <div>
                            <img src={nuIcon} alt={nuIcon}/>
                        </div>
                        Nubank
                    </div>
                    <div className="banco-bank banco-cor-valor">R$ 3000.0</div>
                    <div className="banco-close">
                        <img src={closeIcon} alt={closeIcon}/>
                    </div>

                </div>

        </>
    );
}