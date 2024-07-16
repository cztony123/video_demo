<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-logo">
                <div>logo</div>
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
                <van-button round type="primary" @click="checkForm">登录</van-button>
            </div>
            <div class="login-register">
                <span>密码</span> | <span>注册</span>
            </div>
        </div>
    </div>
</template>
    

<script>
import { loginApi } from "@/api/login/index";
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
        //隐密
        showPassword(){
            this.isShow = !this.isShow
        },

        //登录按钮
        checkForm(){
            let params = {
                ...this.form
            }
            console.log(params, '123123123123')
            loginApi(params).then((res) => {
                console.log(res)
            });
            this.$router.push('/home')
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
    color:#fff
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





/*@media screen and (max-width: 1260px) {
  .login-content-left {
    display: none;
  }
  .box {
    width: 500px !important;
  }
}

@media screen and (max-width: 750px) {
  .container .box, .container .box-inner {
    width: 100vw !important;
    height: 100vh;
    box-shadow: none;
    left: 0;
    top: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 0;
    }
  }
}*/
</style>