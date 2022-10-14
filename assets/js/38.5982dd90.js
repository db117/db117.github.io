(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{315:function(e,a,t){"use strict";t.r(a);var r=t(10),_=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[e._v("#")]),e._v(" 流程图")]),e._v(" "),a("ul",[a("li",[e._v("MyBatis 整体执行流程图")])]),e._v(" "),a("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/6194d85463768938bc8f076e"}}),e._v(" "),a("ul",[a("li",[a("p",[e._v("MyBatis 整合 Spring 流程图")]),e._v(" "),a("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/6197805563768938bc95b5c1"}})])]),e._v(" "),a("h3",{attrs:{id:"主要组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要组件"}},[e._v("#")]),e._v(" 主要组件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Executor")]),e._v(" "),a("blockquote",[a("p",[e._v("sql执行器接口,主要用于维护一级缓存和二级缓存,并且提供事务管理功能")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("BaseExecutor：一级缓存")]),e._v(" "),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("     batchExecutor：批量执行器\n")])])])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("     ReUseExecutor：可重用的\n")])])])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("     SimpleExecutor：简单的\n")])])])]),e._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("     CacheExecutor：加入了二级缓存\n")])])])])])])])]),e._v(" "),a("li",[a("p",[e._v("ParameterHandler")]),e._v(" "),a("blockquote",[a("p",[e._v("参数处理")])])]),e._v(" "),a("li",[a("p",[e._v("ResultSetHandler")]),e._v(" "),a("blockquote",[a("p",[e._v("处理返回值")])])]),e._v(" "),a("li",[a("p",[e._v("StatementHandler")]),e._v(" "),a("blockquote",[a("p",[e._v("处理Statement")])])]),e._v(" "),a("li",[a("p",[e._v("SqlSession")]),e._v(" "),a("blockquote",[a("p",[e._v("执行sql，通过调用Executor执行")])])]),e._v(" "),a("li",[a("p",[e._v("SqlSessionFactory")]),e._v(" "),a("blockquote",[a("p",[e._v("获取SqlSession")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Interceptor")])]),e._v(" "),a("blockquote",[a("p",[e._v("拦截器,可以在创建时拦截Executor，ParameterHandler，ResultSetHandler，StatementHandler。")]),e._v(" "),a("p",[e._v("先通过"),a("code",[e._v("@Signature")]),e._v("进行筛选过滤然后通过 jdk 动态代理，一层层的包装实现装饰器模式。")])])]),e._v(" "),a("li",[a("p",[e._v("MapperProxy")]),e._v(" "),a("blockquote",[a("p",[e._v("mapper 代理对象的"),a("code",[e._v("InvocationHandler")]),e._v("接口，所有 mapper 实际都走这个类。")])])]),e._v(" "),a("li",[a("p",[e._v("MapperMethod")]),e._v(" "),a("blockquote",[a("p",[e._v("真正干活的类，通过"),a("code",[e._v("org.apache.ibatis.binding.MapperMethod#execute")]),e._v("来执行数据库操作。")])])]),e._v(" "),a("li",[a("p",[e._v("Configuration")]),e._v(" "),a("blockquote",[a("p",[e._v("核心配置类，包含几乎所有东西。")])])]),e._v(" "),a("li",[a("p",[e._v("MappedStatement")]),e._v(" "),a("blockquote",[a("p",[e._v("对应所有 mapper 方法，保存有执行语句，返回值处理器等信息。")])])]),e._v(" "),a("li",[a("p",[e._v("MapperRegistry")]),e._v(" "),a("blockquote",[a("p",[e._v("注册 mapper，通过"),a("code",[e._v("org.apache.ibatis.builder.annotation.MapperAnnotationBuilder#parse")]),e._v("解析 mapper 接口，通过"),a("code",[e._v("org.apache.ibatis.builder.annotation.MapperAnnotationBuilder#parseStatement")]),e._v("解析各种注解。生成 mapper 代理对象。")])])])]),e._v(" "),a("h3",{attrs:{id:"整合-spring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整合-spring"}},[e._v("#")]),e._v(" 整合 Spring")]),e._v(" "),a("h4",{attrs:{id:"主要组件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要组件-2"}},[e._v("#")]),e._v(" 主要组件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("MapperScannerRegistrar")]),e._v(" "),a("blockquote",[a("p",[e._v("通过"),a("code",[e._v("@MapperScans")]),e._v("注入，向 Spring 容器中注册"),a("code",[e._v("MapperScannerConfigurer")])])])]),e._v(" "),a("li",[a("p",[e._v("MapperScannerConfigurer")]),e._v(" "),a("blockquote",[a("p",[e._v("通过"),a("code",[e._v("ClassPathMapperScanner#doScan")]),e._v("扫描"),a("code",[e._v("@MapperScans")]),e._v("中设置的包，并向 Spring 容器中注册"),a("code",[e._v("MapperFactoryBean")]),e._v("，并设置其"),a("code",[e._v("autowireMode")]),e._v("为"),a("code",[e._v("AUTOWIRE_BY_TYPE")])])])]),e._v(" "),a("li",[a("p",[e._v("MapperFactoryBean")]),e._v(" "),a("blockquote",[a("p",[e._v("所有 mqpper 都会包装成这个类注入到 Spring 容器中。通过属性"),a("code",[e._v("mapperInterface")]),e._v("执行实际 mapper。通过"),a("code",[e._v("AUTOWIRE_BY_TYPE")]),e._v("在创建是自动注入"),a("code",[e._v("SqlSessionTemplate")]),e._v("。在 Spring 获取对象时通过"),a("code",[e._v("MapperProxyFactory#newInstance")]),e._v("创建代理对象。")])])]),e._v(" "),a("li",[a("p",[e._v("SqlSessionTemplate")]),e._v(" "),a("blockquote",[a("p",[e._v("通过内部类"),a("code",[e._v("SqlSessionInterceptor#invoke")]),e._v("生成代理对象。适配 Spring 的事务管理。")])])]),e._v(" "),a("li",[a("p",[e._v("SqlSessionFactoryBean")]),e._v(" "),a("blockquote",[a("p",[e._v("核心配置类，需要自行注入到 spring 容器中。在 Spring 创建对象时，调用"),a("code",[e._v("SqlSessionFactoryBean#buildSqlSessionFactory加载一系列配置，并配置plugin，TypeHandler,二级缓存等信息，扫描并通过")]),e._v("XMLMapperBuilder`加载所有 mapper")])])])]),e._v(" "),a("h3",{attrs:{id:"小细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小细节"}},[e._v("#")]),e._v(" 小细节")]),e._v(" "),a("ul",[a("li",[e._v("xml 特殊字符，可以使用 "),a("code",[e._v("<![CDATA[ ]]>")]),e._v("包起来")])])])}),[],!1,null,null,null);a.default=_.exports}}]);