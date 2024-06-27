<template>
    <div class="one-page">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-grid :column-num="2">
                <van-grid-item v-for="img in imageList">
                    <img :src="img" v-lazy="img" />
                </van-grid-item>
            </van-grid>
        </van-pull-refresh>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
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
.one-page{
    img{
        width: 100%;
    }
}
</style>
