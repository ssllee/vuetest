<template>
  <div class="hello">
  	<div class="title">{{ifrmeName}}</div>
  	<div class="title2">{{ifrmeName}}</div>
  	<iframe :src='$route.query.src' class="iframe"></iframe>
  </div>
</template>

<script>

export default {
  name: 'iframeMain',
  data () {
    return {
      msg: 'iframeMain'
      /*,ifrmeSrc: 'http://www.baidu.com'*/
    }
  }
  ,props:['ifrmeName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- lang="stylus" rel="stylesheet/stylus" -->
<style  lang="scss" scoped>
//变量定义
$width_100:100%;
$height_100:100%;


.hello {
	height: $height_100;
  width: $width_100;
  
  .iframe {
		width:$width_100;
		height:inherit;
	}
	.title {
		width:$width_100;
		font-size: 10px + (2px*3);
		height:20px;
		&:before {
			content: '[';
		}
		&:after {
			content: ']';
		}
	}
	.title2 {
		@extend .title;
	}
}


</style>
