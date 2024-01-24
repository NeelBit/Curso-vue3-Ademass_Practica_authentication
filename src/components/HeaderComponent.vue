<script setup>
import { RouterLink } from 'vue-router'


</script>


<template>

    <header class="header">
        <!-- <nav class="nav">
            <RouterLink class="nav__item" :to="{name: 'home'}">Home</RouterLink>
            <RouterLink class="nav__item" :to="{name: 'auth'}">Access</RouterLink>
        </nav> -->

        <nav class="navbar navbar-dark bg-dark ">
            <div class="container-fluid">
                <a class="navbar-brand title-navbar" href="#">Authentication</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <!-- <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5> -->
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body cuerpo-navbar">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'home'}">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'auth'}">Access backend</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'auth-firebase'}">Access firebase auth</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'auth-social'}">Access firebase auth social</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'auth-aws'}">Access AWS</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'auth-azure'}">Access Azure</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link nav__item" :to="{name: 'reloj-digital'}">Reloj digital</RouterLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </header>

</template>


<style scoped lang="scss">

    .title-navbar {
        font-size: 2rem;
    }
    .cuerpo-navbar{
        font-size: 1.8rem;
    }



    .header {

        background-image: linear-gradient( $colorNegroRelax, $colorSecondary);
        
    }
    .nav{

        height: 6rem;

        display: flex;
        justify-content: space-around;
        align-items: center;

        .nav__item{
            text-decoration: none;
            color: black;
            font-weight: 700;
            
            
            text-transform: uppercase;
            padding: .5rem;
            border-radius: 1rem;

            background-image: radial-gradient($colorNaranja, $colorAmarillo);
            text-shadow: 0 0 .5rem $colorBlanco;

            /* transition: all .5s ease-in-out 1s ; */

            transition: .5s;
            

        }

        .nav__item:hover {
            background-image: radial-gradient($colorAmarillo, $colorNaranja);
            color: $colorBlanco;
            text-shadow: 0 0 .5rem $colorNegro;
        }
    }

/* @keyframes animacionDeg {
    0% {
        background-image: linear-gradient(to right, $colorNaranja 100%, $colorAmarillo 0%);
    }

    50% {
        background-image: linear-gradient(to right, $colorNaranja 50%, $colorAmarillo 50%);
    }

    100% {
        background-image: linear-gradient(to right, $colorNaranja 0%, $colorAmarillo 100%);
    }
} */

</style>