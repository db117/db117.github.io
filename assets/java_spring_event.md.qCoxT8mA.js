import{_ as t,c as o,o as n,a5 as e,j as i}from"./chunks/framework.CyS7wUzW.js";const m=JSON.parse('{"title":"Spring event","description":"","frontmatter":{"title":"Spring event"},"headers":[],"relativePath":"java/spring/event.md","filePath":"java/spring/event.md"}'),a={name:"java/spring/event.md"},c=e('<blockquote><p>记录 spring 框架中的一些事件发送时机以及简单使用。</p></blockquote><h3 id="主要对象" tabindex="-1">主要对象 <a class="header-anchor" href="#主要对象" aria-label="Permalink to &quot;主要对象&quot;">​</a></h3><ul><li><code>ApplicationEventPublisher</code><ul><li>发送事件的顶级接口</li></ul></li><li><code>ApplicationListener</code><ul><li>监听事件的顶级接口</li><li>继承<code>java.util.EventListener</code></li></ul></li><li><code>ApplicationEvent</code><ul><li>顶级事件对象，在特定的时机会发生不同的事件。</li></ul></li><li><code>@EventListener</code><ul><li>通过注解方式创建<code>ApplicationListener</code></li><li><code>@TransactionalEventListener</code></li></ul></li></ul><h3 id="eventlistener实现方式" tabindex="-1">@EventListener实现方式 <a class="header-anchor" href="#eventlistener实现方式" aria-label="Permalink to &quot;@EventListener实现方式&quot;">​</a></h3>',4),l=i("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/647ed53262920078257f645c"},null,-1),d=e('<blockquote><p>简单说就是通过 <code>BeanFactoryPostProcessor</code> 添加 <code>EventListenerFactory</code>，然后在<code>spring</code>所有单例非延迟加载的 Bean 都实例化完后</p><p>通过<code>SmartInitializingSingleton#afterSingletonsInstantiated</code>找到所有有<code>@EventListener</code>的方法，创建监听器并添加到容器中。</p></blockquote><hr><h3 id="transactionaleventlistener-实现" tabindex="-1">@TransactionalEventListener 实现 <a class="header-anchor" href="#transactionaleventlistener-实现" aria-label="Permalink to &quot;@TransactionalEventListener 实现&quot;">​</a></h3><blockquote><p>整体流程和<code>@EventListener</code>一致，只是使用<code>TransactionalEventListenerFactory</code>来创建<code>TransactionalApplicationListenerMethodAdapter</code>。</p><p>在处理事件时，会通过<code>TransactionSynchronizationManager</code>注册<code>TransactionalApplicationListenerSynchronization</code>。在特定情况下执行注解所在的方法。</p></blockquote><hr><h3 id="常见事件" tabindex="-1">常见事件 <a class="header-anchor" href="#常见事件" aria-label="Permalink to &quot;常见事件&quot;">​</a></h3><ul><li><p><code>ContextRefreshedEvent</code>: 当<code>ApplicationContext</code>被初始化或刷新时发送，即当应用程序上下文被完全初始化并可以使用时。</p></li><li><p><code>ContextStartedEvent</code>: 当<code>ApplicationContext</code>被启动时发送，即当应用程序上下文开始执行时。</p></li><li><p><code>ContextStoppedEvent</code>: 当<code>ApplicationContext</code>被停止时发送，即当应用程序上下文停止执行时。</p></li><li><p><code>ContextClosedEvent</code>: 当<code>ApplicationContext</code>被关闭时发送，即当应用程序上下文被销毁时。</p></li><li><p><code>RequestHandledEvent</code>: 当HTTP请求被处理完毕后发送，即当HTTP请求处理完成并响应发送回客户端时。</p></li><li><p><code>ApplicationStartedEvent</code>: 当Spring Boot应用程序启动时发送，即当Spring Boot启动并准备好接受请求时。</p></li><li><p><code>ApplicationReadyEvent</code>: 当Spring Boot应用程序准备好接受请求时发送，即当Spring Boot启动并应用程序上下文已准备好接受请求时。</p></li><li><p><code>ApplicationStoppedEvent</code>: 当Spring Boot应用程序停止时发送，即当Spring Boot应用程序停止运行时。</p></li></ul>',7),r=[c,l,d];function p(s,_,h,v,u,S){return n(),o("div",null,r)}const T=t(a,[["render",p]]);export{m as __pageData,T as default};
