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
