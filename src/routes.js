import views from './views/all'

export default [
  {
    path: '/set_token/:token',
    component: views.login,
    name: 'setToken'
  },
  {
    path: '/web',
    component: views.web,
    name: 'web'
  },
  {
    path: '/text',
    component: views.text,
    name: 'text'
  },
  {
    path: '/location',
    component: views.location,
    name: 'location'
  },
  {
    path: '/email',
    component: views.email,
    name: 'email'
  },
  {
    path: '/wifi',
    component: views.wifi,
    name: 'wifi'
  }

]
