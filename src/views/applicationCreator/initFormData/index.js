// 存储初始化数据
export const storageSchema = {
  name: '',
  mountName: '',
  resouceQuota: 0,
  max: 20,
  marks: {
    0: '存储',
    20: '20G'
  },
  sliderUnit: 'G',
  accessAttributes: '1',
  options: [
    {
      value: '选项1',
      label: '1'
    },
    {
      value: '选项2',
      label: '2'
    }
  ],
  optionValue: '',
  isDisabled: true,
  isExpand: true,
  isChecked: false
}

// 数据库初始化数据
export const databaseSchema = {
  name: '',
  userName: '',
  password: '',
  sliderData: [
    { max: 20, defaultNum: 0, unit: '核', name: 'CPU' },
    { max: 20, defaultNum: 0, unit: 'G', name: '内存' },
    { max: 20, defaultNum: 0, unit: 'G', name: '存储' }
  ],
  option: {
    types: [
      {
        value: '选项1',
        label: '1'
      },
      {
        value: '选项2',
        label: '2'
      }
    ],
    versions: [
      {
        value: '选项1',
        label: '1'
      },
      {
        value: '选项2',
        label: '2'
      }
    ]
  },
  typeOption: '',
  versionsOption: '',
  isDisabled: true,
  isExpand: true,
  isChecked: false
}

// 环境设置模板/镜像tab切换数据
export const tabData = {
  runningTab: {
    name: 'runningTab',
    label: '公共模板',
    server: 'tomcat',
    version: '版本号1.0',
    resource: '1核2G',
    domain: '',
    versions: {},
    resources: {},
    domains: {},
    tabData: [
      {
        server: 'tomcat',
        versions: [{label: '版本号1.0', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 1
      },
      {
        server: 'apache',
        versions: [{label: '版本号1.0.1', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G2', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 2
      },
      {
        server: 'golang',
        versions: [{label: '版本号1.2', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G3', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 3
      },
      {
        server: 'nginx',
        versions: [{label: '版本号1.4', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G4', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 4
      },
      {
        server: 'node',
        versions: [{label: '版本号1.5', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G5', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 5
      },
      {
        server: 'python',
        versions: [{label: '版本号1.6', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G6', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 6
      },
      {
        server: 'rudy',
        versions: [{label: '版本号1.7', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G7', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 7
      },
      {
        server: 'dotnet',
        versions: [{label: '版本号1.8', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G8', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 8
      }
    ]
  },
  mirrorTab: {
    name: 'mirrorTab',
    label: '我的镜像',
    server: 'tomcat',
    version: 'm版本号1.0',
    resource: 'm1核2G',
    domain: '',
    versions: {},
    resources: {},
    domains: {},
    tabData: [
      {
        server: 'tomcat',
        versions: [{label: 'm版本号1.0', id: 1}, {label: 'm版本号2', id: 2}],
        resources: [{label: 'm1核2G', id: 1}, {label: 'm2核4G', id: 2}, {label: 'm4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 1
      },
      {
        server: 'apache',
        versions: [{label: '版本号1.0.1', id: 1}, {label: '版本号2', id: 2}],
        resources: [{label: '1核2G2', id: 1}, {label: '2核4G', id: 2}, {label: '4核8G', id: 3}],
        domains: {first: 'inatance.paas.casicloud.com', last: '27017'},
        id: 2
      }
    ]
  }
}
