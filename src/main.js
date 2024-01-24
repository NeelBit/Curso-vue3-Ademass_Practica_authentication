import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'

/* firebase */
// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";

/* import vue cookies */
import VueCookies from 'vue-cookies';

/* import vue session */
//import VueSession from 'vue-session';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(createPinia())
app.use(router)

/* indicamos que use cookies */
//app.use(VueCookies)
app.use(VueCookies, {
    expires: '1d'
});

// segundo parámetro opcional, es un objeto donde podemos indicarle algunas opciones
/* app.use(VueCookies, {
    // tiempo que queremos que se conserve en el navegador
    expires: '1d',
    // donde se va a guardar
    path: '/',
    // en que dominio vamos a guardar los cookies
    domain: '',
    // especificaciones de seguridad
    secure: '',
    sameSite: ''
}) */

// COOKIES
/* 
// expires en adelante opcionales, es solo si queremos sobre-escribir
$cookies.set('nombre', valor, expires, path, domain, secure, sameSite);

// devuelve el valor
$cookies.get('nombre');

// eliminar cookie: por ej cuando cierra sesión
$cookies.remove('name');

// saber si ya existe una cookie:
$cookies.isKey('nombre');

// obtener todas las cookies, por ej si estoy usando sesión, preferencias, etc
$cookies.keys();
 */

// SESIONES
//app.use(VueSession);
/* $session.start();

// establecer
$session.set('auth', valor);

// para recuperar el valor:
$session.get('auth');

// para saber el id de la session que se esta usando:
$session.id();

// renovar session:
$session.renew();

// eliminar session (cuando hace logout)
$session.destroy(); */





app.mount('#app')