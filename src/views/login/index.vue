<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <div><img src="@/assets/logo.png" alt=""></div>
                <h1>欢迎登录</h1>
            </div>
            <div class="login-inner">
                <div class="login-input">
                    <van-field v-model="form.userName" input-align="center" placeholder="请输入用户名" />
                </div>
                <div class="login-input login-password">
                    <van-field v-model="form.password" :type="isShow ? 'password' : 'text'" input-align="center" placeholder="请输入密码"/>
                    <span @click="showPassword">
                        <van-icon v-if="!isShow" name="closed-eye" color="#a5a5a5" />
                        <van-icon v-if="isShow" name="eye-o" color="#a5a5a5" />
                    </span>
                </div>
            </div>
            <div class="login-btn">
                <van-button round type="primary" @click="onLogin">登录</van-button>
            </div>
            <div class="login-register">
                <span>密码</span> | <span>注册</span>
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
            isShow: true,
            form: {
                userName: 'admin',
                password: '123456',
            },
        }
    },
    methods: {
        ...mapMutations(['login']),
        //隐密
        showPassword(){
            this.isShow = !this.isShow
        },

        //登录按钮
        onLogin(){
            let data = {
                success: true,
                tel: '180055225223',
                userName: '李四',
                imgUrl: '1111111',
                sex: '男',
                token: null
            }
            //保存用户信息
            this.login(data)

            this.$router.push('/home')

            // let params = {
            //     ...this.form
            // }
            //保存用户信息
            //     this.login(res.data)
            // loginApi(params).then((res) => {
            //     console.log(res, '55555')
            //     //保存用户信息
            //     this.login(res.data)

            //     if(res.code == 200){
            //         Toast(res.message);
            //         this.$router.push('/home')
            //     }else{
            //         Toast(res.message);
            //     }
            // });
        },
    },
}
</script>
    
<style scoped lang="scss">
.login-page {
    background-image: url(../../assets/image/bg.jpg);
    width: 100%;
    height: 100%;
    position: relative;
}

.login-box{
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


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
            height: 35px;
            color: #a5a5a5;
            font-size: 16px;
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
        margin: 0 15px
    }
}
</style>