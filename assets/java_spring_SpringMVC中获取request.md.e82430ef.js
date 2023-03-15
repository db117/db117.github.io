import{_ as e,c as s,o as a,U as t}from"./chunks/framework.f3e3bc1f.js";const A=JSON.parse('{"title":"SpringMVC中获取request","description":"","frontmatter":{"title":"SpringMVC中获取request"},"headers":[],"relativePath":"java/spring/SpringMVC中获取request.md","lastUpdated":1678872629000}'),n={name:"java/spring/SpringMVC中获取request.md"},l=t(`<h2 id="controller中加参数" tabindex="-1">Controller中加参数 <a class="header-anchor" href="#controller中加参数" aria-label="Permalink to &quot;Controller中加参数&quot;">​</a></h2><blockquote><p>这种方法实现最简单,直接在参数中添加就可以使用</p></blockquote><h4 id="线程安全性" tabindex="-1">线程安全性 <a class="header-anchor" href="#线程安全性" aria-label="Permalink to &quot;线程安全性&quot;">​</a></h4><p>此时request对象是方法参数，相当于局部变量，毫无疑问是线程安全的。</p><h4 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h4><p>这种方法的主要缺点是request对象写起来冗余太多，主要体现在两点：</p><ul><li><p>如果多个controller方法中都需要request对象，那么在每个方法中都需要添加一遍request参数</p></li><li><p>request对象的获取只能从controller开始，如果使用request对象的地方在函数调用层级比较深的地方，那么整个调用链上的所有方法都需要添加request参数</p></li></ul><p>实际上，在整个请求处理的过程中，request对象是贯穿始终的；也就是说，除了定时器等特殊情况，request对象相当于线程内部的一个全局变量。而该方法，相当于将这个全局变量，传来传去。</p><h2 id="自动注入" tabindex="-1">自动注入 <a class="header-anchor" href="#自动注入" aria-label="Permalink to &quot;自动注入&quot;">​</a></h2><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Autowired</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 自动注入request</span></span>
<span class="line"><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">HttpServletRequest</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h4 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">org.springframework.context.support.AbstractApplicationContext#refresh</span></span>
<span class="line"><span style="color:#A6ACCD;">在spring进行初始化时调用</span></span>
<span class="line"><span style="color:#A6ACCD;">org.springframework.context.support.AbstractApplicationContext#postProcessBeanFactory</span></span>
<span class="line"><span style="color:#A6ACCD;">org.springframework.web.context.support.GenericWebApplicationContext#postProcessBeanFactory</span></span>
<span class="line"><span style="color:#A6ACCD;">注册web环境</span></span>
<span class="line"><span style="color:#A6ACCD;">org.springframework.web.context.support.WebApplicationContextUtils#registerWebApplicationScopes(org.springframework.beans.factory.config.ConfigurableListableBeanFactory, javax.servlet.ServletContext)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">向依赖容器中注册bean,在spring中创建bean时对依赖进行创建时会从容器中找</span></span>
<span class="line"><span style="color:#A6ACCD;">beanFactory.registerResolvableDependency(ServletRequest.class, new RequestObjectFactory());</span></span>
<span class="line"><span style="color:#A6ACCD;">		beanFactory.registerResolvableDependency(ServletResponse.class, new ResponseObjectFactory());</span></span>
<span class="line"><span style="color:#A6ACCD;">		beanFactory.registerResolvableDependency(HttpSession.class, new SessionObjectFactory());</span></span>
<span class="line"><span style="color:#A6ACCD;">		beanFactory.registerResolvableDependency(WebRequest.class, new WebRequestObjectFactory());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>即注入的是<code>org.springframework.web.context.support.WebApplicationContextUtils.RequestObjectFactory</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public ServletRequest getObject() {</span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取当前request</span></span>
<span class="line"><span style="color:#A6ACCD;">	return currentRequestAttributes().getRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;">}	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>RequestContextHolder中用threadLocal保存request</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">org.springframework.web.context.request.RequestContextHolder</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">private static final ThreadLocal&lt;RequestAttributes&gt; requestAttributesHolder =</span></span>
<span class="line"><span style="color:#A6ACCD;">			new NamedThreadLocal&lt;&gt;(&quot;Request attributes&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	private static final ThreadLocal&lt;RequestAttributes&gt; inheritableRequestAttributesHolder =</span></span>
<span class="line"><span style="color:#A6ACCD;">			new NamedInheritableThreadLocal&lt;&gt;(&quot;Request context&quot;);	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="线程安全性-1" tabindex="-1">线程安全性 <a class="header-anchor" href="#线程安全性-1" aria-label="Permalink to &quot;线程安全性&quot;">​</a></h4><p>根据上面的源码,每一个线程的request是隔离的</p><h4 id="优缺点-1" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点-1" aria-label="Permalink to &quot;优缺点&quot;">​</a></h4><p>该方法的主要优点：</p><ul><li><p>注入不局限于Controller中：在方法1中，只能在Controller中加入request参数。而对于方法2，不仅可以在Controller中注入，还可以在任何Bean中注入，包括Service、Repository及普通的Bean。</p></li><li><p>注入的对象不限于request：除了注入request对象，该方法还可以注入其他scope为request或session的对象，如response对象、session对象等；并保证线程安全。</p></li><li><p>减少代码冗余：只需要在需要request对象的Bean中注入request对象，便可以在该Bean的各个方法中使用，与方法1相比大大减少了代码冗余。</p></li></ul><p>但是，该方法也会存在代码冗余。考虑这样的场景：web系统中有很多controller，每个controller中都会使用request对象（这种场景实际上非常频繁），这时就需要写很多次注入request的代码；如果还需要注入response，代码就更繁琐了。<strong>可以在控制层基类中注入</strong></p><h2 id="手动调用" tabindex="-1">手动调用 <a class="header-anchor" href="#手动调用" aria-label="Permalink to &quot;手动调用&quot;">​</a></h2><h4 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">HttpServletRequest request = ((ServletRequestAttributes) (RequestContextHolder.currentRequestAttributes())).getRequest();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="线程安全性-2" tabindex="-1">线程安全性 <a class="header-anchor" href="#线程安全性-2" aria-label="Permalink to &quot;线程安全性&quot;">​</a></h4><p>和自动注入的获取方式一样,所以线程安全</p><h4 id="优缺点-2" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点-2" aria-label="Permalink to &quot;优缺点&quot;">​</a></h4><ul><li>优点：可以在非Bean中直接获取。</li><li>缺点：如果使用的地方较多，代码非常繁琐；因此可以与其他方法配合使用。</li></ul><p>参考:<a href="https://blog.csdn.net/fly910905/article/details/80013315" target="_blank" rel="noreferrer">https://blog.csdn.net/fly910905/article/details/80013315</a></p>`,31),r=[l];function o(p,c,i,u,d,C){return a(),s("div",null,r)}const b=e(n,[["render",o]]);export{A as __pageData,b as default};
