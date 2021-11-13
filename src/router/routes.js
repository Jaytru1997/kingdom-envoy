
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '', component: () => import('pages/Index.vue') 
      },
      { 
        path: '/about', component: () => import('pages/About.vue') 
      },
      { 
        path: '/service', component: () => import('pages/Service.vue') 
      },
      { 
        path: '/blogs', component: () => import('pages/Blog.vue') 
      },
      { 
        path: '/contact', component: () => import('pages/Contact.vue') 
      },
      { 
        path: '/live', component: () => import('pages/Live.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
