<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
      return {
        screenWidth: document.body.clientWidth, // 屏幕尺寸
      }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    }
}
</script>

<style>
#app {
  background: #fff;
  font-family: PingFangSC-Regular;
  min-height: 100vh;
}
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #2a2a2a;
  font-size: 14px;
}
html, body, h1, h2, h3, h4, h5, p, ul, ol, li, dl, dt, dd, div, span, em, table, thead, tbody, th, td, th, a, form, input, select, textarea {
    padding: 0px;
    margin: 0px;
    list-style: none;
    font-style: normal;
}
</style>
