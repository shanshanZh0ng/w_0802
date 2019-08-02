<template>
  <div class="application">
    <BaseConfig ref="baseConfig"></BaseConfig>
    <RuntimeEnv ref="runtime"></RuntimeEnv>
    <el-row class="mainBtnD">
      <el-button>取消</el-button>
      <el-button type="primary" @click="create">创建</el-button>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import BaseConfig from './components/baseConfig/BaseConfig'
import RuntimeEnv from './components/runtimeEnvConfig/index'

export default {
  name: 'ApplicationCreate',
  data () {
    return {
    }
  },
  components: {
    BaseConfig,
    RuntimeEnv
  },
  methods: {
    create () {
      console.log('基础设置数据：', this.$refs.baseConfig.ruleForm, '运行环境设置数据：', this.$refs.runtime._data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.application {
  padding-bottom: 60px;
  margin: 20px;
}
</style>
