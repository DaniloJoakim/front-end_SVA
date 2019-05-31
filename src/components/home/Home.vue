<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base de Conhecimento"/>
        <div class="stats">
           <!-- <Stat :title="stat.payload[0].descricaoVaga" :empresa="stat.payload[0].nomeEmpresa" :competencia="stat.payload[0].competenciaRelacionadas"
                icon="fa fa-file" color="#3bc480"/>
             <Stat :title="stat.payload[1].descricaoVaga" :empresa="stat.payload[1].nomeEmpresa" :competencia="stat.payload[1].competenciaRelacionadas"
                icon="fa fa-file" color="#3bc480"/>-->
             <Stat v-for="dado in stat" :key="dado.codigoVaga" v-bind:title="dado.descricaoVaga" v-bind:empresa="dado.nomeEmpresa" v-bind:competencia="dado.competenciaRelacionadas"
                icon="fa fa-file" color="#3bc480"/>
                
        </div>

            
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
//import axios from 'axios'
import { HTTP, showError } from '@/features/http-common'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function(){
        return{
            stat: {}
        }
    },
    methods: {
        getStats() {
           
         HTTP.get('/ranking/1').then(response => {
                    
                   // window.console.log(response.data.payload.length)
                    this.stat = response.data.payload
                    window.console.log(this.stat)
                    

                }).catch(showError)
            
        }
    },
    mounted(){
        this.getStats()
    }

}
</script>

<style>
    .stats {
        display: block;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
