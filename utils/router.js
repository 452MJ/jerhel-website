import Router from 'next/router'

const Pages = {
  Home: '/',
  Login: '/auth/login',
  SignUp: '/auth/signUp',
  ForgetPassword: '/auth/forgetPassword',
}

const $router = {
  push(routePath, params) {
    Router.push({
      pathname: routePath,
      query: params,
    })
  },
  replace(routePath, params) {
    Router.replace({
      pathname: routePath,
      query: params,
    })
  },
}

export { Pages, $router }
