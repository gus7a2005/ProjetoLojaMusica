import { LoginStyle } from "./css/LoginStyle"

const Login =()=>{
    return(
        <LoginStyle>
            <section className="container">
                <div className="container_login">
                    <div className="login">
                        <form className="login_form">
                            <span className="titulo_login">Faça o login</span>
                            {/*Campo input usuario*/}
                            <div className="w_input">
                            <input
                                type="text"
                                className="input_form"
                                id="usuario"
                            />
                            <span placeholder="Usuario"></span>

                            </div>


                            {/*Campo input Senha */}
                            <div className="w_input">
                            <input
                                type="password"
                                className="input_form"
                                id="senha"
                            />
                            <span placeholder="Senha"></span>

                            </div>
                            <div className="login_btn">
                                <button type="submit" className="login_form_btn">Login</button>
                            </div>
                            {/*Utils*/}
                            <ul className="utils">
                                <li>
                                    <span className="text1">Esqueceu sua senha?</span>
                                </li>
                                <li>
                                    <span className="text1">Não possui conta?</span>
                                    <a href="#" className="text2">Criar conta</a>
                                </li>
                            </ul>


                        </form>
                    </div>
                    <img src="./assets/img/LOGO.jfif" alt="Imagem Login"/>
                </div>
            </section>
            
        </LoginStyle>
    )
}
export default Login