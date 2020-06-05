module.exports = {
  // 使用主题vuepress-theme-vdoing-doc
  theme: "vdoing",

  title: "王世彪的博客",
  description: "王世彪的博客, 干货满满",

  markdown: {
    toc: { includeLevel: [1, 2, 3, 4] }
  },

  themeConfig: {
    // 导航栏
    nav: [
      {
        text: "前端",
        link: "/front/",
        items: [{ text: "cdn", link: "/free-cdn.html" }]
      },
      {
        text: "后台",
        link: "/back/",
        items: [
          { text: "redis", link: "/install-redis-cluster.html" },
          { text: "php", link: "/install-php7.html" },
          { text: "python", link: "/install-python3.html" },
          { text: "tomcat", link: "/tomcat-jmx.html" },
          { text: "elk", link: "/install-elk.html" }
        ]
      },
      {
        text: "其它",
        link: "/other/",
        items: [
          { text: "markdown", link: "/markdown-usage.html" },
          { text: "vuepress", link: "/vuepress-usage.html" },
          { text: "面试", link: "/java-interview.html" }
        ]
      },
      {
        text: "赞一个",
        link: "/appreciate.html"
      },
      {
        text: "申请友链",
        link: "/friendlink.html"
      },
      {
        text: "联系作者",
        link: "/contact-author.html"
      }
    ],

    // vdoing主题的特有配置, 实现功能:自动生成结构化侧边栏, 注意最多支持3级目录,且文件名前需要指定序号
    sidebar: {
      mode: "structuring",
      collapsable: true
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
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
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
