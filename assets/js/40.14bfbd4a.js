(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{413:function(n,t,e){"use strict";e.r(t);var a=e(28),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/60f69a560e3e74596bab3b71"}}),n._v(" "),e("h3",{attrs:{id:"执行启动类的mian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行启动类的mian"}},[n._v("#")]),n._v(" 执行启动类的mian")]),n._v(" "),e("blockquote",[e("p",[n._v("解压后的目录结构")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("├── BOOT-INF\n│   ├── classes               # 项目编译的class文件,已经配置文件\n│   └── lib                   # 项目依赖的jar包\n├── META-INF\n│   └── MANIFEST.MF           # jar描述文件\n└── org\n    └── springframework\n        └── boot\n            └── loader        # org.springframework.boot.loader包的class文件\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br")])]),e("blockquote",[e("p",[n._v("MANIFEST.MF文件主要信息")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("Main-Class:"),e("code",[n._v("org.springframework.boot.loader.JarLauncher")]),n._v("实际启动类")])]),n._v(" "),e("li",[e("p",[n._v("Start-Class:项目的启动类")])]),n._v(" "),e("li",[e("p",[n._v("Spring-Boot-Classes:项目"),e("code",[n._v("resource")]),n._v("目录文件和class文件")])]),n._v(" "),e("li",[e("p",[n._v("Spring-Boot-Lib:依赖包")])]),n._v(" "),e("li",[e("p",[n._v("启动开始")]),n._v(" "),e("blockquote",[e("p",[n._v("运行启动类的main方法之前的一系列动作,主要自定义类加载器")])])])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("org.springframework.boot.loader.JarLauncher#main\n  org.springframework.boot.loader.Launcher#launch(java.lang.String[])\n    # 创建类加载器org.springframework.boot.loader.LaunchedURLClassLoader\n    org.springframework.boot.loader.Launcher#createClassLoader(java.util.Iterator<Archive>)\n    org.springframework.boot.loader.Launcher#launch(java.lang.String[], java.lang.String, java.lang.ClassLoader)\n    \torg.springframework.boot.loader.Launcher#createMainMethodRunner\n    \t\t# 反射调用Main-Class类的main方法\n    \t\torg.springframework.boot.loader.MainMethodRunner#run\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])]),e("ul",[e("li",[e("p",[n._v("org.springframework.boot.loader.LaunchedURLClassLoader 类加载器")]),n._v(" "),e("blockquote",[e("p",[n._v("通过spring-boot的自定义加载器来加载项目的代码以及依赖jar中的代码")])])])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("org.springframework.boot.loader.LaunchedURLClassLoader#loadClass\n  # 先找Spring-Boot-Classes下的类\n  org.springframework.boot.loader.LaunchedURLClassLoader#loadClassInLaunchedClassLoader\n  # 没有找到继续在Spring-Boot-Lib中找\n  org.springframework.boot.loader.LaunchedURLClassLoader#definePackageIfNecessary\n  # 都没有找到直接调用父类的\n  java.lang.ClassLoader#loadClass(java.lang.String, boolean)\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("h3",{attrs:{id:"启动类main"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动类main"}},[n._v("#")]),n._v(" 启动类main")]),n._v(" "),e("blockquote",[e("p",[n._v("主要启动流程都在启动类main中。")])]),n._v(" "),e("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/60f6a44be401fd09d480564a"}}),n._v(" "),e("p",[e("strong",[n._v("run")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public ConfigurableApplicationContext run(String... args) {\n\t\t// 用来记录当前springboot启动耗时\n\t\tStopWatch stopWatch = new StopWatch();\n\t\t// 就是记录了启动开始时间\n\t\tstopWatch.start();\n\t\t// 在真正的 context 初始化完成前使用的 context，主要用来处理事件\n\t\tDefaultBootstrapContext bootstrapContext = createBootstrapContext();\n\t\tConfigurableApplicationContext context = null;\n\t\t// 开启了Headless模式：\n\t\tconfigureHeadlessProperty();\n\t\t// 创建监听器并开始监听\n\t\tSpringApplicationRunListeners listeners = getRunListeners(args);\n\t\t// 发布启动开始事件\n\t\tlisteners.starting(bootstrapContext, this.mainApplicationClass);\n\t\ttry {\n\t\t\t// 根据命令行参数 实例化一个ApplicationArguments\n\t\t\tApplicationArguments applicationArguments = new DefaultApplicationArguments(args);\n\t\t\t// 预初始化环境： 读取环境变量，读取配置文件信息（基于监听器）\n\t\t\tConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);\n\t\t\t// 忽略beaninfo的bean\n\t\t\tconfigureIgnoreBeanInfo(environment);\n\t\t\t// 打印横幅\n\t\t\tBanner printedBanner = printBanner(environment);\n\t\t\t// 根据项目类型创建不同从 contxt\n\t\t\tcontext = createApplicationContext();\n\t\t\tcontext.setApplicationStartup(this.applicationStartup);\n\t\t\t// 设置一下启动类需要的bean，发布事件\n\t\t\tprepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);\n\t\t\t// 进入spring中进行初始化\n\t\t\trefreshContext(context);\n\t\t\t// 在springBoot中为空，为其他框架扩展使用\n\t\t\tafterRefresh(context, applicationArguments);\n\t\t\tstopWatch.stop();\n\t\t\tif (this.logStartupInfo) {\n\t\t\t\tnew StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);\n\t\t\t}\n\t\t\t// 发布启动事件\n\t\t\tlisteners.started(context);\n\t\t  // 执行所有 ApplicationRunner CommandLineRunner\n\t\t\tcallRunners(context, applicationArguments);\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\thandleRunFailure(context, ex, listeners);\n\t\t\tthrow new IllegalStateException(ex);\n\t\t}\n\n\t\ttry {\n\t\t\t// 发布运行事件\n\t\t\tlisteners.running(context);\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\thandleRunFailure(context, ex, null);\n\t\t\tthrow new IllegalStateException(ex);\n\t\t}\n\t\treturn context;\n\t}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br")])]),e("p",[e("strong",[n._v("prepareEnvironment")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("private ConfigurableEnvironment prepareEnvironment(SpringApplicationRunListeners listeners,\nApplicationArguments applicationArguments) {\n    // 根据webApplicationType 创建Environment 创建就会读取： java环境变量和系统环境变量\n    ConfigurableEnvironment environment = getOrCreateEnvironment();\n    // 将命令行参数读取环境变量中\n    configureEnvironment(environment, applicationArguments.getSourceArgs());\n    // 将@PropertieSource的配置信息 放在第一位， 因为读取配置文件@PropertieSource优先级是最低的\n    ConfigurationPropertySources.attach(environment);\n    // 发布了ApplicationEnvironmentPreparedEvent 的监听器 读取了全局配置文件\n    listeners.environmentPrepared(environment);\n    // 将所有spring.main 开头的配置信息绑定SpringApplication\n    bindToSpringApplication(environment);\n    if (!this.isCustomEnvironment) {\n    environment = new EnvironmentConverter(getClassLoader()).convertEnvironmentIfNecessary(environment, deduceEnvironmentClass());\n    }\n    //更新PropertySources\n    ConfigurationPropertySources.attach(environment);\n    return environment;\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("p",[e("strong",[n._v("prepareContext")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('private void prepareContext(ConfigurableApplicationContext context, ConfigurableEnvironment environment,\nSpringApplicationRunListeners listeners, ApplicationArguments applicationArguments, Banner printedBanner) {\n      context.setEnvironment(environment);\n      postProcessApplicationContext(context);\n      // 拿到之前读取到所有ApplicationContextInitializer的组件， 循环调用initialize方法\n      applyInitializers(context);\n      // 发布了ApplicationContextInitializedEvent\n      listeners.contextPrepared(context);\n      if (this.logStartupInfo) {\n      logStartupInfo(context.getParent() == null);\n      logStartupProfileInfo(context);\n      }\n      // 获取当前spring上下文beanFactory (负责创建bean)\n      ConfigurableListableBeanFactory beanFactory = context.getBeanFactory();\n      beanFactory.registerSingleton("springApplicationArguments", applicationArguments);\n      if (printedBanner != null) {\n      beanFactory.registerSingleton("springBootBanner", printedBanner);\n      }\n      // 在Spring下 如果出现2个重名的bean, 则后读取到的会覆盖前面\n      // 在SpringBoot 在这里设置了不允许覆盖， 当出现2个重名的bean 会抛出异常\n      if (beanFactory instanceof DefaultListableBeanFactory) {\n      ((DefaultListableBeanFactory) beanFactory)\n      .setAllowBeanDefinitionOverriding(this.allowBeanDefinitionOverriding);\n      }\n      // 设置当前spring容器是不是要将所有的bean设置为懒加载\n      if (this.lazyInitialization) {\n      context.addBeanFactoryPostProcessor(new LazyInitializationBeanFactoryPostProcessor());\n      }\n      // Load the sources\n      Set<Object> sources = getAllSources();\n      Assert.notEmpty(sources, "Sources must not be empty");\n      // 读取主启动类 （因为后续要根据配置类解析配置的所有bean)\n      load(context, sources.toArray(new Object[0]));\n      //4.读取完配置类后发送ApplicationPreparedEvent。\n      listeners.contextLoaded(context);\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br")])]),e("p",[e("strong",[n._v("启动web容器流程")])]),n._v(" "),e("p",[n._v("当项目为 "),e("code",[n._v("web")]),n._v(" 是 "),e("code",[n._v("org.springframework.boot.SpringApplication#createApplicationContext")]),n._v("，会返回 "),e("code",[n._v("org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContex")]),n._v("。")]),n._v(" "),e("p",[n._v("其父类中 "),e("code",[n._v("org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh")]),n._v("会创建web容器")]),n._v(" "),e("p",[e("code",[n._v("onRefresh")]),n._v("会在spring容器启动是执行")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh\n    // 根据设置返回不同的容器\n    org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#createWebServer \n      // 配置 Tomcat 容器\n      org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getWebServer \n\t\t\t\t// 创建 Tomcat 容器\n\t\t\t\torg.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getTomcatWebServer \n\t\t\t\t\t\t// 启动 Tomcat 容器，并启动异常检测线程。\n\t\t\t\t\t\torg.springframework.boot.web.embedded.tomcat.TomcatWebServer#initialize\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br")])]),e("h3",{attrs:{id:"自动装配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动装配"}},[n._v("#")]),n._v(" 自动装配")]),n._v(" "),e("blockquote",[e("p",[n._v("默认大于配置。springboot核心功能。")])]),n._v(" "),e("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/610120817d9c083494ed059a"}}),n._v(" "),e("p",[e("strong",[n._v("EnableAutoConfiguration")])]),n._v(" "),e("p",[n._v("核心注解，开启自动装配。通过"),e("code",[n._v("org.springframework.context.annotation.Import")]),n._v("注入 "),e("code",[n._v("org.springframework.boot.autoconfigure.AutoConfigurationImportSelector")]),n._v("，该类实现了 "),e("code",[n._v("DeferredImportSelectorSpring")])]),n._v(" "),e("p",[n._v("会在spring解析 "),e("code",[n._v("@import")]),n._v("是调用 "),e("code",[n._v("getAutoConfigurationEntry")])]),n._v(" "),e("p",[e("strong",[n._v("AutoConfigurationImportSelector")])]),n._v(" "),e("p",[n._v("通过 "),e("code",[n._v("org.springframework.boot.autoconfigure.AutoConfigurationImportSelector#getCandidateConfigurations")])]),n._v(" "),e("p",[n._v("获取 "),e("code",[n._v("META-INF/spring.factories")]),n._v("中定义的类。改接口会在spring初始化是进行装载。")]),n._v(" "),e("p",[e("strong",[n._v("关闭")])]),n._v(" "),e("p",[n._v("通知设置 "),e("code",[n._v("spring.boot.enableautoconfiguration=true")]),n._v("来关闭自动配置")]),n._v(" "),e("h3",{attrs:{id:"注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[n._v("#")]),n._v(" 注解")]),n._v(" "),e("p",[e("strong",[n._v("@Configuration(proxyBeanMethods = false)")])]),n._v(" "),e("p",[n._v("标记了@Configuration Spring底层会给配置创建cglib动态代理。 作用：就是防止每次调用本类的Bean方法而重新创建对 象，Bean是默认单例的")]),n._v(" "),e("p",[e("strong",[n._v("@Conditional派生注解（Spring注解版原生的@Conditional作用）")])]),n._v(" "),e("ul",[e("li",[n._v("@ConditionalOnJava\n"),e("ul",[e("li",[n._v("系统的java版本是否符合要求")])])]),n._v(" "),e("li",[n._v("@ConditionalOnBean\n"),e("ul",[e("li",[n._v("容器中存在指定Bean")])])]),n._v(" "),e("li",[n._v("@ConditionalOnMissingBean\n"),e("ul",[e("li",[n._v("容器中不存在指定Bean")])])]),n._v(" "),e("li",[n._v("@ConditionalOnExpression\n"),e("ul",[e("li",[n._v("满足SpEL表达式指定")])])]),n._v(" "),e("li",[n._v("@ConditionalOnClass")]),n._v(" "),e("li",[n._v("系统中有指定的类")]),n._v(" "),e("li",[n._v("@ConditionalOnMissingClass")]),n._v(" "),e("li",[n._v("系统中没有指定的类")]),n._v(" "),e("li",[n._v("@ConditionalOnSingleCandidate\n"),e("ul",[e("li",[n._v("容器中只有一个指定的Bean，或者这个Bean是首选Bean")])])]),n._v(" "),e("li",[n._v("@ConditionalOnProperty\n"),e("ul",[e("li",[n._v("系统中指定的属性是否有指定的值")])])]),n._v(" "),e("li",[n._v("@ConditionalOnResource\n"),e("ul",[e("li",[n._v("类路径下是否存在指定资源文件")])])]),n._v(" "),e("li",[n._v("@ConditionalOnWebApplication\n"),e("ul",[e("li",[n._v("当前是web环境")])])]),n._v(" "),e("li",[n._v("@ConditionalOnNotWebApplication\n"),e("ul",[e("li",[n._v("当前不是web环境")])])]),n._v(" "),e("li",[n._v("@ConditionalOnJndi")]),n._v(" "),e("li",[n._v("JNDI存在指定项")]),n._v(" "),e("li",[n._v("EnableConfigurationProperties\n"),e("ul",[e("li",[n._v("将配置文件的值和对象绑定起来，并注册到ioc容器中")])])])]),n._v(" "),e("h3",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[n._v("#")]),n._v(" 事件")]),n._v(" "),e("blockquote",[e("p",[n._v("在springBoot启动中各个阶段发布不同的事件。")])]),n._v(" "),e("ol",[e("li",[e("p",[e("code",[n._v("ApplicationStartingEvent")]),n._v("在运行开始时发送，但在进行任何处理之前（侦听器和初始化程序的注册除外）发送。")])]),n._v(" "),e("li",[e("p",[n._v("在创建上下文之前，将发送"),e("code",[n._v("ApplicationEnvironmentPreparedEvent")]),n._v("。")])]),n._v(" "),e("li",[e("p",[n._v("准备ApplicationContext并调用"),e("code",[n._v("ApplicationContextInitializers")]),n._v("之后，将发送"),e("code",[n._v("ApplicationContextInitializedEvent")]),n._v("。")])]),n._v(" "),e("li",[e("p",[n._v("读取完配置类后发送"),e("code",[n._v("ApplicationPreparedEvent")]),n._v("。")])]),n._v(" "),e("li",[e("p",[n._v("在刷新上下文之后但在调用"),e("code",[n._v("ApplicationRunner")]),n._v("和"),e("code",[n._v("CommandLineRunner")]),n._v("之前，将发送"),e("code",[n._v("ApplicationStartedEvent")]),n._v("。")])]),n._v(" "),e("li",[e("p",[n._v("紧随其后发送带有LivenessState.CORRECT的"),e("code",[n._v("AvailabilityChangeEvent")]),n._v("，以指示该应用程序被视为处于活动状态。")])]),n._v(" "),e("li",[e("p",[n._v("在调用任何应用程序和命令行运行程序之后，将发送"),e("code",[n._v("ApplicationReadyEvent")]),n._v("。")])]),n._v(" "),e("li",[e("p",[n._v("紧随其后发送ReadabilityState.ACCEPTING_TRAFFIC的"),e("code",[n._v("AvailabilityChangeEvent")]),n._v("，以指示应用程序已准备就绪，可以 处理请求。")])]),n._v(" "),e("li",[e("p",[n._v("如果启动时发生异常，则发送"),e("code",[n._v("ApplicationFailedEvent")]),n._v("。")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);