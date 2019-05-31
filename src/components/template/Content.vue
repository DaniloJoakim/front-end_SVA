<template>
    <div class="content">
       <router-view></router-view>
    </div>
</template>

<script>
/*import Vagas from './Vagas'*/

export default {
        name: 'Content',
       
}
</script>

<style>
    .content {
        grid-area: content;
        background-color:#efefef;
        padding: 20px;
    }
</style>
