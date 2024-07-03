<template>
    <div class="one-page">
        <div class="video-container" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" >
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @play="onPlay" @pause="onPause"></video-player>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            playerOptions: {
                height: 400,
                playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                autoplay: false, // 如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: "zh-CN",
                aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: require("../../assets/video/20240702_154438.mp4"), // url地址
                    },
                ],
                poster: require("../../assets/image/bg.jpg"), // 你的封面地址
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
        console.log(this.$route.query.item)
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
/*页面高度设定*/
.one-page {
    height: calc(100vh - 158px);
    overflow-y: auto;
    img {
        width: 100%;
    }
}
::v-deep .vjs-play-progress:before{
    line-height: 0.8em;
}
.box{
    width: 80%;
    height: 200px;
    background: #00ff00;
}
</style>
