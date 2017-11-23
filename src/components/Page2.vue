<template>
  <div class="hello">
  	{{msg}}
  	<el-container>
		  <el-header class="bg-success">
		  	<i class="el-icon-edit"></i>
				<i class="el-icon-share"></i>
				<i class="el-icon-delete"></i>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
		  </el-header>
		  <el-main>Main</el-main>
		  <el-footer>Footer</el-footer>
		</el-container>
  </div>
</template>

<script>

export default {
  name: 'page2',
  data () {
    return {
      msg: '我是page2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>