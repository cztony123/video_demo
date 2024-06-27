<template>
    <div class="one-page">
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <!-- <img  width="100% " height="100" :src="image"/> -->
                {{image}}
            </van-swipe-item>
        </van-swipe>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="min-height: calc(100% - 44px);">
            <div>
                <div class="video-title">
                    <span>热门影片</span>
                    <span>热门影片</span>
                </div>
                <van-grid :column-num="2">
                    <van-grid-item v-for="img in imageList">
                        <img :src="img" v-lazy="img" />
                    </van-grid-item>
                </van-grid>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            images: [
                "'../../../assets/image/lunbo1.jpg'",
                "'../../../assets/image/lunbo2.jpg'",
                "'../../../assets/image/lunbo3.jpg'",
            ],
            isLoading: false,
            imageList: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
            ],
        };
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

/*视频标题*/
.video-title{
    display:flex;
    justify-content: space-between; 
    padding: 15px 15px;
}
</style>
