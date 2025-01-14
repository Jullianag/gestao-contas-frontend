import './styles.css';
import AddInput from "../AddInput";

export default function AddBank() {

    return (
        <>
            <div className="">
                <div className="banco-add">

                        <h2>Nova conta</h2>

                        <label>Apelido</label>
                        <AddInput/>
                        <label>Banco</label>
                        <AddInput/>
                        <label>Tipo</label>
                        <AddInput/>
                        <label>Valor</label>
                        <AddInput/>


                </div>

            </div>
        </>
    );
}