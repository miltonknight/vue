<template>
  <div class="upload-container">
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        class="editor-slide-upload"
        action="http://192.168.110.170:8181/uploads/avata"
        list-type="picture-card"
      >
        <el-button size="small" type="warning">
          点击选择要上传的图片
        </el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">
        取消
      </el-button>
      <el-button type="warning" @click="handleSubmit">
        确定
      </el-button>
    </el-dialog>
    <div id="img2" style="display:block;">
      <!-- <img :src="imgUrl?avatar:imgUrl" class="avatar" /> -->
      <img :src="avatarurl" class="avatar" />
    </div>
    <div id="img" style="display:none;">
      <!-- <img :src="imgUrl?avatar:imgUrl" class="avatar" /> -->
      <img :src="imgUrl" class="avatar" />
    </div>
    <el-button style="background-color: #e08714,borderColor: #e08714" icon="el-icon-upload" size="mini" type="warning" @click="dialogVisible=true">
      头像上传
    </el-button>
  </div>
</template>

<script>
//  import { getToken } from 'api/qiniu'
//  http://www.lblbsy.com:8181
//  192.168.110.170:8181
export default {
  name: 'UploadAvatar',
  props: {
    avatarurl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogVisible: false,
      listObj: [],
      fileList: [],
      fileinfo: [],
      imgUrl: ''
    }
  },
  mounted: function() {
    console.log("avatarurl::::::::", this.avatarurl)
  },
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess)
    },
    handleSubmit() {
      var img = document.getElementById('img');
      var img2 = document.getElementById('img2');
      img2.style.display = 'none';
      img.style.display = 'block';
      const arr = Object.keys(this.listObj).map(v => this.listObj[v])
      if (!this.checkAllSuccess()) {
        this.$message('Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!')
        return
      }
      this.$emit('successCBK', arr)
      this.listObj = {}
      // console.log(this.listObj)
      this.fileList = []
      this.dialogVisible = false
      // console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        console.log(arr.length)
        if (i === arr.length - 1) {
          this.imgUrl = arr[i].url
        }
      }

      console.log(this.imgUrl)
    },
    handleSuccess(response, file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj) 
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.data
          this.listObj[objKeyArr[i]].hasSuccess = true
          return
        }
      }
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      if (['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.type) === -1) {
        this.$message({
          message: "格式不正确",
          type: "info"
        });
        return false;
      }
      const _self = this
      const _URL = window.URL || window.webkitURL
      const fileName = file.uid
      this.listObj[fileName] = {}
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = _URL.createObjectURL(file)
        // console.log(img.src)
        img.onload = function() {
          _self.listObj[fileName] = { hasSuccess: false, uid: file.uid, width: this.width, height: this.height }
        }
        resolve(true)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-slide-upload {
  
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}

.avatar-uploader>>>.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  width: 80px;
  height: 80px;
  background: url('~@/assets/img/avatar-default.png');
}
.avatar-uploader>>>.el-upload:hover {
  border-color: #e08714;
}
.el-icon-plus:before {
  content: "\E6D9";
  content: none;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 40px;
}
.avatar {
  // width: 80px;
  // height: 80px;
  // display: block;
  border: 1px dashed #d9d9d9;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  width: 80px;
  height: 80px;
  background: url('~@/assets/img/avatar-default.png');
}
</style>
