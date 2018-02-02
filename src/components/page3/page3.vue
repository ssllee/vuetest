<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
    	<el-button>默认按钮</el-button>
		  <el-button type="primary">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'page3',
  data () {
    return {
      msg: '我是page3'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
