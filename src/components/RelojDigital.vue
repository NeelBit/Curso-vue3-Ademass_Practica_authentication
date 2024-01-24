<script setup>

import { ref, onBeforeMount, onUnmounted } from 'vue';

const hora = ref(0);
const minuto = ref(0);
const segundo = ref(0);

// setInterval
const time = ref(null);

onBeforeMount(() => {
    time.value = setInterval(() => {
        setTiempo();
        console.log(segundo.value);
    }, 100);
})

onUnmounted(() => {
    console.log("onUnmounted");
    clearInterval(time.value);
})

const setTiempo = () => {
    const date = new Date();

    hora.value = date.getHours();
    minuto.value = date.getMinutes();
    segundo.value = date.getSeconds();

    /* El método padStart() rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada.
    El relleno es aplicado desde el inicio (izquierda) de la cadena actual. 
    Osea que para rellenar con cero si es de 1 dígito la hora, que siempre sea 2 y que rellene con 0 sería
        */

    hora.value = hora.value <= 9 ? `${hora.value}`.padStart(2, 0) : hora.value;
    minuto.value = minuto.value <= 9 ? `${minuto.value}`.padStart(2, 0) : minuto.value;
    segundo.value = segundo.value <= 9 ? `${segundo.value}`.padStart(2, 0) : segundo.value;

}


</script>


<template>

<main>

    <div class="contenedor">
        <h2 class="centrar-texto">
            Reloj Digital
        </h2>

        <div class="reloj">
            <div class="hora">{{ hora }}</div>
            <div class="divisor">:</div>
            <div class="minuto">{{ minuto }}</div>
            <div class="divisor">:</div>
            <div class="segundo">{{ segundo }}</div>
        </div>

    </div>


</main>

</template>


<style scoped lang="scss">

h2 {
    text-decoration: underline solid 1px $colorNegroRelax;
}
.reloj {

    margin-top: $separacion;

    display: flex;
    font-size: 4.4rem;
    font-weight: 800;
    color: $colorPrimary;
    justify-content: center;
    align-items: center;

    .hora {

    }
    .minuto {

    }

    .segundo {

    }

    .divisor {

    }
}



</style>