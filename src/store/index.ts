import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Group } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [{
      name: '',
      roundResult: []
    }]
  },
  getters: {
    groupNames (state) {
      return state.groups.map(g => g.name).sort()
    },
    sortedGroups (state) {
      return state.groups.sort((a: Group, b: Group) => a.name.localeCompare(b.name))
    }
  },
  mutations: {
    addGroup (state, groupName) {
      state.groups.push({ name: groupName, roundResult: [] })
    },
    deleteGroup (state, groupName) {
      state.groups.splice(state.groups.indexOf(groupName), 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['groups']
  })]
})
