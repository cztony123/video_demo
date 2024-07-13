<template>
    <div>
        <van-tabs v-model="active" animated background="#454545" title-inactive-color="#8d8d8d" title-active-color="#fff">
            <van-tab v-for="item in topBar" :title="item.label" swipeable>
                <listPage :active="active"></listPage>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { getTabbarList } from "@/api/home/tabbar";
import listPage from './listPage.vue'
export default {
    components: {
        listPage,
    },
    data () {
        return {
            topBar: [],
            active: '',
        }
    },
    created () {
        this.getDataList()
    },
    methods: {
        //请求tab数据
        getDataList() {
            getTabbarList().then((res) => {
                this.topBar = res.data.data.topBar
            });
        },
    }
}
</script>

<style scoped lang="scss">
    
</style>

