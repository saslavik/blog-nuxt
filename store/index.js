import axios from 'axios';

export const state = () => ({
  postsLoaded: []
})

export const mutation = {
  addPost(state, post) {
    console.log(post)
    state.postLoaded.push(post);
  }
}

export const actions = {
  addPost ({commit}, post) {
    return axios.post('https://blog-nuxt-62417-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', post)
      })
      .catch(e => console.log(e))
  }
}

export const getters = {

}