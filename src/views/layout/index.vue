<template>
    <div class="indexBox">
        <div class="header"><app-heder></app-heder></div>
        <main class="main">
            <app-main></app-main>
            <app-navbar></app-navbar>
        </main>
    </div>
</template>

<script>
import AppHeder from "@/components/AppHeader/index.vue"
import AppMain from "@/components/AppMain/index.vue"
import AppNavbar from "@/components/AppNavbar/index.vue"
export default {
    components: {
        AppHeder,
        AppMain,
        AppNavbar
    },
    created() {

    },
    methods: {

    },
};
</script>
<style>
.indexBox{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
}
.header{
    height: 54px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.main{
    margin-top: 54px;
    height: calc(100vh - 114px);
}
</style>