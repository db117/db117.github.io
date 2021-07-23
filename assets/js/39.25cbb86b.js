(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{404:function(t,n,e){"use strict";e.r(n);var a=e(27),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/60f69a560e3e74596bab3b71"}}),t._v(" "),e("h3",{attrs:{id:"执行启动类的mian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行启动类的mian"}},[t._v("#")]),t._v(" 执行启动类的mian")]),t._v(" "),e("blockquote",[e("p",[t._v("解压后的目录结构")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("├── BOOT-INF\n│   ├── classes               # 项目编译的class文件,已经配置文件\n│   └── lib                   # 项目依赖的jar包\n├── META-INF\n│   └── MANIFEST.MF           # jar描述文件\n└── org\n    └── springframework\n        └── boot\n            └── loader        # org.springframework.boot.loader包的class文件\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("blockquote",[e("p",[t._v("MANIFEST.MF文件主要信息")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Main-Class:"),e("code",[t._v("org.springframework.boot.loader.JarLauncher")]),t._v("实际启动类")])]),t._v(" "),e("li",[e("p",[t._v("Start-Class:项目的启动类")])]),t._v(" "),e("li",[e("p",[t._v("Spring-Boot-Classes:项目"),e("code",[t._v("resource")]),t._v("目录文件和class文件")])]),t._v(" "),e("li",[e("p",[t._v("Spring-Boot-Lib:依赖包")])]),t._v(" "),e("li",[e("p",[t._v("启动开始")]),t._v(" "),e("blockquote",[e("p",[t._v("运行启动类的main方法之前的一系列动作,主要自定义类加载器")])])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("org.springframework.boot.loader.JarLauncher#main\n  org.springframework.boot.loader.Launcher#launch(java.lang.String[])\n    # 创建类加载器org.springframework.boot.loader.LaunchedURLClassLoader\n    org.springframework.boot.loader.Launcher#createClassLoader(java.util.Iterator<Archive>)\n    org.springframework.boot.loader.Launcher#launch(java.lang.String[], java.lang.String, java.lang.ClassLoader)\n    \torg.springframework.boot.loader.Launcher#createMainMethodRunner\n    \t\t# 反射调用Main-Class类的main方法\n    \t\torg.springframework.boot.loader.MainMethodRunner#run\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("ul",[e("li",[e("p",[t._v("org.springframework.boot.loader.LaunchedURLClassLoader 类加载器")]),t._v(" "),e("blockquote",[e("p",[t._v("通过spring-boot的自定义加载器来加载项目的代码以及依赖jar中的代码")])])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("org.springframework.boot.loader.LaunchedURLClassLoader#loadClass\n  # 先找Spring-Boot-Classes下的类\n  org.springframework.boot.loader.LaunchedURLClassLoader#loadClassInLaunchedClassLoader\n  # 没有找到继续在Spring-Boot-Lib中找\n  org.springframework.boot.loader.LaunchedURLClassLoader#definePackageIfNecessary\n  # 都没有找到直接调用父类的\n  java.lang.ClassLoader#loadClass(java.lang.String, boolean)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h3",{attrs:{id:"启动类main"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动类main"}},[t._v("#")]),t._v(" 启动类main")]),t._v(" "),e("blockquote",[e("p",[t._v("主要启动流程都在启动类main中。")])]),t._v(" "),e("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/60f6a44be401fd09d480564a"}}),t._v(" "),e("p",[e("strong",[t._v("主要逻辑")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public ConfigurableApplicationContext run(String... args) {\n\t\tStopWatch stopWatch = new StopWatch();\n\t\tstopWatch.start();\n\t\t// 在真正的 context 初始化完成前使用的 context，主要用来处理事件\n\t\tDefaultBootstrapContext bootstrapContext = createBootstrapContext();\n\t\tConfigurableApplicationContext context = null;\n\t\tconfigureHeadlessProperty();\n\t\t// 创建监听器并开始监听\n\t\tSpringApplicationRunListeners listeners = getRunListeners(args);\n\t\t// 发布启动开始事件\n\t\tlisteners.starting(bootstrapContext, this.mainApplicationClass);\n\t\ttry {\n\t\t\tApplicationArguments applicationArguments = new DefaultApplicationArguments(args);\n\t\t\t// 加载SpringBoot配置环境\n\t\t\tConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);\n\t\t\tconfigureIgnoreBeanInfo(environment);\n\t\t\t// 打印横幅\n\t\t\tBanner printedBanner = printBanner(environment);\n\t\t\t// 根据项目类型创建不同从 contxt\n\t\t\tcontext = createApplicationContext();\n\t\t\tcontext.setApplicationStartup(this.applicationStartup);\n\t\t\t// 设置一下启动类需要的bean，发布事件\n\t\t\tprepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);\n\t\t\t// 进入spring中进行初始化\n\t\t\trefreshContext(context);\n\t\t\t// 在springBoot中为空，为其他框架扩展使用\n\t\t\tafterRefresh(context, applicationArguments);\n\t\t\tstopWatch.stop();\n\t\t\tif (this.logStartupInfo) {\n\t\t\t\tnew StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);\n\t\t\t}\n\t\t\t// 发布启动事件\n\t\t\tlisteners.started(context);\n\t\t  // 执行所有 ApplicationRunner CommandLineRunner\n\t\t\tcallRunners(context, applicationArguments);\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\thandleRunFailure(context, ex, listeners);\n\t\t\tthrow new IllegalStateException(ex);\n\t\t}\n\n\t\ttry {\n\t\t\t// 发布运行事件\n\t\t\tlisteners.running(context);\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\thandleRunFailure(context, ex, null);\n\t\t\tthrow new IllegalStateException(ex);\n\t\t}\n\t\treturn context;\n\t}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br")])]),e("p",[e("strong",[t._v("启动web容器流程")])]),t._v(" "),e("p",[t._v("当项目为 "),e("code",[t._v("web")]),t._v(" 是 "),e("code",[t._v("org.springframework.boot.SpringApplication#createApplicationContext")]),t._v("，会返回 "),e("code",[t._v("org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContex")]),t._v("。")]),t._v(" "),e("p",[t._v("其父类中 "),e("code",[t._v("org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh")]),t._v("会创建web容器")]),t._v(" "),e("p",[e("code",[t._v("onRefresh")]),t._v("会在spring容器启动是执行")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh\n    // 根据设置返回不同的容器\n    org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#createWebServer \n      // 配置 Tomcat 容器\n      org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getWebServer \n\t\t\t\t// 创建 Tomcat 容器\n\t\t\t\torg.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getTomcatWebServer \n\t\t\t\t\t\t// 启动 Tomcat 容器，并启动异常检测线程。\n\t\t\t\t\t\torg.springframework.boot.web.embedded.tomcat.TomcatWebServer#initialize\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])])}),[],!1,null,null,null);n.default=s.exports}}]);