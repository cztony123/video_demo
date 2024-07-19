<template>
    <div class="deit-page">
        <div class="back">
            <span @click="goBack">
                <van-icon name="arrow-left" />
            </span>
            <span>编辑资料</span>
        </div>

        <div class="deit-avatar">
            <img v-if="form.imgUrl" :src="form.imgUrl" alt="">
            <img v-else src="../../assets/logo.png" alt="">
            <div>点击更换头像</div>
        </div>
            
        <div class="login-inner">
            <!-- 用户名 -->
            <div class="name-input">
                <span>用户名</span>
                <van-field v-model="form.userName"/>
            </div>

            <!-- 手机号 -->
            <div class="tel-input">
                <span>手机号</span>
                <van-field v-model="form.tel"/>
            </div>

            <!-- 密码登录 -->
            <div class="pwd-input">
                <span>密码</span>
                <van-field v-model="form.password"/>
            </div>

            <!-- 性别 -->
            <div class="login-input">
                <span>性别</span>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="form.sex" :options="option" />
                </van-dropdown-menu>
            </div>

            <!-- 个人简介 -->
            <div class="login-input">
                <span>个人简介</span>
                <van-field v-model="form.synopsis"/>
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
                imgUrl:'',
                userName: '',
                tel: '',
                password: '',
                sex: '',
                synopsis: ''
            },
            value1: 0,
            option: [
                { text: '男', value: 0 },
                { text: '女', value: 1 },
            ],
        }
    },
    computed:{
        ...mapState({
            userInfo: state => state.userInfo
        }),
        // ...mapMutations(['loginOut'])
    },
    created() {
        console.log(this.$store.state.userInfo)
        this.form.imgUrl = this.$store.state.userInfo.imgUrl
        this.form.userName = this.$store.state.userInfo.userName
        this.form.tel = this.$store.state.userInfo.tel
        this.form.password = this.$store.state.userInfo.password
        this.form.sex = this.$store.state.userInfo.sex
        this.form.synopsis = this.$store.state.userInfo.synopsis
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
        },

        onSelect(action) {
            console.log(action)
        },
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

/* 头像以下部分 */
.login-inner{
    div{
        padding-top:20px;
        span{
            padding-left: 20px;
        }
        .van-field{
            margin: 0 auto;
            width: 90%;
            height: 40px;
            background: none;
            border-bottom: 1px solid #a5a5a5;
            ::v-deep .van-field__value{
                line-height: 0px;
            }
            ::v-deep .van-field__control{
                color: #c2c2c2;
                font-size: 12px;
            }
        }
        /* 性别 */
        .van-dropdown-menu{
            margin: 0 auto;
            padding-top: 0;
            width: 90%;
            height: 40px;
            display: flex;
            align-items: center;
            ::v-deep .van-dropdown-menu__bar{
                width: 100%;
                height: 40px;
                border-bottom: 1px solid #a5a5a5;
                padding-left: 20px;
                background: none;
                .van-dropdown-menu__item{
                    position: absolute;
                    left: 10px;
                    bottom: 3px;
                    .van-dropdown-menu__title{
                        font-size: 12px;
                        color: #c2c2c2;
                    }
                }
            }
        }
        /* 性别下拉 */
        ::v-deep .van-popup{
            background: red;
            .van-cell{
                background: #252525;
                .van-cell__title{
                    color: #c2c2c2;
                }
            }
        }
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