<template>
    <div class="main-page">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        
    },
};
</script>

<style scoped>
.main-page {
    color: #fff;
    height: calc(100vh - 114px);
    overflow-y: auto;
}
</style>