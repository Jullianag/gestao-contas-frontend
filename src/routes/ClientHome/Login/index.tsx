import './styles.css';
import FormInput from "../../../components/FormInput";
import ButtonPrimary from "../../../components/ButtonPrimary";

export default function Login() {

    return (
        <>
            <main>
                <section id="login-section" className="banco-container">
                    <div className="banco-login-form-container">
                        <form className="banco-card banco-form banco-mt20">
                            <h2>Login</h2>
                            <div className="banco-form-controls-container">
                                <FormInput

                                />
                            </div>
                            <div className="banco-form-controls-container">
                                <FormInput/>
                            </div>

                            <div className="banco-login-form-buttons banco-mt20">
                                <hr className="hr-borda banco-mb15"/>
                                <ButtonPrimary text="Entrar"/>
                            </div>
                        </form>
                    </div>


                </section>
            </main>
        </>
    );
}