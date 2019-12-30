import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// STATE
const state = {
    items: [
      {
        id: 0,
        title: 'bread',
        isChecked: false
      },
      {
        id: 1,
        title: 'apples',
        isChecked: false
      },
      {
        id: 2,
        title: 'milk',
        isChecked: false
      },
      {
        id: 3,
        title: 'eggs',
        isChecked: false
      }
    ]
}; // end state


// MUTATIONS
const mutations = {
  ADD_ITEM(state, payload) {
    state.items = [...state.items, payload];
  },

  DELETE_ITEM(state, itemId) {
    state.items = state.items.filter(i => i.id !== itemId);
  }
}


// ACTIONS
const actions = {
  addItem(context, newItem) {
    context.commit('ADD_ITEM', newItem);
  },

  deleteItem(context, itemId) {
    context.commit('DELETE_ITEM', itemId);
  },

}


// GETTERS
const getters = {
  getItems(state) {
    return state.items;
  }
}

// INIT VUEX STORE
export const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
