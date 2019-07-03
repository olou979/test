<template>
    <div class="header">
        <div class="header-logo">
            <router-link to="/Index">
                <img src="../img/LOGO.png">
            </router-link>
        </div>
        <div class="header-nav">
            <div class="header-nav-item">
                <router-link to="/Index">首页</router-link>
            </div>
            <div class="header-nav-item">
                <router-link to="/Product">产品中心</router-link>
            </div>
            <div class="header-nav-item">
                <router-link to="/Index">增值服务</router-link>
            </div>
            <div class="header-nav-item">
                <router-link to="/Index">合作案例</router-link>
            </div>
            <div class="header-nav-item">
                <router-link to="/Index">代理招募</router-link>
            </div>
            <div class="header-nav-item">
                <router-link to="/Index">关于我们</router-link>
            </div>
            <div class="header-nav-item">
                <router-link to="/Index">帮助中心</router-link>
            </div>
        </div>
        <div class="header-option"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header{
    display: flex;
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0;
    background: #fff;
}
.header-logo{
    margin-left: 378px;
    margin-top: 19px;
}
.header-nav{
    width: 665px;
    height: 70px;
    display: flex;
    margin-left: 154px;
    line-height: 70px;
}
.header-nav-item{
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
}
.header-nav-item:nth-child(n+2){
    padding-left: 50px;
}
</style>


