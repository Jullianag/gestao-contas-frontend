import './styles.css';
import AddInput from "../AddInput";
import FormSelect from "../FormSelect";

export default function AddBank() {

    return (
        <>
            <div className="">
                <div className="banco-add">

                        <h2>Nova conta</h2>

                        <label>Apelido</label>
                        <AddInput/>
                        <label className="banco-mb5 ">Banco</label>
                        <FormSelect/>
                        <label className="banco-mb5 banco-mt15">Tipo</label>
                        <FormSelect/>
                        <label className="banco-mt15">Valor</label>
                        <AddInput/>


                </div>

            </div>
        </>
    );
}