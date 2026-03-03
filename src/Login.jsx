import React  from "react"; 
function Login() {
    return (
    <div><h1>Login</h1>
    <div>
        <section>

        <label htmlFor="usuario">Username:</label>
        <input type="text" id="usuario" name="usuario" /> 
        </section>
        <section>
        <label htmlFor="contrasena">Contraseña:</label>

        <input type="password" id="contrasena" name="contrasena" />
        </section>
        
        <button >Login</button>
        <section>

        <span>se te olvido la contraseña?
        <a href="/registro">Registrate</a></span>
        </section>
    </div>
    </div>
    );
}
export default Login;