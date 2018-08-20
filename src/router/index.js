import Vue from 'vue'
import Router from 'vue-router'
import routesConfig from '@/router/routes/index'

Vue.use(Router)

const registerRoute = (routesConfig) => {
  const route = []
  routesConfig.forEach((item) => {
    var node = buildRoute(item)
    if (item.children) {
      node.children = []
      item.children.forEach(item => {
        node.children.push(buildRoute(item))
      })
    }
    route.push(node)
  })
  route.push({
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  })

  function buildRoute(item) {
    return {
      path: item.path || '',
      name: item.name,
      title: item.title,
      hidden: item.hidden || false,
      leaf: item.leaf || false,
      icon: item.icon || '',
      component: item.component,
      meta: {
        bread: !!item.bread,
        title: item.title
      }
    }
  }
  return route
}

const routes = registerRoute(routesConfig)

var router = new Router({
  routes
})

const loginUrl = '/login';
router.beforeEach((to, from, next) => {
  if (!window.sessionStorage.getItem('user') && to.path !== loginUrl) {
    next(loginUrl);
  } else {
    next()
  }
})
export default router
