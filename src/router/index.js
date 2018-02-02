import Vue from 'vue'
import Router from 'vue-router'
/*import ShowMain from '../components/iframe/main'  //iframe嵌套内容
import Home from '../components/home/home'
import Page1 from '../components/page1/page1'
import Page2 from '../components/page2/page2'
import Page3 from '../components/page3/page3'*/


Vue.use(Router)

//路由懒加载
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(["../components/home/home"], resolve)//component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: resolve => require(["../components/page1/page1"], resolve)//component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: resolve => require(["../components/page2/page2"], resolve)//component: Page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: resolve => require(["../components/page3/page3"], resolve)//component: Page3
    }
   ,{
      path: '/showMain/:ifrmeName',
      name: 'showMain',
      component: resolve => require(["../components/iframe/main"], resolve),//component: ShowMain,
      props: true 
    }
   /*,{
      path: '*',
      redirect: '/home'
    }*/
  ]
})
