import { IState } from '@/@types/types';
import axios from 'axios'
import { createStore } from 'vuex'

export default createStore<IState>({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId: number) {
      state.productsInBag = state.productsInBag.filter((item: { id: number }) => item.id !== productId);
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          commit('loadProducts', res.data);
        });
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({ commit }, productId) {
      commit('removeFromBag', productId);
    }
  },
  modules: {
  }
})
