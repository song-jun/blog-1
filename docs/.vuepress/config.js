module.exports = {
  title: "王世彪的博客",
  description: "王世彪的博客, 干货满满",

  markdown: {
    toc: { includeLevel: [1, 2, 3, 4] }
  },

  themeConfig: {
    nav: [
      { text: "前端", link: "/front/" },
      { text: "后台", link: "/back/" },
      { text: "运维", link: "/ops/" }
    ]
  }
};
