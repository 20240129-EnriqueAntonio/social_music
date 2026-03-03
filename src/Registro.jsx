import React from "react";
import guitarraLogo from './assets/guitarra.png';
function Registro() {
    return (
    <div><h1>Registro</h1>

 <div>
        <section>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />
        </section>
        <section>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
        </section>
        <section>
            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" />
        </section>
        <section>
            <label htmlFor="confirmar_contrasena">Confirmar Contraseña:</label>
            <input type="password" id="confirmar_contrasena" name="confirmar_contrasena" />

        </section>
        <aside>
            <img src={guitarraLogo} alt="guitarra fea"/>
        </aside>
        <section>
            <label htmlFor="instrumento_principal">Instrumento principal:</label>
            <input list="instrumentos" id="instrumento_principal" name="instrumento_principal" />
            <datalist id="instrumentos">
                <option value="Guitarra"></option>
                <option value="Piano"></option>
                <option value="Batería"></option>
                <option value="Violín"></option>
            </datalist>
        </section>
        <section>
            <label htmlFor="Genero_musical">Genero musical:</label>
            <input list="generos" id="Genero_musical" name="Genero_musical" />
            <datalist id="generos">
                <option value="Rock"></option>  
                <option value="Pop"></option>
                <option value="Jazz"></option>
                <option value="Clásica"></option>
            </datalist>
        </section>
    </div>
    <button>Registrar</button>
    </div>
    );
}
export default Registro;