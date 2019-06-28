<template>
    <div class="product">
        <Header></Header>
        <div class="banner">
            <img src="../img/智慧餐厅banner.png" alt="">
            <span class="banner-title">餐饮管理<br>一套智能系统就搞定</span>
            <span class="banner-text">标准化管理 、降低餐厅成本 <br>改善就餐体验、决策有据可依</span>
        </div>
        <div class="main">
            <div class="main-diancan">
                <div class="main-diancan-title">
                    <span>点餐</span>
                </div>
                <div class="main-diancan-text">
                    <span>支持多种点餐方式，包括服务员点餐、扫码点餐、自助点餐等<br>大幅度提升点餐效率，缓解忙时压力</span>
                </div>
                <div class="main-diancan-img">
                    <img src="../img/点餐.png" alt="">
                </div>
                <div class="main-diancan-icon">
                    <div class="main-diancan-icon-item">
                        <div class="main-diancan-icon-item-icon">
                            <img src="../img/服务员点餐233.png" alt="">
                        </div>
                        <div class="main-diancan-icon-item-title">服务员点餐</div>
                        <div class="main-diancan-icon-item-text">点餐收银一体化，完成开台、接单、<br>订单管理等操作</div>
                    </div>
                    <div class="main-diancan-icon-item">
                        <div class="main-diancan-icon-item-icon">
                            <img src="../img/点餐233.png" alt="">
                        </div>
                        <div class="main-diancan-icon-item-title">扫码点餐</div>
                        <div class="main-diancan-icon-item-text">微信扫码点餐、公众号远程点餐，<br>顾客自己下单结账</div>
                    </div>
                    <div class="main-diancan-icon-item">
                        <div class="main-diancan-icon-item-icon">
                            <img src="../img/微餐菜谱233.png" alt="">
                        </div>
                        <div class="main-diancan-icon-item-title">微餐菜谱</div>
                        <div class="main-diancan-icon-item-text">精美电子菜谱，菜品可视化，适合不同<br>年龄段的顾客使用</div>
                    </div>
                </div>
            </div>
            <div class="main-shouyin">
                <div class="main-shouyin-content">
                    <div class="main-shouyin-content-title">收银</div>
                    <div class="main-shouyin-content-text1">聚合多种支付方式，包括微信、支付宝、银行卡、<br>会员卡、记账等，提升付款效率</div>
                    <div class="main-shouyin-content-text2">组合支付，可选择任意支付方式组合付款，<br>结账灵活方便</div>
                    <div class="main-shouyin-content-text3">接入电子发票，顾客自助扫码开票，<br>发票管理更轻松</div>
                </div>
                <div class="main-shouyin-img">
                    <img src="../img/收银配图.png" alt="">
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  data () {

  },
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
.banner{
    height: 620px;
}
.banner-title{
    position: absolute;
    bottom: 223px;
    left: 447px;
    font-family: SourceHanSansCN-Regular;
    font-size: 38px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 52px;
}
.banner-text{
    position: absolute;
    bottom: 130px;
    left: 447px;
    opacity: 0.8;
    font-family: SourceHanSansCN-Regular;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
}
.main{
    width: 100%;
    height: 4056px;
    background: #FAFAFA;
}
.main-diancan-title{
    text-align: center;
    font-family: SourceHanSansCN-Medium;
    font-size: 42px;
    color: #2A2A2A;
    letter-spacing: 0;
    line-height: 42px;
    padding: 80px 0 20px 0;
}
.main-diancan-text{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
}
.main-diancan-img{
    text-align: center;
    padding-top: 60px;
}
.main-diancan-icon{
    display: flex;
    justify-content: center;
    text-align: center;
}
.main-diancan-icon-item:nth-child(n+2){
    padding-left: 300px;
}
.main-diancan-icon-item-title{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 27px;
}
.main-diancan-icon-item-text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 26px;
    padding-top: 14px;
}
.main-shouyin{
    width: 100%;
    height: 620px;
    display: flex;
}
.main-shouyin-content{
    width: 997px;
}
.main-shouyin-content-title{
    font-family: SourceHanSansCN-Medium;
    font-size: 42px;
    color: #2A2A2A;
    letter-spacing: 0;
    line-height: 42px;
    padding-top: 164px;
    padding-left: 350px;
}
.main-shouyin-content-text1, .main-shouyin-content-text2, .main-shouyin-content-text3{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0;
    line-height: 28px;
    padding-left: 350px;
    padding-top: 47px;
}
</style>
