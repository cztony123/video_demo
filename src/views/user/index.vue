<template>
    <div>
        <div class="login-btn">
            <van-button round type="primary" @click="onLoginOut">退出登录</van-button>
        </div>
        <div class="login-btn">
            <van-button round type="primary" @click="editAvatar">修改头像</van-button>
        </div>
        {{ userInfo }}
    </div>
</template>

<script>
import { getCollect } from "@/api/home/list";
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            pageName: 'user'
        }
    },
    computed:{
        ...mapState({
            userInfo: state => state.userInfo
        }),
        ...mapMutations(['loginOut'])
    },

    methods: {
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