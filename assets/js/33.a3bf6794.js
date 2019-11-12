(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{235:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"controller中加参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controller中加参数"}},[e._v("#")]),e._v(" Controller中加参数")]),e._v(" "),s("blockquote",[s("p",[e._v("这种方法实现最简单,直接在参数中添加就可以使用")])]),e._v(" "),s("h4",{attrs:{id:"线程安全性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程安全性"}},[e._v("#")]),e._v(" 线程安全性")]),e._v(" "),s("p",[e._v("此时request对象是方法参数，相当于局部变量，毫无疑问是线程安全的。")]),e._v(" "),s("h4",{attrs:{id:"优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),s("p",[e._v("这种方法的主要缺点是request对象写起来冗余太多，主要体现在两点：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("如果多个controller方法中都需要request对象，那么在每个方法中都需要添加一遍request参数")])]),e._v(" "),s("li",[s("p",[e._v("request对象的获取只能从controller开始，如果使用request对象的地方在函数调用层级比较深的地方，那么整个调用链上的所有方法都需要添加request参数")])])]),e._v(" "),s("p",[e._v("实际上，在整个请求处理的过程中，request对象是贯穿始终的；也就是说，除了定时器等特殊情况，request对象相当于线程内部的一个全局变量。而该方法，相当于将这个全局变量，传来传去。")]),e._v(" "),s("h2",{attrs:{id:"自动注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动注入"}},[e._v("#")]),e._v(" 自动注入")]),e._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Autowired")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 自动注入request")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("HttpServletRequest")]),e._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" \n")])])]),s("h4",{attrs:{id:"源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[e._v("#")]),e._v(" 源码")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("org.springframework.context.support.AbstractApplicationContext#refresh\n在spring进行初始化时调用\norg.springframework.context.support.AbstractApplicationContext#postProcessBeanFactory\norg.springframework.web.context.support.GenericWebApplicationContext#postProcessBeanFactory\n注册web环境\norg.springframework.web.context.support.WebApplicationContextUtils#registerWebApplicationScopes(org.springframework.beans.factory.config.ConfigurableListableBeanFactory, javax.servlet.ServletContext)\n\n向依赖容器中注册bean,在spring中创建bean时对依赖进行创建时会从容器中找\nbeanFactory.registerResolvableDependency(ServletRequest.class, new RequestObjectFactory());\n\t\tbeanFactory.registerResolvableDependency(ServletResponse.class, new ResponseObjectFactory());\n\t\tbeanFactory.registerResolvableDependency(HttpSession.class, new SessionObjectFactory());\n\t\tbeanFactory.registerResolvableDependency(WebRequest.class, new WebRequestObjectFactory());\n")])])]),s("p",[e._v("即注入的是"),s("code",[e._v("org.springframework.web.context.support.WebApplicationContextUtils.RequestObjectFactory")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public ServletRequest getObject() {\n// 获取当前request\n\treturn currentRequestAttributes().getRequest();\n}\t\n")])])]),s("p",[e._v("RequestContextHolder中用threadLocal保存request")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('org.springframework.web.context.request.RequestContextHolder\n\nprivate static final ThreadLocal<RequestAttributes> requestAttributesHolder =\n\t\t\tnew NamedThreadLocal<>("Request attributes");\n\n\tprivate static final ThreadLocal<RequestAttributes> inheritableRequestAttributesHolder =\n\t\t\tnew NamedInheritableThreadLocal<>("Request context");\t\n')])])]),s("h4",{attrs:{id:"线程安全性-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程安全性-2"}},[e._v("#")]),e._v(" 线程安全性")]),e._v(" "),s("p",[e._v("根据上面的源码,每一个线程的request是隔离的")]),e._v(" "),s("h4",{attrs:{id:"优缺点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点-2"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),s("p",[e._v("该方法的主要优点：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("注入不局限于Controller中：在方法1中，只能在Controller中加入request参数。而对于方法2，不仅可以在Controller中注入，还可以在任何Bean中注入，包括Service、Repository及普通的Bean。")])]),e._v(" "),s("li",[s("p",[e._v("注入的对象不限于request：除了注入request对象，该方法还可以注入其他scope为request或session的对象，如response对象、session对象等；并保证线程安全。")])]),e._v(" "),s("li",[s("p",[e._v("减少代码冗余：只需要在需要request对象的Bean中注入request对象，便可以在该Bean的各个方法中使用，与方法1相比大大减少了代码冗余。")])])]),e._v(" "),s("p",[e._v("但是，该方法也会存在代码冗余。考虑这样的场景：web系统中有很多controller，每个controller中都会使用request对象（这种场景实际上非常频繁），这时就需要写很多次注入request的代码；如果还需要注入response，代码就更繁琐了。"),s("strong",[e._v("可以在控制层基类中注入")])]),e._v(" "),s("h2",{attrs:{id:"手动调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动调用"}},[e._v("#")]),e._v(" 手动调用")]),e._v(" "),s("h4",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[e._v("#")]),e._v(" 代码")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HttpServletRequest request = ((ServletRequestAttributes) (RequestContextHolder.currentRequestAttributes())).getRequest();\n")])])]),s("h4",{attrs:{id:"线程安全性-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程安全性-3"}},[e._v("#")]),e._v(" 线程安全性")]),e._v(" "),s("p",[e._v("和自动注入的获取方式一样,所以线程安全")]),e._v(" "),s("h4",{attrs:{id:"优缺点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点-3"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),s("ul",[s("li",[e._v("优点：可以在非Bean中直接获取。")]),e._v(" "),s("li",[e._v("缺点：如果使用的地方较多，代码非常繁琐；因此可以与其他方法配合使用。")])]),e._v(" "),s("p",[e._v("参考:https://blog.csdn.net/fly910905/article/details/80013315")])])}),[],!1,null,null,null);t.default=a.exports}}]);