---
title: vuepress教程
permalink: /vuepress/usage.html
---

[[toc]]

## 1. 生成目录

### 1.1 声明目录生成标记

文档正文起始处加入一行如下内容

```
[[toc]]
```

### 1.2. 修改配置

修改 markdown.toc.includeLevel 为[1, 2, 3, 5]

```
module.exports = {
  title: "王世彪的博客",
  description: "王世彪的博客, 干货满满",

  markdown: {
    toc: {
        includeLevel:[1, 2, 3, 4]
    }
  }
};
```

::: tip 注意
includeLevel 默认值为[2, 3], 所以不显示一级标题
:::

### 1.3. 重新编译

## 2. 搜索

内置搜索只会为页面的**标题、h2 、 h3 以及 tags** 构建搜索索引。 如果你需要全文搜索，你可以使用 Algolia 搜索

## 3. 代码块增加"拷贝"按钮

见https://github.com/znicholasbrown/vuepress-plugin-code-copy

## 4. 侧边栏

侧边栏是按照"本地文档的实际目录结构"进行定义,不关心文档的实际 url 访问路径

::: tip 注意
h1 标题不会生成在侧边栏
:::

可以将文档随意分组, 见官方文档的"侧边栏分组"

若想对侧边栏进行分类, 即不同类别的文档显示不同的侧边栏, 见官方文档的"多个侧边栏"

::: tip 注意
若想对侧边栏进行分类, 必须以目录结构进行分类, 即相同类别的文档的根目录是相同的
:::

## 5. 部署到 github

见https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages

### 5.1 自定义域名

#### 5.1.1 创建 cname 域名

到域名管理页面, 创建 cname 域名(如 blog.sofineday.com), 绑定到 github 域名(如 wangshibiaoflytiger.github.io)

#### 5.1.2 修改配置文件

修改 base 配置

```
base: "/"
```

## 6. 添加百度统计

### 6.1 获取百度统计代码

登录[百度统计后台](https://tongji.baidu.com)

创建站点

复制统计代码

```
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?44212d6ce872df50b804d94b24889284";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
```

### 6.2 配置百度统计代码

vi ./config.js

```
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
    ]
  ]
```

## 7. 添加 cnzz/友盟统计

### 7.1 获取 cnzz 统计代码

登录[友盟统计后台](https://www.umeng.com/)

创建站点

复制统计代码

```
https://v1.cnzz.com/z_stat.php?id=1278957718&web_id=1278957718
```

### 7.2 配置 cnzz 统计代码

vi ./config.js

```
head: [
    // 添加cnzz统计
    [
      "script",
      {
        src: "https://v1.cnzz.com/z_stat.php?id=1278957718&web_id=1278957718"
      }
    ]
  ]
```

## 8. 添加 谷歌统计

::: tip 注意
实际操作后, 发现谷歌统计中没有数据, 暂时未确定原因
:::

### 8.1 获取 谷歌 统计代码

登录[谷歌统计后台](https://analytics.google.com)

创建站点

复制统计代码

![20200603112847.png](https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200603112847.png)

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-168383599-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-168383599-1');
</script>
```

### 8.2 配置 谷歌 统计代码

vi ./config.js

```
head: [
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
```
