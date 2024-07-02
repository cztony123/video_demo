<template>
    <div class="one-page">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img  width="100% " height="100%" :src="image"/>
            </van-swipe-item>
        </van-swipe>

        <!-- 主体页面 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div>
                <div class="video-title">
                    <span>
                        <van-icon name="fire-o"/>热门影片
                    </span>
                    <span>
                        <span>
                            更多<van-icon name="arrow"/>
                        </span>
                        <span class="row-num" @click="isShow()">
                            <van-icon name="qr"/>
                        </span>
                        <div v-if="isOpen" class="dropdown-content">
                            <div v-for="(item, index) in optionList" :key="index + 'item.text'" @click="selectOption(item)">
                                {{ item.text }}
                            </div>
                        </div>
                    </span>
                </div>
                <div class="grid-list">
                    <van-grid :column-num="rowNum">
                        <van-grid-item v-for="item in imageList" @click="onPlay(item)">
                            <img :src="item.url" v-lazy="item.url" />
                            <div class="video-name">{{item.videoName}}</div> 
                        </van-grid-item>
                    </van-grid> 
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import { imageList, images, optionList } from '../data';
export default {
    data() {
        return {
            isLoading: false, //下拉刷新遮罩层
            images, //轮播图数据
            imageList, //列表数据
            isOpen: false, //列数下拉初始隐藏
            rowNum: 2, //列数初始值
            optionList, //列数下拉数据
        };
    },
    methods: {
        //下拉刷新
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        },

        //点击下拉图标
        isShow(){
            this.isOpen =true
        },

        //点击下拉选项
        selectOption(item) {
            this.rowNum = item.value
            this.isOpen = false;
        },

        //点击播放跳转详情页
        onPlay(item){
            this.$router.push({ path: '/details', query: { item: item } })
        },
    },
};
</script>

<style scoped lang="scss">
/*轮播*/
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    height: 120px;
}

/*页面高度设定*/
.one-page{
    height: calc(100vh - 158px);
    overflow-y: auto;
    img{
        width: 100%;
    }
}


/*视频标题*/
.video-title{
    position: relative;
    display:flex;
    justify-content: space-between; 
    padding: 10px 10px;
    font-size: 14px;
    .van-icon-fire-o{
        color: red;
        font-weight: 800;
        padding-right: 6px;
    }
    .row-num{
        padding-left: 8px;
    }
}

/*视频列表*/
.grid-list{
    background: #000;
    .video-name{
        margin-top: 10px;
        width: 100%;
        color: #000;
        text-align: center;
    }
    .van-grid{
        padding:5px 5px
    }
    .van-grid-item{
        padding:5px 5px;
        img{
            height: 225px;
        }
    }
}

//列数下拉
.dropdown-content {
    position: absolute;
    width: 25%;
    height: 150px;
    top: 41px;
    right: 0;
    background-color: #000;
    border: 1px solid #ddd;
    z-index: 10;
    div{
        margin-top: 15px;
        text-align: center;
    }
}
</style>
