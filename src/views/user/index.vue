<template>
    <div>
        <div class="login-btn">
            <van-button round type="primary" @click="onLoginOut">退出登录</van-button>
        </div>
        {{ userInfo }}
    </div>
</template>

<script>
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
        onLoginOut(){
            this.$store.commit('loginOut')
            this.$router.push('/')
        }
    }
}
</script>