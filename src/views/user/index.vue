<template>
    <div>
        {{ userInfo }}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            pageName: 'user'
        }
    },
    computed:{
        ...mapState({
            userInfo: state => state.userInfo
        })
    }
}
</script>