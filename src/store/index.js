import Vue from 'vue'
import Vuex from 'vuex'
import { postsAPI, userAPI } from '@/services/postAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    activePost: {},
    postComments: [],
    postsPerPage: 10,
    users: [],
  },

  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },

    setPost(state, payload) {
      state.activePost = payload
    },

    setComment(state, payload) {
      state.postComments = payload
    },

    setUsers(state, payload) {
      state.users = payload
    },
  },

  actions: {
    async getPosts({ commit }) {
      const newPosts = await postsAPI.getPostsApi()
      commit('setPosts', newPosts)
    },

    async getPostById({ commit }, id) {
      const postById = await postsAPI.getPostApi(id)
      commit('setPost', postById)
    },

    async getComments({ commit }, id) {
      const comments = await postsAPI.getCommentPost(id)
      commit('setComment', comments)
    },

    async getUsers({ commit }) {
      const u = await userAPI.getUsersApi()
      commit('setUsers', u)
    },
  },

  getters: {
    posts: (state) => state.posts,
    activePost: (state) => state.activePost,
    postComments: (state) => state.postComments,
    pageCount: (state) => Math.ceil(state.posts.length / state.postsPerPage),
    users: (state) => state.users,
    getPostByPageNumber: (state) => {
      return (pageNumber = 1) =>
        state.posts.slice(
          (pageNumber - 1) * state.postsPerPage,
          (pageNumber - 1) * state.postsPerPage + state.postsPerPage
        )
    },
  },
})
