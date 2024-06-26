<template>
    <div class="header">
        <div>
            <van-search v-model="value" show-action shape="round" show-action-color='red' background="#2A2A2A" placeholder="请输入搜索关键词">
                <template #action>
                    <div @click="onSearch(value)" style="color:#fff">搜索</div>
                </template>
            </van-search>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: ''
        }
    },
    created(){
        
    },
    methods: {
        onSearch(val){
            console.log(val)
        },
    },
};
</script>

<style scoped>
.header {
    color: #fff;
}
</style>