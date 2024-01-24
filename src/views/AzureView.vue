<script setup>

/* import { PublicClientApplication } from '@azure/msal-browser'
import AzureService from '@/services/AzureService'

const azureService = new AzureService()

const account = ref(null);

onBeforeMount( async () => {
        $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value) 
    }
)

const login = async () => {
    await $msalInstance.loginPopup({})
    .then(() => {
        const miAccounts = $msalInstance.getAllAccounts()
        account.value = miAccounts[0];

        $emitter.emit('login', account.value)
    } )
    .catch((error) => {alert(error)})
}
 */

</script>


<template>

<main class="contenedor">

    <h2>Access authentication with Azure (Microsoft)</h2>

</main>


</template>


<style scoped>



</style>