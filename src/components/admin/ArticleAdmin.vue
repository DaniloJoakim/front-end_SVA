<template>
    <div class="article-admin">
        <b-form >
            <b-row>
                <b-col md="3" sm="12">
                    <b-form-group
                        label="Nome"
                        label-for="name"  >
                            <b-form-input
                            id="name"
                            v-model="use.nome"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite o seu Nome"
                            ></b-form-input>
                    </b-form-group>
                    </b-col>
                    <b-col md="3" sm="12">
                         <b-form-group
                            label="Sobrenome"
                            label-for="lastname"  >
                                <b-form-input
                                id="lastname"
                                v-model="use.sobrenome"
                                :disabled="mode === 'save'"
                                type="text"
                                required
                                placeholder="Digite o seu Sobrenome"
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group
                            label="Email para contato"
                            label-for="alunoEmail"  >
                                <b-form-input
                                id="alunoEmail"
                                v-model="use.alunoEmail"
                                :disabled="mode === 'save'"
                                type="email"
                                required
                                placeholder="Digite o seu E-mail"
                                ></b-form-input>
                         </b-form-group>
                </b-col>
                </b-row>
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group
                                label="Data de Nascimento"
                                label-for="datanasc"  >
                                    <b-form-input
                                    id="datanasc"
                                    v-model="use.datNasc"
                                    :disabled="mode === 'save'"
                                    type="date"
                                    required
                                    placeholder="Digite sua data de nascimento"
                                    ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group
                            label="Idade"
                            label-for="idade"  >
                                <b-form-input
                                id="idade"
                                v-model="use.idade"
                                :disabled="mode === 'save'"
                                type="number"
                                required
                                placeholder="Digite sua idade"
                                ></b-form-input>
                        </b-form-group>
                 </b-col>
            </b-row>
            <b-row>
                <b-col md="4" sm="12">
                 <b-form-group
                        label="Cidade"
                        label-for="cidade"  >
                            <b-form-input
                            id="cidade"
                            v-model="use.cidade"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite sua Cidade"
                            ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                     <b-form-group  label="Estado" label-for="estado">
                        <b-form-select
                        id="estado"
                        :disabled="mode === 'save'"
                        v-model="use.estado"
                        :options="estados"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Pais" label-for="pais"  >
                            <b-form-input
                            id="pais"
                            v-model="use.pais"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite seu Pais"
                            ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                 <b-col md="6" sm="12">
                    <b-form-group label="Telefone" label-for="telefone"  >
                            <b-form-input
                            id="telefone"
                            v-model="use.telefone"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite seu número de Telefone"
                            description="(00)0000-0000"
                            ></b-form-input>
                     </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Celular" label-for="Celular"  >
                            <b-form-input
                            id="celular"
                            v-model="use.celular"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite seu número de Celular"
                               description="(00)9-0000-0000"
                            ></b-form-input>
                    </b-form-group>
                 </b-col>
            </b-row>
            <b-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Instituição" label-for="instituicao"  >
                            <b-form-input
                            id="instituicao"
                            v-model="use.instituicao"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite o nome da sua Instituição"
                            ></b-form-input>
                     </b-form-group>
                </b-col>
                 <b-col md="6" sm="12">
                     <b-form-group label="Curso" label-for="curso"  >
                            <b-form-input
                            id="curso"
                            v-model="use.curso"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite seu Curso"
                            ></b-form-input>
                     </b-form-group>
                </b-col>
                 <b-col md="2" sm="12">
                     <b-form-group label="Você está Cursando ?" label-for="status"  >
                             <b-form-select
                                id="status"
                                v-model="use.status"
                                :disabled="mode === 'save'"
                                required
                            > 
                        <template slot="first">
                            <option :value="null" disabled>-- Selecione um valor --</option>
                        </template>
                                <option value= "1">Sim</option>
                                <option value= "0">Não</option>
                         </b-form-select>
                     </b-form-group>
                </b-col>
            </b-row>
             <b-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Período" label-for="periodo"  >
                            <b-form-input
                            id="periodo"
                            v-model="use.periodo"
                            :disabled="mode === 'save'"
                            type="text"
                            required
                            placeholder="Digite seu Período"
                            ></b-form-input>
                     </b-form-group>
                </b-col>
                 <b-col md="1" sm="12">
                     <b-form-group label="Semestre" label-for="semestre"  >
                          <b-form-select
                                id="semestre"
                                v-model="use.semestre"
                                :disabled="mode === 'save'"
                                required
                            > 
                        <template slot="first">
                            <option :value="null" disabled>-- Selecione um valor --</option>
                        </template>
                                <option value= "1">1°</option>
                                <option value= "2">2°</option>
                                <option value= "3">3°</option>
                                <option value= "4">4°</option>
                                <option value= "5">5°</option>
                                <option value= "6">6°</option>
                                <option value= "7">7°</option>
                                <option value= "8">8°</option>
                                <option value= "9">9°</option>
                                <option value= "10">10°</option>
                         </b-form-select>
                     </b-form-group>
                </b-col>
                 <b-col md="2" sm="12">
                     <b-form-group label="Data de início" label-for="datainicio"  >
                            <b-form-input
                            id="datainicio"
                            v-model="use.inicio"
                            :disabled="mode === 'save'"
                            type="date"
                            required
                            ></b-form-input>
                     </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Data de Término" label-for="datatermino"  >
                           <b-form-input
                            id="datatermino"
                            v-model="use.termino"
                            :disabled="mode === 'save'"
                            type="date"
                            required
                            ></b-form-input>
                     </b-form-group>
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Data de prevista de Conclusão" label-for="dataconclusao"  >
                            <b-form-input
                            id="dataconclusao"
                            v-model="use.conclusao"
                            :disabled="mode === 'save'"
                            type="date"
                            required
                            ></b-form-input>
                     </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                 <b-col md="9" sm="12">
                </b-col>
                 <b-col md="1" sm="12">
                    <b-button class="ml-2" @click="loadUser" v-if="mode === 'edit'">Cancelar</b-button>
                </b-col>
                <b-col md="1" sm="12">
                    <b-button variant="success"  @click="save">Salvar</b-button>
                </b-col>
                 <b-col md="1" sm="12">
                    <b-button variant="danger" @click="edit">Editar</b-button>
                </b-col>
                
            </b-row>

        </b-form>
    </div>
</template>

<script>
//import moment from 'moment'
import { mapState } from 'vuex' 
import { HTTP, showError} from '@/features/http-common'

export default {
    name: 'ArticleAdmin',
    data() {
      return {
        use: {},
        mode: 'save',
       estados: [
            { text: 'Selecione uma UF', value: null }, 
        'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'],
        show: true
      }
    },
    methods: {
        loadUser() {
            
                 this.use.id = this.user.id

        HTTP.get('/alunos/'+ this.use.id).then(response => {
                    this.$toasted.global.defaultSucess();
                    this.use = response.data.payload
                    this.mode = 'save'
        
                    
                    
                }).catch(showError)
        },
        save() {
                  this.use.id = this.user.id
            HTTP.put('/alunos/'+ this.use.id, this.use).then(()=> {
                        this.$toasted.global.defaultSucess();
                        this.mode = 'save'
                }).catch(showError)
        },
        edit(){
            this.mode = 'edit'
        },
       
        
    },
    mounted() {
        this.loadUser()

    },
    computed: mapState(['user']) 
  }
</script>

<style>

</style>
