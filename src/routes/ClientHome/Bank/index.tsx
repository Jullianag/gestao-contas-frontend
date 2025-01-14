import './styles.css';
import BankCard from "../../../components/BankCard";
import AddBank from "../../../components/AddBank";
import ButtonPrimary from "../../../components/ButtonPrimary";

export default function Bank() {

    return (
        <main>
            <section id="catalog-section" className="banco-container">

                <div className="banco">
                    <div>
                        <h2>Suas Contas</h2>
                        <hr className="hr-borda2 banco-mt5"/>
                        <BankCard/>
                        <BankCard/>
                        <hr className="hr-borda3 banco-mt5"/>
                        <div className="banco-total banco-mt20">
                            <div>
                                <h1>Total</h1>
                            </div>
                            <div>
                                <p>R$ 7000.0</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <form>
                            <AddBank/>
                            <div className="banco-btn-add">
                                <ButtonPrimary text="Adicionar"/>
                            </div>
                        </form>

                    </div>

                </div>



            </section>
        </main>
    );
}