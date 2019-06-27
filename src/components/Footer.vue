<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-container-item" style="width:140px;">
                <div class="footer-container-item-title">
                    <a target="_blank" href="/about.html">关于微餐时代</a>
                </div>
                <div class="footer-container-item-about">
                    <a target="_blank" href="/about.html">关于我们</a>
                </div>
                <div class="footer-container-item-about">
                    <a target="_blank" href="/about.html">联系我们</a>
                </div>
                <div class="footer-container-item-about">
                    <a target="_blank" href="/about.html">招贤纳士</a>
                </div>
            </div>
            <div class="footer-container-item" style="width:110px;">
                    <div class="footer-container-item-title">
                        <a target="_blank" href="/about.html">产品中心</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">点餐&收银</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">预定&排队</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">外卖</a>
                    </div>
            </div>
            <div class="footer-container-item" style="padding-top:46px; width:110px;">
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">电子厨显</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">微餐云报表</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">商户平台</a>
                    </div>
            </div>
            <div class="footer-container-item" style="padding-top:46px; width:110px;">
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">进销存</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">会员</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">营销</a>
                    </div>
            </div>
            <div class="footer-container-item" style="width:110px;">
                    <div class="footer-container-item-title">
                        <a target="_blank" href="/about.html">帮助中心</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">常见问题</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">视频指南</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">产品教程</a>
                    </div>
                    <div class="footer-container-item-about">
                        <a target="_blank" href="/about.html">下载中心</a>
                    </div>
            </div>
            <div class="footer-container-item" style="padding-left:120px;">
                <div class="footer-container-item-logo">
                    <img src="../img/底部logo.png" alt="" >
                </div>
                <div class="footer-container-item-telephone">0769-22890903</div>
                <div class="footer-container-item-email">E-mail:   wct@weicantimes.com</div>
                <div class="footer-container-item-qq">QQ：3408168685</div>
            </div>
            <div class="footer-container-item" style="padding-left:114px;">
                <div class="footer-container-item-icon">
                        <div class="footer-container-item-icon-kf"  style="padding-top:9px;">
                            <img src="../img/72小时.png" alt="">
                        </div>
                    <div class="footer-container-item-icon-qy" style="padding-top:32px;">
                        <img src="../img/72小时.png" alt="">
                    </div>
                    <div class="footer-container-item-icon-zx" style="padding-top:32px;">
                        <img src="../img/一对一.png" alt="">
                    </div>
                </div>
            </div>
            <div class="footer-container-item" style="padding-left:16px;">
                <div class="footer-container-item-kf">
                    <div class="footer-container-item-tilte">7x24小时</div>
                    <div class="footer-container-item-text">随时在线客户服务</div>
                </div>
                <div class="footer-container-item-qy">
                    <div class="footer-container-item-tilte">72小时</div>
                    <div class="footer-container-item-text">签约后3天内上线使用</div>
                </div>
                <div class="footer-container-item-zx">
                    <div class="footer-container-item-tilte">一对一</div>
                    <div class="footer-container-item-text">专属咨询服务顾问</div>
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
.footer{
    background-color: #1F2532;

    height: 285px;
}
.footer-container{
    padding: 67px 378px 90px  379px;
    display: flex;
}
.footer-container-item-title, .footer-container-item-logo{
    padding-bottom: 22px;
}
.footer-container-item-title a{
    opacity: 0.9;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 22px;
}
.footer-container-item-about{
    line-height: 28px;
}
.footer-container-item-about a{
    opacity: 0.6;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    text-align: left;
    line-height: 28px;
}
.footer-container-item-telephone{
    opacity: 0.8;
    font-family: OpenSans;
    font-size: 24px;
    color: #FFFFFF;
    text-align: left;
    line-height: 19px;
}
.footer-container-item-email{
    padding-top: 19px;
    font-family: OpenSans;
    font-size: 12px;
    color: #A5A7AD;
    text-align: left;
    line-height: 19px;
}
.footer-container-item-qq{
    padding-top: 6px;
    font-family: OpenSans;
    font-size: 12px;
    color: #A5A7AD;
    text-align: left;
    line-height: 19px;
}
.footer-container-item-tilte{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 20.8px;
}
.footer-container-item-text{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #A4A4A4;
    letter-spacing: 0;
    line-height: 20.8px;
}
.footer-container-item-qy, .footer-container-item-zx{
    padding-top: 17px;
}
</style>
