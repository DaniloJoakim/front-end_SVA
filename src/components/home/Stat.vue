<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="stat-info">
                <span class="stat-title">{{ title }}</span>
                <span class="stat-empresa" ><i class="fa fa-building"></i>{{ empresa }}</span>
        </div>
        <div class="stat-info-comp">
                <span class="stat-competencia">{{competencia}}</span>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'Stat',
    props: ['title','icon','color','empresa', 'competencia' ],
    computed: {
        style() {
            return "color: " + (this.color || "red")
        }
    }
}
</script>

<style>
    .stat {
        flex: 1;
        display:flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom:  20px;
        background-color:  #fff;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .stat-icon {
        display: flex;
        align-items:  center;
    }

    .stat-icon i {
        font-size: 5rem;
    }

    .stat-info {
        /*flex: 1;*/
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .stat-title {
        display: block;
        width: 300px;
        font-size: 1.2rem;
    }
    .stat-empresa {
        
        display: block;
        width: 300px;
        padding: 10px;
        font-size: 1.2rem;
    }

    .stat-competencia {
        
        display: block;
        width: 300px;
        font-size: 3rem;
    }

    /*.stat-info-comp {
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
    }*/
</style>
