<template>
    <div>
        <van-tabs v-model="active" animated background="#454545" title-inactive-color="#8d8d8d" title-active-color="#fff">
            <van-tab title="全部视频" swipeable>
                <tabOne></tabOne>
            </van-tab>
            <van-tab title="惊悚" swipeable>
                <tabTwo></tabTwo>
            </van-tab>
            <van-tab title="恐怖">内容 3</van-tab>
            <van-tab title="悬疑">内容 4</van-tab>
            <van-tab title="灾难">内容 4</van-tab>
            <van-tab title="科幻">内容 4</van-tab>
            <van-tab title="奇幻">内容 4</van-tab>
            <van-tab title="动漫">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import tabOne from './component/tabOne.vue'
import tabTwo from './component/tabTwo.vue'
export default {
    components: {
        tabOne,
        tabTwo,
    },
    data () {
        return {
            active: ''
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">
    
</style>

