<template>
  <div class="lost">
    <div class="lost-pic">
      <img src="~@/assets/img/404.png" alt="" /> 
    </div>
    <p>对不起，您所访问的页面不在服务区，一会再试试吧！</p>
    <div class="btn">
      <el-button type="primary" round @click="gohome()">回到首页</el-button>
      <el-button type="warning" round @click="lucky()">试试手气</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Page404',
  data() {
    return {
      indexArray: [
        "/home/index",
        "/annals/index",
        "/case-studies/index",
        "/courier-station/index",
        "/culture/on-tao/index",
        "/culture/storage/index",
        "/culture/new-media/index",
        "/famous/people/index",
        "/famous/enterprise/index",
        "/homeland/index",
        "/homeland/qa-list",
        "/homeland/law-list",
        "/homeland/lawyer-list"
      ]
    };
  },
  // computed: { },
  // created: { },
  methods: {
    lucky() {
      var temp = Math.floor((Math.random()*100)+1);
      temp = temp % this.indexArray.length
      // console.log(temp)
      // console.log(this.indexArray[temp])
      this.$router.push(this.indexArray[temp]);
    },
    gohome() {
      this.$router.push('/home/index');
    }
  }
}
</script>

<style lang="scss" scoped>
.lost {
  width: 80%;
  margin: 0 auto;

  .lost-pic {
    width: 781px;
    height: 478px;
    margin: 120px auto 30px;
  }
  p {
    font-size: 20px;
    text-align: center;
    margin: 50px auto;
  }
  .btn {
    width: 100%;
    text-align: center;

    button {
      margin: 0 20px;
    }
  }
}
</style>
