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
                        <span class="row-num">
                            <van-icon name="qr"/>
                            <van-dropdown-menu>
                                <van-dropdown-item v-model="rowNum" :options="option1" />
                            </van-dropdown-menu>
                        </span>
                    </span>
                </div>
                <div class="grid-list">
                    <van-grid :column-num="1">
                        <van-grid-item v-for="img in imageList">
                            <img :src="img" v-lazy="img" />
                        </van-grid-item>
                    </van-grid>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import { Toast } from 'vant';
import imageList from '../data.js';
export default {
    data() {
        return {
            images: [
                require('../../../assets/image/lunbo1.jpg'),
                require('../../../assets/image/lunbo2.jpg'),
                require('../../../assets/image/lunbo3.jpg'),
            ],
            isLoading: false,
            imageList,
            rowNum: 1,
            option1: [
                { text: '1列', value: 1 },
                { text: '2列', value: 2 },
                { text: '3列', value: 3 },
                { text: '4列', value: 4 },
            ],
        };
    },
    created() {
        
        console.log(this.imageList)
        console.log('this.imageList')
    },
    methods: {
        //下拉刷新
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 1000);
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
}

/*页面高度设定*/
.one-page{
    height: calc(100vh - 158px);
    overflow-y: auto;
    img{
        width: 100%;
    }
}

/*轮播图*/
.van-swipe-item{
    height: 120px;
}

/*视频标题*/
.video-title{
    display:flex;
    justify-content: space-between; 
    padding: 10px 10px;
    .van-icon-fire-o{
        color: red;
        font-weight: 800;
        padding-right: 6px;
    }
    .row-num{
        padding-left: 8px;
    }
}

.van-grid{
    padding:8px
}
.van-grid-item{
    padding:8px
}
</style>
