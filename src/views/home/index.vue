<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="标签 1">
                <tabOne></tabOne>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import tabOne from './component/tabOne.vue'
export default {
    components: {tabOne},
    data () {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scope>
    
    
</style>

