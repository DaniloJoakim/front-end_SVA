<template>
    <aside class="menu" :v-show="!isMenuVisible || user">
     
     <b-nav vertical class="w-25">
         <b-nav-item @click="loadInicio">Home</b-nav-item>
         <b-nav-item @click="loadPerfil">Perfil</b-nav-item>
         <b-nav-item @click="loadVagas">Vagas</b-nav-item>
         <b-nav-item @click="loadComp">Minhas Competências</b-nav-item>
    </b-nav>

    </aside>
</template>

<script>
import { mapState } from 'vuex'
//import Tree from 'liquor-tree'
export default {
    name: "Menu",
    methods: {
        loadComp() {
            this.$router.push({ path: '/competencias/minhas'})
        },
        loadVagas() {
            this.$router.push({ path: '/vagas/minhas'})
        },
        loadPerfil() {
            this.$router.push({ path: '/perfil'})
        },
        loadInicio() {
            this.$router.push({ path: '/'})
        }
    },
    //components: {Tree},
    computed: mapState(['isMenuVisible', 'user'])
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);
        color: red;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
