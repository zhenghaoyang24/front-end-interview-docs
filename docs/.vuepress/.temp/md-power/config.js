import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/002-zhy-git/front-end-interview-docs/node_modules/.pnpm/vuepress-plugin-md-power@1._cd761292f40a428ed13c648957c8d936/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/002-zhy-git/front-end-interview-docs/node_modules/.pnpm/vuepress-plugin-md-power@1._cd761292f40a428ed13c648957c8d936/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/002-zhy-git/front-end-interview-docs/node_modules/.pnpm/vuepress-plugin-md-power@1._cd761292f40a428ed13c648957c8d936/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/002-zhy-git/front-end-interview-docs/node_modules/.pnpm/vuepress-plugin-md-power@1._cd761292f40a428ed13c648957c8d936/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from 'D:/002-zhy-git/front-end-interview-docs/node_modules/.pnpm/vuepress-plugin-md-power@1._cd761292f40a428ed13c648957c8d936/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import 'D:/002-zhy-git/front-end-interview-docs/node_modules/.pnpm/vuepress-plugin-md-power@1._cd761292f40a428ed13c648957c8d936/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
