import{_ as a,c as s,o as e,a as n}from"./app.55d73d08.js";const g=JSON.parse('{"title":"java","description":"","frontmatter":{"title":"java"},"headers":[{"level":2,"title":"java","slug":"java","link":"#java","children":[{"level":3,"title":"Java非静态代码块和静态代码块","slug":"java非静态代码块和静态代码块","link":"#java非静态代码块和静态代码块","children":[]}]},{"level":2,"title":"保存动态代理字节码","slug":"保存动态代理字节码","link":"#保存动态代理字节码","children":[]},{"level":2,"title":"String hash碰撞字符串","slug":"string-hash碰撞字符串","link":"#string-hash碰撞字符串","children":[]},{"level":2,"title":"解决FastJSON首字母默认小写问题","slug":"解决fastjson首字母默认小写问题","link":"#解决fastjson首字母默认小写问题","children":[]},{"level":2,"title":"properties配置文件中的换行(多行)的坑","slug":"properties配置文件中的换行-多行-的坑","link":"#properties配置文件中的换行-多行-的坑","children":[]},{"level":2,"title":"spring boot获取resource目录下文件","slug":"spring-boot获取resource目录下文件","link":"#spring-boot获取resource目录下文件","children":[]}],"relativePath":"java/index.md","lastUpdated":1677490656000}'),t={name:"java/index.md"},l=n(`<h2 id="java" tabindex="-1">java <a class="header-anchor" href="#java" aria-hidden="true">#</a></h2><h3 id="java非静态代码块和静态代码块" tabindex="-1">Java非静态代码块和静态代码块 <a class="header-anchor" href="#java非静态代码块和静态代码块" aria-hidden="true">#</a></h3><blockquote><p>类中存在两种特殊的代码块，即非静态代码块和静态代码块，前者是直接由 { } 括起来的代码，而后者是由 static{ } 括起来的代码。</p><p>非静态代码块在类初始化创建实例时，将会被提取到类的构造器中执行，但是，非静态代码块会比构造器中的代码块先被执行。</p></blockquote><h2 id="保存动态代理字节码" tabindex="-1">保存动态代理字节码 <a class="header-anchor" href="#保存动态代理字节码" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 设置系统属性jdk动态代理</span></span>
<span class="line"><span style="color:#A6ACCD;">System.getProperties().put(&quot;sun.misc.ProxyGenerator.saveGeneratedFiles&quot;, &quot;true&quot;); </span></span>
<span class="line"><span style="color:#A6ACCD;">// cglib 代理生成文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">System.setProperty(DebuggingClassWriter.DEBUG_LOCATION_PROPERTY, &quot;C:\\\\class&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="string-hash碰撞字符串" tabindex="-1">String hash碰撞字符串 <a class="header-anchor" href="#string-hash碰撞字符串" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">BBBB AaAa AaBB</span></span>
<span class="line"><span style="color:#A6ACCD;">hashcode-&gt;2031744</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="解决fastjson首字母默认小写问题" tabindex="-1">解决FastJSON首字母默认小写问题 <a class="header-anchor" href="#解决fastjson首字母默认小写问题" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">String jsonObject = JSONObject.toJSONString(对象,new PascalNameFilter());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">TypeUtils.compatibleWithJavaBean = true;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="properties配置文件中的换行-多行-的坑" tabindex="-1">properties配置文件中的换行(多行)的坑 <a class="header-anchor" href="#properties配置文件中的换行-多行-的坑" aria-hidden="true">#</a></h2><p>properties中都是以name=value这样的k-v字符串对形式保存的。 在写properties文件时,如果value非常长,看起来是非常不方便的，可以用\\来换行(最后一行不需要)，如下 :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sonar.exclude=a.java \\</span></span>
<span class="line"><span style="color:#A6ACCD;">b.java \\                     </span></span>
<span class="line"><span style="color:#A6ACCD;">这里的坑就是\\必须是每行的**最后一个字符**！</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="spring-boot获取resource目录下文件" tabindex="-1">spring boot获取resource目录下文件 <a class="header-anchor" href="#spring-boot获取resource目录下文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Resource resource = new ClassPathResource(&quot;resource目录下的文件路径&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">File file = resource.getFile();</span></span>
<span class="line"><span style="color:#A6ACCD;">// Resource为spring中的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="执行-java-class-文件引入jar包" tabindex="-1">执行 java class 文件引入jar包 <a class="header-anchor" href="#执行-java-class-文件引入jar包" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">java -classpath jar目录 class文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">java -classpath .:lib/* Run </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>备注：上面命令中是将当前（Run.class）目录下的lib目录下的所有jar包引入</p><h4 id="如何找到java-home" tabindex="-1">如何找到JAVA_HOME <a class="header-anchor" href="#如何找到java-home" aria-hidden="true">#</a></h4><blockquote><p>对于Linux和macOS ， 让我们使用 grep：</p><p>java -XshowSettings:properties -version 2&gt;&amp;1 &gt; /dev/null | grep &#39;java.home&#39;</p><p>对于Windows，让我们使用 findstr：</p><p>java -XshowSettings:properties -version 2&gt;&amp;1 | findstr &quot;java.home&quot;</p></blockquote><h4 id="通过系统变量方式实现代理" tabindex="-1">通过系统变量方式实现代理 <a class="header-anchor" href="#通过系统变量方式实现代理" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">System.setProperty(&quot;http.proxySet&quot;, &quot;true&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.setProperty(&quot;http.proxyHost&quot;, &quot;127.0.0.1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.setProperty(&quot;http.proxyPort&quot;, &quot;&quot; + &quot;7777&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>所以请求都使用这个代理</p><p>针对https</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">System.setProperty(&quot;https.proxyHost&quot;, &quot;127.0.0.1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.setProperty(&quot;https.proxyPort&quot;, &quot;7777&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="通过返回值来获取泛型类型" tabindex="-1">通过返回值来获取泛型类型 <a class="header-anchor" href="#通过返回值来获取泛型类型" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> public static &lt;T&gt; Class&lt;T&gt; a(T... reified) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	return (Class&lt;T&gt;) reified.getClass().getComponentType();</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,28),p=[l];function o(i,r,c,d,h,u){return e(),s("div",null,p)}const A=a(t,[["render",o]]);export{g as __pageData,A as default};