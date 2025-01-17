import './styles.css';
import FormInput from "../../../components/FormInput";
import {useContext, useState} from "react";
import {ContextToken} from "../../../utils/context-toekn.ts";
import {useNavigate} from "react-router-dom";
import * as forms from "../../../utils/forms.ts";
import * as authService from "../../../services/auth-service.ts";


export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);

    const navigate = useNavigate();

    const [submitResponseFail, setSubmitResponseFail] = useState(false);

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());},
            message: "Favor informar um email válido!",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    });

    function handleSubmit(event: any) {
        event.preventDefault();

        setSubmitResponseFail(false);

        const formDataValidate = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidate)) {
            setFormData(formDataValidate);
            return;
        }

        // consutlar forms.ts
        authService.loginRequest(forms.toValue(formData))
            .then(response => {
                // salva no localStorage
                // pegar os dados no postman "access_token"
                authService.saveAccessToken(response.data.access_token);

                // salva após o login, para atualizar o carrinho
                setContextTokenPayload(authService.getAccessTokenPayload());

                navigate("/bank");
            })
            .catch(() => {
                setSubmitResponseFail(true);
            })
    }

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
    }

    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }

    return (
        <>
            <main>
                <section id="login-section" className="banco-container">
                    <div className="banco-login-form-container">
                        <form className="banco-card banco-form banco-mt20" onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="banco-form-controls-container">
                                <div>
                                    <FormInput
                                        {...formData.username}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="banco-form-controls-container">
                                    <FormInput
                                        {...formData.password}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                </div>

                            </div>
                            {
                                submitResponseFail &&
                                <div className="banco-form-global-error">
                                    Usuário ou senha inválidos
                                </div>
                            }


                            <div className="banco-login-form-buttons banco-mt20">
                                <hr className="hr-borda banco-mb15"/>
                                <button type="submit" className="banco-btn banco-btn-blue"> Entrar</button>
                            </div>
                        </form>
                    </div>


                </section>
            </main>
        </>
    );
}