<template>
  <div>
    <el-table
      :data="groups"
      key="name"
      stripe
      border
    >
      <el-table-column
        label="Название команды"
        prop="name"
      />

      <el-table-column
        v-for="(round, $index) in rounds"
        :key="round"
        :label="'Раунд' + ' ' + ++$index"
        :prop="'score.round' + $index"
        align="center"
      >
        <template v-slot="{row}">
          <el-input-number
            v-model="row.score['round' + $index]"
            :min="0"
            :max="10"
            @change="handleChange(row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { Group } from '@/types'
import store from '@/store'

@Component({
  components: {}
})
export default class ScoreView extends Vue {
  private get groups (): Group[] {
    console.log(this.$store.getters.sortedGroups)
    return this.$store.getters.sortedGroups
  }

  private get rounds ():number {
    return store.getters.rounds
  }

  private handleChange (group: Group) {
    this.$store.commit('updateGroup', group)
  }
}
</script>

<style lang="scss" scoped>
  .el-input-number {
    width: 120px;
  }
</style>
