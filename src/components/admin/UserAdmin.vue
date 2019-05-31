<template>
    <div class="user-admin">
        <b-form>
            <input id="comp-id" type="hidden" v-model="user.id_aluno">
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Competência" label-for="select-comp">
                        <b-form-select id="select-comp" v-model="user.id_comp" 
                        :disabled="mode === 'remove'" class="mb-3">
                        <template slot="first">
                            <option :value="null" disabled>-- Selecione uma Competência --</option>
                        </template>
                        <option v-for="id_comp in options" :key="id_comp.id" v-bind:value="id_comp.id">
                            {{id_comp.descricao}}
                            </option>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                 <b-col md="6" sm="12">
                    <b-form-group label="Nível" label-for="select-nivel">
                        <b-form-select id="select-nivel" v-model="user.nivel"
                           :disabled="mode === 'remove'"  class="mb-3">
                        <template slot="first">
                            <option :value="null" disabled>-- Selecione um Nível --</option>
                        </template>
                                <option value= 1 style="color:red; font-weight:bold">Ruim</option>
                                <option value= 2 style="color:yellow; font-weight:bold">Intermediário</option>
                                <option value= 3 style="color:blue; font-weight:bold">Bom</option>
                                <option value= 4 style="color:green; font-weight:bold">Muito Bom</option>
                                <option value= 5 style="color:black; font-weight:bold">Especialista</option>
                             </b-form-select>
                    </b-form-group>
            
                </b-col>
                {{user.id_comp}}
            {{user.nivel}}
            </b-row>

            <b-button variant="success" v-if="mode === 'save'"
                @click="save">Salvar</b-button>

            
            <b-button variant="danger" v-if="mode === 'remove'"
                @click="remove">Excluir</b-button>

            <b-button class="ml-2" @click="reset">Cancelar</b-button>
                
        </b-form>
        <hr>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')" class="mr-2">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>

import { HTTP } from '@/features/http-common'
import { showError } from '../../features/http-common'


export default {
    name: 'UserAdmin',
    data: function(){
         return {
             mode: 'save',
             user: {},
             users: [],
             fields: [
                 {key:'id_comp', label: 'Código', sortable: true},
                 {key:'descricaoCompetencia', label: 'Descrição', sortable: true},
                 {key:'nivel', label: 'Nível', sortable: true},
                 {key:'actions', label: 'Ações'}
             ],
            id_comp: null,
             options: {},
            nivel: null
         }
    },
    methods: {
        loadUsers(){

        HTTP.get('/aluno/competencia/1').then(response => {
                    
                    this.users = response.data.payload
                
                }).catch(showError)


        HTTP.get('/competencia').then(response => {
                    
                    this.options = response.data.payload
                    
                
                }).catch(showError)
        },
        reset() {
            this.mode ='save'
            this.user = {}
            this.loadUsers()
        },
        save() {

            

                this.user.id_aluno = 1
                console.log(this.user)
           HTTP.post('/aluno/competencia',this.user).then(response => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                
                }).catch(showError)
        }, 
        remove() {
            //Verificar API
        },

        loadUser(user, mode = 'save') {
            this.mode = mode
            this.user = { ...user }
            console.log(this.user)
        }

    },
    mounted() {
        this.loadUsers()

    }
}
</script>

<style>

</style>
