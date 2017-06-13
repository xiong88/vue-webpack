export default [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/hello',
    name: 'Hello',
    component: (resolve) => require(['../components/Hello.vue'], resolve),
  },
  {
    path: '/test',
    name: 'test',
    component: (resolve) => require(['../views/Test.vue'], resolve),
    /*children: [
     {
     path: 'test1',
     name: 'test1',
     component: (resolve) => require(['../views/test/test1.vue'], resolve)
     },
     {
     path: 'test2',
     name: 'test2',
     component: (resolve) => require(['../views/test/test2.vue'], resolve)
     }
     ]*/
  },
  {
    path: '/test/test1',
    name: 'test1',
    component: (resolve) => require(['../views/test/test1.vue'], resolve),
  },
  {
    path: '/test/test2',
    name: 'test2',
    component: (resolve) => require(['../views/test/test2.vue'], resolve),
  },
]
