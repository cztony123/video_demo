<template>
    <div class="navbar" route>
        <van-tabbar class="bottom_menu" v-model="active" active-color="#3899FB" inactive-color="#FFF" @change="onChange">
            <van-tabbar-item icon="home-o" to="/home" >首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/search">查询</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/user">用户</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
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
        background-color: #333333;
        border: none;
        height: 60px;
    }
    .van-tabbar-item{
        background-color: #333333;
    }
</style>