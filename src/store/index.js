import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10
    },
    disminuir(state, payload){
      state.contador = state.contador - payload || state.contador - 10
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    }
  },
  modules: {
  }
})
