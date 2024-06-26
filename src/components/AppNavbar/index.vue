<template>
    <div class="navbar" route>
        <van-tabbar class="bottom_menu" v-model="active" active-color="#3899FB" inactive-color="#FFF" @change="onChange">
            <van-tabbar-item icon="home-o" >标签</van-tabbar-item>
            <van-tabbar-item icon="search" to="/home">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            active: 0
        }
    },
    created() {

    },
    methods: {
        onChange(val){
            console.log(val)
        },
    },
};
</script>


<style scoped>
    .van-tabbar {
        background-color: transparent;
    }
    .van-tabbar-item{
        background-color: transparent;
    }
</style>