<template>
  <div>
    <h1>Регистрация команд</h1>
    <el-form
      ref="groupRef"
      :model="form"
      inline
    >
      <el-form-item
        prop="group"
        :rules="{ required: true, message: 'Обязательное поле', trigger: 'blur' }"
      >
        <el-input
          v-model="form.group"
          placeholder="Название команды"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="success"
          @click="addGroup"
        >
          Добавить команду
        </el-button>
      </el-form-item>
    </el-form>

    <b>Сегодня играют:</b>
    <transition-group name="flip-list" tag="div">
      <div
        v-for="groupName in groupNames"
        :key="groupName"
        class="group"
      >
        <span>{{ groupName }}</span>
        <el-button
          type="danger"
          class="el-icon-delete"
          @click="deleteGroup(groupName)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form } from 'element-ui'

interface GroupForm {
  group: string
}

@Component({
  components: {}
})
export default class GroupsView extends Vue {
  private form: GroupForm = { group: '' }

  private get groupNames (): string[] {
    return this.$store.getters.groupNames
  }

  private addGroup () {
    (this.$refs.groupRef as Form).validate((valid) => {
      if (valid) {
        if (this.groupNames.some(g => g === this.form.group)) {
          this.$message({
            message: 'Эта команда уже зарегистрирована',
            type: 'error'
          })
          return
        }
        this.$store.commit('addGroup', this.form.group)
      }
    })
  }

  private deleteGroup (groupName: string) {
    this.$store.commit('deleteGroup', groupName)
  }
}
</script>

<style lang="scss" scoped>
.el-icon-close {
  color: red;
  margin-left: 10px;
}

.group {
  margin: 10px;
  font-size: 30px;
  display: grid;
  grid-template-columns: 450px auto;
  text-align: left;
  place-content: center;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
