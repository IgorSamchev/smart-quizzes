import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Group } from '@/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [{
      name: '',
      score: {
        round1: 0,
        round2: 0,
        round3: 0,
        round4: 0,
        round5: 0,
        round6: 0
      }
    }],
    rounds: 6
  },
  getters: {
    groupNames (state): string[] {
      return state.groups.map(g => g.name).sort()
    },
    sortedGroups (state): Group[] {
      return state.groups.sort((a: Group, b: Group) => a.name.localeCompare(b.name))
    },
    rounds (state): number {
      return state.rounds
    }
  },
  mutations: {
    addGroup: function (state, groupName) {
      state.groups.push({
        name: groupName,
        score: {
          round1: 0,
          round2: 0,
          round3: 0,
          round4: 0,
          round5: 0,
          round6: 0
        }
      })
    },
    deleteGroup (state, groupName) {
      state.groups.splice(state.groups.map(g => g.name === groupName).indexOf(groupName), 1)
    },
    updateGroup (state, group: Group) {
      state.groups[state.groups.map(g => g.name).indexOf(group.name)] = group
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
