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
                <!-- 用户名 -->
                <div v-if="codeShow" class="login-input">
                    <van-field v-model="form.userName" input-align="center" placeholder="请输入用户名" />
                </div>
                <!-- 手机号 -->
                <div v-else class="login-input">
                    <van-field v-model="form.tel" input-align="center" placeholder="请输入手机号" />
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
                    <van-field v-model="form.code" type="text" input-align="center" placeholder="请输入验证码"/>
                    <van-button :disabled="disabled" @click="sendCode">{{codeTxt}}</van-button>
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

                <!-- 验证码 -->
                <div class="login-input login-code">
                    <van-field v-model="form.code" type="text" input-align="center" placeholder="请输入密码"/>
                    <van-button :disabled="disabled" @click="sendCode">{{codeTxt}}</van-button>
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
                    <van-field v-model="form.confirmPwd" :type="isShow ? 'password' : 'text'" input-align="center" placeholder="请确认密码"/>
                    <span @click="showPassword">
                        <van-icon v-if="!isShow" name="closed-eye" color="#a5a5a5" />
                        <van-icon v-if="isShow" name="eye-o" color="#a5a5a5" />
                    </span>
                </div>

            </div>

            <!-- 登录按钮 -->
            <div class="login-btn">
                <van-button round type="primary" @click="onLogin">{{loginShow ? "登录" : "注册"}}</van-button>
            </div>

            <div class="login-register">
                <span @click="pwdLogin">{{codeShow ? "验证码登录" : "密码登录"}}</span>
                 |
                <span @click="enrol">{{loginShow ? "用户注册" : "用户登录"}}</span>
            </div>
        </div>
    </div>
</template>
    

<script>
import { loginApi } from "@/api/login/index";
import MyRules from './rules'
import { Toast } from 'vant';
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            isShow: true, //判断是否隐秘
            loginShow: true, //判断登录 还是注册
            codeShow: true, //判断密码登录 还是验证码登录
            form: {
                userName: 'admin', //用户名
                tel: '18888888888', //手机号
                code: '123', //验证码
                password: '', //密码
                confirmPwd: '', //缺人密码
            },
            disabled: false,
            codeNumber: 3, //验证码倒计时
            codeTxt: '发送验证码',
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
            const regex = /^1[3-9]\d{9}$/;
            this.disabled = true //倒计时开始禁用按钮
            if(regex.test(this.form.tel)){
                //启动60秒定时器
                let timer = setInterval(()=>{
                    this.codeTxt = this.codeNumber + ' 秒' //按钮文字
                    -- this.codeNumber //倒计时
                    
                    //倒计时结束停止定时器
                    if( this.codeNumber < 0){
                        clearInterval(timer) //停止定时器
                        this.codeTxt ='重新发送' //更换按钮文字
                        this.disabled = false //倒计时结束开启按钮
                        this.codeNumber = 3 //回复倒计时秒数
                    }
                },1000)
            }else{
                Toast('手机号不正确');
            }
        },

        //登录 或 注册按钮
        onLogin(){
            //判断登录还是注册
            if(this.loginShow){
                //判断密码登录还是手机号登录
                if(this.codeShow){
                    const rulesTxt = MyRules.nameLoginRules(this.form)
                    if(rulesTxt){
                        Toast(MyRules.nameLoginRules(this.form));
                        return
                    }
                }else{
                    const rulesTxt = MyRules.nameLoginRules(this.form)
                    if(rulesTxt){
                        Toast(MyRules.telLoginRules(this.form));
                        return
                    }
                }
                console.log('登录')
                // let params = {
                //     ...this.form
                // }
                // loginApi(params).then((res) => {
                //     this.login(res.data) //vuex 存储用户信息
                //     localStorage.setItem('userInfo', JSON.stringify(res.data)); //本地 存储用户信息

                //     if(res.code == 200){
                //         Toast(res.message);
                //         this.$router.push('/home')
                //     }else{
                //         Toast(res.message);
                //     }
                // })
            }else{
                const rulesTxt = MyRules.nameLoginRules(this.form)
                console.log(rulesTxt)
                if(rulesTxt){
                    Toast(MyRules.enrolLoginRules(this.form));
                    return
                }
                
                console.log('注册')
            }
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
            color: #c2c2c2;
            font-size: 16px;
        }
    }
}

/*验证码*/
.login-code{
    position: relative;
    margin-bottom: 20px;
    .van-button{
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #d3d3d3
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