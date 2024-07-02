<template>
    <div class="indexBox">
        <div class="header">
            <div class="header-page">
                <div class="logo">
                    <img src="../../assets/image/logo.png" alt="">
                </div>
                <div class="searchBox">
                    <van-search v-model="value" show-action shape="round" show-action-color='red' background="#2A2A2A" placeholder="请输入关键词" @click="onSearch(value)">
                        <template #action>
                            <van-button round type="info" size="small" icon="search" color="#454545" @click="onSearch(value)">搜索</van-button>
                        </template>
                    </van-search>
                </div>
                <van-cell is-link @click="showPopup">
                    <van-button round type="info" size="small" icon="filter-o" color="#454545" @click="onSearch(value)">筛选</van-button>
                </van-cell>
                <van-popup v-model="show" position="top" :style="{ height: '30%' }">
                    <div class="filterBox">
                        <div class="filter-title" v-for="item in filterList">{{item.title}}</div>
                        <div>123</div>
                    </div>
                </van-popup>
            </div>
        </div>
        <main class="main">
            <div class="main-page">
                <router-view></router-view>
            </div>
            
            <div class="navbar" route>
                <van-tabbar class="bottom_menu" v-model="active" active-color="#3899FB" inactive-color="#FFF">
                    <van-tabbar-item icon="home-o" to="/home" >首页</van-tabbar-item>
                    <van-tabbar-item icon="search" to="/search">查询</van-tabbar-item>
                    <van-tabbar-item icon="friends-o" to="/user">用户</van-tabbar-item>
                    <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
                </van-tabbar>
            </div>
        </main>
    </div>
</template>

<script>
import { filterList } from '../home/data';
export default {
    data () {
        return {
            value: '',
            active: 0,
            show: false,
            filterList,
        }
    },
    created() {
        switch(this.$route.path){
            case '/search':
                this.active = 1;
                break;
            case '/user':
                this.active = 2;
                break;
            case '/setting':
                this.active = 3;
                break;
            default:
        }
        console.log(this.filterList)
    },
    methods: {
        onSearch(val){
            console.log(val)
        },
        showPopup() {
      this.show = true;
    },
    },
};
</script>

<style scoped lang="scss">
/*首页最外层*/
.indexBox{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
}
/*头部*/
.header{
    height: 54px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.header-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    .logo{
        width: 35px;
        img{
            width: 100%;
        }
    }
    .searchBox{
        width: 70%;
    }
    .van-search__action{
        display: flex;
        align-items: center;
    }
    div{
        color: #8d8d8d;
    }

    /*搜索框*/
    .van-search__content{
        background-color: #454545;
        height: 28px;
    }
    
    /*搜索框内容*/
    ::v-deep .van-field__control{
        color: #8d8d8d;
    }
    ::v-deep .van-field__body{
        height: 18px;
    }

    /*搜索按钮*/
    .van-button{
        height: 28px;
    }

    /*点击搜索按钮时*/
    .van-search__action:active{
        background-color: transparent;
    }

    /*搜索框文案*/
    ::v-deep .van-field__control::placeholder {
        color: #8d8d8d;
    }

    /*搜索框icon*/
    ::v-deep .van-field__left-icon{
        display: none;
    }

    /*筛选弹出层按钮*/
    .van-cell--clickable{
        width: auto;
        height: auto;
        padding: 8px;
        line-height: normal;
        background: transparent;
    }

    /*筛选弹出层按钮清楚伪元素*/
    .van-icon-arrow:before{
        content: none;
    }

    /*筛选弹出层按钮清楚伪元素*/
    .van-cell::after{
        content: none;
    }

    /*筛选弹出层*/
    .van-popup{
        margin-top: 54px;
        background: #454545;
    }

    /*筛选弹窗层-遮罩层*/
    ::v-deep .van-overlay{
        background-color: transparent
    }

    /*筛选弹窗层盒子*/
    .filterBox{
        margin: 40px 0 0 20px
    }

    /*筛选弹窗层-标题*/
    .filter-title{
        background: red;
    }
}


/*主体*/
.main{
    margin-top: 54px;
    height: calc(100vh - 114px);
}
.main-page {
    color: #fff;
    height: calc(100vh - 114px);
    overflow-y: auto;
}


/*底部菜单*/
.van-tabbar {
    background-color: #333333;
    border: none;
    height: 60px;
}
.van-tabbar-item{
    background-color: #333333;
}
</style>