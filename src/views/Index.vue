<template>
  <div class="index container">
    <Header></Header>
      <div class="banner">
        <el-carousel :interval="5000" arrow="always" class="d_jump" height="620px">
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
                <router-link :to="{ path: '/index' }">营业数据实时监控 微餐时代助力老板轻松管理门店</router-link>
              </span>
            </div>
            <div class="notice-nav-item">
              <span class="notice-nav-item-span">
                <router-link :to="{ path: '/index' }">眼看食材价格疯涨，餐厅利润竟然不跌反升</router-link>
              </span>
            </div>
            <div class="notice-nav-item">
              <span class="notice-nav-item-span">
                <router-link :to="{ path: '/more' }" class="more">查看更多</router-link>
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
              <div class="content-list2-item-icon">
                <img src="../img/数据分析.png" alt="">
              </div>
              <div class="content-list2-item-title">智慧餐厅</div>
              <p>智能点餐收银，大大提高翻台率，<br>减少漏单、错单的发生；在线排队预订，<br>节约人力成本，顾客更合理安排时间。</p>
            </div>
            <div class="content-list2-item">
              <div class="content-list2-item-icon">
                <img src="../img/门店管理.png" alt="">
              </div>
              <div class="content-list2-item-title">多样支付</div>
              <p>多终端收银，支持微信、支付宝、<br>银行卡、现金、记账等多种方式支付，无需<br>到收银台排队付款。</p>
            </div>
            <div class="content-list2-item">
              <div class="content-list2-item-icon">
                <img src="../img/服务标准.png" alt="">
              </div>
              <div class="content-list2-item-title">会员营销</div>
              <p>建立会员积分体系，根据顾客消费<br>习惯，精准投放优惠活动，培养品牌的忠诚<br>顾客，高效转化门店客流。</p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Header from '../components/Header'

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
    Header
  }
}
</script>

<style scoped>
.notice{
  width: 100%;
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
.content-list-item:nth-child(n+1), .content-list2-item:nth-child(n+1){
  padding-left: 139px;
}
.content-list-item-icon-zhct{
  text-align: center;
  padding-bottom: 31px;
}
.content-list-item-icon-dyzf{
  text-align: center;
  padding-bottom: 26px;
}
.content-list-item-icon-hyyx{
  text-align: center;
  padding-bottom: 19px;
}
.content-list-item-title, .content-list2-item-title{
  font-size: 18px;
  color: #4A4A4A;
  text-align: center;
}
.content-list-item p, .content-list2-item p{
  font-size: 14px;
  color: #666;
  line-height: 26px;
  text-align: center;
}
</style>
