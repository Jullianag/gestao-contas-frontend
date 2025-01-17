import './styles.css';
import AddInput from "../AddInput";
import FormSelect from "../FormSelect";
import {useEffect, useState} from "react";
import {TypesDTO} from "../../models/types.ts";
import {BankDTO} from "../../models/bank.ts";
import * as forms from "../../utils/forms.ts";
import ButtonPrimary from "../ButtonPrimary";
import {useNavigate, useParams} from "react-router-dom";
import * as accountService from "../../services/account-service.ts";
import * as bankService from "../../services/bank-service.ts";
import {selectStyles} from "../../utils/select.ts";



export default function AddBank() {

    const [banks, setBanks] = useState<BankDTO[]>([]);

    const navigate = useNavigate();

    // para ter condições de acessar o parâmetro da rota
    const params = useParams();

    const isEditing = params.accountId !== "create";

    const [formData, setFormData] = useState<any>({
        nickname: {
            value: "",
            id: "nickname",
            name: "nickname",
            type: "text",
            placeholder: "Apelido",
            validation: function (value: string) {
                //return value.length >= 3 && value.length <= 80;
                return /^.{2,10}$/.test(value);
            },
            message: "Favor informar um nome de 2 a 10 caracteres!",
        },
        types: {
            value: [],
            id: "types",
            name: "types",
            type: "number",
            placeholder: "Escolha o tipo",
            validation: function (value: TypesDTO[]) {
                return value.length > 0;
            },
            message: "Favor informar o tipo da conta!"
        },
        valor: {
            value: "",
            id: "valor",
            name: "valor",
            type: "number",
            placeholder: "Valor",
            validation: function (value: any) {
                return Number(value) > 0;
            },

        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        },
        banks: {
            value: [],
            id: "banks",
            name: "banks",
            placeholder: "Banco",
            validation: function (value: BankDTO[]) {
                return value.length > 0;
            },
            message: "Escolha ao menos um banco!"
        }
    });

    useEffect(() => {
        bankService.findAllRequest()
            .then(response => {
                setBanks(response.data);
            })
    }, []);

    useEffect(() => {

        if (isEditing) {
            // convertendo para número
            accountService.findById(Number(params.productId))
                .then(response => {
                    const newFormDate = forms.updateAll(formData, response.data);
                    setFormData(newFormDate);
                })
        }
    }, []);

    function handleTurnDirty(name: string) {
        // função que vai sujar o campo name
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidate = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidate)) {
            setFormData(formDataValidate);
            // corta o submit do formulario
            return;
        }

        const requestBody = forms.toValue(formData);

        if (isEditing) {
            requestBody.id = params.accountId;
        }

        // ternário
        const request = isEditing
            ? accountService.updateRequest(requestBody)
            : accountService.insertRequest(requestBody);

        request
            .then(() => {
                navigate("/banks")
            })
            .catch(error => {
                const newInputs = forms.setBackendErrors(formData, error.response.data.errors);
                setFormData(newInputs);
            })
    }

    return (
        <>
            <div className="">
                <div className="banco-add">

                    <form className="banco-add" onSubmit={handleSubmit}>
                        <h2>Nova conta</h2>

                        <label>Apelido</label>
                        <AddInput/>
                        <label className="banco-mb5 ">Banco</label>
                        <FormSelect
                            {...formData.banks}
                            options={banks}
                            className="banco-form-select-container"
                            styles={selectStyles}
                            onChange={(obj: any) => {
                                const newFormData = forms.updateAndValidate(formData, "banks", obj);
                                setFormData(newFormData);
                            }}
                            onTurnDirty={handleTurnDirty}
                            isMulti
                            getOptionLabel={(obj: any) => obj.name}
                            getOptionValue={(obj: any) => String(obj.id)}
                        />
                        <label className="banco-mb5 banco-mt15">Tipo</label>
                        <FormSelect/>
                        <label className="banco-mt15">Valor</label>
                        <AddInput/>
                        <div className="banco-btn-add banco-mt5">
                            <ButtonPrimary text="Adicionar"/>
                        </div>
                    </form>

                </div>

            </div>
        </>
    );
}