<template>
    <div class="header">
        <div>
            LoGo
        </div>
        <div>
            <van-search v-model="value" show-action shape="round" show-action-color='red' background="#2A2A2A" placeholder="请输入关键词" @click="onSearch(value)">
                <template #action>
                    <van-button round type="info" size="small" icon="search" color="#454545" @click="onSearch(value)">按搜</van-button>
                </template>
            </van-search>
        </div>
        <van-button round type="info" size="small" icon="filter-o" color="#454545" @click="onSearch(value)">筛选</van-button>
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

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        color: #8d8d8d;
    }
}

.van-search__action{
    display: flex;
    align-items: center;
}
::v-deep .van-field__control::placeholder {
  color: #8d8d8d;
}
::v-deep .van-field__left-icon{
    display: none;
}
.van-search__content{
    background-color: #454545;
}
</style>