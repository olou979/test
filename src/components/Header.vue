<template>
    <div class="commonheader">
        <div class="commonheader-header">
            <div class="commonheader-header-logo">
                <a href="/"><img src="../img/LOGO.png" width="140px" height="33px" alt=""></a>
            </div>
            <div class="commonheader-header-nav">
                <div class="commonheader-header-nav-item">
                        <router-link to="/Index">首页</router-link>
                </div>
                <div class="commonheader-header-nav-item">
                    <span class="commonheader-header-nav-item-span">
                        <router-link to="/Product">产品中心</router-link>
                    </span>
                </div>
                <div class="commonheader-header-nav-item">
                    <span class="commonheader-header-nav-item-span">
                        <router-link to="/Services">增值服务</router-link>
                    </span>
                </div>
                <div class="commonheader-header-nav-item">
                    <span class="commonheader-header-nav-item-span">
                        <router-link to="/indexs">合作案例</router-link>
                    </span>
                </div>
                <div class="commonheader-header-nav-item">
                    <span class="commonheader-header-nav-item-span">
                        <router-link to="/recruit">代理招募</router-link>
                    </span>
                </div>
                <div class="commonheader-header-nav-item">
                    <span class="commonheader-header-nav-item-span">
                        <router-link :to="{ path: '/aboutus' }">关于我们</router-link>
                    </span>
                </div>
                <div class="commonheader-header-nav-item">
                    <span class="commonheader-header-nav-item-span">
                        <router-link :to="{ path: '/help' }">帮助中心</router-link>
                    </span>
                </div>
            </div>
            <div class="commonheader-header-contact">
                <div class="commonheader-header-contact-buttun">
                    <div class="commonheader-header-contact-buttun-login">
                        <span class="commonheader-header-contact-buttun-login-span">商家登陆</span>
                    </div>
                </div>
                <div class="commonheader-header-contact-buttuns">
                    <div class="commonheader-header-contact-buttun-ontrial">
                        <span class="commonheader-header-contact-buttun-ontrial-span">申请试用</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.commonheader{
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0;
    background: #fff;
}
.commonheader-header{
    min-width: 100vh;
    height: 70px;
    display: flex;
}
.commonheader-header-logo{
    padding: 19px 154px 18px 378px;
}
.commonheader-header-nav{
    display: flex;
    justify-content: center;
}
.commonheader-header-nav-item {
    padding-right: 50px;
    line-height: 70px;
    width: 106px;
}
.commonheader-header-nav-item-span a{
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    color: #2A2A2A;
    letter-spacing: 0;
}
.commonheader-header-contact{
    display: flex;
    padding: 20px 0;
}
.commonheader-header-contact-buttun{
    width: 80px;
    height: 30px;
    border: 1px solid #00AF57;
    border-radius: 2px;
}
.commonheader-header-contact-buttuns{
    width: 80px;
    height: 30px;
    background: #00AF57;
    border-radius: 2px;
    margin-left: 10px;
}
.commonheader-header-contact-buttun-login-span{
    padding: 8px 10px;
    font-size: 14px;
    color: #00AF57;
}
.commonheader-header-contact-buttun-ontrial-span{
    padding: 8px 10px;
    font-size: 14px;
    color: #fff;
}
.router-link-exact-active{
    color: #00AF57;
}
.commonheader-header-nav-item:hover a{
    color: #00AF57;
}
</style>
