<template>
  <div class="hello">
  	<el-table :data="tableData">
	    <el-table-column prop="date" label="日期" width="140">
	    </el-table-column>
	    <el-table-column prop="name" label="姓名" width="120">
	    </el-table-column>
	    <el-table-column prop="address" label="地址">
	    </el-table-column>
	  </el-table>
	  <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage" 
	      :page-sizes="[10, 20, 30, 40]"
	      :page-size="pageSize"  
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="totalNum">  
    </el-pagination>
  </div>
</template>

<script>

export default {
	  name: "page2",
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
        ,currentPage: 1  //当前是第几页
        ,totalNum: 20   //总共几条
        ,pageSize: 10   //每页显示几条
      }
    }
    ,methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }
      ,handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
  	background-color: #E9EEF3;
    color: #333;
    line-height: 200px;
  }
</style>