<template>
    <div class="category-admin" @onload="loadVagas">    
         <b-form>
                 <b-row>
                       <b-table hover striped :items="vagas" :fields="fields"></b-table>
                 </b-row>
            </b-form>
    </div>
</template>

<script>
import {HTTP, showError } from '@/features/http-common'


export default {
    name: 'CategoryAdmin',
    data: function() {
        return{
                user: {},
                vagas: [],
                fields: [
                    {key:'descricaoVaga', label: 'Descrição', sortable: true},
                    {key:'nomeEmpresa', label: 'Empresa', sortable: true},
                    {key:'competenciaRelacionadas', label: 'Total de Competências', sortable: true},
                    {key:'actions', label: 'Ações'}
                ],
                id_comp: null,
                options: {},
                nivel: null    
        } 
    },
    methods: {
        loadVagas(){

                    this.user.id = 1
                     console.log(this.user)
                HTTP.get('/ranking/'+ this.user.id, this.user).then(response => {

                    this.$toasted.global.defaultSucess();
                    this.vagas = response.data.payload
                    
                }).catch(showError)
          }
        },

        mounted(){

            this.loadVagas()
        }
    
     
}
</script>

<style>

</style>
