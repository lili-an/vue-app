<template>
  <div class="hello">
    <mu-appbar title="图片详情">
      <mu-icon-button icon='keyboard_arrow_left' slot="left" @click="back"/>
      <mu-icon-button icon='center_focus_weak' slot="right"/>
    </mu-appbar>
    <ul class="mul">
      <li v-for="(mp,index) in mpList">
        <p>歌名:{{ mp.name }}</p>
        <img :src="mp.album.picUrl">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: function() {
      return {
        mpList:[]
      }
    },
    computed: {
      
    },
    mounted: function() {
       this.$nextTick(function() {
          this.mp3List()
          this.$store.state.showHF = false
       })
    },
    methods: {
      mp3List: function(){
        var id = this.$route.params.id
        axios.get('https://bird.ioliu.cn/netease?id='+id)
          .then(function(res) {
              this.mpList = res.data.songs
          }).catch(function(err) {console.log(err)})
       
      },
      back: function() {
        this.$router.replace('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

.hello {
  margin-top: -56px;
}

</style>
