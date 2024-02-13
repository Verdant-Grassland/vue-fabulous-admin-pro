import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入windicss
import '@/plugins/unocss'
// 引入全局的svg图标
import '@/plugins/svgIcon'
// 引入ELement-Plus
import { useElementPlus } from '@/plugins/elementPlus'
import elementplus from '@/plugins/elementPlus'
// 引入状态管理
import { setupStore } from '@/store'

const app = createApp(App)

app
  .use(router)
  .use(useElementPlus)
  .use(elementplus)
  .use(setupStore)
app.mount('#app')
