const urlProduccion = "https://localhost:7106/api/"


// Para Registro
const formRegistro = document.getElementById("formRegistro");

if(formRegistro){

    formRegistro.addEventListener("submit", async function (e) {
        e.preventDefault();

        const datos = {
            name: document.getElementById("nombre").value,
            email: document.getElementById("correo").value,
            password: document.getElementById("pass").value,
            instrument: document.getElementById("instrumento").value,
            gender: document.getElementById("genero").value
        };


        const respuesta = await fetch(urlProduccion + "Registro", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify(datos)
        })


        const resultado = await respuesta.json();

        if(resultado.exito){
            window.location.replace("login.html");
        }
        else{
            if(Array.isArray(resultado.mensaje)){
                alert(resultado.mensaje.join("\n"));
            }else{
                alert(resultado.mensaje);
            }
        }    
    })
}


//Para Login

const formLogin = document.getElementById("formLogin");
if(formLogin){
    formLogin.addEventListener("submit", async function (e) {
        e.preventDefault();

        const datosLogin = {
            email: document.getElementById("emailLogin").value.trim(),     
            password: document.getElementById("passLogin").value.trim()
        };

        const respuesta = await fetch(urlProduccion + "Login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify(datosLogin)
        });


        const resultado = await respuesta.json();

        if(resultado.exito){

            // Si es exitoso redirigimos y aparte guardamos algunos datos del usuario
            localStorage.setItem("token", resultado.token);
            localStorage.setItem("usuario", JSON.stringify(resultado.usuario));

            window.location.replace("/");

        }
        else{
            alert(resultado.mensaje);
        }    

    })
}