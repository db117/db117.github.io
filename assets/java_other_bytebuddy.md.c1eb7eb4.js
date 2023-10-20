import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.54cab62e.js";const g=JSON.parse('{"title":"byte-buddy 简单使用","description":"","frontmatter":{"title":"byte-buddy 简单使用"},"headers":[],"relativePath":"java/other/bytebuddy.md","filePath":"java/other/bytebuddy.md","lastUpdated":1697773070000}'),l={name:"java/other/bytebuddy.md"},p=a(`<blockquote><p><a href="https://bytebuddy.net/#/tutorial" target="_blank" rel="noreferrer">Byte Buddy - runtime code generation for the Java virtual machine</a></p><p><a href="https://github.com/raphw/byte-buddy" target="_blank" rel="noreferrer">raphw/byte-buddy： Runtime code generation for the Java virtual machine. (github.com)</a></p><p>Byte Buddy是致力于解决字节码操作和 instrumentation API 的复杂性的开源框架。Byte Buddy 所声称的目标是将显式的字节码操作隐藏在一个类型安全的领域特定语言背后。通过使用 Byte Buddy，任何熟悉 Java 编程语言的人都有望非常容易地进行字节码操作。</p></blockquote><hr><h3 id="主要类" tabindex="-1">主要类 <a class="header-anchor" href="#主要类" aria-label="Permalink to &quot;主要类&quot;">​</a></h3><h4 id="bytebuddy" tabindex="-1">ByteBuddy <a class="header-anchor" href="#bytebuddy" aria-label="Permalink to &quot;ByteBuddy&quot;">​</a></h4><blockquote><p>核心类，用于创建DynamicType.Builder。</p></blockquote><h5 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h5><ul><li>subclass ：继承一个类，新类名可以通过实现<code>NamingStrategy</code>来修改默认策略</li><li>redefine：修改一个类，如果修改了方法，则源方法会丢失</li><li>rebase：修改一个类，如果修改了方法，则原方法会重命名</li></ul><h4 id="namingstrategy" tabindex="-1">NamingStrategy <a class="header-anchor" href="#namingstrategy" aria-label="Permalink to &quot;NamingStrategy&quot;">​</a></h4><blockquote><p>用于子类名称生成策略</p></blockquote><h4 id="dynamictype-builder" tabindex="-1">DynamicType.Builder <a class="header-anchor" href="#dynamictype-builder" aria-label="Permalink to &quot;DynamicType.Builder&quot;">​</a></h4><blockquote><p>核心类，添加修改字段方法等操作</p><p><code>DynamicType.Unloaded#load(java.lang.ClassLoader)</code>方法加载一个类，<strong>默认会包装一个<code>ClassLoader</code></strong>，并创建一个<code>DynamicType.Loaded</code>对象。</p><p>通过调用<code>DynamicType.Loaded#getLoaded</code>生成一个 class 对象</p></blockquote><h5 id="常用方法-1" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法-1" aria-label="Permalink to &quot;常用方法&quot;">​</a></h5><ul><li>method ：修改或覆盖源方法</li><li>field ：修改源字段</li><li>implement ：实现接口</li><li>defineField ：定义一个字段</li><li>defineMethod ： 定义一个方法</li><li>defineConstructor：定义一个构造函数</li><li>make：生成一个<code>DynamicType.Unloaded</code>。即未被加载的类定义。</li></ul><hr><h3 id="常见用法" tabindex="-1">常见用法 <a class="header-anchor" href="#常见用法" aria-label="Permalink to &quot;常见用法&quot;">​</a></h3><h5 id="继承一个类" tabindex="-1">继承一个类 <a class="header-anchor" href="#继承一个类" aria-label="Permalink to &quot;继承一个类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Class&lt;?&gt; type = new ByteBuddy()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .subclass(Object.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .make()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .load(getClass().getClassLoader(), ClassLoadingStrategy.Default.WRAPPER)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .getLoaded();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Class&lt;?&gt; type = new ByteBuddy()</span></span>
<span class="line"><span style="color:#24292e;">  .subclass(Object.class)</span></span>
<span class="line"><span style="color:#24292e;">  .make()</span></span>
<span class="line"><span style="color:#24292e;">  .load(getClass().getClassLoader(), ClassLoadingStrategy.Default.WRAPPER)</span></span>
<span class="line"><span style="color:#24292e;">  .getLoaded();</span></span></code></pre></div><h5 id="重新定义类" tabindex="-1">重新定义类 <a class="header-anchor" href="#重新定义类" aria-label="Permalink to &quot;重新定义类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Foo foo = new Foo();</span></span>
<span class="line"><span style="color:#e1e4e8;">new ByteBuddy()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .redefine(Bar.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .name(Foo.class.getName())// 指定名称</span></span>
<span class="line"><span style="color:#e1e4e8;">  .make()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .load(Foo.class.getClassLoader(), ClassReloadingStrategy.fromInstalledAgent());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Foo foo = new Foo();</span></span>
<span class="line"><span style="color:#24292e;">new ByteBuddy()</span></span>
<span class="line"><span style="color:#24292e;">  .redefine(Bar.class)</span></span>
<span class="line"><span style="color:#24292e;">  .name(Foo.class.getName())// 指定名称</span></span>
<span class="line"><span style="color:#24292e;">  .make()</span></span>
<span class="line"><span style="color:#24292e;">  .load(Foo.class.getClassLoader(), ClassReloadingStrategy.fromInstalledAgent());</span></span></code></pre></div><h5 id="修改方法" tabindex="-1">修改方法 <a class="header-anchor" href="#修改方法" aria-label="Permalink to &quot;修改方法&quot;">​</a></h5><p>固定返回值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Foo {</span></span>
<span class="line"><span style="color:#e1e4e8;">  public String bar() { return null; }</span></span>
<span class="line"><span style="color:#e1e4e8;">  public String foo() { return null; }</span></span>
<span class="line"><span style="color:#e1e4e8;">  public String foo(Object o) { return null; }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">Foo dynamicFoo = new ByteBuddy()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .subclass(Foo.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .method(isDeclaredBy(Foo.class)).intercept(FixedValue.value(&quot;One!&quot;))// 所有的方法都返回 One</span></span>
<span class="line"><span style="color:#e1e4e8;">  .method(named(&quot;foo&quot;)).intercept(FixedValue.value(&quot;Two!&quot;))// 所有 foo 方法都返回 Two</span></span>
<span class="line"><span style="color:#e1e4e8;">  .method(named(&quot;foo&quot;).and(takesArguments(1))).intercept(FixedValue.value(&quot;Three!&quot;))// foo 方法参数只有一个的返回 Three</span></span>
<span class="line"><span style="color:#e1e4e8;">  .make()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .load(getClass().getClassLoader())</span></span>
<span class="line"><span style="color:#e1e4e8;">  .getLoaded()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .newInstance();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Foo {</span></span>
<span class="line"><span style="color:#24292e;">  public String bar() { return null; }</span></span>
<span class="line"><span style="color:#24292e;">  public String foo() { return null; }</span></span>
<span class="line"><span style="color:#24292e;">  public String foo(Object o) { return null; }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">Foo dynamicFoo = new ByteBuddy()</span></span>
<span class="line"><span style="color:#24292e;">  .subclass(Foo.class)</span></span>
<span class="line"><span style="color:#24292e;">  .method(isDeclaredBy(Foo.class)).intercept(FixedValue.value(&quot;One!&quot;))// 所有的方法都返回 One</span></span>
<span class="line"><span style="color:#24292e;">  .method(named(&quot;foo&quot;)).intercept(FixedValue.value(&quot;Two!&quot;))// 所有 foo 方法都返回 Two</span></span>
<span class="line"><span style="color:#24292e;">  .method(named(&quot;foo&quot;).and(takesArguments(1))).intercept(FixedValue.value(&quot;Three!&quot;))// foo 方法参数只有一个的返回 Three</span></span>
<span class="line"><span style="color:#24292e;">  .make()</span></span>
<span class="line"><span style="color:#24292e;">  .load(getClass().getClassLoader())</span></span>
<span class="line"><span style="color:#24292e;">  .getLoaded()</span></span>
<span class="line"><span style="color:#24292e;">  .newInstance();</span></span></code></pre></div><p>调用别的方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Source {</span></span>
<span class="line"><span style="color:#e1e4e8;">  public String hello(String name) { return null; }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">class Target {</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 有相同的方法签名优先</span></span>
<span class="line"><span style="color:#e1e4e8;">  public static String hello(String name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &quot;Hello &quot; + name + &quot;!&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">String helloWorld = new ByteBuddy()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .subclass(Source.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .method(named(&quot;hello&quot;)).intercept(MethodDelegation.to(Target.class))// 委托给 Target 类</span></span>
<span class="line"><span style="color:#e1e4e8;">  .make()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .load(getClass().getClassLoader())</span></span>
<span class="line"><span style="color:#e1e4e8;">  .getLoaded()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .newInstance()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .hello(&quot;World&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  class Target {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 当没有相同签名的方法时会匹配到这个方法，应为 String 类型的入参比 Object 优先。类似于 java 方法匹配</span></span>
<span class="line"><span style="color:#e1e4e8;">  public static String intercept(String name) { return &quot;Hello &quot; + name + &quot;!&quot;; }</span></span>
<span class="line"><span style="color:#e1e4e8;">  public static String intercept(int i) { return Integer.toString(i); }</span></span>
<span class="line"><span style="color:#e1e4e8;">  public static String intercept(Object o) { return o.toString(); }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Source {</span></span>
<span class="line"><span style="color:#24292e;">  public String hello(String name) { return null; }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">class Target {</span></span>
<span class="line"><span style="color:#24292e;">	// 有相同的方法签名优先</span></span>
<span class="line"><span style="color:#24292e;">  public static String hello(String name) {</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;Hello &quot; + name + &quot;!&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">String helloWorld = new ByteBuddy()</span></span>
<span class="line"><span style="color:#24292e;">  .subclass(Source.class)</span></span>
<span class="line"><span style="color:#24292e;">  .method(named(&quot;hello&quot;)).intercept(MethodDelegation.to(Target.class))// 委托给 Target 类</span></span>
<span class="line"><span style="color:#24292e;">  .make()</span></span>
<span class="line"><span style="color:#24292e;">  .load(getClass().getClassLoader())</span></span>
<span class="line"><span style="color:#24292e;">  .getLoaded()</span></span>
<span class="line"><span style="color:#24292e;">  .newInstance()</span></span>
<span class="line"><span style="color:#24292e;">  .hello(&quot;World&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  class Target {</span></span>
<span class="line"><span style="color:#24292e;">  // 当没有相同签名的方法时会匹配到这个方法，应为 String 类型的入参比 Object 优先。类似于 java 方法匹配</span></span>
<span class="line"><span style="color:#24292e;">  public static String intercept(String name) { return &quot;Hello &quot; + name + &quot;!&quot;; }</span></span>
<span class="line"><span style="color:#24292e;">  public static String intercept(int i) { return Integer.toString(i); }</span></span>
<span class="line"><span style="color:#24292e;">  public static String intercept(Object o) { return o.toString(); }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>调用默认方法（java8）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">interface First {</span></span>
<span class="line"><span style="color:#e1e4e8;">  default String qux() { return &quot;FOO&quot;; }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">interface Second {</span></span>
<span class="line"><span style="color:#e1e4e8;">  default String qux() { return &quot;BAR&quot;; }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">new ByteBuddy(ClassFileVersion.JAVA_V8)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .subclass(Object.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .implement(First.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .implement(Second.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .method(named(&quot;qux&quot;)).intercept(DefaultMethodCall.prioritize(First.class))</span></span>
<span class="line"><span style="color:#e1e4e8;">  .make()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">interface First {</span></span>
<span class="line"><span style="color:#24292e;">  default String qux() { return &quot;FOO&quot;; }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">interface Second {</span></span>
<span class="line"><span style="color:#24292e;">  default String qux() { return &quot;BAR&quot;; }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">new ByteBuddy(ClassFileVersion.JAVA_V8)</span></span>
<span class="line"><span style="color:#24292e;">  .subclass(Object.class)</span></span>
<span class="line"><span style="color:#24292e;">  .implement(First.class)</span></span>
<span class="line"><span style="color:#24292e;">  .implement(Second.class)</span></span>
<span class="line"><span style="color:#24292e;">  .method(named(&quot;qux&quot;)).intercept(DefaultMethodCall.prioritize(First.class))</span></span>
<span class="line"><span style="color:#24292e;">  .make()</span></span></code></pre></div><p>指定注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#e1e4e8;">@interface RuntimeDefinition { }</span></span>
<span class="line"><span style="color:#e1e4e8;">class RuntimeDefinitionImpl implements RuntimeDefinition {</span></span>
<span class="line"><span style="color:#e1e4e8;">  @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">  public Class&lt;? extends Annotation&gt; annotationType() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return RuntimeDefinition.class;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">new ByteBuddy()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .subclass(Object.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">    .annotateType(new RuntimeDefinitionImpl())		// 给类添加注解</span></span>
<span class="line"><span style="color:#e1e4e8;">  .method(named(&quot;toString&quot;))</span></span>
<span class="line"><span style="color:#e1e4e8;">    .intercept(SuperMethodCall.INSTANCE)					// 调用父类方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    .annotateMethod(new RuntimeDefinitionImpl()) 	// 给方法添加注解</span></span>
<span class="line"><span style="color:#e1e4e8;">  .defineField(&quot;foo&quot;, Object.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">    .annotateField(new RuntimeDefinitionImpl())		// 给字段添加注解</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#24292e;">@interface RuntimeDefinition { }</span></span>
<span class="line"><span style="color:#24292e;">class RuntimeDefinitionImpl implements RuntimeDefinition {</span></span>
<span class="line"><span style="color:#24292e;">  @Override</span></span>
<span class="line"><span style="color:#24292e;">  public Class&lt;? extends Annotation&gt; annotationType() {</span></span>
<span class="line"><span style="color:#24292e;">    return RuntimeDefinition.class;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">new ByteBuddy()</span></span>
<span class="line"><span style="color:#24292e;">  .subclass(Object.class)</span></span>
<span class="line"><span style="color:#24292e;">    .annotateType(new RuntimeDefinitionImpl())		// 给类添加注解</span></span>
<span class="line"><span style="color:#24292e;">  .method(named(&quot;toString&quot;))</span></span>
<span class="line"><span style="color:#24292e;">    .intercept(SuperMethodCall.INSTANCE)					// 调用父类方法</span></span>
<span class="line"><span style="color:#24292e;">    .annotateMethod(new RuntimeDefinitionImpl()) 	// 给方法添加注解</span></span>
<span class="line"><span style="color:#24292e;">  .defineField(&quot;foo&quot;, Object.class)</span></span>
<span class="line"><span style="color:#24292e;">    .annotateField(new RuntimeDefinitionImpl())		// 给字段添加注解</span></span></code></pre></div>`,28),t=[p];function o(c,i,r,d,u,y){return n(),e("div",null,t)}const m=s(l,[["render",o]]);export{g as __pageData,m as default};
