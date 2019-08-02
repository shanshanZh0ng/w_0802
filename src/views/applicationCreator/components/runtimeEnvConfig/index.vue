<template>
  <div class="env-main">
    <div class="margBot15 pad_t10">
      <i class="el-icon-s-management baseBlue"></i>
      <span>运行环境设置</span>
      <el-tooltip class="item" effect="dark" content="提示文字" placement="right">
        <i class="el-icon-question icon-q"></i>
      </el-tooltip>
    </div>
    <el-card class="box-card">
      <div class="title">
        <el-button
          size="small"
          @click="addTab(editableTabsValue)"
        >
          添加运行环境
        </el-button>
      </div>
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
          :key="tab.name"
          v-for="(tab, index) in editableTabs"
          :label="`${appName}${tab.name}`"
          :name="tab.name"
        >
          <Settings @setting-change="(val) => settingChange(val, tab)" ref="settings"></Settings>
          <Storage :nameIndex="index+1" v-show="tab.isStorageShow" ref="storage" @save-storage-config="(val) => storageSave(val, tab)"></Storage>
          <DataBase :nameIndex="index+1"  v-show="tab.isDatabaseShow" ref="database" @save-database-config="(val) => databaseSave(val, tab)"></DataBase>
          <Environment :nameIndex="index+1" ref="environment" @save-environment-config="(val) => environmentSave(val, tab)"></Environment>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import Settings from './Settings'
import DataBase from './Database'
import Storage from './Storage'
import Environment from './Environment'

export default {
  name: 'RuntimeEnv',
  data () {
    return {
      editableTabsValue: '1',
      editableTabs: [{
        title: '应用名1',
        name: '1',
        isStorageShow: false,
        isDatabaseShow: false,
        form: {
          storage: [],
          database: [],
          environment: {}
        }
      }],
      tabIndex: 1
    }
  },
  components: {
    Settings,
    DataBase,
    Storage,
    Environment
  },
  computed: {
    appName () {
      return this.$store.state.application.name
    }
  },
  methods: {
    getFormValue () {
      // console.log(this.$refs)
    },

    storageSave (val, tab) {
      tab.form.storage = val
    },

    databaseSave (val, tab) {
      tab.form.database = val
    },

    environmentSave (val, tab) {
      tab.form.environment = val
    },

    settingChange (val, tab) {
      tab.isStorageShow = val.storage
      tab.isDatabaseShow = val.dataBase
    },

    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: `${this.appName}${newTabName}`,
        name: newTabName,
        isStorageShow: false,
        isDatabaseShow: false,
        form: {
          storage: [],
          database: [],
          environment: {}
        }
      })
      this.editableTabsValue = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style scoped>
</style>
