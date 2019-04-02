<script>
    import { required, sameAs } from 'vuelidate/lib/validators'
    import { HTTP } from '../http-common'

export default {
     mounted () {
            
         this.$bus.$on('navigate', this.reset)
        },
        validations: {
           nome: {
                required
            },
           senha: {
                required
            },
            senha2: {
                required,
                sameAsPassword: sameAs('senha')
            },
            email: {
                required
            }
        },

        data (){
            return {
                nome:'',
                senha:'',
                senha2:'',
                email:'',
                radio: false,
                msg : ''         
              }
        },

        methods: {
            reset (selected) {

                if(selected === 'signin'){
                    this.nome = '',
                    this.senha = '',
                    this.senha2 ='',
                    this.email = '',
                    this.radio = false,
                    this.$v.$reset()
                } 
            },

            submit () {
                    
                if(!this.$v.$invalid){
                         window.console.log('SELECTED', this.radio)
                    if(this.radio == '1'){
                        
                        HTTP.post('/alunos', this.$data).then(response => {

                                this.$emit('do-sign-up', {...this.$data})
                    
                                window.console.log(response)

                            }).catch(e => {
                            
                                window.console.log('Erro:',e.response.data.mensagem)

                                this.msg = e.response.data.mensagem

                                this.$emit('do-sign-up-msg', this.msg)

                                this.email = ''

                            })
                        } else if(this.radio == '2') {

                            HTTP.post('/empresa', this.$data).then(response => {

                                this.$emit('do-sign-up', {...this.$data})
                    
                                window.console.log(response)

                            }).catch(e => {
                            
                                window.console.log('Erro:',e.response.data.mensagem)

                                this.msg = e.response.data.mensagem

                                this.$emit('do-sign-up-msg', this.msg)

                                this.email = ''

                            })

                        } else {
                             this.msg = 'Selecione uma categoria'
                             this.$emit('do-sign-up-msg', this.msg)
                        }                   

                } else {
                    this.$v.$touch()
                }
            }
        }
}
</script>

<template>
    <form  action="#" @submit.prevent="submit" class="sign-up-htm">
                        <div class="group">
                            <label :class="{invalid: $v.nome.$dirty && $v.nome.$invalid}" for="sing-up-user" class="label">Usuário</label>
                            <input :class="{invalid: $v.nome.$dirty && $v.nome.$invalid}" @input="$v.nome.$touch()" id="sing-up-user" type="text" v-model="nome" class="input">
                        </div>
                        <div class="group">
                            <label :class="{invalid: $v.senha.$dirty && $v.senha.$invalid}" for="sing-up-pass1" class="label">Senha</label>
                            <input :class="{invalid: $v.senha.$dirty && $v.senha.$invalid}" @input="$v.senha.$touch()" id="sing-up-pass1" type="password" v-model="senha" class="input" data-type="password">
                        </div>
                        <div class="group">
                            <label :class="{invalid: $v.senha2.$dirty && $v.senha2.$invalid}" for="sing-up-pass2" class="label">Repetir senha</label>
                            <input :class="{invalid: $v.senha2.$dirty && $v.senha2.$invalid}" @input="$v.senha2.$touch()"  id="sing-up-pass2" type="password" v-model="senha2"  class="input" data-type="password">
                        </div>
                        <div class="group">
                            <label :class="{invalid: $v.email.$dirty && $v.email.$invalid}" for="pass" class="label">E-mail</label>
                            <input :class="{invalid: $v.email.$dirty && $v.email.$invalid}" @input="$v.email.$touch()" id="pass" type="text" v-model="email" class="input">
                            
                            <label class="labelRadio" for="one">
                                <input type="radio" id="one" class="option-input radio" name="example" value="1" v-model="radio" checked>
                                Aluno
                            </label>
                           
                            <label class="labelRadio" for="two">
                                <input type="radio" id="two" class="option-input radio" name="example" value="2" v-model="radio">
                                 Empresa
                            </label>

                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign Up">
                        </div>
                        <div class="hr"></div>
                        
                    </form>
</template>



<style>

</style>

