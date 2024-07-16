<template>
    <div class="login-page">
        <div class="login-box">
            <!-- logo板块 -->
            <div class="login-logo">
                <div><img src="@/assets/logo.png" alt=""></div>
                <h1>欢迎登录</h1>
            </div>

            <!-- 登录板块 -->
            <div v-if="loginShow" class="login-inner">
                <!-- 密码登录 -->
                <div class="login-input">
                    <van-field v-model="form.userName" input-align="center" placeholder="请输入用户名" />
                </div>

                <!-- 密码登录 -->
                <div v-if="codeShow" class="login-input login-password">
                    <van-field v-model="form.password" :type="isShow ? 'password' : 'text'" input-align="center" placeholder="请输入密码"/>
                    <span @click="showPassword">
                        <van-icon v-if="!isShow" name="closed-eye" color="#a5a5a5" />
                        <van-icon v-if="isShow" name="eye-o" color="#a5a5a5" />
                    </span>
                </div>

                <!-- 验证码登录 -->
                <div v-else class="login-input login-code">
                    <van-field v-model="form.password" type="text" input-align="center" placeholder="请输入密码"/>
                    <span @click="sendCode">
                        发送验证码
                    </span>
                </div>
            </div>

            <!-- 注册板块 -->
            <div v-else class="login-inner">
                <!-- 用户名 -->
                <div class="login-input">
                    <van-field v-model="form.userName" input-align="center" placeholder="请输入用户名" />
                </div>

                <!-- 手机号 -->
                <div class="login-input">
                    <van-field v-model="form.tel" input-align="center" placeholder="请输入手机号" />
                </div>

                <!-- 验证码登录 -->
                <div class="login-input login-code">
                    <van-field v-model="form.password" type="text" input-align="center" placeholder="请输入密码"/>
                    <span @click="sendCode">
                        发送验证码
                    </span>
                </div>

                <!-- 密码 -->
                <div class="login-input login-password">
                    <van-field v-model="form.password" :type="isShow ? 'password' : 'text'" input-align="center" placeholder="请输入密码"/>
                    <span @click="showPassword">
                        <van-icon v-if="!isShow" name="closed-eye" color="#a5a5a5" />
                        <van-icon v-if="isShow" name="eye-o" color="#a5a5a5" />
                    </span>
                </div>

                <!-- 确认密码 -->
                <div class="login-input login-password">
                    <van-field v-model="form.password" :type="isShow ? 'password' : 'text'" input-align="center" placeholder="请输入密码"/>
                    <span @click="showPassword">
                        <van-icon v-if="!isShow" name="closed-eye" color="#a5a5a5" />
                        <van-icon v-if="isShow" name="eye-o" color="#a5a5a5" />
                    </span>
                </div>

            </div>

            <!-- 登录按钮 -->
            <div class="login-btn">
                <van-button round type="primary" @click="onLogin">登录</van-button>
            </div>

            <div class="login-register">
                <span @click="pwdLogin">{{codeShow ? "验证码登录" : "密码登录"}}</span>
                 |
                <span @click="enrol">用户注册</span>
            </div>
        </div>
    </div>
</template>
    

<script>
import { loginApi } from "@/api/login/index";
import { Toast } from 'vant';
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            isShow: true, //判断是否隐秘
            codeShow: true, //判断密码登录 还是验证码登录
            loginShow: true, //判断登录 还是注册
            form: {
                tel: '18642685162', //手机号
                userName: '', //用户名
                password: '', //密码
            },
            codeNumber: 60
        }
    },
    methods: {
        ...mapMutations(['login']),

        //隐密
        showPassword(){
            this.isShow = !this.isShow
        },

        //发送验证码按钮
        sendCode(){
            const regex = /^1[3-9]\d{9}$/; //以1开头，第二位是3-9，接下来是9位数字
            if(regex.test(this.form.tel)){
                let timer = setInterval(()=>{
                    this.codeNumber --
                    console.log(this.codeNumber)
                },1000)
            }else{
                Toast('手机号不正确');
            }
        },

        //登录按钮
        onLogin(){
            if(!this.form.userName || !this.form.password){
                return
            }
            let params = {
                ...this.form
            }
            loginApi(params).then((res) => {
                this.login(res.data) //vuex 存储用户信息
                localStorage.setItem('userInfo', JSON.stringify(res.data)); //本地 存储用户信息

                if(res.code == 200){
                    Toast(res.message);
                    this.$router.push('/home')
                }else{
                    Toast(res.message);
                }
            });
        },

        //密码登录
        pwdLogin(){
            this.codeShow = !this.codeShow
        },
        
        //注册
        enrol(){
            this.loginShow = !this.loginShow
        }
    },
}
</script>
    
<style scoped lang="scss">
/*登录页*/
.login-page {
    background-image: url(../../assets/image/bg.jpg);
    width: 100%;
    height: 100%;
    position: relative;
}

/*登录页外层盒子*/
.login-box{
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/*logo板块*/
.login-logo{
    text-align: center;
    color:#fff;
    div{
        width: 25%;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
}

/*输入框*/
.login-input{
    margin-bottom: 20px;
    .van-field{
        background: none;
        border: 1px solid #a5a5a5;
        border-radius: 50px;
        text-align: center;
        height: 50px;
        
        /*输入框内字体颜色*/
        ::v-deep .van-field__control{
            height: 30px;
            color: #a5a5a5;
            font-size: 16px;
        }
    }
}

/*验证码*/
.login-code{
    position: relative;
    margin-bottom: 20px;
    span{
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        color: #a5a5a5
    }
    .van-field{
        background: none;
        border: 1px solid #a5a5a5;
        border-radius: 50px;
        text-align: center;
        height: 50px;
        
        
        /*输入框内字体颜色*/
        ::v-deep .van-field__control{
            width: 50%;
            height: 32px;
            color: #a5a5a5;
            padding-left: 20px;
            font-size: 16px;
            text-align: left;
        }
    }
}

/*隐密icon*/
.login-password{
    position: relative;
    span{
        position: absolute;
        top: 55%;
        right: 15px;
        transform: translateY(-50%);
    }
}

//登录按钮
.login-btn{
    margin-bottom: 15px;
    text-align: center;
    .van-button{
        width: 100%;
        color:#e2e2e2;
    }
}

//注册按钮
.login-register{
    text-align: center;
    font-size: 12px;
    color:#a5a5a5;
    span{
        margin: 0 15px;
        cursor: pointer;
    }
}
</style>