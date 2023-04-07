import{_ as s,c as a,o as n,U as l}from"./chunks/framework.6f6f51de.js";const m=JSON.parse('{"title":"arthas 诊断工具","description":"","frontmatter":{"title":"arthas 诊断工具"},"headers":[],"relativePath":"java/util/arthas.md","lastUpdated":1680861403000}'),p={name:"java/util/arthas.md"},e=l(`<blockquote><p><a href="https://arthas.aliyun.com/zh-cn/" target="_blank" rel="noreferrer">Arthas 应用诊断利器 (aliyun.com)</a></p><p><a href="https://github.com/alibaba/arthas" target="_blank" rel="noreferrer">alibaba/arthas: Alibaba Java Diagnostic Tool Arthas/Alibaba Java诊断利器Arthas (github.com)</a></p></blockquote><h3 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h3><h4 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 启动</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -O https://arthas.aliyun.com/arthas-boot.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">java -jar arthas-boot.jar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 仪表板</span></span>
<span class="line"><span style="color:#A6ACCD;">dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 反编译</span></span>
<span class="line"><span style="color:#A6ACCD;">jad demo.MathGame</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 通过watch命令来查看demo.MathGame#primeFactors函数的返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors returnObj</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 退出</span></span>
<span class="line"><span style="color:#A6ACCD;">quit</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"># 完全退出arthas</span></span>
<span class="line"><span style="color:#A6ACCD;">stop</span></span></code></pre></div><h4 id="jvm相关" tabindex="-1">jvm相关 <a class="header-anchor" href="#jvm相关" aria-label="Permalink to &quot;jvm相关&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 线程相关</span></span>
<span class="line"><span style="color:#A6ACCD;"># 当前最忙的前N个线程并打印堆栈</span></span>
<span class="line"><span style="color:#A6ACCD;">thread -n 3</span></span>
<span class="line"><span style="color:#A6ACCD;"># 当前阻塞其他线程的线程</span></span>
<span class="line"><span style="color:#A6ACCD;">thread -b</span></span>
<span class="line"><span style="color:#A6ACCD;"># 统计最近1000ms内的线程CPU时间</span></span>
<span class="line"><span style="color:#A6ACCD;">thread -i 1000</span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出1000ms内最忙的3个线程栈</span></span>
<span class="line"><span style="color:#A6ACCD;">thread -n 3 -i 1000</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看指定状态的线程</span></span>
<span class="line"><span style="color:#A6ACCD;">thread --state WAITING</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看当前JVM信息</span></span>
<span class="line"><span style="color:#A6ACCD;">jvm</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看当前JVM的系统属性</span></span>
<span class="line"><span style="color:#A6ACCD;">sysprop</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看单个属性</span></span>
<span class="line"><span style="color:#A6ACCD;">sysprop user.country</span></span>
<span class="line"><span style="color:#A6ACCD;"># 修改单个属性</span></span>
<span class="line"><span style="color:#A6ACCD;">sysprop user.country CN</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看当前JVM的环境属性</span></span>
<span class="line"><span style="color:#A6ACCD;">sysenv</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看单个环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">sysenv JAVA_HOME</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看VM诊断相关的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">vmoption</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看指定的option</span></span>
<span class="line"><span style="color:#A6ACCD;">vmoption PrintGC</span></span>
<span class="line"><span style="color:#A6ACCD;"># 更新指定的option</span></span>
<span class="line"><span style="color:#A6ACCD;">vmoption PrintGC true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># dump到指定文件</span></span>
<span class="line"><span style="color:#A6ACCD;">heapdump /tmp/dump.hprof</span></span>
<span class="line"><span style="color:#A6ACCD;"># 只dump live对象</span></span>
<span class="line"><span style="color:#A6ACCD;">heapdump --live /tmp/dump.hprof</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 强制GC</span></span>
<span class="line"><span style="color:#A6ACCD;">vmtool --action forceGc</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看前 10 个 String 对象实例</span></span>
<span class="line"><span style="color:#A6ACCD;">vmtool --action getInstances --className java.lang.String --limit 10</span></span></code></pre></div><h4 id="class-classloader相关" tabindex="-1">class/classloader相关 <a class="header-anchor" href="#class-classloader相关" aria-label="Permalink to &quot;class/classloader相关&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">234# 模糊搜索</span></span>
<span class="line"><span style="color:#A6ACCD;">sc demo.*</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打印类的详细信息</span></span>
<span class="line"><span style="color:#A6ACCD;">sc -d demo.MathGame</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打印出类的Field信息</span></span>
<span class="line"><span style="color:#A6ACCD;">sc -d -f demo.MathGame</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看已加载类的方法信息</span></span>
<span class="line"><span style="color:#A6ACCD;">sm java.lang.String</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看指定方法详情</span></span>
<span class="line"><span style="color:#A6ACCD;">sm -d java.lang.String toString</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 反编译指定的类</span></span>
<span class="line"><span style="color:#A6ACCD;">jad java.lang.String</span></span>
<span class="line"><span style="color:#A6ACCD;"># 反编译指定的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">jad java.lang.String toString</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 替换正在运行的类</span></span>
<span class="line"><span style="color:#A6ACCD;"># 反编译需要修改的类</span></span>
<span class="line"><span style="color:#A6ACCD;">jad --source-only com.example.demo.arthas.user.UserController &gt; /tmp/UserController.java</span></span>
<span class="line"><span style="color:#A6ACCD;"># 编译修改完的类</span></span>
<span class="line"><span style="color:#A6ACCD;">mc /tmp/UserController.java -d /tmp</span></span>
<span class="line"><span style="color:#A6ACCD;"># 替换掉</span></span>
<span class="line"><span style="color:#A6ACCD;">retransform /tmp/com/example/demo/arthas/user/UserController.class</span></span>
<span class="line"><span style="color:#A6ACCD;"># 消除 retransform 的影响</span></span>
<span class="line"><span style="color:#A6ACCD;">retransform -l 					# 查看已经修改过的</span></span>
<span class="line"><span style="color:#A6ACCD;">retransform -d 1 				# 删除指定的</span></span>
<span class="line"><span style="color:#A6ACCD;">retransform --deleteAll	# 删除所有的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 按类加载类型查看统计信息</span></span>
<span class="line"><span style="color:#A6ACCD;">classloader</span></span>
<span class="line"><span style="color:#A6ACCD;"># 按类加载实例查看统计信息</span></span>
<span class="line"><span style="color:#A6ACCD;">classloader -l</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看ClassLoader的继承树</span></span>
<span class="line"><span style="color:#A6ACCD;">classloader -t</span></span></code></pre></div><h4 id="监控相关" tabindex="-1">监控相关 <a class="header-anchor" href="#监控相关" aria-label="Permalink to &quot;监控相关&quot;">​</a></h4><blockquote><p>请注意，这些命令，都通过字节码增强技术来实现的，会在指定类的方法中插入一些切面来实现数据统计和观测，因此在线上、预发使用时，请尽量明确需要观测的类、方法以及条件，诊断结束要执行 <code>stop</code> 或将增强过的类执行 <code>reset</code> 命令</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 监控方法执行情况</span></span>
<span class="line"><span style="color:#A6ACCD;"># 每 5 秒统计一次指定方法执行情况</span></span>
<span class="line"><span style="color:#A6ACCD;">monitor -c 5 demo.MathGame primeFactors</span></span>
<span class="line"><span style="color:#A6ACCD;"># 计算条件表达式过滤统计结果(方法执行完毕之后)</span></span>
<span class="line"><span style="color:#A6ACCD;">monitor -c 5 demo.MathGame primeFactors &quot;params[0] &lt;= 2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 计算条件表达式过滤统计结果(方法执行完毕之前)</span></span>
<span class="line"><span style="color:#A6ACCD;">monitor -b -c 5 com.test.testes.MathGame primeFactors &quot;params[0] &lt;= 2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 函数执行情况</span></span>
<span class="line"><span style="color:#A6ACCD;"># 观察函数调用返回时的参数、this对象和返回值，遍历深度 2</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 观察函数调用入口的参数和返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors &quot;{params,returnObj}&quot; -x 2 -b</span></span>
<span class="line"><span style="color:#A6ACCD;"># 同时观察函数调用前和函数返回后 2 次</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors &quot;{params,target,returnObj}&quot; -x 2 -b -s -n 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 观察异常信息</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors &quot;{params[0],throwExp}&quot; -e -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 按照耗时进行过滤</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors &#39;{params, returnObj}&#39; &#39;#cost&gt;200&#39; -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 观察当前对象中的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">watch demo.MathGame primeFactors &#39;target.illegalArgumentCount&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 追踪方法执行，并限制捕捉次数</span></span>
<span class="line"><span style="color:#A6ACCD;">trace demo.MathGame run -n 1</span></span>
<span class="line"><span style="color:#A6ACCD;"># 包含jdk的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">trace --skipJDKMethod false demo.MathGame run</span></span>
<span class="line"><span style="color:#A6ACCD;"># 据调用耗时过滤</span></span>
<span class="line"><span style="color:#A6ACCD;">trace demo.MathGame run &#39;#cost &gt; 10&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 输出当前方法被调用的调用路径</span></span>
<span class="line"><span style="color:#A6ACCD;">stack demo.MathGame primeFactors</span></span>
<span class="line"><span style="color:#A6ACCD;"># 据条件表达式来过滤</span></span>
<span class="line"><span style="color:#A6ACCD;">stack demo.MathGame primeFactors &#39;params[0]&lt;0&#39; -n 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 据执行时间来过滤</span></span>
<span class="line"><span style="color:#A6ACCD;">stack demo.MathGame primeFactors &#39;#cost&gt;5&#39;</span></span></code></pre></div><h4 id="ognl" tabindex="-1">ognl <a class="header-anchor" href="#ognl" aria-label="Permalink to &quot;ognl&quot;">​</a></h4><p>可以在表达式中直接使用</p><table><thead><tr><th>变量名</th><th>变量解释</th></tr></thead><tbody><tr><td>loader</td><td>本次调用类所在的 ClassLoader</td></tr><tr><td>clazz</td><td>本次调用类的 Class 引用</td></tr><tr><td>method</td><td>本次调用方法反射引用</td></tr><tr><td>target</td><td>本次调用类的实例</td></tr><tr><td>params</td><td>本次调用参数列表，这是一个数组，如果方法是无参方法则为空数组</td></tr><tr><td>returnObj</td><td>本次调用返回的对象。当且仅当 <code>isReturn==true</code> 成立时候有效，表明方法调用是以正常返回的方式结束。如果当前方法无返回值 <code>void</code>，则值为 null</td></tr><tr><td>throwExp</td><td>本次调用抛出的异常。当且仅当 <code>isThrow==true</code> 成立时有效，表明方法调用是以抛出异常的方式结束。</td></tr><tr><td>isBefore</td><td>辅助判断标记，当前的通知节点有可能是在方法一开始就通知，此时 <code>isBefore==true</code> 成立，同时 <code>isThrow==false</code> 和 <code>isReturn==false</code>，因为在方法刚开始时，还无法确定方法调用将会如何结束。</td></tr><tr><td>isThrow</td><td>辅助判断标记，当前的方法调用以抛异常的形式结束。</td></tr><tr><td>isReturn</td><td>辅助判断标记，当前的方法调用以正常返回的形式结束。</td></tr></tbody></table><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看第一个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看第一个参数的size</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0].size()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 按条件过滤，第一个参数 name 为 null 的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0].{? #this.name == null }&quot; -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 过滤后统计，第一个参数 age 大于 10 的数量</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0].{? #this.age &gt; 10 }.size()&quot; -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 判断字符串相等</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.demo.Test test &#39;params[0]==&quot;xyz&quot;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 判断long型</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.demo.Test test &#39;params[0]==123456789L&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 子表达式求值</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0].{? #this.age &gt; 10 }.size().(#this &gt; 20 ? #this - 10 : #this + 10)&quot; -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 选择第一个满足条件</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0].{^ #this.name != null}&quot; -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 选择最后一个满足条件</span></span>
<span class="line"><span style="color:#A6ACCD;">watch com.taobao.container.Test test &quot;params[0].{^ #this.name != null}.size()&quot; -x 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用新版本中的getstatic命令，通过-c指定classloader，可以查看任意static变量，同时支持ognl表达式处理</span></span>
<span class="line"><span style="color:#A6ACCD;">getstatic com.alibaba.arthas.Test n &#39;entrySet().iterator.{? #this.key.name()==&quot;STOP&quot;}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用OGNL表达式获取spring bean 时，bean 的字段值显示是null，但调用字段的get方法显示有值</span></span>
<span class="line"><span style="color:#A6ACCD;">ognl  &#39;#springContext=@com.utils.SpringContextUtils@applicationContext,</span></span>
<span class="line"><span style="color:#A6ACCD;">#bean=#springContext.getBean(&quot;beanName&quot;)&#39;.CGLIB$CALLBACK_0.advised.targetSource.target \` -c 11531931 -x 2</span></span></code></pre></div>`,15),t=[e];function o(c,r,C,i,A,d){return n(),a("div",null,t)}const D=s(p,[["render",o]]);export{m as __pageData,D as default};
