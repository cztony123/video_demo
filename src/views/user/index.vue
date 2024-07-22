<template>
    <div class="user-page">
        <div class="user-box">
            <!-- 头像 -->
            <div class="user-avatar">
                <img :src="userInfo && userInfo.imgUrl ? userInfo.imgUrl : url" alt="">
                <div>{{ userInfo ? userInfo.userName : '游客' }}</div>
                <div>{{ userInfo ? userInfo.tel : '' }}</div>
            </div>

            <!-- 会员 -->
            <span class="member-txt">VIP会员至：2024/07/04</span>

            <!-- 编辑资料 -->
            <span class="editUser" @click="goEdit">
                编辑资料<van-icon name="edit" />
            </span>
        </div>

        <div class="memberTopUp">
            <div>
                <span>下载安卓</span>
            </div>
            <div>
                <img src="../../assets/image/topup.png" alt="">会员充值
            </div>
        </div>


        <div class="shop-box">
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
        </div>
            
        <div class="login-btn">
            <van-button round type="primary" @click="onLoginOut">{{userInfo ? "退出登录" : "登录"}}</van-button>
        </div>
    </div>
</template>

<script>
import { getCollect } from "@/api/user/index";
import {mapState} from 'vuex'
import { Toast } from 'vant';
// import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            isLogin: true,
            url: require('../../assets/logo.png')
        }
    },
    computed:{
        ...mapState({
            userInfo: state => state.userInfo
        }),
        // ...mapMutations(['loginOut'])
    },

    methods: {
        //编辑按钮
        goEdit(){
            if(this.userInfo){
                this.$router.push('/editUser')
            }else{
                Toast('请先登录');
            }
            
        },
        //退出登录
        onLoginOut(){
            // this.isLogin = !this.isLogin
            if(this.userInfo){
                this.$store.commit('loginOut')
                this.$router.go(0);
            }else{
                this.$router.push('/login')
            }
        },

        //修改头像
        editAvatar(){
            getCollect({isToken:true}).then((res) => {
                console.log(res);
            });
        }
    }
}
</script>

<style scoped lang="scss">
.user-page{
    width: 96%;
    margin: 75px auto 60px auto;
}

/* 个人资料 */
.user-box{
    position: relative;
    height: 100px;
    border-radius: 8px;
    background: #252525;

    /* 头像 */
    .user-avatar{
        position: absolute;
        top: -35px;
        left: 40px;
        width: 70px;
        height: 135px;
        img{
            width: 100%;
            border-radius: 50%;
        }
        div{
            padding-top: 5px;
            font-size: 13px;
            color: #b6b6b6;
        }
    }

    /* 会员 */
    .member-txt{
        position: absolute;
        top: -20px;
        right: 0;
        font-size: 13px;
        color: #d13434;
    }


    /* 编辑会员 */
    .editUser{
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 12px;
        color: #b6b6b6;
    }
}

/* 会员充值 */
.memberTopUp{
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    border-radius: 8px;
    background: #252525;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 50%;
        font-size: 12px;
        color: #d3d031;
        img{
            width: 15px;
            height: 15px;
            border: 1px solid #d3d031;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}

/* 商城 */
.shop-box{
    margin-top: 20px;
}

/* 每一个宫格 */
.van-grid-item{
    padding:7px;
    aspect-ratio: 4/4;
}

/* 每一个宫格neirong  */
::v-deep .van-grid-item__content{
    background: #252525;
    color: #b6b6b6;
}

/* 宫格文字 */
::v-deep .van-grid-item__text{
    color: #b6b6b6;
}

/* 宫格伪元素 */
::v-deep .van-grid-item__content::after{
    content: none;
}
.van-hairline--top::after {
    content: none;
}

/* 退出 */
.login-btn{
    margin: 50px auto 100px auto;
    text-align: center;
    .van-button{
        width: 200px;
        background: none;
        border: 1px solid #d13434;;
        color: #b6b6b6;
    }
}
</style>