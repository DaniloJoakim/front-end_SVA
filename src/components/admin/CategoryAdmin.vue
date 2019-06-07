<template>
    <div class="category-admin">    
         <b-form>
                 <b-row> 
                     <b-button variant="success" @click="loadVagas">Atualizar</b-button>
                 </b-row>
                 <b-row>
                       <b-table hover striped  :foot-clone ="footClone" :items="vagas" :fields="fields"> 
                        </b-table>
                 </b-row>
                
            </b-form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {HTTP, showError } from '@/features/http-common'


export default {
    name: 'CategoryAdmin',
    data: function() {
        return{
                use: {},
                vagas: [],
                fields: [
                    {key:'descricaoVaga', label: 'Descrição', sortable: true},
                    {key:'nomeEmpresa', label: 'Empresa', sortable: true},
                    {key:'competenciaRelacionadas', label: 'Total de Competências', sortable: true},
                   // {key:'competencias.(descricaoCompetencia)', label: 'Tipos'},
                ],footClone: true,
                id_comp: null,
                options: {},
                nivel: null    
        } 
    },
    methods: {
        loadVagas(){

                    this.use.id = this.user.id
                     //console.log(this.use)
                HTTP.get('/ranking/'+ this.use.id, this.use).then(response => {
                    // console.log(response.data.payload[0].competencias)
                    this.$toasted.global.defaultSucess();
                    this.vagas = response.data.payload
                    
                }).catch(showError)
          }
        },

        mounted(){

            this.loadVagas()
        },
        computed: mapState(['user'])
    
     
}
</script>

<style>

</style>
