import{_ as o,c as t,o as r,b as e,d as a,a as i}from"./app.3d2db0cb.js";const k=JSON.parse('{"title":"Spring扩展接口即执行流程","description":"","frontmatter":{"title":"Spring扩展接口即执行流程"},"headers":[{"level":2,"title":"流程图","slug":"流程图","link":"#流程图","children":[]},{"level":2,"title":"refresh","slug":"refresh","link":"#refresh","children":[]}],"relativePath":"java/spring/Spring扩展接口即执行流程.md","lastUpdated":1677230567000}'),s={name:"java/spring/Spring扩展接口即执行流程.md"},n=e("h2",{id:"流程图",tabindex:"-1"},[a("流程图 "),e("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#")],-1),c=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/612318b37d9c0856876bb0de"},null,-1),l=i('<h2 id="refresh" tabindex="-1">refresh <a class="header-anchor" href="#refresh" aria-hidden="true">#</a></h2><blockquote><p>通过初始化各种工厂，扫描BeanDefinition等操作后才会允许用户介入初始化流程</p></blockquote><h4 id="beandefinitionregistrypostprocessor" tabindex="-1">BeanDefinitionRegistryPostProcessor <a class="header-anchor" href="#beandefinitionregistrypostprocessor" aria-hidden="true">#</a></h4><blockquote><p>主要作用是往容器中添加BeanDefinition</p></blockquote><ul><li><strong>ConfigurationClassPostProcessor</strong><ul><li><p>@PropertySource，@PropertySources：添加配置文件</p></li><li><p>@ComponentScan，@ComponentScans：扫描bean</p></li><li><p>@Import：往容器中添加bean</p><ul><li>如果实现<code>ImportSelector</code>，则添加调用 <code>selectImports</code>获取配置类</li><li>在处理完<code>ImportSelector</code>后处理<code>DeferredImportSelector</code>接口。特别是存在<code>@Conditional</code>时，要在其他bean都加载完后才能起到相应的作用</li></ul></li><li><p>处理<code>@ImportResource</code>注解</p></li><li><p>处理<code>@Bean</code>，添加bean</p><blockquote><p>Configuration#proxyBeanMethods 为true时，会对说有@bean方法添加代理，直接通过beanFactory获取。即调用该方法时实际只执行一次，多次调用返回的对象是同一个。</p></blockquote></li></ul></li></ul><h4 id="beanfactorypostprocessor-postprocessbeanfactory" tabindex="-1">BeanFactoryPostProcessor#postProcessBeanFactory <a class="header-anchor" href="#beanfactorypostprocessor-postprocessbeanfactory" aria-hidden="true">#</a></h4><blockquote><p>所有的 bean 定义都已经加载，但是没有被实例化。用来修改 bean 定义或者提前实例化</p><p>在注册 bean 的后置处理器之前调用</p></blockquote><h4 id="instantiationawarebeanpostprocessor-postprocessbeforeinstantiation" tabindex="-1">InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation <a class="header-anchor" href="#instantiationawarebeanpostprocessor-postprocessbeforeinstantiation" aria-hidden="true">#</a></h4><blockquote><p>bean初始化前的操作，主要是生成代理对象</p></blockquote><h4 id="mergedbeandefinitionpostprocessor-postprocessmergedbeandefinition" tabindex="-1">MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition <a class="header-anchor" href="#mergedbeandefinitionpostprocessor-postprocessmergedbeandefinition" aria-hidden="true">#</a></h4><blockquote><p>主要作用是修改BeanDefinition</p></blockquote><ul><li><code>com.alibaba.cloud.sentinel.custom.SentinelBeanPostProcessor</code>：处理 @SentinelRestTemplate，在RestTemplate中添加拦截器</li></ul><h4 id="instantiationawarebeanpostprocessor-postprocessafterinstantiation" tabindex="-1">InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation <a class="header-anchor" href="#instantiationawarebeanpostprocessor-postprocessafterinstantiation" aria-hidden="true">#</a></h4><blockquote><p>在实例化之后，赋值属性之前调用，返回false则不进行后续赋值。</p></blockquote><h4 id="instantiationawarebeanpostprocessor-postprocessproperties" tabindex="-1">InstantiationAwareBeanPostProcessor#postProcessProperties <a class="header-anchor" href="#instantiationawarebeanpostprocessor-postprocessproperties" aria-hidden="true">#</a></h4><blockquote><p>在设置属性后调用修改属性</p></blockquote><ul><li><strong>AutowiredAnnotationBeanPostProcessor</strong><ul><li>注入<code>@Autowired</code>,<code>@Value</code>属性</li><li>处理<code>javax.inject.Inject</code>注解</li></ul></li></ul><h4 id="aware" tabindex="-1">Aware <a class="header-anchor" href="#aware" aria-hidden="true">#</a></h4><blockquote><p>设置各种对象</p></blockquote><h4 id="beanpostprocessor-postprocessbeforeinitialization" tabindex="-1">BeanPostProcessor#postProcessBeforeInitialization <a class="header-anchor" href="#beanpostprocessor-postprocessbeforeinitialization" aria-hidden="true">#</a></h4><blockquote><p>在初始化之前调用所有后置处理器</p></blockquote><ul><li><strong>ApplicationContextAwareProcessor</strong><ul><li>设置所有<code>Aware</code></li></ul></li><li><strong>InitDestroyAnnotationBeanPostProcessor</strong><ul><li>处理 <code>@PostConstruct</code></li></ul></li></ul><h4 id="initializingbean-afterpropertiesset" tabindex="-1">InitializingBean#afterPropertiesSet <a class="header-anchor" href="#initializingbean-afterpropertiesset" aria-hidden="true">#</a></h4><blockquote><p>在初始化前调用afterPropertiesSet方法</p></blockquote><h4 id="beanpostprocessor-postprocessafterinitialization" tabindex="-1">BeanPostProcessor#postProcessAfterInitialization <a class="header-anchor" href="#beanpostprocessor-postprocessafterinitialization" aria-hidden="true">#</a></h4><blockquote><p>初始化后调用</p></blockquote><ul><li><strong>AbstractAdvisingBeanPostProcessor</strong><ul><li>实现aop功能，生成代理对象</li></ul></li><li>ApplicationListenerDetector <ul><li>如果当前类是监听器，则添加监听器到applicationContext</li></ul></li><li>ScheduledAnnotationBeanPostProcessor <ul><li>处理 <code>@Scheduled</code></li></ul></li></ul><h4 id="destructionawarebeanpostprocessor-postprocessbeforedestruction" tabindex="-1">DestructionAwareBeanPostProcessor#postProcessBeforeDestruction <a class="header-anchor" href="#destructionawarebeanpostprocessor-postprocessbeforedestruction" aria-hidden="true">#</a></h4><blockquote><p>在销毁之前调用</p></blockquote><ul><li>InitDestroyAnnotationBeanPostProcessor <ul><li>调用标记 <code>@PreDestroy</code>方法</li></ul></li><li>ApplicationListenerDetector <ul><li>注销监听器</li></ul></li><li>ScheduledAnnotationBeanPostProcessor <ul><li>关闭任务</li></ul></li></ul><h4 id="org-springframework-beans-factory-smartinitializingsingleton-aftersingletonsinstantiated" tabindex="-1">org.springframework.beans.factory.SmartInitializingSingleton#afterSingletonsInstantiated <a class="header-anchor" href="#org-springframework-beans-factory-smartinitializingsingleton-aftersingletonsinstantiated" aria-hidden="true">#</a></h4><blockquote><p>会在所有非延迟加载单例 bean 加载完成后调用</p></blockquote><ul><li><p><code>com.alibaba.cloud.sentinel.custom.SentinelDataSourceHandler</code>：处理 sentinel 数据源</p></li><li><p><code>org.springframework.context.event.EventListenerMethodProcessor</code></p><blockquote><p>处理<code>org.springframework.context.event.EventListener</code>。</p></blockquote></li></ul><h4 id="applicationlistener" tabindex="-1"><strong>ApplicationListener</strong> <a class="header-anchor" href="#applicationlistener" aria-hidden="true">#</a></h4><blockquote><p>监听 spring 发送的事件。可以在 spring，spring-boot 各个阶段进行调用。</p></blockquote>',35),p=[n,c,l];function d(u,h,b,f,g,P){return r(),t("div",null,p)}const _=o(s,[["render",d]]);export{k as __pageData,_ as default};
