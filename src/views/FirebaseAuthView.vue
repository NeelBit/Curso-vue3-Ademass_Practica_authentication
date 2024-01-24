<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const authUser = () => {
    //console.log(email.value, password.value);

    // traer al usuario:
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then( () => {
            alert("Autenticación correcta!", auth.name, auth.currentUser);
        })
        .catch( (error) => {
            alert(`Error! ${error.message}`);
        })

}

</script>


<template>

<main class="contenedor">

    <!-- 

        Documentación Firebase Google Auth:
        https://firebase.google.com/docs/auth/web/google-signin?hl=es-419#web-version-9

        Documentación Firebase Facebook Auth:
        https://firebase.google.com/docs/auth/web/facebook-login?hl=es-419

        Documentación Firebase Twitter Auth:
        https://firebase.google.com/docs/auth/web/twitter-login?hl=es-419

        Documentación Firebase Github Auth:
        https://firebase.google.com/docs/auth/web/github-auth?hl=es-419

    -->

    <h2>Access firebase</h2>

    <form @submit.prevent="authUser">
        <div class="form-group row mb-4">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" required class="form-control" id="staticEmail" placeholder="correo@correo.com" v-model="email">
            </div>
        </div>
        <div class="form-group row mb-4">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" required class="form-control" id="inputPassword" placeholder="Password" v-model="password">
            </div>
        </div>

        <div class="form-group row ">
            <button type="submit" class="btn btn-outline-primary btn-lg">Ingresar</button>
        </div>

    </form>
    
</main>


</template>


<style scoped lang="scss">

form {
    font-size: 1.6rem;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    border-radius: $redondeo;
    padding: $separacion;
    margin-top: $separacion;
}

input {
    font-size: 1.6rem;
}

</style>