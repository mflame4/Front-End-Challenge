import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const aView = () => import('../views/aView.vue');
const bView = () => import('../views/bView.vue');
const cView = () => import('../views/cView.vue');
const dView = () => import('../views/dView.vue');
const eView = () => import('../views/eView.vue');
const fView = () => import('../views/fView.vue');
const gView = () => import('../views/gView.vue');
const hView = () => import('../views/hView.vue');
const iView = () => import('../views/iView.vue');
const jView = () => import('../views/jView.vue');
const kView = () => import('../views/kView.vue');
const lView = () => import('../views/lView.vue');
const mView = () => import('../views/mView.vue');
const nView = () => import('../views/nView.vue');
const oView = () => import('../views/oView.vue');
const pView = () => import('../views/pView.vue');
const qView = () => import('../views/qView.vue');
const rView = () => import('../views/rView.vue');
const sView = () => import('../views/sView.vue');
const tView = () => import('../views/tView.vue');
const uView = () => import('../views/uView.vue');
const vView = () => import('../views/vView.vue');
const wView = () => import('../views/wView.vue');
const xView = () => import('../views/xView.vue');
const yView = () => import('../views/yView.vue');
const zView = () => import('../views/zView.vue');


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a',
      name: 'a',
      component: aView
    },
    {
      path: '/b',
      name: 'b',
      component: bView
    },
    {
      path: '/c',
      name: 'c',
      component: cView
    },
    {
      path: '/d',
      name: 'd',
      component: dView
    },
    {
      path: '/e',
      name: 'e',
      component: eView
    },
    {
      path: '/f',
      name: 'f',
      component: fView
    },
    {
      path: '/g',
      name: 'g',
      component: gView
    },
    {
      path: '/h',
      name: 'h',
      component: hView
    },
    {
      path: '/i',
      name: 'i',
      component: iView
    },
    {
      path: '/j',
      name: 'j',
      component: jView
    },
    {
      path: '/k',
      name: 'k',
      component: kView
    },
    {
      path: '/l',
      name: 'l',
      component: lView
    },
    {
      path: '/m',
      name: 'm',
      component: mView
    },
    {
      path: '/n',
      name: 'n',
      component: nView
    },
    {
      path: '/o',
      name: 'o',
      component: oView
    },
    {
      path: '/p',
      name: 'p',
      component: pView
    },
    {
      path: '/q',
      name: 'q',
      component: qView
    },
    {
      path: '/r',
      name: 'r',
      component: rView
    },
    {
      path: '/s',
      name: 's',
      component: sView
    },
    {
      path: '/t',
      name: 't',
      component: tView
    },
    {
      path: '/u',
      name: 'u',
      component: uView
    },
    {
      path: '/v',
      name: 'v',
      component: vView
    },
    {
      path: '/w',
      name: 'w',
      component: wView
    },
    {
      path: '/x',
      name: 'x',
      component: xView
    },
    {
      path: '/y',
      name: 'y',
      component: yView
    },
    {
      path: '/z',
      name: 'z',
      component: zView
    },
  ]
})

export default router
