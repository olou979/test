<template>
  <div>
    <el-menu
      :default-openeds="['1', '2']"
      :default-active="onRoutes"
      collapse-transition>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-add_light"></i>
          <a>新建</a>
        </template>
        <el-menu-item index="New">
          <router-link to="New" target="_blank">出入库单</router-link>
        </el-menu-item>
        <el-menu-item index="NewLending">
          <router-link to="NewLending" target="_blank">产品借出单</router-link>
        </el-menu-item>
        <el-menu-item index="NewReturn">
          <router-link to="NewReturn" target="_blank">产品返回单</router-link>
        </el-menu-item>
        <el-menu-item index="PriceAdjustmentList">
          <router-link to="PriceAdjustmentList" target="_blank">存货调价单</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-search"></i>
          <span>查询</span>
        </template>
        <el-menu-item index="InOrOutList">
          <router-link to="InOrOutList" target="_blank">出入库单</router-link>
        </el-menu-item>
        <el-menu-item index="InvoicingSummary">
          <router-link to="InvoicingSummary" target="_blank">进销存汇总表</router-link>
        </el-menu-item>
        <el-menu-item index="ProductInventory">
          <router-link to="ProductInventory" target="_blank">产品出入库记录</router-link>
        </el-menu-item>
        <el-menu-item index="CompanyAssets">
          <router-link to="CompanyAssets" target="_blank">公司资产表</router-link>
        </el-menu-item>
        <el-menu-item index="LendingTable">
          <router-link to="LendingTable" target="_blank">产品借出表</router-link>
        </el-menu-item>
        <el-menu-item index="ReturnTable">
          <router-link to="ReturnTable" target="_blank">产品返回表</router-link>
        </el-menu-item>
        <el-menu-item index="NewPriceAdjustment">
          <router-link to="NewPriceAdjustment" target="_blank">存货调价单</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="Review">
        <i class="iconfont icon-profilefill"></i>
        <router-link to="Review" target="_blank">审核出入库单</router-link>
        <!--<router-link to=''>审核出入库单</router-link>-->
      </el-menu-item>
      <el-menu-item index="ManagementMaterialBoard">
        <i class="iconfont icon-form_light"></i>
        <router-link to="ManagementMaterialBoard" target="_blank">管理材料板信息</router-link>
      </el-menu-item>
      <el-menu-item index="OperationLog">
        <i class="iconfont icon-repair"></i>
        <router-link to="OperationLog" target="_blank">查看操作日志</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
 
<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  computed: {
    onRoutes () {
      // 当前激活菜单的 index
      let index = this.$route.path.replace('/', '')
      let title = this.$route.meta.title
      // 改变浏览器title
      document.title = title
      return index
    }
  },
  methods: {}
}
</script>
 
<style scoped>
  /*改变router-link样式*/
  a {
    text-decoration: none;
    color: inherit;
  }
  .el-submenu .el-menu-item a {
    position: absolute;
    height: 100%;
    width: calc(100% - 50px);
    left: 0;
    padding-left: 50px;
  }
  .el-menu-item a {
    position: absolute;
    height: 100%;
    width: calc(100% - 60px);
    left: 0;
    padding-left: 60px;
  }
</style>