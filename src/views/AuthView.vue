<!-- 
    servidor back del video: 
        https://hfp69ilv.directus.app/auth/login

        email: testuser@gogodev.net
        password: 12345678

    otro: 
        https://376usy84.directus.app/auth/login
        email: testuser@gogodev.net
        password: 12345678

    authentication de firebase:
        user y pass en text authentication-notas
 -->

<script setup>

import { ref, reactive, onBeforeMount } from 'vue';
import AuthService from '../services/AuthService';



const user = reactive({
    email: '',
    pass: ''
})

const mostrar = () => {

    console.log(user);
}

const compruebaPass = (e) => {
    if (e.target.value.length > 8) {
        console.log(e.target.value);
    }
}



const authUser = async () => {
    const auth = new AuthService();
    const success = await auth.login(user.email, user.pass)

    if (success) {

        // guardar el token
        alert('Ingreso con éxito :D' + auth.getJwt());

        // guardar en una cookie
        //$cookies.set('auth', auth.getJwt());

        console.log($cookies.get('auth'));

    } else {
        alert('Falló inicio de sesión! :/')
    }
}

/* const takeInfoFromUser = () => { 
    const token = $cookies.get('auth');
} */

</script>


<template>

    <main class="contenedor " >

        <h2>Access backend tradicional</h2>

        <!-- <button class="btn-grad">Probando</button> -->

        <section class="form">

            <div class="form__title">
                <!-- <h2>Registro</h2>
                <h3>¿Ya estas registrado? <RouterLink to="/">Ingresa</RouterLink></h3> -->
            </div>

            <form class="form__form" @submit.prevent="authUser">

                <!-- <div>
                    <label for="nombre">Nombre y apellido</label>
                    <input type="text" required placeholder="Nombre y apellido">
                </div> -->

                <div class="form__email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Ingrese su email" v-model="user.email">
                </div>

                <div class="form__pass">
                    <label for="pass">Password</label>
                    <input @keyup="compruebaPass" type="password" name="pass" id="pass" required placeholder="Ingrese contraseña" v-model="user.pass">
                </div>

                <!-- <div class="form__pass">
                    <label for="pass">Repita password</label>
                    <input type="password" name="pass2" id="pass2" required placeholder="Ingrese contraseña">
                </div> -->

                <button class="form__btn" type="submit">Enviar</button>

            </form>

            {{ user.email }} | {{ user.pass }}

            <!-- <div class="form__terminos">
                <a href="#">Términos y condiciones</a>
            </div> -->

        </section>

    </main>

</template>


<style scoped lang="scss">

/* BTN de prueba */
.btn-grad {
    background-image: linear-gradient(to right, #200122 0%, #6f0000  51%, #200122  100%);
    margin: 1rem;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: $colorBlanco;            
    box-shadow: 0 0 20px $colorBlancoRelax;
    border-radius: 1rem;
    display: block;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: $colorBlanco;
    text-decoration: none;
}

/* FORM */
.form {
    padding: $separacion;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: $separacion;

    background-image: linear-gradient(to top, $colorNegroRelax, $colorBlancoRelax);

    border-radius: $redondeo;

    margin-top: $separacion;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

input {
    width: 100%;
    border: none;
    border-radius: $redondeo;
    outline: none;
    padding: .5rem;
    color: $colorBlancoRelax;
    background-color: $colorNegroRelax;
}

.form__btn {
    border: none;
    border-radius: $redondeo;
    background-color: $colorPrimary;
    padding: 1rem;
    width: 10rem;
    margin: 0 auto;

    &:hover {
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
}

.form__title {
    text-align: center;
}

.form__form {
    width: min(100%, 600px);

    display: flex;
    flex-direction: column;



    gap: $separacion;

    label {
        font-weight: 700;
    }
}

.form__terminos {
    text-align: center;

    a {
        color: $colorPrimary;
        text-decoration: none;        
    }
}

</style>