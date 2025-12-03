export const collections = {"/":[{"type":"doc","dir":"about","linkPrefix":"/about","title":"关于项目"},{"type":"doc","dir":"basic","linkPrefix":"/basic","title":"前端基础"},{"type":"doc","dir":"framwork","linkPrefix":"/framwork","title":"框架生态"}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateCollections) {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ collections }) => {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  })
}
