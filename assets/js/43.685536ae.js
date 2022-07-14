(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{313:function(s,n,e){"use strict";e.r(n);var a=e(10),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[n("a",{attrs:{href:"https://bytebuddy.net/#/tutorial",target:"_blank",rel:"noopener noreferrer"}},[s._v("Byte Buddy - runtime code generation for the Java virtual machine"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/raphw/byte-buddy",target:"_blank",rel:"noopener noreferrer"}},[s._v("raphw/byte-buddy： Runtime code generation for the Java virtual machine. (github.com)"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("Byte Buddy是致力于解决字节码操作和 instrumentation API 的复杂性的开源框架。Byte Buddy 所声称的目标是将显式的字节码操作隐藏在一个类型安全的领域特定语言背后。通过使用 Byte Buddy，任何熟悉 Java 编程语言的人都有望非常容易地进行字节码操作。")])]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"主要类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要类"}},[s._v("#")]),s._v(" 主要类")]),s._v(" "),n("h4",{attrs:{id:"bytebuddy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bytebuddy"}},[s._v("#")]),s._v(" ByteBuddy")]),s._v(" "),n("blockquote",[n("p",[s._v("核心类，用于创建DynamicType.Builder。")])]),s._v(" "),n("h5",{attrs:{id:"常用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[s._v("#")]),s._v(" 常用方法")]),s._v(" "),n("ul",[n("li",[s._v("subclass ：继承一个类，新类名可以通过实现"),n("code",[s._v("NamingStrategy")]),s._v("来修改默认策略")]),s._v(" "),n("li",[s._v("redefine：修改一个类，如果修改了方法，则源方法会丢失")]),s._v(" "),n("li",[s._v("rebase：修改一个类，如果修改了方法，则原方法会重命名")])]),s._v(" "),n("h4",{attrs:{id:"namingstrategy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namingstrategy"}},[s._v("#")]),s._v(" NamingStrategy")]),s._v(" "),n("blockquote",[n("p",[s._v("用于子类名称生成策略")])]),s._v(" "),n("h4",{attrs:{id:"dynamictype-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamictype-builder"}},[s._v("#")]),s._v(" DynamicType.Builder")]),s._v(" "),n("blockquote",[n("p",[s._v("核心类，添加修改字段方法等操作")]),s._v(" "),n("p",[n("code",[s._v("DynamicType.Unloaded#load(java.lang.ClassLoader)")]),s._v("方法加载一个类，"),n("strong",[s._v("默认会包装一个"),n("code",[s._v("ClassLoader")])]),s._v("，并创建一个"),n("code",[s._v("DynamicType.Loaded")]),s._v("对象。")]),s._v(" "),n("p",[s._v("通过调用"),n("code",[s._v("DynamicType.Loaded#getLoaded")]),s._v("生成一个 class 对象")])]),s._v(" "),n("h5",{attrs:{id:"常用方法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用方法-2"}},[s._v("#")]),s._v(" 常用方法")]),s._v(" "),n("ul",[n("li",[s._v("method ：修改或覆盖源方法")]),s._v(" "),n("li",[s._v("field ：修改源字段")]),s._v(" "),n("li",[s._v("implement ：实现接口")]),s._v(" "),n("li",[s._v("defineField ：定义一个字段")]),s._v(" "),n("li",[s._v("defineMethod ： 定义一个方法")]),s._v(" "),n("li",[s._v("defineConstructor：定义一个构造函数")]),s._v(" "),n("li",[s._v("make：生成一个"),n("code",[s._v("DynamicType.Unloaded")]),s._v("。即未被加载的类定义。")])]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"常见用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见用法"}},[s._v("#")]),s._v(" 常见用法")]),s._v(" "),n("h5",{attrs:{id:"继承一个类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#继承一个类"}},[s._v("#")]),s._v(" 继承一个类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Class<?> type = new ByteBuddy()\n  .subclass(Object.class)\n  .make()\n  .load(getClass().getClassLoader(), ClassLoadingStrategy.Default.WRAPPER)\n  .getLoaded();\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h5",{attrs:{id:"重新定义类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新定义类"}},[s._v("#")]),s._v(" 重新定义类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Foo foo = new Foo();\nnew ByteBuddy()\n  .redefine(Bar.class)\n  .name(Foo.class.getName())// 指定名称\n  .make()\n  .load(Foo.class.getClassLoader(), ClassReloadingStrategy.fromInstalledAgent());\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h5",{attrs:{id:"修改方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改方法"}},[s._v("#")]),s._v(" 修改方法")]),s._v(" "),n("p",[s._v("固定返回值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('class Foo {\n  public String bar() { return null; }\n  public String foo() { return null; }\n  public String foo(Object o) { return null; }\n}\n \nFoo dynamicFoo = new ByteBuddy()\n  .subclass(Foo.class)\n  .method(isDeclaredBy(Foo.class)).intercept(FixedValue.value("One!"))// 所有的方法都返回 One\n  .method(named("foo")).intercept(FixedValue.value("Two!"))// 所有 foo 方法都返回 Two\n  .method(named("foo").and(takesArguments(1))).intercept(FixedValue.value("Three!"))// foo 方法参数只有一个的返回 Three\n  .make()\n  .load(getClass().getClassLoader())\n  .getLoaded()\n  .newInstance();\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("调用别的方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('class Source {\n  public String hello(String name) { return null; }\n}\n \nclass Target {\n\t// 有相同的方法签名优先\n  public static String hello(String name) {\n    return "Hello " + name + "!";\n  }\n}\n \nString helloWorld = new ByteBuddy()\n  .subclass(Source.class)\n  .method(named("hello")).intercept(MethodDelegation.to(Target.class))// 委托给 Target 类\n  .make()\n  .load(getClass().getClassLoader())\n  .getLoaded()\n  .newInstance()\n  .hello("World");\n  \n  class Target {\n  // 当没有相同签名的方法时会匹配到这个方法，应为 String 类型的入参比 Object 优先。类似于 java 方法匹配\n  public static String intercept(String name) { return "Hello " + name + "!"; }\n  public static String intercept(int i) { return Integer.toString(i); }\n  public static String intercept(Object o) { return o.toString(); }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("调用默认方法（java8）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('interface First {\n  default String qux() { return "FOO"; }\n}\n \ninterface Second {\n  default String qux() { return "BAR"; }\n}\n\nnew ByteBuddy(ClassFileVersion.JAVA_V8)\n  .subclass(Object.class)\n  .implement(First.class)\n  .implement(Second.class)\n  .method(named("qux")).intercept(DefaultMethodCall.prioritize(First.class))\n  .make()\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("指定注解")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@Retention(RetentionPolicy.RUNTIME)\n@interface RuntimeDefinition { }\nclass RuntimeDefinitionImpl implements RuntimeDefinition {\n  @Override\n  public Class<? extends Annotation> annotationType() {\n    return RuntimeDefinition.class;\n  }\n}\n\nnew ByteBuddy()\n  .subclass(Object.class)\n    .annotateType(new RuntimeDefinitionImpl())\t\t// 给类添加注解\n  .method(named("toString"))\n    .intercept(SuperMethodCall.INSTANCE)\t\t\t\t\t// 调用父类方法\n    .annotateMethod(new RuntimeDefinitionImpl()) \t// 给方法添加注解\n  .defineField("foo", Object.class)\n    .annotateField(new RuntimeDefinitionImpl())\t\t// 给字段添加注解\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);