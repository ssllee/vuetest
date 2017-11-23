<template>
  <div class="hello">
  	{{msg}}
  	<Pie></Pie>
  </div>
</template>

<script>
import Pie from '../components/Pie'

export default {
  name: 'page1',
  data () {
    return {
      msg: '我是page1'
    }
  },
  components: {
    Pie
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- lang="stylus" rel="stylesheet/stylus" -->
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
