<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <el-image style="width: 250px; height: 250px" :src="url"></el-image>
    </div>
    <div style="position:relative;">
      <div style="padding-top:5px;" class="progress-item">
        <strong>姓名：</strong>
        <span>{{ code.name }}</span>
      </div>
      <div class="progress-item">
        <strong>UID:</strong>
        <span>{{ code.userId }}</span>
      </div>
      <div class="progress-item">
        <strong>身份证:</strong>
        <span>{{ code.idCard }}</span>
      </div>
      <div class="progress-item">
        <strong>军人证:</strong>
        <span>{{ code.soldierCard }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["code", "url"],
  data() {
    return {
    }
  }
};
</script>

<style lang="scss" >
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    padding: 20px 80px;
    position: relative;
    align-content: center;
    height: 310px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;
    /deep/ .pan-info {
      box-shadow: none !important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 16px;
  }
  @media only screen and (max-width: 1510px) {
    .mallki-text {
      display: none;
    }
  }
}
</style>
