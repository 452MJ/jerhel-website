export default {
  async login({ email, password }) {
    const res = await $http.post($http.api.login, {
      email,
      password,
    })
    return res.data
  },

  async signUp(params) {
    const res = await $http.post($http.api.signUp, params)

    return res
  },

  async userInfo() {
    const res = await $http.get($http.api.userInfo)

    return res.data
  },
}
