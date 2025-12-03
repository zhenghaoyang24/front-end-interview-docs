/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  {
    text: "首页",
    link: "/",
  },
  {
    text: "关于项目",
    link: "/about/introduction/",
  },
  {
    text: "前端基础",
    items: [
      { text: "HTML", link: "/basic/html/" },
      { text: "JavaScript", link: "/basic/javascript/" },
      { text: "CSS", link: "/basic/css/" },
    ],
  },
  {
    text: "框架生态",
    items: [
      { text: "Vue.js", link: "/framework/vue/" },
      { text: "React.js", link: "/framework/react/" },
    ],
  },
]);
