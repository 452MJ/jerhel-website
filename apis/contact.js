export default {
  async add({ firstName, lastName, email, content }) {
    const res = await $http.post($http.api.addContact, {
      firstName,
      lastName,
      email,
      content,
    })
    return res.data
  },
}
