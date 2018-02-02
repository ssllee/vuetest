<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    
    <el-container>
		  <el-header style="height:80px;">
		  	<el-dropdown>
	        <i class="el-icon-setting" >设置</i>
	        <el-dropdown-menu slot="dropdown">
	          <el-dropdown-item>查看</el-dropdown-item>
	          <el-dropdown-item>新增</el-dropdown-item>
	          <el-dropdown-item>删除</el-dropdown-item>
	        </el-dropdown-menu>
	      </el-dropdown>
	      <span v-if="loginName != ''">{{loginName}}</span>
	      <span v-else><a href="#">请登录</a></span>
		  </el-header>
		  
		  <el-container style="height: 500px; border: 1px solid #eee">
		    
		    <el-aside style="width:250px;">
			    <el-menu :default-openeds="['1','2']" 
			    	:router="true"
			    	background-color="#545c64" 
			    	text-color="#fff"
      			active-text-color="#ffd04b">
			      <el-submenu :index="''+(key+1)" v-for="(item,key) in menuLinks">
			        <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
			        <el-menu-item :id="l_key+1" :index="l_item.route" v-for="(l_item,l_key) in item.links">{{l_item.text}}
			        	<!--<a @click="$goRoute(l_item.route)" target="showHere">{{l_item.text}}</a>-->
			        	<!--<router-link :to="l_item.route">{{l_item.text}}</router-link>-->
			        </el-menu-item>
			      </el-submenu>
			    </el-menu>
			  </el-aside>
			  
		    <el-main>
		    		<router-view></router-view>
		    </el-main>
		    
		  </el-container>
		  
		</el-container>
    
    
    <!--<div>
    	<router-link to="/home"></router-link>
    	<router-link to="/page1"></router-link>
    	<router-link to="/page2"></router-link>
    </div>
    <router-view></router-view>-->
  </div>
</template>

<script>
// 设置路由
export default {
  name: 'app',
  data() {
      return {
        loginName: "王小虎"
        ,menuLinks: [
          {
          	name:'导航一',
          	links:[
		          {
		            text: '首页',
		            route: '/home'
		          },
		          {
		            text: '第一页',
		            route: '/page1'
		          },
		          {
		            text: '第二页',
		            route: '/page2'
		          }
		        ]
          },
          {
          	name:'导航二',
          	links:[
		          {
		            text: '苹果',
		            route: '/showMain/苹果?src=https://www.baidu.com/s?wd=苹果'
		          },
		          {
		            text: '草莓',
		            route: '/showMain/草莓?src=https://www.baidu.com/s?wd=草莓'
		          },
		          {
		            text: '香蕉',
		            route: '/showMain/香蕉?src=https://www.baidu.com/s?wd=香蕉'
		          }
		        ]
          }
        ]
      }
  }
  ,mounted(){
  	  let myUrl = this.sisterUrl+"/sister_proxy/?url=/kpi/2/value&key=ECSSL_ATTR140716157891&token=CHALLENGEEVERYTHING";
  		this.$http.get(myUrl).then(function(res){
  			 this.loginName = res.data.group[0].groupDesc;
  		}).catch(function(res){
				console.log(res);
			});
  }
  ,methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
      ,handleOpen(key, keyPath) {
        console.log(key, keyPath);
      }
      ,handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="scss">
//这种注视不会显示

$version:"1.0.0";
/* This version is #{$version}*/

/* 变量定义 */
$colorA:#333;

$fs14:14px; //10px + 4px;140px/10;20px - 10;140px / 10;10px * 2;

/* mixin定义 */
@mixin tr {text-align: right;}
@mixin tl {text-align: left;}
@mixin tc {text-align: center;}

#app {
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 5px;*/
}
	.el-icon-setting {
		margin-right: 15px;
		font-size:$fs14;
	}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: $colorA;
    line-height: 80px;
    @include tr;
    font-size: $fs14;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: $colorA;
    /*line-height: 200px;*/
    overflow-x: auto;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: $colorA;
    /*line-height: 200px;*/
    height: 100%;
  	width: 100%;
  	padding:2px;
  }
	.iframe{
		width:100%;
		height:inherit;
	}
  
</style>
