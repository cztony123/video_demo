<template>
    <div>
        <div>
            <van-search v-model="value" show-action shape="round" show-action-color='red' background="#2A2A2A" placeholder="请输入搜索关键词">
                <template #action>
                    <div @click="onSearch(value)" style="color:#fff">搜索</div>
                </template>
            </van-search>
        </div>
        <div>
            <van-tabbar class="bottom_menu" v-model="active" active-color="#3899FB" inactive-color="#FFF" @change="onChange">
                <van-tabbar-item icon="home-o">标签</van-tabbar-item>
                <van-tabbar-item icon="search">标签</van-tabbar-item>
                <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
                <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: '',
            active: 0
        }
    },
    methods: {
        onSearch(val){
            console.log(val)
        },
        onChange(val){
            console.log(val)
        },
    }
}
</script>

<style lang="less" scope>
    .van-tabbar {
        background-color: transparent; /* 设置背景色为透明 */
    }
    .van-tabbar-item{
        background-color: transparent; /* 设置背景色为透明 */
    }
    
</style>

