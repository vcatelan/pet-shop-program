import companyLogo from '../../assets/logo.png'
import './login.css'
function Login () {
    return (
        <>
            <div className="login-container">
                <img src={companyLogo} alt="Petshop Logo" />
                    <form id="login-form">
                        <label for="username">Usuário:</label>
                        <input type="text" id="username" name="username" required/>
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" required/>
                        <button type="submit"><a href="./dashboard.jsx">Login</a></button>
                        {/* <input type="checkbox">Continuar conectado</input> */}
                        <a href="">Esqueci minha senha</a>
                    </form>
            </div>
        </>    
    )
}

export default Login