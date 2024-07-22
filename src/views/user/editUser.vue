<template>
    <div class="deit-page">
        <div class="back">
            <span @click="goBack">
                <van-icon name="arrow-left" />
            </span>
            <span>编辑资料</span>
        </div>

        <div class="deit-avatar">
            <span>
                <van-uploader v-model="imgUrl" :after-read="afterRead" :max-count="1"/>
            </span>
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

        <div class="upDate-btn">
            <van-button round type="primary" @click="onUpData">保存</van-button>
        </div>
    </div>
</template>

<script>
import { upLoad, updateUser } from "@/api/user/index";
import {mapState} from 'vuex'
import { Toast } from 'vant';
export default {
    data() {
        return {
            form:{
                userName: '',
                tel: '',
                password: '',
                sex: 1,
                synopsis: ''
            },
            option: [
                // { text: '未知', value: 0 },
                { text: '男', value: 1 },
                { text: '女', value: 2 },
            ],
            imgUrl: [
                { url: require('../../assets/logo.png') },
            ],
        }
    },
    computed:{
        ...mapState({
            userInfo: state => state.userInfo
        }),
    },
    created() {
        console.log(this.$store.state.userInfo)
        if(this.$store.state.userInfo){
            this.imgUrl[0].url = this.$store.state.userInfo.imgUrl ? this.$store.state.userInfo.imgUrl : require('../../assets/logo.png')
            this.form.userName = this.$store.state.userInfo.userName
            this.form.tel = this.$store.state.userInfo.tel
            this.form.password = this.$store.state.userInfo.password
            this.form.sex = this.$store.state.userInfo.sex
            this.form.synopsis = this.$store.state.userInfo.synopsis
        }
    },

    methods: {
        //回退按钮
        goBack(){
            history.go(-1);
        },

        //更改头像
        afterRead(file) {
            // 创建FormData
            const formData = new FormData();
            formData.append('file', file.file); // 这里的'file'是后端接收文件的字段名
        
            upLoad(formData).then((res) => {
                console.log(res)
                if(res.code == 200){
                    let userInfo = this.$store.state.userInfo
                    userInfo.imgUrl = res.data.imgUrl
                    localStorage.setItem('userInfo', JSON.stringify(userInfo)); //本地 存储用户信息
                    Toast(res.message);
                }else{
                    Toast(res.message);
                }
            });
        },

        //保存用户信息
        onUpData(){
            let params = {
                ...this.form
            }
            updateUser(params).then((res) => {
                console.log(res)
                if(res.code == 200){
                    // let userInfo = this.$store.state.userInfo
                    // userInfo.imgUrl = res.data.imgUrl
                    // localStorage.setItem('userInfo', JSON.stringify(userInfo)); //本地 存储用户信息
                    // Toast(res.message);
                }else{
                    Toast(res.message);
                }
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
::v-deep .deit-avatar{
    height: 130px;
    margin-top: 25px;
    text-align: center;
    .van-uploader__preview-image{
        border-radius: 50%;
    }
    .van-uploader__preview{
        margin: 0;
    }
    .van-uploader__upload{
        margin: 5px 0 4px 0;
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


.upDate-btn{
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