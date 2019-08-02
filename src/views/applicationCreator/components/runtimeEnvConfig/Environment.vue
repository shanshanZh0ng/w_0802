<template>
    <div class="environment">
      <div class="margBot15 pad_t10">
        <i class="el-icon-s-management baseBlue"></i>
        <span>{{title}}</span>
      </div>
        <Card :cardName="cardName" :handleBtn="handleBtn" :nameIndex="$attrs.nameIndex">
          <el-tabs v-model="name" class="inlineBlock left" style="width:100%;">
            <el-tab-pane v-for="tab in tabs" :key="tab.id" :label="tab.label" :name="tab.name">
              <el-form label-width="140px" class="demo-ruleForm" :serverData="serverData">
                <el-form-item label="选择模板/镜像" required>
                  <el-radio-group v-model="serverData.server">
                    <el-radio-button :label="server.server" v-for="server in serverData.tabData" :key="server.server">{{server.server}}</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="选择版本" required>
                  <el-radio-group v-model="serverData.version">
                    <el-radio-button :label="version.id" v-for="version in serverData.versions" :key="version.id">{{version.label}}</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="资源配置" required>
                  <el-radio-group v-model="serverData.resource" class="left">
                    <el-radio-button :label="resource.id" class="margin-r20 noradius border" v-for="resource in serverData.resources" :key="resource.id">{{resource.label}}</el-radio-button>
                  </el-radio-group>
                  <el-tooltip class="item" effect="dark" content="提示文字" placement="right">
                    <i class="el-icon-question icon-q"></i>
                  </el-tooltip>
                </el-form-item>
                <el-form-item label="子域名" required>
                  <el-row class="left" style="width:80%">
                    <el-col :span="18">
                      <div class="center">
                        <el-input placeholder="请输入内容" v-model="serverData.domain">
                          <template slot="prepend">Http://</template>
                          <template slot="append">{{serverData.domains.first}}</template>
                        </el-input>
                      </div>
                    </el-col>
                    <el-col class="center" :span="4">
                      <div class="bg-purple-light">
                        <div class="lastInput center">{{serverData.domains.last}}</div>
                      </div>
                    </el-col>
                    <el-col style="width: 30px;">
                      <el-tooltip effect="dark" content="提示文字" placement="right">
                        <i class="el-icon-question icon-q"></i>
                      </el-tooltip>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </Card>
    </div>
</template>

<script>
import Card from '@/components/card'
import {tabData} from '@/views/applicationCreator/initFormData'
// eslint-disable-next-line
import {cloneDeep} from 'lodash'

export default {
  props: {
    initialEnvironment: {
      type: Object,
      default: () => cloneDeep(tabData)
    }
  },
  name: 'Environment',
  data () {
    return {
      title: '环境设置',
      cardName: 'environment',
      handleBtn: false,
      name: 'runningTab',
      serverData: {
        name: '',
        label: '',
        server: '',
        version: '',
        resource: '',
        domain: '',
        versions: {},
        resources: {},
        domains: {},
        tabData: []
      },
      // initialEnvironment: cloneDeep(tabData),
      initialTab: [],
      tabs: [{name: 'runningTab', label: '公共模板', id: 1}, {name: 'mirrorTab', label: '我的镜像', id: 2}],
      environmentEmitValue: {}
    }
  },
  mounted () {
    this.setEnvDefaultVal(`${this.name}`)
  },
  methods: {
    setEnvDefaultVal (name) {
      this.serverData = this.initialEnvironment[name]
      const tabConten = this.serverData.tabData[0]
      this.serverData.server = tabConten.server
      this.serverData.versions = tabConten.versions
      this.serverData.resources = tabConten.resources
      this.serverData.domains = tabConten.domains
      // 设置版本和资源默认值
      this.serverData.version = tabConten.versions[0].id
      this.serverData.resource = tabConten.resources[0].id
    },

    // 过滤传给外面的表单值，只传外面需要的
    filterEmitValue (datas) {
      this.environmentEmitValue = {
        name: datas.name,
        server: datas.server,
        version: datas.version,
        resource: datas.resource,
        domain: datas.domain
      }

      this.$emit('save-environment-config', this.environmentEmitValue)
    }
  },

  components: {
    Card
  },
  watch: {
    'name': function (val) {
      this.serverData = this.initialEnvironment[val]
      this.setEnvDefaultVal(val)
    },
    'serverData.server': function (val) {
      const tabData = this.serverData.tabData
      tabData.forEach((value, index) => {
        if (value.server === val) {
          this.serverData.version = value.versions[0].id
          this.serverData.resource = value.resources[0].id
        }
      })

      // this.$emit('save-environment-config', this.serverData)
      this.filterEmitValue(this.serverData)
    },
    'serverData.version': function (val) {
      this.serverData.version = val

      // this.$emit('save-environment-config', this.serverData)
      this.filterEmitValue(this.serverData)
    },
    'serverData.resource': function (val) {
      this.serverData.resource = val

      // this.$emit('save-environment-config', this.serverData)
      this.filterEmitValue(this.serverData)
    },

    'serverData.domain': function (val) {
      // this.$emit('save-environment-config', this.serverData)
      this.filterEmitValue(this.serverData)
    }
  }
}
</script>

<style scoped>
.lastInput {
  border: 1px solid #ccc;
  border-left:none;
  color:#909399;
  height:38px;
  line-height:38px;
  background:#F5F7FA;
}
</style>
