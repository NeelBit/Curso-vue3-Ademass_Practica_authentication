<script setup>
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';
import  HeaderComponent  from "./components/HeaderComponent.vue";

</script>


<template>

    <HeaderComponent></HeaderComponent>

    <RouterView />

    <FooterComponent></FooterComponent>

</template>


<style scoped lang="scss">



</style>
