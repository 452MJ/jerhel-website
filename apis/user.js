export default {
  async login({ email, password }) {
    const res = await $http.post($http.api.login, {
      email,
      password,
    })
    return res.result
  },

  async signUp(params) {
    const res = await $http.post($http.api.signUp, params)

    return res
  },
}
