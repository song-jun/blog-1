module.exports = {
  // 使用主题vuepress-theme-vdoing-doc
  theme: "vdoing",

  title: "全栈直通车-王世彪的博客",
  description:
    "全栈直通车-王世彪的博客,分享成功经验，助大家用最短的时间成为全栈软件开发工程师，java,golang,python,php,前端,后台,vue,react,app，linux,运维,docker等应有尽有",

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
        text: "运维",
        link: "/ops/",
        items: [{ text: "nginx配置https", link: "/nginx-https.html" }]
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
    lastUpdated: "上次更新",

    /***************start vdoing主题专属配置 */
    author: {
      // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
      name: "王世彪", // 必需
      link: "https://github.com/wangshibiaoFlytiger" // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar:
        "https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/shuaige.jpg",
      name: "王世彪",
      slogan: "努力做个影响他人滴人"
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:645102170@qq.com"
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/wangshibiaoFlytiger"
        }
      ]
    },
    footer: {
      // 页脚信息
      createYear: 2019, // 博客创建年份
      // 博客版权信息，支持a标签
      copyrightInfo:
        "王世彪 | MIT License <br/> <a href='http://www.beian.miit.gov.cn'>冀ICP备19016776号-1</a>"
    }
    /***************end vdoing主题专属配置 */
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
    ],

    // pwa插件
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],

    // sitemap生成插件
    [
      "sitemap",
      {
        hostname: "https://www.sofineday.com",
        // 排除无实际内容的页面
        exclude: ["/404.html"]
      }
    ],

    // robots生成插件vuepress-plugin-robots
    [
      "robots",
      {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */

        host: "https://www.sofineday.com",
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */

        sitemap: "/sitemap.xml",
        /**
         * @policies
         * Optional, by default: null
         */

        policies: [
          {
            userAgent: "*",
            disallow: [],
            allow: [
              // Optional: Allowed paths.
            ]
          }
        ]
      }
    ],

    // 配置插件vuepress-plugin-thirdparty-search, 默认主题的搜索框集成第三方搜索引擎
    [
      "thirdparty-search",
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: "在谷歌中搜索",
            frontUrl: "https://www.google.com.hk/search?q="
          },
          {
            title: "在百度中搜索", // 在搜索结果显示的文字
            frontUrl: "https://www.baidu.com/s?wd=", // 搜索链接的前面部分
            behindUrl: "" // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在360中搜索",
            frontUrl: "https://www.so.com/s?q="
          }
        ]
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
        hm.src = "https://hm.baidu.com/hm.js?12e61954006bab17a5a7dc228772c27b";
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

    /*************** start 添加谷歌统计 ***********/
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-168383599-1",
        async: true
      }
    ],
    [
      "script",
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-168383599-1');
      `
    ],
    /*************** end 添加谷歌统计 ***********/

    // 添加谷歌广告
    [
      "script",
      {
        "data-ad-client": "ca-pub-2310202030754638",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],

    /************ start pwa配置项 */
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    /************ end pwa配置项 */

    // 百度站长的验证代码, 不能删除
    ["meta", { name: "baidu-site-verification", content: "gZcjfbZtAw" }],
    // 添加百度站长的自动推送代码
    [
      "script",
      {
        src: "/assets/js/autopush-baidu.js"
      }
    ],

    //360站长的验证代码
    [
      "meta",
      {
        name: "360-site-verification",
        content: "c87794c984680283c380b401a10321af"
      }
    ],
    // 添加360站长的自动推送代码
    [
      "script",
      {
        src: "/assets/js/autopush-360.js"
      }
    ]
  ]
};
