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
    sidebar: {
      "/笔记/技术/": [
        {
          title: "后台", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: ["/笔记/技术/后台/"]
        },
        {
          title: "运维", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "/笔记/技术/运维/",
            "/笔记/技术/运维/php/安装php7",
            "/笔记/技术/运维/python/安装python3",
            "/笔记/技术/运维/redis/安装redis集群",
            "/笔记/技术/运维/tomcat/tomcat的jmx配置",
            "/笔记/技术/运维/tomcat/tomcat的jmx配置",
            "/笔记/技术/运维/elk/安装elk"
          ]
        },
        {
          title: "其它", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "/笔记/技术/其它/",
            "/笔记/技术/其它/面试/java面试题目",
            "/笔记/技术/其它/markdown/markdown用法",
            "/笔记/技术/其它/markdown/vuepress教程"
          ]
        }
      ],
      "/笔记/工作/": [
        {
          title: "欧朋", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: ["/笔记/工作/欧朋/美图2"]
        }
      ]
    },

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
      /*****************end 自定义"文章底部更新时间"的显示格式 ************/
    ],

    // 代码块增加"拷贝"按钮
    ["vuepress-plugin-code-copy", true]
  ],

  //服务访问路径. 若将服务发布到github pages, 且使用github域名访问, 则必须要配置base, 如base: "/blog/"
  base: "/"
};
