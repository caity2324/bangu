import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Daren from '@/pages/daren/Daren'
import DarenDetail from '@/pages/darenDetail/darenDetail'
import DarenViews from '@/pages/darenView/darenView'
import Departure from '@/pages/departure/Departure'
import DepartureDetail from '@/pages/departureDetail/DepartureDetail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/daren',
      name: 'Daren',
      component: Daren
    },
    {
      path: '/darenDetail/:id',
      name: 'DarenDetail',
      component: DarenDetail
    },
    {
      path: '/darenViews/:id',
      name: 'DarenViews',
      component: DarenViews
    },
    {
      path: '/departure',
      name: 'Departure',
      component: Departure
    },
    {
      path: '/departureDetail/:id',
      name: 'DepartureDetail',
      component: DepartureDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      console.log(savedPosition)
      return savedPosition
    } else {
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash
      }
      // 如果meta中有scrollTop
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  }
})
export default router
