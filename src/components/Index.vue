<template>
  <div class="index container">
    <Header></Header>
      <div class="banner">
        <el-carousel :interval="1000" arrow="always" class="d_jump" height="620px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-row>
                    <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
                </el-row>
             </el-carousel-item>
        </el-carousel>
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
        </div>
        <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Test from '../components/Test'

export default {
    data() {
      return{
      imgList: [
        {id: 0, idView: require('../img/banner1.png')},
        {id: 1, idView: require('../img/banner02.png')},
        {id: 2, idView: require('../img/banner03.jpg')}
      ]
    }
  },
  components: {
    Header,Footer
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
</style>
