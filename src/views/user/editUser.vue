<template>
    <div class="deit-page">
        <div class="back">
            <span @click="goBack"><van-icon name="arrow-left" /></span>
            <span>编辑资料</span>
        </div>

        <div class="deit-avatar">
            <img src="../../assets/logo.png" alt="">
            <div>点击更换头像</div>
        </div>
            
        <div class="login-inner">
            <!-- 用户名 -->
            <div class="name-input">
                <span>用户名</span>
                <van-field v-model="form.userName" type="text" input-align="center" placeholder="请输入用户名" />
            </div>

            <!-- 手机号 -->
            <div class="tel-input">
                <van-field v-model="form.tel" type="text" input-align="center" placeholder="请输入手机号" />
            </div>

            <!-- 密码登录 -->
            <div class="pwd-input">
                <van-field v-model="form.password" type="text" input-align="center" placeholder="请输入密码"/>
            </div>

            <!-- 性别 -->
            <div class="login-input login-password">
                <van-field v-model="form.sex" type="text" input-align="center" placeholder="请输入密码"/>
            </div>

            <!-- 个人简介 -->
            <div class="login-input login-code">
                <van-field v-model="form.synopsis" type="text" input-align="center" placeholder="请输入密码"/>
            </div>
        </div>


        <!-- <div class="login-btn">
            <van-button round type="primary" @click="editAvatar">修改头像</van-button>
        </div>
        {{ userInfo }} -->
    </div>
</template>

<script>
import { getCollect } from "@/api/user/index";
import {mapState} from 'vuex'
// import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            form:{
                userName: '',
                tel: '',
                password: '',
                sex: '',
                synopsis: ''
            }
        }
    },
    computed:{
        ...mapState({
            userInfo: state => state.userInfo
        }),
        // ...mapMutations(['loginOut'])
    },

    methods: {
        //回退按钮
        goBack(){
            history.go(-1);
        },
        //退出登录
        onLoginOut(){
            this.$store.commit('loginOut')
            this.$router.push('/login')
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
.deit-page{
    color: #b6b6b6;
}
/* 后退 */
.back{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    background: #252525;
    .van-icon{
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        font-size: 20px;
    }
}

/* 编辑头像 */
.deit-avatar{
    margin-top: 20px;
    text-align: center;
    img{
        width: 70px;
            border-radius: 50%;
    }
    div{
        margin-top: 5px;
        font-size: 12px;
    }
}
</style>