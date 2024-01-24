<script setup>
/* importar el proveedor de autenticación de google desde firebase. 
Posibles las importaciónes globales porque en el main importamos firebase */
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

/* no configurado */
import { FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth';

const auth =getAuth();
const googleProvider = new GoogleAuthProvider();

/* no configurados */
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credentials = GoogleAuthProvider.credentialFromResult(result);
                // ? optional chaining: leer la propiedad de un objeto sin la necesidad de validar si la referencia existe 
            const token = credentials?.accessToken;

            alert("Hiciste login correctamente! :)")
        })
        .catch((error) => {
            alert(`Error al hacer login! :( ${error}`);
        })
}

/* no configurado */
const loginFacebook = () => {
    console.log("Click en loginFacebook, NO CONFIGURADO");

    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const credentials = FacebookAuthProvider.credentialFromResult(result);
            const token = credentials?.accessToken;

            alert("Hiciste login correctamente! :)")
        })
        .catch((error) => { 
            alert(`Error al hacer login! :( ${error}`);
        })

}

/* no configurado */
const loginTwitter = () => { 
    console.log("Click en loginTwitter, NO CONFIGURADO");

    signInWithPopup(auth, twitterProvider)
        .then((result) => {
            const credentials = TwitterAuthProvider.credentialFromResult(result);
            const token = credentials?.accessToken;

            alert("Hiciste login correctamente! :)")
        })
        .catch((error) => { 
            alert(`Error al hacer login! :( ${error}`);
        })
}

const loginGitHub = () => {
    console.log("Click en loginGitHub, NO CONFIGURADO");

    signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            const credentials = GithubAuthProvider.credentialFromResult(result);
            const token = credentials?.accessToken;

            alert("Hiciste login correctamente! :)")
        })
        .catch((error) => { 
            alert(`Error al hacer login! :( ${error}`);
        })
}

</script>


<template>

<main class="contenedor">
    <h2>Access firebase social login</h2>

    <div class="lista-logins card p-2">
        <div class="login login-google">
            <h3>Login with Google</h3>
            <button class="btn btn-lg btn-outline-primary" @click="loginGoogle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
                Login
            </button>
        </div>

        <hr>

        <h3 class="centrar-texto no-configurados">NO CONFIGURADOS</h3>

        <div class="login login-facebook">
            <h3>Login with Facebook</h3>
            <button class="btn btn-lg btn-outline-primary" @click="loginFacebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                Login
            </button>
        </div>

        <hr>

        <div class="login login-twitter">
            <h3>Login with Twitter</h3>
            <button class="btn btn-lg btn-outline-primary" @click="loginTwitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Login
            </button>
        </div>

        <hr>

        <div class="login login-github">
            <h3>Login with GitHub</h3>
            <button class="btn btn-lg btn-outline-primary" @click="loginGitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Login
            </button>
        </div>


    </div>


</main>


</template>


<style scoped lang="scss">

.lista-logins {
    display: flex;
    flex-direction: column;
    gap: $separacion;

    border-radius: $redondeo;

    max-width: 40rem;
    
    margin: 0 auto;
}

svg {
    
}

.no-configurados {
    /* text-decoration: solid underline 2px $colorPrimary; */
    animation: identifier alternate 1s infinite ease;
}

@keyframes identifier {
    to {
        text-decoration: none;
    }
    from {
        text-decoration: solid underline 3px $colorPrimary;
    }
}

</style>