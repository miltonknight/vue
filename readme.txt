1.在permission.js 中添加白名单URL
2、的LAYOUT目录下建LAYOUT
3、在 VIEWS 目录下建view
4、在router 下的 index.js 下添加route 
5、交互
5.1 复制  getDataFromUI postDataFromUI 这两个函数
5.2 在 api/laobing_url中添加URL 
5.3 读数据
 this.getDataFromUI(
        LaobingUrl.admin_getUserByPage +
          "/" +
          this.listQuery.page +
          "/" +
          this.listQuery.limit
      )
        .then(response => {
          this.total = response.total;
          this.list = response.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });

        读取回来的所有数据都是
{code: 20000
data: {total: 12, list: Array(10), pageNum: 1, pageSize: 10, size: 10, …}
msg: "操作成功"
}
直接操作data

5.4 写数据
构造一个json
 var params = {
        username: this.username,
        password: this.password
      };
      
      this.postDataFromUI(LaobingUrl.admin_add_user, params);
