import{_ as e,o as a,c as t,k as n,Q as s}from"./chunks/framework.54cab62e.js";const A=JSON.parse('{"title":"spring-boot启动流程","description":"","frontmatter":{"title":"spring-boot启动流程"},"headers":[],"relativePath":"java/spring/spring-boot启动流程.md","filePath":"java/spring/spring-boot启动流程.md","lastUpdated":1697773070000}'),l={name:"java/spring/spring-boot启动流程.md"},p=n("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60f69a560e3e74596bab3b71"},null,-1),o=s(`<h3 id="执行启动类的mian" tabindex="-1">执行启动类的mian <a class="header-anchor" href="#执行启动类的mian" aria-label="Permalink to &quot;执行启动类的mian&quot;">​</a></h3><blockquote><p>解压后的目录结构</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├── BOOT-INF</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── classes               # 项目编译的class文件,已经配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── lib                   # 项目依赖的jar包</span></span>
<span class="line"><span style="color:#e1e4e8;">├── META-INF</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── MANIFEST.MF           # jar描述文件</span></span>
<span class="line"><span style="color:#e1e4e8;">└── org</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── springframework</span></span>
<span class="line"><span style="color:#e1e4e8;">        └── boot</span></span>
<span class="line"><span style="color:#e1e4e8;">            └── loader        # org.springframework.boot.loader包的class文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├── BOOT-INF</span></span>
<span class="line"><span style="color:#24292e;">│   ├── classes               # 项目编译的class文件,已经配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   └── lib                   # 项目依赖的jar包</span></span>
<span class="line"><span style="color:#24292e;">├── META-INF</span></span>
<span class="line"><span style="color:#24292e;">│   └── MANIFEST.MF           # jar描述文件</span></span>
<span class="line"><span style="color:#24292e;">└── org</span></span>
<span class="line"><span style="color:#24292e;">    └── springframework</span></span>
<span class="line"><span style="color:#24292e;">        └── boot</span></span>
<span class="line"><span style="color:#24292e;">            └── loader        # org.springframework.boot.loader包的class文件</span></span></code></pre></div><blockquote><p>MANIFEST.MF文件主要信息</p></blockquote><ul><li><p>Main-Class:<code> org.springframework.boot.loader.JarLauncher </code>实际启动类</p></li><li><p>Start-Class:项目的启动类</p></li><li><p>Spring-Boot-Classes:项目<code>resource</code>目录文件和class文件</p></li><li><p>Spring-Boot-Lib:依赖包</p></li><li><p>启动开始</p><blockquote><p>运行启动类的main方法之前的一系列动作,主要自定义类加载器</p></blockquote></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">org.springframework.boot.loader.JarLauncher#main</span></span>
<span class="line"><span style="color:#e1e4e8;">  org.springframework.boot.loader.Launcher#launch(java.lang.String[])</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 创建类加载器org.springframework.boot.loader.LaunchedURLClassLoader</span></span>
<span class="line"><span style="color:#e1e4e8;">    org.springframework.boot.loader.Launcher#createClassLoader(java.util.Iterator&lt;Archive&gt;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    org.springframework.boot.loader.Launcher#launch(java.lang.String[], java.lang.String, java.lang.ClassLoader)</span></span>
<span class="line"><span style="color:#e1e4e8;">    	org.springframework.boot.loader.Launcher#createMainMethodRunner</span></span>
<span class="line"><span style="color:#e1e4e8;">    		# 反射调用Main-Class类的main方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    		org.springframework.boot.loader.MainMethodRunner#run</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">org.springframework.boot.loader.JarLauncher#main</span></span>
<span class="line"><span style="color:#24292e;">  org.springframework.boot.loader.Launcher#launch(java.lang.String[])</span></span>
<span class="line"><span style="color:#24292e;">    # 创建类加载器org.springframework.boot.loader.LaunchedURLClassLoader</span></span>
<span class="line"><span style="color:#24292e;">    org.springframework.boot.loader.Launcher#createClassLoader(java.util.Iterator&lt;Archive&gt;)</span></span>
<span class="line"><span style="color:#24292e;">    org.springframework.boot.loader.Launcher#launch(java.lang.String[], java.lang.String, java.lang.ClassLoader)</span></span>
<span class="line"><span style="color:#24292e;">    	org.springframework.boot.loader.Launcher#createMainMethodRunner</span></span>
<span class="line"><span style="color:#24292e;">    		# 反射调用Main-Class类的main方法</span></span>
<span class="line"><span style="color:#24292e;">    		org.springframework.boot.loader.MainMethodRunner#run</span></span></code></pre></div><ul><li><p>org.springframework.boot.loader.LaunchedURLClassLoader 类加载器</p><blockquote><p>通过spring-boot的自定义加载器来加载项目的代码以及依赖jar中的代码</p></blockquote></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">org.springframework.boot.loader.LaunchedURLClassLoader#loadClass</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 先找Spring-Boot-Classes下的类</span></span>
<span class="line"><span style="color:#e1e4e8;">  org.springframework.boot.loader.LaunchedURLClassLoader#loadClassInLaunchedClassLoader</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 没有找到继续在Spring-Boot-Lib中找</span></span>
<span class="line"><span style="color:#e1e4e8;">  org.springframework.boot.loader.LaunchedURLClassLoader#definePackageIfNecessary</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 都没有找到直接调用父类的</span></span>
<span class="line"><span style="color:#e1e4e8;">  java.lang.ClassLoader#loadClass(java.lang.String, boolean)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">org.springframework.boot.loader.LaunchedURLClassLoader#loadClass</span></span>
<span class="line"><span style="color:#24292e;">  # 先找Spring-Boot-Classes下的类</span></span>
<span class="line"><span style="color:#24292e;">  org.springframework.boot.loader.LaunchedURLClassLoader#loadClassInLaunchedClassLoader</span></span>
<span class="line"><span style="color:#24292e;">  # 没有找到继续在Spring-Boot-Lib中找</span></span>
<span class="line"><span style="color:#24292e;">  org.springframework.boot.loader.LaunchedURLClassLoader#definePackageIfNecessary</span></span>
<span class="line"><span style="color:#24292e;">  # 都没有找到直接调用父类的</span></span>
<span class="line"><span style="color:#24292e;">  java.lang.ClassLoader#loadClass(java.lang.String, boolean)</span></span></code></pre></div><h3 id="启动类main" tabindex="-1">启动类main <a class="header-anchor" href="#启动类main" aria-label="Permalink to &quot;启动类main&quot;">​</a></h3><blockquote><p>主要启动流程都在启动类main中。</p></blockquote>`,10),r=n("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60f6a44be401fd09d480564a"},null,-1),i=s(`<p><strong>run</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public ConfigurableApplicationContext run(String... args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 用来记录当前springboot启动耗时</span></span>
<span class="line"><span style="color:#e1e4e8;">		StopWatch stopWatch = new StopWatch();</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 就是记录了启动开始时间</span></span>
<span class="line"><span style="color:#e1e4e8;">		stopWatch.start();</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 在真正的 context 初始化完成前使用的 context，主要用来处理事件</span></span>
<span class="line"><span style="color:#e1e4e8;">		DefaultBootstrapContext bootstrapContext = createBootstrapContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">		ConfigurableApplicationContext context = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 开启了Headless模式：</span></span>
<span class="line"><span style="color:#e1e4e8;">		configureHeadlessProperty();</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 创建监听器并开始监听</span></span>
<span class="line"><span style="color:#e1e4e8;">		SpringApplicationRunListeners listeners = getRunListeners(args);</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 发布启动开始事件</span></span>
<span class="line"><span style="color:#e1e4e8;">		listeners.starting(bootstrapContext, this.mainApplicationClass);</span></span>
<span class="line"><span style="color:#e1e4e8;">		try {</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 根据命令行参数 实例化一个ApplicationArguments</span></span>
<span class="line"><span style="color:#e1e4e8;">			ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 预初始化环境： 读取环境变量，读取配置文件信息（基于监听器）</span></span>
<span class="line"><span style="color:#e1e4e8;">			ConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 忽略beaninfo的bean</span></span>
<span class="line"><span style="color:#e1e4e8;">			configureIgnoreBeanInfo(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 打印横幅</span></span>
<span class="line"><span style="color:#e1e4e8;">			Banner printedBanner = printBanner(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 根据项目类型创建不同从 contxt</span></span>
<span class="line"><span style="color:#e1e4e8;">			context = createApplicationContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">			context.setApplicationStartup(this.applicationStartup);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 设置一下启动类需要的bean，发布事件</span></span>
<span class="line"><span style="color:#e1e4e8;">			prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 进入spring中进行初始化</span></span>
<span class="line"><span style="color:#e1e4e8;">			refreshContext(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 在springBoot中为空，为其他框架扩展使用</span></span>
<span class="line"><span style="color:#e1e4e8;">			afterRefresh(context, applicationArguments);</span></span>
<span class="line"><span style="color:#e1e4e8;">			stopWatch.stop();</span></span>
<span class="line"><span style="color:#e1e4e8;">			if (this.logStartupInfo) {</span></span>
<span class="line"><span style="color:#e1e4e8;">				new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 发布启动事件</span></span>
<span class="line"><span style="color:#e1e4e8;">			listeners.started(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">		  // 执行所有 ApplicationRunner CommandLineRunner</span></span>
<span class="line"><span style="color:#e1e4e8;">			callRunners(context, applicationArguments);</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">		catch (Throwable ex) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			handleRunFailure(context, ex, listeners);</span></span>
<span class="line"><span style="color:#e1e4e8;">			throw new IllegalStateException(ex);</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		try {</span></span>
<span class="line"><span style="color:#e1e4e8;">			// 发布运行事件</span></span>
<span class="line"><span style="color:#e1e4e8;">			listeners.running(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">		catch (Throwable ex) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			handleRunFailure(context, ex, null);</span></span>
<span class="line"><span style="color:#e1e4e8;">			throw new IllegalStateException(ex);</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">		return context;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public ConfigurableApplicationContext run(String... args) {</span></span>
<span class="line"><span style="color:#24292e;">		// 用来记录当前springboot启动耗时</span></span>
<span class="line"><span style="color:#24292e;">		StopWatch stopWatch = new StopWatch();</span></span>
<span class="line"><span style="color:#24292e;">		// 就是记录了启动开始时间</span></span>
<span class="line"><span style="color:#24292e;">		stopWatch.start();</span></span>
<span class="line"><span style="color:#24292e;">		// 在真正的 context 初始化完成前使用的 context，主要用来处理事件</span></span>
<span class="line"><span style="color:#24292e;">		DefaultBootstrapContext bootstrapContext = createBootstrapContext();</span></span>
<span class="line"><span style="color:#24292e;">		ConfigurableApplicationContext context = null;</span></span>
<span class="line"><span style="color:#24292e;">		// 开启了Headless模式：</span></span>
<span class="line"><span style="color:#24292e;">		configureHeadlessProperty();</span></span>
<span class="line"><span style="color:#24292e;">		// 创建监听器并开始监听</span></span>
<span class="line"><span style="color:#24292e;">		SpringApplicationRunListeners listeners = getRunListeners(args);</span></span>
<span class="line"><span style="color:#24292e;">		// 发布启动开始事件</span></span>
<span class="line"><span style="color:#24292e;">		listeners.starting(bootstrapContext, this.mainApplicationClass);</span></span>
<span class="line"><span style="color:#24292e;">		try {</span></span>
<span class="line"><span style="color:#24292e;">			// 根据命令行参数 实例化一个ApplicationArguments</span></span>
<span class="line"><span style="color:#24292e;">			ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);</span></span>
<span class="line"><span style="color:#24292e;">			// 预初始化环境： 读取环境变量，读取配置文件信息（基于监听器）</span></span>
<span class="line"><span style="color:#24292e;">			ConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);</span></span>
<span class="line"><span style="color:#24292e;">			// 忽略beaninfo的bean</span></span>
<span class="line"><span style="color:#24292e;">			configureIgnoreBeanInfo(environment);</span></span>
<span class="line"><span style="color:#24292e;">			// 打印横幅</span></span>
<span class="line"><span style="color:#24292e;">			Banner printedBanner = printBanner(environment);</span></span>
<span class="line"><span style="color:#24292e;">			// 根据项目类型创建不同从 contxt</span></span>
<span class="line"><span style="color:#24292e;">			context = createApplicationContext();</span></span>
<span class="line"><span style="color:#24292e;">			context.setApplicationStartup(this.applicationStartup);</span></span>
<span class="line"><span style="color:#24292e;">			// 设置一下启动类需要的bean，发布事件</span></span>
<span class="line"><span style="color:#24292e;">			prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);</span></span>
<span class="line"><span style="color:#24292e;">			// 进入spring中进行初始化</span></span>
<span class="line"><span style="color:#24292e;">			refreshContext(context);</span></span>
<span class="line"><span style="color:#24292e;">			// 在springBoot中为空，为其他框架扩展使用</span></span>
<span class="line"><span style="color:#24292e;">			afterRefresh(context, applicationArguments);</span></span>
<span class="line"><span style="color:#24292e;">			stopWatch.stop();</span></span>
<span class="line"><span style="color:#24292e;">			if (this.logStartupInfo) {</span></span>
<span class="line"><span style="color:#24292e;">				new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">			// 发布启动事件</span></span>
<span class="line"><span style="color:#24292e;">			listeners.started(context);</span></span>
<span class="line"><span style="color:#24292e;">		  // 执行所有 ApplicationRunner CommandLineRunner</span></span>
<span class="line"><span style="color:#24292e;">			callRunners(context, applicationArguments);</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">		catch (Throwable ex) {</span></span>
<span class="line"><span style="color:#24292e;">			handleRunFailure(context, ex, listeners);</span></span>
<span class="line"><span style="color:#24292e;">			throw new IllegalStateException(ex);</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		try {</span></span>
<span class="line"><span style="color:#24292e;">			// 发布运行事件</span></span>
<span class="line"><span style="color:#24292e;">			listeners.running(context);</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">		catch (Throwable ex) {</span></span>
<span class="line"><span style="color:#24292e;">			handleRunFailure(context, ex, null);</span></span>
<span class="line"><span style="color:#24292e;">			throw new IllegalStateException(ex);</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">		return context;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p><strong>prepareEnvironment</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">private ConfigurableEnvironment prepareEnvironment(SpringApplicationRunListeners listeners,</span></span>
<span class="line"><span style="color:#e1e4e8;">ApplicationArguments applicationArguments) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 根据webApplicationType 创建Environment 创建就会读取： java环境变量和系统环境变量</span></span>
<span class="line"><span style="color:#e1e4e8;">    ConfigurableEnvironment environment = getOrCreateEnvironment();</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 将命令行参数读取环境变量中</span></span>
<span class="line"><span style="color:#e1e4e8;">    configureEnvironment(environment, applicationArguments.getSourceArgs());</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 将@PropertieSource的配置信息 放在第一位， 因为读取配置文件@PropertieSource优先级是最低的</span></span>
<span class="line"><span style="color:#e1e4e8;">    ConfigurationPropertySources.attach(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 发布了ApplicationEnvironmentPreparedEvent 的监听器 读取了全局配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    listeners.environmentPrepared(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 将所有spring.main 开头的配置信息绑定SpringApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">    bindToSpringApplication(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (!this.isCustomEnvironment) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    environment = new EnvironmentConverter(getClassLoader()).convertEnvironmentIfNecessary(environment, deduceEnvironmentClass());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    //更新PropertySources</span></span>
<span class="line"><span style="color:#e1e4e8;">    ConfigurationPropertySources.attach(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return environment;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">private ConfigurableEnvironment prepareEnvironment(SpringApplicationRunListeners listeners,</span></span>
<span class="line"><span style="color:#24292e;">ApplicationArguments applicationArguments) {</span></span>
<span class="line"><span style="color:#24292e;">    // 根据webApplicationType 创建Environment 创建就会读取： java环境变量和系统环境变量</span></span>
<span class="line"><span style="color:#24292e;">    ConfigurableEnvironment environment = getOrCreateEnvironment();</span></span>
<span class="line"><span style="color:#24292e;">    // 将命令行参数读取环境变量中</span></span>
<span class="line"><span style="color:#24292e;">    configureEnvironment(environment, applicationArguments.getSourceArgs());</span></span>
<span class="line"><span style="color:#24292e;">    // 将@PropertieSource的配置信息 放在第一位， 因为读取配置文件@PropertieSource优先级是最低的</span></span>
<span class="line"><span style="color:#24292e;">    ConfigurationPropertySources.attach(environment);</span></span>
<span class="line"><span style="color:#24292e;">    // 发布了ApplicationEnvironmentPreparedEvent 的监听器 读取了全局配置文件</span></span>
<span class="line"><span style="color:#24292e;">    listeners.environmentPrepared(environment);</span></span>
<span class="line"><span style="color:#24292e;">    // 将所有spring.main 开头的配置信息绑定SpringApplication</span></span>
<span class="line"><span style="color:#24292e;">    bindToSpringApplication(environment);</span></span>
<span class="line"><span style="color:#24292e;">    if (!this.isCustomEnvironment) {</span></span>
<span class="line"><span style="color:#24292e;">    environment = new EnvironmentConverter(getClassLoader()).convertEnvironmentIfNecessary(environment, deduceEnvironmentClass());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    //更新PropertySources</span></span>
<span class="line"><span style="color:#24292e;">    ConfigurationPropertySources.attach(environment);</span></span>
<span class="line"><span style="color:#24292e;">    return environment;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>prepareContext</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">private void prepareContext(ConfigurableApplicationContext context, ConfigurableEnvironment environment,</span></span>
<span class="line"><span style="color:#e1e4e8;">SpringApplicationRunListeners listeners, ApplicationArguments applicationArguments, Banner printedBanner) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      context.setEnvironment(environment);</span></span>
<span class="line"><span style="color:#e1e4e8;">      postProcessApplicationContext(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 拿到之前读取到所有ApplicationContextInitializer的组件， 循环调用initialize方法</span></span>
<span class="line"><span style="color:#e1e4e8;">      applyInitializers(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 发布了ApplicationContextInitializedEvent</span></span>
<span class="line"><span style="color:#e1e4e8;">      listeners.contextPrepared(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (this.logStartupInfo) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      logStartupInfo(context.getParent() == null);</span></span>
<span class="line"><span style="color:#e1e4e8;">      logStartupProfileInfo(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 获取当前spring上下文beanFactory (负责创建bean)</span></span>
<span class="line"><span style="color:#e1e4e8;">      ConfigurableListableBeanFactory beanFactory = context.getBeanFactory();</span></span>
<span class="line"><span style="color:#e1e4e8;">      beanFactory.registerSingleton(&quot;springApplicationArguments&quot;, applicationArguments);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (printedBanner != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      beanFactory.registerSingleton(&quot;springBootBanner&quot;, printedBanner);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 在Spring下 如果出现2个重名的bean, 则后读取到的会覆盖前面</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 在SpringBoot 在这里设置了不允许覆盖， 当出现2个重名的bean 会抛出异常</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (beanFactory instanceof DefaultListableBeanFactory) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      ((DefaultListableBeanFactory) beanFactory)</span></span>
<span class="line"><span style="color:#e1e4e8;">      .setAllowBeanDefinitionOverriding(this.allowBeanDefinitionOverriding);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 设置当前spring容器是不是要将所有的bean设置为懒加载</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (this.lazyInitialization) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      context.addBeanFactoryPostProcessor(new LazyInitializationBeanFactoryPostProcessor());</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      // Load the sources</span></span>
<span class="line"><span style="color:#e1e4e8;">      Set&lt;Object&gt; sources = getAllSources();</span></span>
<span class="line"><span style="color:#e1e4e8;">      Assert.notEmpty(sources, &quot;Sources must not be empty&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 读取主启动类 （因为后续要根据配置类解析配置的所有bean)</span></span>
<span class="line"><span style="color:#e1e4e8;">      load(context, sources.toArray(new Object[0]));</span></span>
<span class="line"><span style="color:#e1e4e8;">      //4.读取完配置类后发送ApplicationPreparedEvent。</span></span>
<span class="line"><span style="color:#e1e4e8;">      listeners.contextLoaded(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">private void prepareContext(ConfigurableApplicationContext context, ConfigurableEnvironment environment,</span></span>
<span class="line"><span style="color:#24292e;">SpringApplicationRunListeners listeners, ApplicationArguments applicationArguments, Banner printedBanner) {</span></span>
<span class="line"><span style="color:#24292e;">      context.setEnvironment(environment);</span></span>
<span class="line"><span style="color:#24292e;">      postProcessApplicationContext(context);</span></span>
<span class="line"><span style="color:#24292e;">      // 拿到之前读取到所有ApplicationContextInitializer的组件， 循环调用initialize方法</span></span>
<span class="line"><span style="color:#24292e;">      applyInitializers(context);</span></span>
<span class="line"><span style="color:#24292e;">      // 发布了ApplicationContextInitializedEvent</span></span>
<span class="line"><span style="color:#24292e;">      listeners.contextPrepared(context);</span></span>
<span class="line"><span style="color:#24292e;">      if (this.logStartupInfo) {</span></span>
<span class="line"><span style="color:#24292e;">      logStartupInfo(context.getParent() == null);</span></span>
<span class="line"><span style="color:#24292e;">      logStartupProfileInfo(context);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      // 获取当前spring上下文beanFactory (负责创建bean)</span></span>
<span class="line"><span style="color:#24292e;">      ConfigurableListableBeanFactory beanFactory = context.getBeanFactory();</span></span>
<span class="line"><span style="color:#24292e;">      beanFactory.registerSingleton(&quot;springApplicationArguments&quot;, applicationArguments);</span></span>
<span class="line"><span style="color:#24292e;">      if (printedBanner != null) {</span></span>
<span class="line"><span style="color:#24292e;">      beanFactory.registerSingleton(&quot;springBootBanner&quot;, printedBanner);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      // 在Spring下 如果出现2个重名的bean, 则后读取到的会覆盖前面</span></span>
<span class="line"><span style="color:#24292e;">      // 在SpringBoot 在这里设置了不允许覆盖， 当出现2个重名的bean 会抛出异常</span></span>
<span class="line"><span style="color:#24292e;">      if (beanFactory instanceof DefaultListableBeanFactory) {</span></span>
<span class="line"><span style="color:#24292e;">      ((DefaultListableBeanFactory) beanFactory)</span></span>
<span class="line"><span style="color:#24292e;">      .setAllowBeanDefinitionOverriding(this.allowBeanDefinitionOverriding);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      // 设置当前spring容器是不是要将所有的bean设置为懒加载</span></span>
<span class="line"><span style="color:#24292e;">      if (this.lazyInitialization) {</span></span>
<span class="line"><span style="color:#24292e;">      context.addBeanFactoryPostProcessor(new LazyInitializationBeanFactoryPostProcessor());</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      // Load the sources</span></span>
<span class="line"><span style="color:#24292e;">      Set&lt;Object&gt; sources = getAllSources();</span></span>
<span class="line"><span style="color:#24292e;">      Assert.notEmpty(sources, &quot;Sources must not be empty&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      // 读取主启动类 （因为后续要根据配置类解析配置的所有bean)</span></span>
<span class="line"><span style="color:#24292e;">      load(context, sources.toArray(new Object[0]));</span></span>
<span class="line"><span style="color:#24292e;">      //4.读取完配置类后发送ApplicationPreparedEvent。</span></span>
<span class="line"><span style="color:#24292e;">      listeners.contextLoaded(context);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>启动web容器流程</strong></p><p>当项目为 <code>web</code> 是 <code>org.springframework.boot.SpringApplication#createApplicationContext</code>，会返回 <code>org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContex</code>。</p><p>其父类中 <code>org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh</code>会创建web容器</p><p><code>onRefresh</code>会在spring容器启动是执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 根据设置返回不同的容器</span></span>
<span class="line"><span style="color:#e1e4e8;">    org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#createWebServer </span></span>
<span class="line"><span style="color:#e1e4e8;">      // 配置 Tomcat 容器</span></span>
<span class="line"><span style="color:#e1e4e8;">      org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getWebServer </span></span>
<span class="line"><span style="color:#e1e4e8;">				// 创建 Tomcat 容器</span></span>
<span class="line"><span style="color:#e1e4e8;">				org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getTomcatWebServer </span></span>
<span class="line"><span style="color:#e1e4e8;">						// 启动 Tomcat 容器，并启动异常检测线程。</span></span>
<span class="line"><span style="color:#e1e4e8;">						org.springframework.boot.web.embedded.tomcat.TomcatWebServer#initialize</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#onRefresh</span></span>
<span class="line"><span style="color:#24292e;">    // 根据设置返回不同的容器</span></span>
<span class="line"><span style="color:#24292e;">    org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#createWebServer </span></span>
<span class="line"><span style="color:#24292e;">      // 配置 Tomcat 容器</span></span>
<span class="line"><span style="color:#24292e;">      org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getWebServer </span></span>
<span class="line"><span style="color:#24292e;">				// 创建 Tomcat 容器</span></span>
<span class="line"><span style="color:#24292e;">				org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory#getTomcatWebServer </span></span>
<span class="line"><span style="color:#24292e;">						// 启动 Tomcat 容器，并启动异常检测线程。</span></span>
<span class="line"><span style="color:#24292e;">						org.springframework.boot.web.embedded.tomcat.TomcatWebServer#initialize</span></span></code></pre></div><h3 id="自动装配" tabindex="-1">自动装配 <a class="header-anchor" href="#自动装配" aria-label="Permalink to &quot;自动装配&quot;">​</a></h3><blockquote><p>默认大于配置。springboot核心功能。</p></blockquote>`,13),c=n("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/610120817d9c083494ed059a"},null,-1),g=s('<p><strong>EnableAutoConfiguration</strong></p><p>核心注解，开启自动装配。通过<code>org.springframework.context.annotation.Import</code>注入 <code>org.springframework.boot.autoconfigure.AutoConfigurationImportSelector</code>，该类实现了 <code>DeferredImportSelectorSpring</code></p><p>会在spring解析 <code>@import</code>是调用 <code>getAutoConfigurationEntry</code></p><p><strong>AutoConfigurationImportSelector</strong></p><p>通过 <code>org.springframework.boot.autoconfigure.AutoConfigurationImportSelector#getCandidateConfigurations</code></p><p>获取 <code>META-INF/spring.factories</code>中定义的类。改接口会在spring初始化是进行装载。</p><p><strong>关闭</strong></p><p>通知设置 <code>spring.boot.enableautoconfiguration=true</code>来关闭自动配置</p><h3 id="注解" tabindex="-1">注解 <a class="header-anchor" href="#注解" aria-label="Permalink to &quot;注解&quot;">​</a></h3><p><strong>@Configuration(proxyBeanMethods = false)</strong></p><p>标记了@Configuration Spring底层会给配置创建cglib动态代理。 作用：就是防止每次调用本类的Bean方法而重新创建对 象，Bean是默认单例的</p><p><strong>@Conditional派生注解（Spring注解版原生的@Conditional作用）</strong></p><ul><li>@ConditionalOnJava <ul><li>系统的java版本是否符合要求</li></ul></li><li>@ConditionalOnBean <ul><li>容器中存在指定Bean</li></ul></li><li>@ConditionalOnMissingBean <ul><li>容器中不存在指定Bean</li></ul></li><li>@ConditionalOnExpression <ul><li>满足SpEL表达式指定</li></ul></li><li>@ConditionalOnClass</li><li>系统中有指定的类</li><li>@ConditionalOnMissingClass</li><li>系统中没有指定的类</li><li>@ConditionalOnSingleCandidate <ul><li>容器中只有一个指定的Bean，或者这个Bean是首选Bean</li></ul></li><li>@ConditionalOnProperty <ul><li>系统中指定的属性是否有指定的值</li></ul></li><li>@ConditionalOnResource <ul><li>类路径下是否存在指定资源文件</li></ul></li><li>@ConditionalOnWebApplication <ul><li>当前是web环境</li></ul></li><li>@ConditionalOnNotWebApplication <ul><li>当前不是web环境</li></ul></li><li>@ConditionalOnJndi</li><li>JNDI存在指定项</li><li>EnableConfigurationProperties <ul><li>将配置文件的值和对象绑定起来，并注册到ioc容器中</li></ul></li></ul><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><blockquote><p>在springBoot启动中各个阶段发布不同的事件。</p></blockquote><ol><li><p><code>ApplicationStartingEvent</code>在运行开始时发送，但在进行任何处理之前（侦听器和初始化程序的注册除外）发送。</p></li><li><p>在创建上下文之前，将发送<code>ApplicationEnvironmentPreparedEvent</code>。</p></li><li><p>准备ApplicationContext并调用<code>ApplicationContextInitializers</code>之后，将发送<code>ApplicationContextInitializedEvent</code>。</p></li><li><p>读取完配置类后发送<code>ApplicationPreparedEvent</code>。</p></li><li><p>在刷新上下文之后但在调用<code>ApplicationRunner</code>和<code>CommandLineRunner</code>之前，将发送<code>ApplicationStartedEvent</code>。</p></li><li><p>紧随其后发送带有LivenessState.CORRECT的<code>AvailabilityChangeEvent</code>，以指示该应用程序被视为处于活动状态。</p></li><li><p>在调用任何应用程序和命令行运行程序之后，将发送<code>ApplicationReadyEvent</code>。</p></li><li><p>紧随其后发送ReadabilityState.ACCEPTING_TRAFFIC的<code>AvailabilityChangeEvent</code>，以指示应用程序已准备就绪，可以 处理请求。</p></li><li><p>如果启动时发生异常，则发送<code>ApplicationFailedEvent</code>。</p></li></ol>',16),d=[p,o,r,i,c,g];function y(u,b,m,v,h,C){return a(),t("div",null,d)}const x=e(l,[["render",y]]);export{A as __pageData,x as default};
