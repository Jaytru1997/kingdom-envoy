
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
        path: '/blogs', component: () => import('pages/Blog.vue') 
      },
      { 
        path: '/gallery', component: () => import('pages/Gallery.vue') 
      },
      { 
        path: '/contact', component: () => import('pages/Contact.vue') 
      }
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
