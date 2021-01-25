import axios from 'axios';

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  addPost(state, post) {
    console.log(post)
    state.postsLoaded.push(post);
  }
}

export const actions = {
  nuxtServerInit ({commit}, contex) {
    return axios.get('https://blog-nuxt-62417-default-rtdb.firebaseio.com/posts.json')
    .then(res => {
      console.log(res);
      const postsArray = []
      for (let key in res.data) {
        postsArray.push({...res.data[key], id: key})
      }
      // commit('addPost', {...res, id: res.data.name});
    })
    .catch(e => console.log(e))
    },
  addPost ({commit}, post) {
    return axios.post('https://blog-nuxt-62417-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', {...res, id: res.data.name});
      })
      .catch(e => console.log(e))
  }
}

export const getters = {

}