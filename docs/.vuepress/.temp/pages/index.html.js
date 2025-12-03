import comp from "D:/002-zhy-git/front-end-interview-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"forceDark\":true,\"effect\":\"tint-plate\",\"hero\":{\"name\":\"Front-end Interview\",\"tagline\":\"Front-end Interview Questions\",\"text\":\"Prepare for your front-end interview with these questions.\",\"actions\":[{\"theme\":\"brand\",\"text\":\"简介\",\"link\":\"/about/introduction/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/zhenghaoyang24/front-end-interview-docs\"}]}}]},\"readingTime\":{\"minutes\":0.17,\"words\":52},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
