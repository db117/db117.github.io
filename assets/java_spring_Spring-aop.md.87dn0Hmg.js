import{_ as a,o,c as s,k as e,a as t,R as i}from"./chunks/framework.H_1uJR_t.js";const _=JSON.parse('{"title":"spring-aop","description":"","frontmatter":{"title":"spring-aop"},"headers":[],"relativePath":"java/spring/Spring-aop.md","filePath":"java/spring/Spring-aop.md","lastUpdated":1699241780000}'),n={name:"java/spring/Spring-aop.md"},l=e("h2",{id:"流程图",tabindex:"-1"},[t("流程图 "),e("a",{class:"header-anchor",href:"#流程图","aria-label":'Permalink to "流程图"'},"​")],-1),c=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/611f88760e3e745cf8fffbad"},null,-1),r=e("h3",{id:"思维导图",tabindex:"-1"},[t("思维导图 "),e("a",{class:"header-anchor",href:"#思维导图","aria-label":'Permalink to "思维导图"'},"​")],-1),p=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"275px"},src:"https://www.processon.com/embed/63b7d219f27176074bb45725"},null,-1),d=i(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><ul><li><p><strong>它基于动态代理来实现</strong>。默认地，如果使用接口的，用 JDK 提供的动态代理实现，如果没有接口，使用 CGLIB 实现。</p></li><li><p>Spring 3.2 以后，spring-core 直接就把 CGLIB 和 ASM 的源码包括进来了</p></li><li><p>Spring 的 IOC 容器和 AOP 都很重要，Spring AOP 需要依赖于 IOC 容器来管理。</p></li><li><p>Spring AOP 只能作用于 Spring 容器中的 Bean，它是使用纯粹的 Java 代码实现的，只能作用于 bean 的方法。</p></li><li><p>Spring 提供了 AspectJ 的支持，但只用到的AspectJ的切点解析和匹配。</p></li><li><p>Spring AOP 是基于代理实现的，在容器启动的时候需要生成代理实例，在方法调用上也会增加栈的深度，使得 Spring AOP 的性能不如 AspectJ 那么好。</p></li></ul><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><ul><li><code>pointcut</code>：切点，需要插入增强的连接点</li><li><code>Joinpoint</code>：连接点，可以插入的增强位置，在spring中连接点为方法调用</li><li><code>advice</code>：通知，描述如何增强</li><li><code>aspect</code>：切面，通知和切点的结合</li><li><code>Advisor</code>：封装<code>Joinpoint</code>和<code>advice</code></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><blockquote><p>spring中使用通过添加 <code>@EnableAspectJAutoProxy</code>即可开启</p><p>spring-boot中默认开启，2.0后<code>proxy-target-class</code>默认为<code>true</code>。即默认为cglib代理（不是接口或本身就是jdk代理的情况下）</p></blockquote><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><h3 id="主要类" tabindex="-1">主要类 <a class="header-anchor" href="#主要类" aria-label="Permalink to &quot;主要类&quot;">​</a></h3><ul><li>AspectJAutoProxyRegistrar <ul><li>注入<code>AnnotationAwareAspectJAutoProxyCreator</code></li></ul></li><li>AnnotationAwareAspectJAutoProxyCreator：最核心的类，处理切面，生成代理对象 <ul><li>继承<code>AnnotationAwareAspectJAutoProxyCreator</code><ul><li>继承<code>AbstractAdvisorAutoProxyCreator</code><ul><li>继承<code>AbstractAutoProxyCreator</code></li></ul></li></ul></li></ul></li><li>BeanFactoryAspectJAdvisorsBuilder <ul><li>构建所有<code>AspectJ</code>的<code>Advisor</code></li></ul></li><li>ReflectiveAspectJAdvisorFactory <ul><li>获取<code>Pointcut</code>，<code>Advice</code></li></ul></li><li>DefaultAdvisorChainFactory <ul><li>生成调用链</li></ul></li><li>DefaultAopProxyFactory <ul><li>创建<code>AopProxy</code></li></ul></li><li>JdkDynamicAopProxy <ul><li>jdk动态代理对象生成</li></ul></li><li>CglibAopProxy <ul><li>cglib动态代理对象生成</li></ul></li></ul><h3 id="主要流程" tabindex="-1">主要流程 <a class="header-anchor" href="#主要流程" aria-label="Permalink to &quot;主要流程&quot;">​</a></h3><ol><li><p>通过<code>@EnableAspectJAutoProxy</code>注解注入<code>AnnotationAwareAspectJAutoProxyCreator</code></p></li><li><p>在类第一次实例化前解析并缓存所有切面，以及事务注解解析</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AnnotationAwareAspectJAutoProxyCreator#postProcessBeforeInstantiation 在类初始化前调用</span></span>
<span class="line"><span>	shouldSkip  检查是否需要跳过</span></span>
<span class="line"><span>		findCandidateAdvisors	找所有候选的Advisor</span></span>
<span class="line"><span>			BeanFactoryAspectJAdvisorsBuilder#buildAspectJAdvisors 构建所有Advisor</span></span>
<span class="line"><span>				ReflectiveAspectJAdvisorFactory#getAdvisors</span></span>
<span class="line"><span>					ReflectiveAspectJAdvisorFactory#getPointcut		封装成AspectJExpressionPointcut</span></span>
<span class="line"><span>						ReflectiveAspectJAdvisorFactory#getAdvice		根据不同的注解生成不同的Advice</span></span></code></pre></div><blockquote><p>会在<code>ReflectiveAspectJAdvisorFactory#getAdvisorMethods</code>是进行排序。</p><p><code>ReflectiveAspectJAdvisorFactory#adviceMethodComparator</code>先按照Around， Before，After， AfterReturning， AfterThrowing顺序排列，然后按照名称排列</p></blockquote></li><li><p>生成代理对象</p><blockquote><p>在bean初始化完成后判断是否会生成代理对象</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AnnotationAwareAspectJAutoProxyCreator#postProcessAfterInitialization</span></span>
<span class="line"><span>	wrapIfNecessary  如果需要则生成代理对象</span></span>
<span class="line"><span>		getAdvicesAndAdvisorsForBean  					获取所有匹配的advice</span></span>
<span class="line"><span>			findEligibleAdvisors      						通过缓存获取所有advice</span></span>
<span class="line"><span>      	AopUtils.findAdvisorsThatCanApply  	对所有advisors一顿matches</span></span>
<span class="line"><span>      	sortAdvisors 												对advice进行排序</span></span>
<span class="line"><span>		createProxy					创建代理对象</span></span>
<span class="line"><span>			AdvisedSupport#getInterceptorsAndDynamicInterceptionAdvice 获取调用链</span></span>
<span class="line"><span>         DefaultAdvisorChainFactory#getInterceptorsAndDynamicInterceptionAdvice</span></span>
<span class="line"><span>         		ReflectiveMethodInvocation#proceed 		实际执行的方法，递归执行调用链</span></span></code></pre></div></li></ol>`,11),A=[l,c,r,p,d];function u(h,v,b,g,f,m){return o(),s("div",null,A)}const P=a(n,[["render",u]]);export{_ as __pageData,P as default};
