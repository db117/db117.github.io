(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{368:function(e,a,s){"use strict";s.r(a);var t=s(19),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"保存动态代理字节码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存动态代理字节码"}},[e._v("#")]),e._v(" 保存动态代理字节码")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// 设置系统属性jdk动态代理\nSystem.getProperties().put("sun.misc.ProxyGenerator.saveGeneratedFiles", "true"); \n// cglib 代理生成文件目录\nSystem.setProperty(DebuggingClassWriter.DEBUG_LOCATION_PROPERTY, "C:\\\\class");\n')])])]),s("h2",{attrs:{id:"string-hash碰撞字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-hash碰撞字符串"}},[e._v("#")]),e._v(" String hash碰撞字符串")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("BBBB AaAa AaBB\nhashcode->2031744\n")])])]),s("h2",{attrs:{id:"解决fastjson首字母默认小写问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决fastjson首字母默认小写问题"}},[e._v("#")]),e._v(" 解决FastJSON首字母默认小写问题")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("String jsonObject = JSONObject.toJSONString(对象,new PascalNameFilter());\n")])])]),s("p",[e._v("或者")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("TypeUtils.compatibleWithJavaBean = true;\n")])])]),s("h2",{attrs:{id:"properties配置文件中的换行-多行-的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties配置文件中的换行-多行-的坑"}},[e._v("#")]),e._v(" properties配置文件中的换行(多行)的坑")]),e._v(" "),s("p",[e._v("properties中都是以name=value这样的k-v字符串对形式保存的。\n在写properties文件时,如果value非常长,看起来是非常不方便的，可以用\\来换行(最后一行不需要)，如下 :")]),e._v(" "),s("p",[e._v("sonar.exclude=a.java "),s("br"),e._v("\nb.java \\")]),e._v(" "),s("p",[e._v("这里的坑就是\\必须是每行的"),s("strong",[e._v("最后一个字符")]),e._v("！")]),e._v(" "),s("h2",{attrs:{id:"spring-boot获取resource目录下文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot获取resource目录下文件"}},[e._v("#")]),e._v(" spring boot获取resource目录下文件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Resource resource = new ClassPathResource("resource目录下的文件路径");\nFile file = resource.getFile();\n// Resource为spring中的\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);