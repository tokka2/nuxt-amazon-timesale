import Vuex from 'vuex'
import axios from 'axios'

export default () => new Vuex.Store({
  state: {
    targetUrl: 'https://tokka2.github.io/tokka_amazon_timesale',
    datetimes: []
  },
  getters: {
    targetUrl: state => state.targetUrl,
    datetimes: state => state.datetimes
  },
  mutations: {
    setDatetimes (state, { datetimes }) {
      state.datetimes = datetimes
    }
  },
  actions: {
    async fetchDatetimes ({ commit }) {
      await axios.get(`${this.getters.targetUrl}/updated.json`).then((response) => {
        commit('setDatetimes', { datetimes: response.data })
      })
    }
  }
})
