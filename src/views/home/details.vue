<template>
    <div class="details-page" :style="{backgroundImage:`url(${bgStyle.backgroundImage})`}">
        <div class="details-content">
            <img :src="bgStyle.backgroundImage" alt="">
            <div class="videoName">{{ videoName }}</div>
            <van-button round icon="play">立即播放</van-button>
        </div>
        <div class="plot-style">
123123
        </div>
        <!-- <div class="video-container" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" >
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @play="onPlay" @pause="onPause"></video-player>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            videoName: '',
            bgStyle: {
                color: 'red',
                backgroundImage: "url('../../assets/image/bg.jpg')"
            },
            playerOptions: {
                height: 400,
                playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                autoplay: false, // 如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: "zh-CN",
                aspectRatio: "9:16", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: require("../../assets/video/20240702_154438.mp4"), // url地址
                    },
                ],
                poster: '../../assets/image/bg.jpg', // 你的封面地址
                // width: document.documentElement.clientWidth, //播放器宽度
                notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true, // 全屏按钮
                },
            },
            touchStartPosition: 0,
            isSeeking: false,
        };
    },
    created() {
        this.playerOptions.poster = this.$route.query.item.url
        this.bgStyle.backgroundImage = this.$route.query.item.url
        this.videoName = this.$route.query.item.videoName
        console.log(this.$route.query)
    },
    methods: {
        //触摸事件
        onTouchStart(event) {
            if (event.touches.length == 1) {
                //获取进度条偏移量
                this.touchStartPosition = event.touches[0].pageX;
                this.isSeeking = true;
            }
        },

        //滑动事件
        onTouchMove(event) {
            if (this.isSeeking && event.touches.length == 1) {
                // 计算滑动的距离
                const deltaX = event.touches[0].pageX - this.touchStartPosition;
                // 实现视频快进逻辑
                this.seekVideo(deltaX);
            }
        },
        seekVideo(deltaX) {
            const videoPlayer = this.$refs.videoPlayer;
            if (videoPlayer) {
                const currentTime = videoPlayer.player.currentTime();
                // 快进时间计算，可根据需要调整
                const fastForwardTime = deltaX / 500;
                videoPlayer.player.currentTime(currentTime + fastForwardTime);
            }
        },

        //手指抬起事件
        onTouchEnd() {
            this.isSeeking = false;
        },

        //暂停、播放
        onPlay() {
            this.isSeeking = false;
        },

        //暂停播放时触发
        onPause() {
            this.isSeeking = false;
        },
    },
};
</script>

<style scoped lang="scss">
.details-page{
    height: 100%;
    background: no-repeat;
    background-size: 100% 100%;
    
}
.details-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(8px);
    background-image: linear-gradient( rgb(0, 0, 0, 0), rgb(255, 255, 255, 1));
  }

/*内容*/
.details-content{
    position: absolute;
    width: 100%;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    img{
        width: 50%;
        display: flex;
        justify-content: center; /* 水平居中 */
        border: 2px solid #ffffff;
        border-radius: 10px;
    }
    .videoName{
        margin-top: 15px;
        text-align: center;
        font-size: 34px;
        font-weight: 600;
        color: #000;
    }
    .van-button{
        background-image: linear-gradient(to right, #ff9601, #ff2b14);
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 30px;
        width: 140px;
        height: 40px;
        color: #FFF;
        border: none;
    }
}

/*剧情样式*/
.plot-style{
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid red;
    height: 200px;
}


/*进度条小圆点*/
::v-deep .vjs-play-progress:before{
    line-height: 0.8em;
}
</style>
