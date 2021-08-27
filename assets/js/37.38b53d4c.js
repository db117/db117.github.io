(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{408:function(e,t,r){"use strict";r.r(t);var o=r(28),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"流程图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[e._v("#")]),e._v(" 流程图")]),e._v(" "),r("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/612318b37d9c0856876bb0de"}}),e._v(" "),r("h2",{attrs:{id:"refresh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#refresh"}},[e._v("#")]),e._v(" refresh")]),e._v(" "),r("blockquote",[r("p",[e._v("通过初始化各种工厂，扫描BeanDefinition等操作后才会允许用户介入初始化流程")])]),e._v(" "),r("h4",{attrs:{id:"beandefinitionregistrypostprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beandefinitionregistrypostprocessor"}},[e._v("#")]),e._v(" BeanDefinitionRegistryPostProcessor")]),e._v(" "),r("blockquote",[r("p",[e._v("主要作用是往容器中添加BeanDefinition")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("ConfigurationClassPostProcessor")]),e._v(" "),r("ul",[r("li",[e._v("@PropertySource，@PropertySources：添加配置文件")]),e._v(" "),r("li",[e._v("@ComponentScan，@ComponentScans：扫描bean")]),e._v(" "),r("li",[e._v("@Import：往容器中添加bean\n"),r("ul",[r("li",[e._v("如果实现"),r("code",[e._v("ImportSelector")]),e._v("，则添加调用 "),r("code",[e._v("selectImports")]),e._v("获取配置类")]),e._v(" "),r("li",[e._v("在处理完"),r("code",[e._v("ImportSelector")]),e._v("后处理"),r("code",[e._v("DeferredImportSelector")]),e._v("接口。特别是存在"),r("code",[e._v("@Conditional")]),e._v("时，要在其他bean都加载完后才能起到相应的作用")])])]),e._v(" "),r("li",[e._v("处理"),r("code",[e._v("@ImportResource")]),e._v("注解")]),e._v(" "),r("li",[e._v("处理"),r("code",[e._v("@Bean")]),e._v("，添加bean")])])])]),e._v(" "),r("h4",{attrs:{id:"mergedbeandefinitionpostprocessor-postprocessmergedbeandefinition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mergedbeandefinitionpostprocessor-postprocessmergedbeandefinition"}},[e._v("#")]),e._v(" MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition")]),e._v(" "),r("blockquote",[r("p",[e._v("主要作用是修改BeanDefinition")])]),e._v(" "),r("h4",{attrs:{id:"instantiationawarebeanpostprocessor-postprocessafterinstantiation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instantiationawarebeanpostprocessor-postprocessafterinstantiation"}},[e._v("#")]),e._v(" InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation")]),e._v(" "),r("blockquote",[r("p",[e._v("在实例化之后，赋值属性之前调用，返回false则不进行赋值")])]),e._v(" "),r("h4",{attrs:{id:"instantiationawarebeanpostprocessor-postprocessproperties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instantiationawarebeanpostprocessor-postprocessproperties"}},[e._v("#")]),e._v(" InstantiationAwareBeanPostProcessor#postProcessProperties")]),e._v(" "),r("blockquote",[r("p",[e._v("在设置属性后调用修改属性")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("AutowiredAnnotationBeanPostProcessor")]),e._v(" "),r("ul",[r("li",[e._v("注入"),r("code",[e._v("@Autowired")]),e._v(","),r("code",[e._v("@Value")]),e._v("属性")]),e._v(" "),r("li",[e._v("处理"),r("code",[e._v("javax.inject.Inject")]),e._v("注解")])])])]),e._v(" "),r("h4",{attrs:{id:"beannameaware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beannameaware"}},[e._v("#")]),e._v(" BeanNameAware")]),e._v(" "),r("blockquote",[r("p",[e._v("设置BeanName")])]),e._v(" "),r("h4",{attrs:{id:"beanclassloaderaware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beanclassloaderaware"}},[e._v("#")]),e._v(" BeanClassLoaderAware")]),e._v(" "),r("blockquote",[r("p",[e._v("设置ClassLoader")])]),e._v(" "),r("h4",{attrs:{id:"beanfactoryaware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beanfactoryaware"}},[e._v("#")]),e._v(" BeanFactoryAware")]),e._v(" "),r("blockquote",[r("p",[e._v("设置BeanFactory")])]),e._v(" "),r("h4",{attrs:{id:"beanpostprocessor-postprocessbeforeinitialization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beanpostprocessor-postprocessbeforeinitialization"}},[e._v("#")]),e._v(" BeanPostProcessor#postProcessBeforeInitialization")]),e._v(" "),r("blockquote",[r("p",[e._v("在初始化之前调用所有后置处理器")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("ApplicationContextAwareProcessor")]),e._v(" "),r("ul",[r("li",[e._v("设置所有"),r("code",[e._v("Aware")])])])]),e._v(" "),r("li",[r("strong",[e._v("InitDestroyAnnotationBeanPostProcessor")]),e._v(" "),r("ul",[r("li",[e._v("处理 "),r("code",[e._v("@PostConstruct")])])])])]),e._v(" "),r("h4",{attrs:{id:"initializingbean-afterpropertiesset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initializingbean-afterpropertiesset"}},[e._v("#")]),e._v(" InitializingBean#afterPropertiesSet")]),e._v(" "),r("blockquote",[r("p",[e._v("在初始化前调用afterPropertiesSet方法")])]),e._v(" "),r("h4",{attrs:{id:"beanpostprocessor-postprocessafterinitialization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beanpostprocessor-postprocessafterinitialization"}},[e._v("#")]),e._v(" BeanPostProcessor#postProcessAfterInitialization")]),e._v(" "),r("blockquote",[r("p",[e._v("初始化后调用")])]),e._v(" "),r("ul",[r("li",[e._v("AbstractAdvisingBeanPostProcessor\n"),r("ul",[r("li",[e._v("实现aop功能，生成代理对象")])])]),e._v(" "),r("li",[e._v("ApplicationListenerDetector\n"),r("ul",[r("li",[e._v("如果当前类是监听器，则添加监听器到applicationContext")])])]),e._v(" "),r("li",[e._v("ScheduledAnnotationBeanPostProcessor\n"),r("ul",[r("li",[e._v("处理 "),r("code",[e._v("@Scheduled")])])])])]),e._v(" "),r("h4",{attrs:{id:"destructionawarebeanpostprocessor-postprocessbeforedestruction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#destructionawarebeanpostprocessor-postprocessbeforedestruction"}},[e._v("#")]),e._v(" DestructionAwareBeanPostProcessor#postProcessBeforeDestruction")]),e._v(" "),r("blockquote",[r("p",[e._v("在销毁之前调用")])]),e._v(" "),r("ul",[r("li",[e._v("InitDestroyAnnotationBeanPostProcessor\n"),r("ul",[r("li",[e._v("调用标记 "),r("code",[e._v("@PreDestroy")]),e._v("方法")])])]),e._v(" "),r("li",[e._v("ApplicationListenerDetector\n"),r("ul",[r("li",[e._v("注销监听器")])])]),e._v(" "),r("li",[e._v("ScheduledAnnotationBeanPostProcessor\n"),r("ul",[r("li",[e._v("关闭任务")])])])]),e._v(" "),r("h3",{attrs:{id:"spring-boot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot"}},[e._v("#")]),e._v(" Spring-Boot")]),e._v(" "),r("h4",{attrs:{id:"servletcontextinitializer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servletcontextinitializer"}},[e._v("#")]),e._v(" ServletContextInitializer")]),e._v(" "),r("blockquote",[r("p",[e._v("org.springframework.boot.web.servlet.ServletContextInitializer")]),e._v(" "),r("p",[e._v("用于以编程方式配置Servlet 3.0+{@link ServletContext Context}的接口。与 WebApplicationInitializer 不同的是实现此接口(且不实现 WebApplicationInitializer)的类不会被 SpringServletContainerInitializer 检测到，因此Servlet容器不会自动引导")]),e._v(" "),r("p",[e._v("此接口的设计方式类似于ServletContainerInitializer，但其生命周期由Spring管理，而不是Servlet容器")]),e._v(" "),r("p",[e._v("在springboot启动web容器后调用")])]),e._v(" "),r("h4",{attrs:{id:"banner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#banner"}},[e._v("#")]),e._v(" Banner")]),e._v(" "),r("blockquote",[r("p",[e._v("org.springframework.boot.Banner")]),e._v(" "),r("p",[e._v("用于以编程方式编写横幅的接口类")]),e._v(" "),r("p",[e._v("在springboot启动时打印横幅")]),e._v(" "),r("p",[e._v("需要在SpringApplication中设置")])]),e._v(" "),r("h4",{attrs:{id:"applicationrunner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applicationrunner"}},[e._v("#")]),e._v(" ApplicationRunner")]),e._v(" "),r("blockquote",[r("p",[e._v("org.springframework.boot.ApplicationRunner")]),e._v(" "),r("p",[e._v("在springboot启动完成后调用")]),e._v(" "),r("p",[e._v("支持@Order注解")])]),e._v(" "),r("h4",{attrs:{id:"commandlinerunner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commandlinerunner"}},[e._v("#")]),e._v(" CommandLineRunner")]),e._v(" "),r("blockquote",[r("p",[e._v("org.springframework.boot.CommandLineRunner")]),e._v(" "),r("p",[e._v("同ApplicationRunner接口，区别为入参不同")]),e._v(" "),r("p",[e._v("在ApplicationRunner后调用")])]),e._v(" "),r("h4",{attrs:{id:"springapplicationrunlistener"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springapplicationrunlistener"}},[e._v("#")]),e._v(" SpringApplicationRunListener")]),e._v(" "),r("blockquote",[r("p",[e._v("org.springframework.boot.SpringApplicationRunListener")]),e._v(" "),r("p",[e._v("在springboot启动的各个阶段进行回调")]),e._v(" "),r("p",[e._v("需要在spring.factories中定义")]),e._v(" "),r("p",[e._v("需要有入参为(SpringApplication application,String ... args)的构造函数")])]),e._v(" "),r("h4",{attrs:{id:"resttemplatecustomizer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resttemplatecustomizer"}},[e._v("#")]),e._v(" RestTemplateCustomizer")]),e._v(" "),r("blockquote",[r("p",[e._v("org.springframework.boot.web.client.RestTemplateCustomizer")]),e._v(" "),r("p",[e._v("配置RestTemplate")])])])}),[],!1,null,null,null);t.default=a.exports}}]);