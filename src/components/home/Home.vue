<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Ranking de Vagas"/>
        <div class="stats">

             <Stat v-for="dado in stat" :key="dado.codigoVaga" v-bind:title="dado.descricaoVaga" v-bind:empresa="dado.nomeEmpresa" v-bind:competencia="dado.competenciaRelacionadas"
                icon="fa fa-file" color="#3bc480"/>

        </div>

            
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
//import axios from 'axios'
import { HTTP, showError } from '@/features/http-common'


export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function(){
        return{
            stat: {},
            comp: {},
            use: {}
        }
    },
    methods: {
        getStats() {
            this.use.id = this.user.id

         HTTP.get('/ranking/'+ this.use.id).then(response => {

                    this.stat = response.data.payload

                }).catch(showError)

         HTTP.get('/aluno/competencia/relacionadas/'+ this.use.id).then(response => {

                    this.comp = response.data.payload
                   // console.log(this.comp)

                }).catch(showError)
            
        }
    },
    mounted(){
        this.getStats()
    },
    computed: mapState(['user'])

}
</script>

<style>
    .stats {
        display: block;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
