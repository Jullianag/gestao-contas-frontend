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


                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <p className="fonte-destaque">Suas contas</p>
                            <hr/>

                            <div className="contas">


                                <div className="lista-contas-main">
                                    <span><img width="10%" src="#"/>&nbsp&nbspNubank</span>

                                    <span className="total-conta positivo ">R$ 1.800,00&nbsp&nbsp&nbsp <a href="#"><img
                                        src=""/></a></span>
                                </div>
                                <br/>


                            </div>

                            <hr/>
                            <span className="fonte-destaque">Total:</span>
                            <span className="positivo total-conta font-destaque">R$ 1.800,00</span>
                        </div>

                        <div className="col-md-2"></div>

                        <div className="col-md-5">
                            <p className="fonte-destaque">Nova conta</p>

                            <form action="" method="POST">
                                <label>Apelido</label>
                                <input type="text" name="apelido" className="form-control" placeholder=""/>
                                <br/>
                                <label>Banco</label>
                                <select name="banco" className="form-select">
                                    <option value="NU">Nubank</option>
                                </select>
                                <br/>
                                <label>Tipo</label>
                                <select name="tipo" className="form-select">
                                    <option value="pf">Pessoa física</option>
                                    <option value="pj">Pessoa jurídica</option>
                                </select>
                                <br/>
                                <label>Valor</label>
                                <input type="number" name="valor" className="form-control" placeholder=""/>
                                <br/>
                                <input type="file" placeholder="Ícone" name="icone"/>
                                <br/>
                                <br/>
                                <input type="submit" className="botao-principal"/>
                            </form>
                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        <div className="col-md-5">
                            <span className="fonte-destaque">Nova categoria</span>

                            <form action="" method="POST">
                                <label>Categoria</label>
                                <input type="text" name="categoria" className="form-control"/>
                                <br/>

                                <input type="checkbox" name="essencial" value="essencial"/><label
                                className="positivo">&nbspEssencial</label>
                                <br/>
                                <br/>
                                <input type="submit" className="botao-principal" value="Adicionar"/>
                            </form>
                        </div>

                        <div className="col-md-2">
                        </div>


                    </div>
                </div>

            </section>
        </main>
    );
}