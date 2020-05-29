module.exports = {
  title: "王世彪的博客",
  description: "王世彪的博客, 干货满满",

  markdown: {
    toc: { includeLevel: [1, 2, 3, 4] }
  },

  themeConfig: {
    // 导航栏
    nav: [
      { text: "前端", link: "/front/" },
      { text: "后台", link: "/back/" },
      { text: "运维", link: "/ops/" }
    ],

    // 侧边栏,注意, h1标题不会生成在侧边栏
    sidebar: "auto",
    sidebarDepth: 2,

    // 文章底部显示更新时间
    lastUpdated: "上次更新"
  },

  plugins: [
    [
      /*****************start 自定义"文章底部更新时间"的显示格式 ************/
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD hh:mm:ss");
        }
      }
      /*****************end 自定义lastUpdated的显示格式 ************/
    ]
  ]
};
