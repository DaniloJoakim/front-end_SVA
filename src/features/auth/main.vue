<script>
    import SignIn from './sign-in'
    import SignUp from './sign-up'

    
    require('vue-flash-message/dist/vue-flash-message.min.css');

    

    export default {
            components : {
                
                SignIn,

                SignUp
       },

        data (){
            return {

                navigation: 'signin'
               
            }    
        },

       methods: {
           
           navigate () {
               window.console.log(this.navigation)

               this.$bus.$emit('navigate', this.navigation)
           },

           doSignIn  (obj) {
                    
                    window.console.log(obj)

                    this.flash('Login com Sucesso', 'success', {timeout: 3000});
           },

           doSignUp (obj) {
                     window.console.log(obj)

                     this.flash('Cadastro realizado com Sucesso', 'success', {timeout: 3000});
           },

           doSignInMSG (obj){

                     window.console.log(obj)

                     this.flash(obj, 'error', {timeout: 5000})
           },
           
           doSignUpMSG(obj){
                     window.console.log(obj)

                     this.flash(obj, 'warning', {timeout: 5000})
           }
       }
    }
</script>

<template>
    <div>
        <div class="login-wrap">
            <div class="login-html">
                 <flash-message transitionIn="animated swing" class="myCustomClass"></flash-message>
                <input id="tab-1" type="radio" value="signin" v-model="navigation" @change="navigate" name="tab" class="sign-in" checked>
                <label for="tab-1" class="tab">Sign In</label>
                
                <input id="tab-2" type="radio" value="signup" v-model="navigation" @change="navigate" name="tab" class="sign-up">
                <label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">

                    <sign-in @do-sign-in="doSignIn" @do-sign-in-msg="doSignInMSG" />
                    
                    <sign-up @do-sign-up="doSignUp" @do-sign-up-msg="doSignUpMSG"/>

                </div>
            </div>
        </div>
    </div>
</template>


  
<style src="./styles.css"></style>

