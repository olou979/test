<template>
    <div class="services">
        <Header></Header>
        <div class="banner">
            <img src="../img/极致增值.png" alt="">
            <span class="banner-title">极致增值<br>贴心服务</span>
            <span class="banner-text">全方位打造服务闭环<br>实现经营效益最大化</span>
        </div>
        <div class="main">
            <div class="main-sjfw">
                <div class="main-sjfw-title">设计服务</div>
                <div class="main-sjfw-img">
                    <div class="main-sjfw-img-item">
                        <div class="main-sjfw-img-item-img">
                            <img src="../img/餐厅基础物料.png">
                        </div>
                        <div class="main-sjfw-img-item-title">餐厅基础物料</div>
                        <div class="main-sjfw-img-item-text">菜品拍摄及精修、菜单设计、名片设计、<br>餐桌二维码</div>
                    </div>
                    <div class="main-sjfw-img-item">
                        <div class="main-sjfw-img-item-img">
                            <img src="../img/营销相关物料.png">
                        </div>
                        <div class="main-sjfw-img-item-title">营销相关物料</div>
                        <div class="main-sjfw-img-item-text">精美海报设计、会员卡、优惠券、<br>电子邀请函</div>
                    </div>
                    <div class="main-sjfw-img-item">
                        <div class="main-sjfw-img-item-img">
                            <img src="../img/店铺装修.png">
                        </div>
                        <div class="main-sjfw-img-item-title">店铺装修</div>
                        <div class="main-sjfw-img-item-text">门店门牌logo设计、APP启动页、色系<br>背景、图标样式、菜单样式自定义、弹<br>框样式、轮播广告</div>
                    </div>
                </div>
            </div>
            <div class="main-yxfw">
                <div class="main-yxfw-item">
                    <div class="main-yxfw-item-top">
                        <div class="main-yxfw-item-top-img">
                            <img src="../img/公众号代运营.png" style="padding-top:10px;">
                        </div>
                        <div class="main-yxfw-item-top-title">公众号代运营</div>
                    </div>
                    <div class="main-yxfw-item-down">
                        <div class="main-yxfw-item-down-title1">基础服务</div>
                        <div class="main-yxfw-item-down-text1">公众号申请、认证、运营方案规划</div>
                        <div class="main-yxfw-item-down-title2">高级业务</div>
                        <div class="main-yxfw-item-down-text2">自定义菜单、微信会员、微信推文营销</div>
                    </div>
                </div>
                <div class="main-yxfw-item">
                    <div class="main-yxfw-item-top">
                        <div class="main-yxfw-item-top-img">
                            <img src="../img/会员营销方案.png" style="padding-top:10px;">
                        </div>
                        <div class="main-yxfw-item-top-title">会员营销方案</div>
                    </div>
                    <div class="main-yxfw-item-down">
                        <div class="main-yxfw-item-down-title1">方案制定</div>
                        <div class="main-yxfw-item-down-text1">根据餐厅基础数据及顾客特征，设定会员方案</div>
                        <div class="main-yxfw-item-down-title2">数据营销</div>
                        <div class="main-yxfw-item-down-text2">结合餐厅运营数据及经营现状，策划营销活动</div>
                    </div>
                </div>
                <div class="main-yxfw-item">
                     <div class="main-yxfw-item-top">
                        <div class="main-yxfw-item-top-img">
                            <img src="../img/多场景多渠道.png" style="padding-top:10px;">
                        </div>
                        <div class="main-yxfw-item-top-title">多渠道/场景营销</div>
                    </div>
                    <div class="main-yxfw-item-down">
                        <div class="main-yxfw-item-down-title1">引流到店</div>
                        <div class="main-yxfw-item-down-text1">多渠道触达客户，为门店引流</div>
                        <div class="main-yxfw-item-down-title2">定制营销方案</div>
                        <div class="main-yxfw-item-down-text2">为门店定制属于自己的有效、可行、高回报的<br>营销方案</div>
                    </div>
                </div>
            </div>
            <div class="main-yyzc">
                <div class="main-yyzc-title">运营支持</div>
                <div class="main-yyzc-img">
                    <div class="main-yyzc-img-item">
                        <div class="main-yyzc-img-item-img">
                            <img src="../img/网络搭建与部署.png">
                        </div>
                        <div class="main-yyzc-img-item-text">网络搭建与部署</div>
                    </div>
                    <div class="main-yyzc-img-item">
                        <div class="main-yyzc-img-item-img">
                            <img src="../img/餐厅人员培训.png">
                        </div>
                        <div class="main-yyzc-img-item-text">餐厅人员培训</div>
                    </div>
                    <div class="main-yyzc-img-item">
                        <div class="main-yyzc-img-item-img">
                            <img src="../img/多维度数据分析报告.png">
                        </div>
                        <div class="main-yyzc-img-item-text">多维度数据分析报告</div>
                    </div>
                </div>
            </div>
            <div class="main-cyxy">
                <div class="main-cyxy-title">餐饮微学院</div>
            </div>
        </div>
        <Totop></Totop>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Totop from '../components/Totop'

export default {
  components: {
    Header, Footer , Totop
  }
}
</script>

<style scoped>
.banner{
    height: 620px;
}
.banner-title{
    position: absolute;
    bottom: 290px;
    left: 447px;
    font-family: SourceHanSansCN-Regular;
    font-size: 38px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 52px;
}
.banner-text{
    position: absolute;
    bottom: 190px;
    left: 447px;
    opacity: 0.8;
    font-family: SourceHanSansCN-Regular;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
}
.main-sjfw{
    width: 100%;
    height: 640px;
}
.main-sjfw-title{
    font-family: SourceHanSansCN-Medium;
    font-size: 28px;
    color: #2A2A2A;
    letter-spacing: 0;
    line-height: 27px;
    text-align: center;
    padding-top: 80px;
}
.main-sjfw-img{
    display: flex;
    justify-content: center;
    padding-top: 74px;
}
.main-sjfw-img-item{
    width: 330px;
    height: 360px;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 1px;
}
.main-sjfw-img-item:nth-child(n+2){
    margin-left: 103px;
}
.main-sjfw-img-item-img{
    margin-left: 115px;
    margin-top: 69px;
}
.main-sjfw-img-item-title{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 39px;
}
.main-sjfw-img-item-text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 14px;
}
.main-yxfw{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 860px;
    background: url(../img/营销服务banner.png)
}
.main-yxfw-item{
    width: 370px;
    height: 580px;
    background: #FFFFFF;
    border-radius: 1px;
    margin-top: 176px;
}
.main-yxfw-item-top{
    border-bottom: 1px solid #EBEBEB;
    padding-top: 58px;
    width: 298px;
    height: 286px;
    margin-left: 36px;
}
.main-yxfw-item:nth-child(n+2){
    margin-left: 50px;
}
.main-yxfw-item-top-img{
    width: 118px;
    height: 118px;
    margin: 0 auto;
    text-align: center;
    vertical-align:middle;
    margin-top: 10px;
}
.main-yxfw-item-top-title{
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 37px;
}
.main-yxfw-item-down-title1{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 49px;
}
.main-yxfw-item-down-title2{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 30px;
}
.main-yxfw-item-down-text1, .main-yxfw-item-down-text2{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 14px;
}
.main-yyzc{
    width: 100%;
    height: 460px;
}
.main-yyzc-title{
    font-family: SourceHanSansCN-Medium;
    font-size: 28px;
    color: #2A2A2A;
    letter-spacing: 0;
    line-height: 27px;
    text-align: center;
    padding-top: 88px;
}
.main-yyzc-img{
    display: flex;
    justify-content: center;
}
.main-yyzc-img-item{
    padding-top: 100px;
    width: 163px;
    text-align: center;
}
.main-yyzc-img-item:nth-child(n+2){
    margin-left: 340px;
}
.main-yyzc-img-item-text{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0;
    line-height: 26px;
    padding-top: 38px;
}
.main-cyxy{
    width: 100%;
    height: 623px;
}
.main-cyxy-title{
    font-family: SourceHanSansCN-Medium;
    font-size: 28px;
    color: #2A2A2A;
    letter-spacing: 0;
    line-height: 27px;
    padding-top: 108px;
    text-align: center;
}
</style>


