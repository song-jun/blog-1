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
          title: "前端", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "/笔记/技术/前端/",
            "/笔记/技术/前端/性能优化/cdn/部署免费cdn"
          ]
        },
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
            "/笔记/技术/其它/markdown/vuepress教程",
            "/笔记/技术/其它/markdown/部署免费图床"
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
    ["vuepress-plugin-code-copy", true],

    // 评论插件
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "cxPSbJA9SE1uXWt0ywBRl0Cr-gzGzoHsz",
          appKey: "jKPdKyf3rUlfcVV03gPyBSd1",
          path: "<%- frontmatter.to.path %>"
        }
      }
    ]
  ],

  //服务访问路径. 若将服务发布到github pages, 且使用github域名访问, 则必须要配置base, 如base: "/blog/"
  base: "/",

  head: [
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?44212d6ce872df50b804d94b24889284";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ],

    // 添加cnzz统计
    [
      "script",
      {
        src: "https://v1.cnzz.com/z_stat.php?id=1278957718&web_id=1278957718"
      }
    ],

    //添加谷歌统计
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-168383599-1",
        async: true
      },
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-168383599-1');
      `
    ]
  ]
};
