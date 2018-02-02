<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
    	<!--<ul>
    	<li><router-link to="/page1"><h2>菜单1</h2></router-link></li>
    	<li><router-link to="/page2"><h2>菜单2</h2></router-link></li>
    	</ul>-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: '首页'
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
