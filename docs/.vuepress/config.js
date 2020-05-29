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
    sidebarDepth: 2
  }
};
