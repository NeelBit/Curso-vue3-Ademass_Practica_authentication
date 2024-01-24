import {
    ref
} from 'vue';

class AuthService {

    // el token
    #jwt;

    // error en caso de haber
    #error;

    constructor() {
        this.#jwt = ref(null);
        this.#error = ref(null);
    }

    getJwt() {
        return this.#jwt;
    }

    getError() {
        return this.#error;
    }

    async login(email, pass) {
        try {
            const api = "https://376usy84.directus.app/auth/login";

            const res = await fetch(api, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: pass
                })
            });

            const response = await res.json();

            /* se recibe un data o un errors */

            if ('errors' in response) {
                this.#error.value = "Login failed";

                // devolver booleano para saber si hubo o no error
                return false;
            }

            this.#jwt.value = response.data.access_token;

            // guardar en una cookie:
            $cookies.set('auth', response.data.access_token);

            // guardar en una session:
            //$session.start();
            //$session.set('auth', response.data.access_token);

            //console.log($session.get('auth'));

            // indicar que la validación ha sido correcta
            return true;

        } catch (error) {
            console.log(error);
            return false;

            /* console.log(error.errors.message);
            console.log(error.errors.extensions.code); */

            /* errors [
                message: "adsffas",
                extensions: {
                    code: 'invalid...'
                }
            ] */
        }
    }

}

export default AuthService;