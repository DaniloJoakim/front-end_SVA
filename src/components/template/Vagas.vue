<template>
        <div class="vaga">
             
            <span class="nomeEmpresa">Cooperative</span>
            <span class="descricaoVaga">Desenvolvedor Front-end</span>
           
            <ul class="competencias">
                <li>JAVA</li>
                <li>JAVA</li>
                <li>JAVA</li>
                <li>JAVA</li>
                
            </ul>
        </div>
</template>

<script>
import HTTP from '@/features/http-common'
import Axios from 'axios'

export default {
    name: "Vagas",
    data: {
        dados: []
    }
  
}
</script>

<style>
    .vaga{
        display: flex;
        background-color: #c3bebe;
        color: #fefefe;
        font-family: "Lato", sans-serif;
        border-radius: 10px;
        padding: 10px;
    }

    .descricaoVaga{
        display: flex;
         margin-top: 20px;
    }

    .nomeEmpresa{
        display: flex;
       
    }
</style>
