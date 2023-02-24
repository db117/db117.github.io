import{_ as e,c as a,o as t,a as i}from"./app.3d2db0cb.js";const m=JSON.parse('{"title":"spring Bean接口","description":"","frontmatter":{"title":"spring Bean接口"},"headers":[{"level":3,"title":"setBeanName 实现","slug":"setbeanname-实现","link":"#setbeanname-实现","children":[]},{"level":3,"title":"BeanFactoryAware 实现","slug":"beanfactoryaware-实现","link":"#beanfactoryaware-实现","children":[]},{"level":3,"title":"ApplicationContextAware 实现","slug":"applicationcontextaware-实现","link":"#applicationcontextaware-实现","children":[]},{"level":3,"title":"postProcessBeforeInitialization 接口实现 - 初始化预处理","slug":"postprocessbeforeinitialization-接口实现-初始化预处理","link":"#postprocessbeforeinitialization-接口实现-初始化预处理","children":[]},{"level":3,"title":"init-method","slug":"init-method","link":"#init-method","children":[]},{"level":3,"title":"postProcessAfterInitialization","slug":"postprocessafterinitialization","link":"#postprocessafterinitialization","children":[]},{"level":3,"title":"Destroy 过期自动清理阶段","slug":"destroy-过期自动清理阶段","link":"#destroy-过期自动清理阶段","children":[]},{"level":3,"title":"destroy-method 自配置清理","slug":"destroy-method-自配置清理","link":"#destroy-method-自配置清理","children":[]}],"relativePath":"java/spring/Spring Bean接口.md","lastUpdated":1677230567000}'),n={name:"java/spring/Spring Bean接口.md"},r=i('<h3 id="setbeanname-实现" tabindex="-1">setBeanName 实现 <a class="header-anchor" href="#setbeanname-实现" aria-hidden="true">#</a></h3><p>如果这个 Bean 已经实现了 BeanNameAware 接口,会调用它实现的 setBeanName(String)</p><p>方法,此处传递的就是 Spring 配置文件中 Bean 的 id 值</p><h3 id="beanfactoryaware-实现" tabindex="-1">BeanFactoryAware 实现 <a class="header-anchor" href="#beanfactoryaware-实现" aria-hidden="true">#</a></h3><p>如果这个 Bean 已经实现了 BeanFactoryAware 接口,会调用它实现的 setBeanFactory, setBeanFactory(BeanFactory)传递的是 Spring 工厂自身(可以用这个方式来获取其它 Bean, 只需在 Spring 配置文件中配置一个普通的 Bean 就可以)。</p><h3 id="applicationcontextaware-实现" tabindex="-1">ApplicationContextAware 实现 <a class="header-anchor" href="#applicationcontextaware-实现" aria-hidden="true">#</a></h3><p>如果这个 Bean 已经实现了 ApplicationContextAware 接口,会调用 setApplicationContext(ApplicationContext)方法,传入 Spring 上下文(同样这个方式也 可以实现步骤 BeanFactoryAware 的内容,但比 BeanFactoryAware更好,因为 ApplicationContext 是 BeanFactory 的子接口,有更多的实现方法)</p><h3 id="postprocessbeforeinitialization-接口实现-初始化预处理" tabindex="-1">postProcessBeforeInitialization 接口实现 - 初始化预处理 <a class="header-anchor" href="#postprocessbeforeinitialization-接口实现-初始化预处理" aria-hidden="true">#</a></h3><p>如果这个 Bean 关联了 BeanPostProcessor 接口,将会调用 postProcessBeforeInitialization(Object obj, String s)方法,BeanPostProcessor 经常被用 作是 Bean 内容的更改,并且由于这个是在 Bean 初始化结束时调用那个的方法,也可以被应 用于内存或缓存技术。</p><h3 id="init-method" tabindex="-1">init-method <a class="header-anchor" href="#init-method" aria-hidden="true">#</a></h3><p>如果 Bean 在 Spring 配置文件中配置了 init-method 属性会自动调用其配置的初始化方法。</p><h3 id="postprocessafterinitialization" tabindex="-1">postProcessAfterInitialization <a class="header-anchor" href="#postprocessafterinitialization" aria-hidden="true">#</a></h3><p>如果这个 Bean 关联了 BeanPostProcessor 接口,将会调用 postProcessAfterInitialization(Object obj, String s)方法。 注:以上工作完成以后就可以应用这个 Bean 了,那这个 Bean 是一个 Singleton 的,所以一 般情况下我们调用同一个 id 的 Bean 会是在内容地址相同的实例,当然在 Spring 配置文件中 也可以配置非 Singleton。</p><h3 id="destroy-过期自动清理阶段" tabindex="-1">Destroy 过期自动清理阶段 <a class="header-anchor" href="#destroy-过期自动清理阶段" aria-hidden="true">#</a></h3><p>当 Bean 不再需要时,会经过清理阶段,如果 Bean 实现了 DisposableBean 这个接口,会调 用那个其实现的 destroy()方法;</p><h3 id="destroy-method-自配置清理" tabindex="-1">destroy-method 自配置清理 <a class="header-anchor" href="#destroy-method-自配置清理" aria-hidden="true">#</a></h3><p>最后,如果这个 Bean 的 Spring 配置中配置了 destroy-method 属性,会自动调用其配置的</p><p>销毁方法。</p>',18),o=[r];function s(l,d,c,p,h,B){return t(),a("div",null,o)}const _=e(n,[["render",s]]);export{m as __pageData,_ as default};
