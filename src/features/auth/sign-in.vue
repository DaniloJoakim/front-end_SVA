<script>

    import { required } from 'vuelidate/lib/validators'
    import { HTTP } from '../http-common'


    export default {

        mounted () {
            
            this.$bus.$on('navigate', this.reset)
        },

        validations: {
            email: {
                required
            },
            senha: {
                required
            }
        },

        data (){
            return {
                email: '',
                senha: '',
                KeepSignerdIn: true,
            }
        }, 

        methods: {
            submit () {

               if(!this.$v.$invalid){
                 

                HTTP.post('/token', this.$data).then(response => {
                     this.$emit('do-sign-in', {...this.$data})
                    
                    window.console.log(response.data.token)
                   window.console.log(response)

                   const token = response.data.token
                   localStorage.setItem('user-token', token)

                   

                }).catch(e => {
                    
                    window.console.log('Erro:',e.response.data.mensagem)

                    const msg = e.response.data.mensagem
                    this.$emit('do-sign-in-msg', msg)
                   

                })
               } else {
                   
                   this.$v.$touch()
               }
                
            },

            reset (selected){

                if(selected === 'signup'){

                    this.email = '',
                    this.senha = '',
                    this.KeepSignerdIn = true,
                    localStorage.removeItem('user-token')
                    this.$v.$reset() 
                    

                }

            },
            
        }
    }

</script>


<template>
        <form action="#" @submit.prevent="submit" class="sign-in-htm">
            <div class="group">

                    <label :class="{invalid: $v.email.$dirty && $v.email.$invalid }" for="sign-in-user" class="label">E-mail</label>
                    <input :class="{invalid: $v.email.$dirty && $v.email.$invalid}" @input="$v.email.$touch()" id="sign-in-user" type="text" class="input" v-model="email">
                
            </div>
            <div class="group">

                    <label :class="{invalid: $v.senha.$dirty && $v.senha.$invalid}"  for="sing-in-pass" class="label">Senha</label>
                    <input :class="{invalid: $v.senha.$dirty && $v.senha.$invalid}" @input="$v.senha.$touch()" id="sing-in-pass" type="password" class="input" data-type="password" v-model="senha">
            </div>

            <div class="group">

                    <input id="check" type="checkbox" class="check" checked v-model="KeepSignerdIn">
                    <label for="check"><span class="icon"></span> Keep me Signed in</label>
             </div>


            <div class="group">
                    <input type="submit" class="button" value="Sign In">
            </div>
            <div class="hr"></div>
             <div class="foot-lnk">
                     <a href="#forgot">Forgot Password?</a>
            </div>
        </form>
</template>




