import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import Experiment from '@/layout/experiment.vue'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/course',
    component: Layout,
    redirect: '/course/index',
    // name: 'Course',
    // meta: { title: '课程管理', icon: 'table' }
    children: [
      {
        path: 'index',
        name: 'Course',
        component: () => import('@/views/course/index.vue'),
        meta: { title: '我的课程', icon: 'table' }
      },
      // 实训界面
      {
        path: '/course/experiment',
        name: 'experiment',
        hidden: true,
        meta: { title: '实训课程' },
        component: () => import('@/views/course/experiment/index.vue')
      },
      // 理论界面
      {
        path: '/course/theory',
        name: 'theory',
        hidden: true,
        meta: { title: '理论课程' },
        component: () => import('@/views/course/theory/index.vue')
      },
      // 直播界面
      {
        path: '/course/theory/liveroom',
        name: 'liveroom',
        hidden: true,
        meta: { title: '课程直播' },
        component: () => import('@/views/course/components/liveroom.vue')
      }
    ]
  },
  // 考试管理
  {
    path: '/exam',
    component: Layout,
    redirect: '/exam/index',
    // name: 'Exam',
    // meta: { title: '我的考试', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'all',
        component: () => import('@/views/exam/all/index.vue'),
        meta: { title: '我的考试', icon: 'form' }
      }
    ]
  },
  // 实验管理
  {
    path: '/investigation',
    component: Layout,
    redirect: '/investigation/index',
    // name: 'Investigation',
    // meta: { title: '实验管理', icon: 'table' }
    children: [
      {
        path: 'index',
        name: 'Investigation',
        component: () => import('@/views/investigation/index.vue'),
        meta: { title: '我的实验', icon: 'el-icon-data-analysis' }
      }
    ]
  },
  // 实验页面
  {
    path: '/experiment',
    component: Experiment,
    redirect: '/experiment/index',
    children: [
      {
        path: 'index',
        name: 'Experiment',
        component: () => import('@/views/investigation/experiment/index.vue'),
        meta: { title: '实验', icon: 'el-icon-data-analysis' },
        hidden: true
      },
      {
        path: 'code',
        name: 'Code',
        hidden: true,
        component: () => import('@/views/investigation/code/index.vue'),
        meta: { title: '算法实验', icon: 'el-icon-data-analysis' }
      }
    ]
  },
  {
    path: '/drive',
    component: Layout,
    redirect: '/drive/index',
    // name: 'Drive',
    // meta: { title: '网盘管理', icon: 'table' }
    children: [
      {
        path: 'index',
        name: 'Drive',
        component: () => import('@/views/drive/index.vue'),
        meta: { title: '网盘', icon: 'el-icon-upload' }
      }
    ]
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/index',
    children: [
      {
        path: 'index',
        name: 'Personal',
        component: () => import('@/views/personal/index.vue'),
        meta: { title: '个人中心', icon: 'el-icon-user-solid' }
      }
    ]
  },
  // 考试页面
  {
    path: '/examination',
    hidden: true,
    component: () => import('@/views/exam/test/index.vue')
  },
  // 考生须知和人脸识别页面
  {
    path: '/examination-Notice',
    hidden: true,
    component: () => import('@/views/exam/joyexam/index.vue')
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
