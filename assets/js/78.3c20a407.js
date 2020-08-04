(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{573:function(t,e,n){"use strict";n.r(e);var a=n(26),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"mybatis-plus-基础教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus-基础教程"}},[t._v("#")]),t._v(" mybatis-plus 基础教程")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("使用 java 开发项目，orm 框架就选 mybatis-plus，其它的都是小弟。")])]),t._v(" "),n("p",[t._v("mybatis-plus 是基于 mybatis 开发而来，在 MyBatis 的基础上只做增强不做改变。"),n("br"),t._v("\n使用 mybatis-plus 可以大大提高开发效率，运用自带的代码生成工具，可以几秒钟实现从数据库生成基础的 entity、dao、service、controller 代码.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mp.baomidou.com/guide/#%E7%89%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1),t._v("的内容较多，本教程删繁就简，带您立刻入门！")]),t._v(" "),n("h2",{attrs:{id:"基于-gradle-创建-springboot-项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-gradle-创建-springboot-项目"}},[t._v("#")]),t._v(" 基于 gradle 创建 springboot 项目")]),t._v(" "),n("p",[t._v("使用 idea 自带的 Spring Initializr 初始化 springboot 项目."),n("br"),t._v(" "),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangshibiaoFlytiger/blog_picBed1/images/20200702085651.png",alt:"20200702085651.png"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("若初始化后的项目编译失败, 解决方法详见"),n("RouterLink",{attrs:{to:"/gradle-common-issues.html#初始化后的项目编译失败"}},[t._v("初始化后的项目编译失败")])],1)]),t._v(" "),n("h2",{attrs:{id:"集成-mybatis-plus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成-mybatis-plus"}},[t._v("#")]),t._v(" 集成 mybatis-plus")]),t._v(" "),n("h3",{attrs:{id:"添加依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    /****************** start mybatis-plus *****************/\n    compile group: 'com.baomidou', name: 'mybatis-plus-boot-starter', version: '3.3.2'\n//    反向代码生成器\n    compile 'com.baomidou:mybatis-plus-generator:3.3.2'\n//    freemarker模板引擎,mybatis-plus的代码生成工具可以使用该模板引擎生成代码\n    compile 'org.freemarker:freemarker:2.3.30'\n    /****************** end mybatis-plus *****************/\n")])])]),n("h3",{attrs:{id:"主函数的类上添加注解-mapperscan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主函数的类上添加注解-mapperscan"}},[t._v("#")]),t._v(" 主函数的类上添加注解 MapperScan")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('@SpringBootApplication\n@MapperScan("com.ruiboyun.facehr.**.mapper")\npublic class FacehrApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(FacehrApplication.class, args);\n    }\n\n}\n')])])]),n("h3",{attrs:{id:"使用代码生成器逆向工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用代码生成器逆向工程"}},[t._v("#")]),t._v(" 使用代码生成器逆向工程")]),t._v(" "),n("p",[t._v("通过代码生成器，从数据库反向生成 java 代码。")]),t._v(" "),n("ul",[n("li",[t._v("创建一个工具类 MybatisAutoGenerator"),n("br"),t._v('\n只需要修改类中的"作者信息","包名","数据库信息", 即可在任何项目中使用')])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package com.ruiboyun.facehr.util;\n\nimport com.baomidou.mybatisplus.annotation.IdType;\nimport com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;\nimport com.baomidou.mybatisplus.core.toolkit.StringPool;\nimport com.baomidou.mybatisplus.core.toolkit.StringUtils;\nimport com.baomidou.mybatisplus.generator.AutoGenerator;\nimport com.baomidou.mybatisplus.generator.InjectionConfig;\nimport com.baomidou.mybatisplus.generator.config.*;\nimport com.baomidou.mybatisplus.generator.config.po.TableInfo;\nimport com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;\nimport com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Scanner;\n\n/**\n * mybatis-plus的代码生成器\n * 只需要修改类中的"作者信息","包名","数据库信息", 即可在任何项目中使用\n * 使用方法: 执行main函数即可\n */\npublic class MybatisAutoGenerator {\n    /**\n     * <p>\n     * 读取控制台内容\n     * </p>\n     */\n    public static String scanner(String tip) {\n        Scanner scanner = new Scanner(System.in);\n        StringBuilder help = new StringBuilder();\n        help.append("请输入" + tip + "：");\n        System.out.println(help.toString());\n        if (scanner.hasNext()) {\n            String ipt = scanner.next();\n            if (StringUtils.isNotEmpty(ipt)) {\n                return ipt;\n            }\n        }\n        throw new MybatisPlusException("请输入正确的" + tip + "！");\n    }\n\n    public static void main(String[] args) {\n        // 代码生成器\n        AutoGenerator mpg = new AutoGenerator();\n\n        // 全局配置\n        GlobalConfig gc = new GlobalConfig();\n        String projectPath = System.getProperty("user.dir");\n        gc.setOutputDir(projectPath + "/src/main/java");\n        gc.setAuthor("Wang Shibiao");\n        gc.setOpen(false);\n\n//        ID生成策略配置为雪花算法\n        gc.setIdType(IdType.ASSIGN_ID);\n\n        // gc.setSwagger2(true); 实体属性 Swagger2 注解\n        mpg.setGlobalConfig(gc);\n\n        // 数据源配置\n        DataSourceConfig dsc = new DataSourceConfig();\n        dsc.setUrl("jdbc:mysql://localhost:3306/facehr?useUnicode=true&useSSL=false&characterEncoding=utf8");\n        // dsc.setSchemaName("public");\n        dsc.setDriverName("com.mysql.jdbc.Driver");\n        dsc.setUsername("root");\n        dsc.setPassword("123456");\n        mpg.setDataSource(dsc);\n\n        // 包配置\n        PackageConfig pc = new PackageConfig();\n        pc.setModuleName(scanner("模块名"));\n        pc.setParent("com.ruiboyun.facehr");\n        mpg.setPackageInfo(pc);\n\n        // 自定义配置\n        InjectionConfig cfg = new InjectionConfig() {\n            @Override\n            public void initMap() {\n                // to do nothing\n            }\n        };\n\n        // 如果模板引擎是 freemarker\n        String templatePath = "/templates/mapper.xml.ftl";\n        // 如果模板引擎是 velocity\n        // String templatePath = "/templates/mapper.xml.vm";\n\n        // 自定义输出配置\n        List<FileOutConfig> focList = new ArrayList<>();\n        // 自定义配置会被优先输出\n        focList.add(new FileOutConfig(templatePath) {\n            @Override\n            public String outputFile(TableInfo tableInfo) {\n                // 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！\n                return projectPath + "/src/main/resources/mapper/" + pc.getModuleName()\n                        + "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;\n            }\n        });\n        /*\n        cfg.setFileCreate(new IFileCreate() {\n            @Override\n            public boolean isCreate(ConfigBuilder configBuilder, FileType fileType, String filePath) {\n                // 判断自定义文件夹是否需要创建\n                checkDir("调用默认方法创建的目录，自定义目录用");\n                if (fileType == FileType.MAPPER) {\n                    // 已经生成 mapper 文件判断存在，不想重新生成返回 false\n                    return !new File(filePath).exists();\n                }\n                // 允许生成模板文件\n                return true;\n            }\n        });\n        */\n        cfg.setFileOutConfigList(focList);\n        mpg.setCfg(cfg);\n\n        // 配置模板\n        TemplateConfig templateConfig = new TemplateConfig();\n\n        // 配置自定义输出模板\n        //指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别\n        // templateConfig.setEntity("templates/entity2.java");\n        // templateConfig.setService();\n        // templateConfig.setController();\n\n        templateConfig.setXml(null);\n        mpg.setTemplate(templateConfig);\n\n        // 策略配置\n        StrategyConfig strategy = new StrategyConfig();\n        strategy.setNaming(NamingStrategy.underline_to_camel);\n        strategy.setColumnNaming(NamingStrategy.underline_to_camel);\n//        strategy.setSuperEntityClass("你自己的父类实体,没有就不用设置!");\n        strategy.setEntityLombokModel(true);\n        strategy.setRestControllerStyle(true);\n        // 公共父类\n//        strategy.setSuperControllerClass("你自己的父类控制器,没有就不用设置!");\n        // 写于父类中的公共字段\n//        strategy.setSuperEntityColumns("id");\n        strategy.setInclude(scanner("表名，多个英文逗号分割").split(","));\n        strategy.setControllerMappingHyphenStyle(true);\n//        strategy.setTablePrefix(pc.getModuleName() + "_");\n        mpg.setStrategy(strategy);\n        mpg.setTemplateEngine(new FreemarkerTemplateEngine());\n        mpg.execute();\n    }\n}\n\n')])])]),n("ul",[n("li",[t._v("运行工具类的 main 函数\n根据提示进行操作即可，最终会自动生成 model、dao、service、controller 层代码。")])]),t._v(" "),n("h3",{attrs:{id:"数据库配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[t._v("#")]),t._v(" 数据库配置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#spring\nspring:\n  #数据库配置\n  datasource:\n    url: jdbc:mysql://localhost/facehr\n    username: root\n    password: 123456\n    driver-class-name: com.mysql.jdbc.Driver\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);