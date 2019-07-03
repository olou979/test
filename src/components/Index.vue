<template>
  <div class="index container">
    <Header></Header>
      <div class="slide">
        <div class="slideshow">
          <ul>
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index" class="slideshow-li">
              <img :src='img' style="width:100%;height:625px;" class="slideshow-img">
            </li>
          </ul>
        </div>
        <div class="bar">
          <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark}" :key="index"></span>
        </div>
      </div>
        <div class="notice">
          <div class="notice-nav">
            <div class="notice-nav-item">
              <span class="notice-nav-item-span">
                <img src="../img/喇叭.png" alt="">
                <router-link :to="{ path: '/index' }">营业数据实时监控 微餐时代助力老板轻松管理门店</router-link>
                <img src="../img/NEW.png" alt="" class="notice-nav-item-span-new">
              </span>
            </div>
            <div class="notice-nav-item">
              <span class="notice-nav-item-span">
                <router-link :to="{ path: '/index' }">生意差？不赚钱？90%的餐饮老板的问题在这里！</router-link>
                <img src="../img/NEW.png" alt="" class="notice-nav-item-span-new">
              </span>
            </div>
            <div class="notice-nav-item">
              <span class="notice-nav-item-span">
                <router-link :to="{ path: '/more' }" class="more">查看更多 ></router-link>
              </span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content-text">
            <span>智能餐饮管理，让管理更轻松 让服务更高效</span>
          </div>
          <div class="content-list">
            <div class="content-list-item">
              <div class="content-list-item-icon-zhct">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-list-item-title">智慧餐厅</div>
              <p>智能点餐收银，大大提高翻台率，<br>减少漏单、错单的发生；在线排队预订，<br>节约人力成本，顾客更合理安排时间。</p>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-icon-dyzf">
                <img src="../img/多样支付.png" alt="">
              </div>
              <div class="content-list-item-title">多样支付</div>
              <p>多终端收银，支持微信、支付宝、<br>银行卡、现金、记账等多种方式支付，无需<br>到收银台排队付款。</p>
            </div>
            <div class="content-list-item">
              <div class="content-list-item-icon-hyyx">
                <img src="../img/会员营销.png" alt="">
              </div>
              <div class="content-list-item-title">会员营销</div>
              <p>建立会员积分体系，根据顾客消费<br>习惯，精准投放优惠活动，培养品牌的忠诚<br>顾客，高效转化门店客流。</p>
            </div>
          </div>
          <div class="content-list2">
            <div class="content-list2-item">
              <div class="content-list2-item-icon-sjfx">
                <img src="../img/数据分析.png" alt="">
              </div>
              <div class="content-list2-item-title">数据分析</div>
              <p>除日常营业报表外，还涵盖了菜品销量排<br>行、消费行为分析、会员储值、实时库存<br>情况等数据的智能分析，高效精准，科学决策</p>
            </div>
            <div class="content-list2-item">
              <div class="content-list2-item-icon-mdgl">
                <img src="../img/门店管理.png" alt="">
              </div>
              <div class="content-list2-item-title">门店管理</div>
              <p>多个门店集约化管理，数据随时<br>调看，经营随地把控，投资账目清晰，采购<br>供应链透明，杜绝舞弊现象</p>
            </div>
            <div class="content-list2-item">
              <div class="content-list2-item-icon-fwbz">
                <img src="../img/服务标准.png" alt="">
              </div>
              <div class="content-list2-item-title">服务标准</div>
              <p>系统配备一套标准的服务<br>方案，门店扩大或者员工流动，新员工可以<br>迅速熟悉服务方式以及细则</p>
            </div>
          </div>
          <div class="content-nav">
            <div class="content-nav-item">
              <div class="content-nav-item-icon">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-nav-item-title">智慧餐厅</div>
            </div>
            <div class="content-nav-item">
              <div class="content-nav-item-icon">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-nav-item-title">智慧厨显系统</div>
            </div>
            <div class="content-nav-item">
              <div class="content-nav-item-icon">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-nav-item-title">微餐云报表</div>
            </div>
            <div class="content-nav-item">
              <div class="content-nav-item-icon">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-nav-item-title">微餐进销存</div>
            </div>
            <div class="content-nav-item">
              <div class="content-nav-item-icon">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-nav-item-title">会员&营销</div>
            </div>
            <div class="content-nav-item">
              <div class="content-nav-item-icon">
                <img src="../img/智慧餐厅.png" alt="">
              </div>
              <div class="content-nav-item-title">增值服务</div>
            </div>
          </div>
          <div class="content-txw">
            <div class="content-txw-wb">
              <div class="content-txw-wb-title">为17年老店<br>提高综合经营效率</div>
              <div class="content-txw-wb-text">同兴旺使用微餐系统后，大大优化了门店的运作流程，摆脱了人工手<br>写下单，从点餐到上菜每桌平均节省了10分钟，客单价日均高达<br>600+,餐厅整体利润提高了18%，效果十分喜人。</div>
            </div>
            <div class="content-txw-wb-down">
              <div class="content-txw-wb-down-icon">
                <img src="../img/同兴旺圆形小logo.png">
              </div>
              <div class="content-txw-wb-down-wb">
                <div class="content-txw-wb-down-wb-title">同兴旺餐厅</div>
                <div class="content-txw-wb-down-wb-text">楼面经理</div>
              </div>
            </div>
            <div class="content-txw-button">
             <div class="content-txw-button-more">
               <div class="content-twx-button-more-text">
                <router-link to="/index">查看更多</router-link>
               </div>
               <div class="content-twx-button-more-icon">
                <img src="../img/右箭头.png">
               </div>
             </div>
            </div>
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
import Nav from '../components/Nav'
import { setInterval } from 'timers';

export default {
    data() {
      return{
        mark: 0,
        imgArray: [
          require('../img/banner1.png'),
          require('../img/banner02.png'),
          require('../img/banner03.jpg')
        ]
        // imgList: [
        //   {id: 0, idView: require('../img/banner1.png')},
        //   {id: 1, idView: require('../img/banner02.png')},
        //   {id: 2, idView: require('../img/banner03.jpg')}
        // ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++;
      if(this.mark===3) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay,2500)
    },
    change (i) {
      this.mark = i
    }
  },
  created () {
    this.play()
  },
  components: {
    Header, Footer, Totop, Nav
  }
}
</script>

<style scoped>
.notice{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.notice-nav{
  display: flex;
}
.notice-nav-item{
  padding-left: 420px;
}
.notice-nav-item:nth-child(n+2){
  padding-left: 73px;
}
.notice-nav-item:last-child{
  padding-left: 376px;
}
.content-text{
  /* justify-content: center; */
  text-align: center;
  padding: 93px 0;
  font-size: 28px;
  color: #2A2A2A;
}
.content-list, .content-list2{
  display: flex;
  justify-content: center;
}
.content-list-item:nth-child(n+2), .content-list2-item:nth-child(n+2){
  padding-left: 139px;
}
.content-list-item-icon-zhct{
  text-align: center;
  padding-bottom: 31px;
  width: 280px;
}
.content-list-item-icon-dyzf{
  text-align: center;
  padding-bottom: 26px;
  width: 280px;
}
.content-list-item-icon-hyyx{
  text-align: center;
  padding-bottom: 19px;
  width: 280px;
}
.content-list2-item-icon-sjfx{
  text-align: center;
  padding-top: 81px;
  padding-bottom: 28px;
  width: 280px;
}
.content-list2-item-icon-mdgl{
  text-align: center;
  padding-top: 80px;
  padding-bottom: 20px;
  width: 280px;
}
.content-list2-item-icon-fwbz{
  text-align: center;
  padding-top: 84px;
  padding-bottom: 25px;
  width: 280px;
}
.content-list-item-title, .content-list2-item-title{
  font-size: 18px;
  color: #4A4A4A;
  text-align: center;
  width: 280px;
}
.content-list-item p, .content-list2-item p{
  font-size: 14px;
  color: #666;
  line-height: 26px;
  text-align: center;
  width: 280px;
}
.content-nav{
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  padding-top: 161px;
}
.content-nav-item:nth-child(n+2){
  padding-left: 128px;
}
.content-nav-item-title{
  font-size: 14px;
  color: #666;
}
.content-nav-item{
  text-align: center;
}
.content-txw{
  width: 100%;
  height: 699px;
}
.content-txw-wb-title{
  font-family: SourceHanSansCN-Medium;
  font-size: 42px;
  color: #414141;
  letter-spacing: 0;
  line-height: 54px;
  padding-top: 114px;
  padding-left: 394px;
}
.content-txw-wb-text{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  line-height: 30px;
  padding-top: 63px;
  padding-left: 394px;
}
.content-txw-wb-down{
  display: flex;
  padding-top: 70px;
  padding-left: 394px;
}
.content-txw-wb-down-wb{
  padding-left: 19px;
}
.content-txw-wb-down-wb-title{
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #313131;
  letter-spacing: 0;
  line-height: 26px;
}
.content-txw-wb-down-wb-text{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #8E8E8E;
  letter-spacing: 0;
  line-height: 26px;
}
.content-txw-button{
  width: 162px;
  height: 56px;
}
.content-txw-button{
  padding-left: 394px;
  padding-top: 38px;
}
.content-txw-button-more{
  width: 162px;
  height: 56px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 3px;
  display: flex;
}
.content-twx-button-more-text{
  padding-top: 13px;
  padding-left: 30px;
}
.content-twx-button-more-icon{
  padding-top: 15px;
  padding-left: 40px;
}
.slide {
    width: 100%;
    height: 625px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 625px;
  }
  .slideshow-li{
    position: absolute;
  }
  .slideshow-img {
    width: 100%;
    height: 625px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 46px;
    height: 2px;
    border: 1px solid;
    opacity: 0.15;
    background: #000000;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: #00AF57 !important;
  }
</style>
