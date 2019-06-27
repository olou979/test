<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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
</style>
