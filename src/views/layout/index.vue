<template>
    <div class="indexBox">
        <div class="header" v-if="$route.path == '/home'">
            <div class="header-page">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="searchBox">
                    <van-search v-model="title" show-action shape="round" show-action-color='red' background="transparent" placeholder="请输入关键词">
                        <template #action>
                            <van-button round type="info" size="small" icon="search" color="#222222" @click="onSearch(title)">搜索</van-button>
                        </template>
                    </van-search>
                </div>
                <van-cell is-link>
                    <van-button round type="info" size="small" icon="filter-o" color="#222222" @click="onSelect">筛选</van-button>
                </van-cell>
                <van-popup v-model="show" position="top" :style="{ height: '41%' }">
                    <van-tabs type="card" background="#222222" title-inactive-color="#8d8d8d" title-active-color="#ff2a14" v-for="item in filterList" @click="handleSelect">
                        <div v-for="children in item.children" >
                            <van-tab :title="children.title" swipeable ></van-tab>
                        </div>
                    </van-tabs>
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
                    <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
                    <van-tabbar-item icon="friends-o" to="/user">用户</van-tabbar-item>
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
            title: '',
            active: 0,
            show: false,
            filterList,
            filterVal: ''
        }
    },
    created() {
        switch(this.$route.path){
            case '/search':
                this.active = 1;
                break;
            case '/setting':
                this.active = 2;
                break;
            case '/user':
                this.active = 3;
                break;
            case '/editUser':
                this.active = 3;
                break;
            default:
        }
    },
    methods: {
        //处理传给后端的关键词（包含搜索框和筛选）
        keyWords(){
            
        },

        //搜索按钮
        onSearch(title){
            this.$bus.$emit("eventname",title)
        },

        //筛选按钮
        onSelect() {
            this.show = true;
        },

        //点击关键词
        handleSelect(name, title){
            console.log(name, title)
        }
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
    z-index: 100;
}
.header-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    .logo{
        margin-left: 10px;
        width: 35px;
        img{
            width: 100%;
        }
    }
    .searchBox{
        width: 65%;
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
        background-color: #222222;
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
        background: #222222;
    }

    /*筛选弹窗层-遮罩层*/
    ::v-deep .van-overlay{
        background-color: transparent
    }

    /*筛选弹窗层盒子*/
    ::v-deep .van-tabs{
        margin-top: 10px;
    }
    ::v-deep .van-tabs__nav--card{
        border: none;
    }
    ::v-deep .van-tabs__nav--card .van-tab{
        border: none;
    }
    ::v-deep .van-tabs__nav--card .van-tab.van-tab--active{
        background: #333333;
        border-radius: 5px;
    }
}

/*底部菜单*/
.van-tabbar {
    background-color: #222222;
    border: none;
    height: 60px;
}
.van-tabbar-item{
    background-color: #222222;
}
</style>