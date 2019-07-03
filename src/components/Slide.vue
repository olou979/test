<template>
    <div class="slide">
        <div class="slideshow">
          <ul>
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
              <img :src='img' style="width:100%;height:620px;">
            </li>
          </ul>
        </div>
        <div class="bar">
          <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark}" :key="index"></span>
        </div>
    </div>
</template>

<script>
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