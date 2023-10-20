import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.54cab62e.js";const m=JSON.parse('{"title":"mockito","description":"","frontmatter":{"title":"mockito"},"headers":[],"relativePath":"util/unit-test/mockito.md","filePath":"util/unit-test/mockito.md","lastUpdated":1697773070000}'),l={name:"util/unit-test/mockito.md"},o=a(`<blockquote><p>一个在 Java 单元测试中模拟校验数据的框架</p><p><a href="https://github.com/mockito/mockito" target="_blank" rel="noreferrer">mockito/mockito: Most popular Mocking framework for unit tests written in Java (github.com)</a></p><p><a href="https://site.mockito.org/" target="_blank" rel="noreferrer">Mockito framework site</a></p></blockquote><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h4 id="mock-和-spy-区别" tabindex="-1">mock 和 spy 区别 <a class="header-anchor" href="#mock-和-spy-区别" aria-label="Permalink to &quot;mock 和 spy 区别&quot;">​</a></h4><ul><li>mock 出的对象是 null 的上面都没有，没有插桩返回默认值</li><li>spy 出的对象是真实的对象、在没有插桩的情况下执行真实的方法</li><li>spy 在执行 <code>when().return()</code>时会先执行真实方法,再执行插桩的方法,需用 <code>doReturn().when()</code></li><li><code>Answer</code>和<code>Throw</code>同上</li></ul><h4 id="模拟数据" tabindex="-1">模拟数据 <a class="header-anchor" href="#模拟数据" aria-label="Permalink to &quot;模拟数据&quot;">​</a></h4><blockquote><p>有多种方式实现，但是常用注解方式。</p></blockquote><p>在需要插桩的对象、接口上面添加注解<code>@Mock</code>、<code>@Spy</code>、<code>Captor</code>，在需要测试的对象上添加注解<code>@InjectMocks</code>然后调用<code>MockitoAnnotations#openMocks()</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">org.mockito.internal.stubbing.defaultanswers.ReturnsEmptyValues#returnValueFor</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">org.mockito.internal.stubbing.defaultanswers.ReturnsEmptyValues#returnValueFor</span></span></code></pre></div><h4 id="常用api" tabindex="-1">常用api <a class="header-anchor" href="#常用api" aria-label="Permalink to &quot;常用api&quot;">​</a></h4><ul><li>mock <ul><li>参数带 <code>Class </code> 的是通过参数来获取具体对象类型的</li><li>参数没有带 <code>Class </code> 的是用来返回值的泛型来获取对象类型的</li></ul></li><li>mockConstruction <ul><li>模拟构造函数，很少使用</li></ul></li><li>mockStatic <ul><li>模拟静态方法</li></ul></li><li>spy <ul><li>模拟对象，再没有插桩下调用的是真实方法</li><li>spy 在执行 <code>when().return()</code>时会先执行真实方法,再执行插桩的方法,需用 <code>doReturn().when()</code></li></ul></li><li>when <ul><li>核心api，开启插桩。</li></ul></li></ul><h5 id="执行插桩" tabindex="-1">执行插桩 <a class="header-anchor" href="#执行插桩" aria-label="Permalink to &quot;执行插桩&quot;">​</a></h5><ul><li><p>doReturn</p><ul><li><p>最常用的方法，模拟返回值。</p></li><li><p>可以传入多个返回值，依次返回。</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">		doReturn(&quot;foo&quot;, &quot;bar&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                .doThrow(new RuntimeException())</span></span>
<span class="line"><span style="color:#e1e4e8;">                .doReturn(430L, new byte[0], &quot;qix&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                .when(mock)</span></span>
<span class="line"><span style="color:#e1e4e8;">                .objectReturningMethodNoArgs();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;foo&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;bar&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            mock.objectReturningMethodNoArgs();</span></span>
<span class="line"><span style="color:#e1e4e8;">            fail(&quot;exception not raised&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (RuntimeException expected) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(430L);</span></span>
<span class="line"><span style="color:#e1e4e8;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(new byte[0]);</span></span>
<span class="line"><span style="color:#e1e4e8;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;qix&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;qix&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">		doReturn(&quot;foo&quot;, &quot;bar&quot;)</span></span>
<span class="line"><span style="color:#24292e;">                .doThrow(new RuntimeException())</span></span>
<span class="line"><span style="color:#24292e;">                .doReturn(430L, new byte[0], &quot;qix&quot;)</span></span>
<span class="line"><span style="color:#24292e;">                .when(mock)</span></span>
<span class="line"><span style="color:#24292e;">                .objectReturningMethodNoArgs();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;foo&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;bar&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            mock.objectReturningMethodNoArgs();</span></span>
<span class="line"><span style="color:#24292e;">            fail(&quot;exception not raised&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (RuntimeException expected) {</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(430L);</span></span>
<span class="line"><span style="color:#24292e;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(new byte[0]);</span></span>
<span class="line"><span style="color:#24292e;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;qix&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        assertThat(mock.objectReturningMethodNoArgs()).isEqualTo(&quot;qix&quot;);</span></span></code></pre></div></li></ul></li><li><p>​ doThrow</p><ul><li>同 doReturn</li></ul></li><li><p>doNothing</p><ul><li><p>常见于<code>void</code>返回值的方法，模拟一次调用。</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">   doNothing().</span></span>
<span class="line"><span style="color:#e1e4e8;">   doThrow(new RuntimeException())</span></span>
<span class="line"><span style="color:#e1e4e8;">   .when(mock).returnVoidMethod();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   // 第一次调用，什么都没有执行</span></span>
<span class="line"><span style="color:#e1e4e8;">   mock.returnVoidMethod();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   // 第二次抛出异常</span></span>
<span class="line"><span style="color:#e1e4e8;">   mock.returnVoidMethod();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">   doNothing().</span></span>
<span class="line"><span style="color:#24292e;">   doThrow(new RuntimeException())</span></span>
<span class="line"><span style="color:#24292e;">   .when(mock).returnVoidMethod();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   // 第一次调用，什么都没有执行</span></span>
<span class="line"><span style="color:#24292e;">   mock.returnVoidMethod();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   // 第二次抛出异常</span></span>
<span class="line"><span style="color:#24292e;">   mock.returnVoidMethod();</span></span></code></pre></div></li></ul></li><li><p>doCallRealMethod</p><ul><li>调用真实方法，只有在历史代码上面才会这么干。属于填坑</li></ul></li><li><p>doAnswer</p><ul><li>通过<code>org.mockito.stubbing.Answer</code>构造返回值</li><li>再模拟返回 <code>void</code>的方法时需要返回 null</li></ul></li></ul><h5 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h5><ul><li><p>after</p><ul><li><p>需要在后面接上验证模式</p></li><li><p>在指定时间内进行校验，如果校验失败则直接抛出异常</p></li><li><p>在指定时间结束时，未满足条件也会抛出异常</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">   // 100ms 内，被调用 1 次</span></span>
<span class="line"><span style="color:#e1e4e8;">   verify(mock, after(100)).someMethod();</span></span>
<span class="line"><span style="color:#e1e4e8;">   // 100ms 内，被调用 1 次</span></span>
<span class="line"><span style="color:#e1e4e8;">   verify(mock, after(100).times(1)).someMethod();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   // 100ms 内，被调用 2 次</span></span>
<span class="line"><span style="color:#e1e4e8;">   verify(mock, after(100).times(2)).someMethod();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   // 100ms 内，被调用 0 次</span></span>
<span class="line"><span style="color:#e1e4e8;">   verify(mock, after(100).never()).someMethod();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">   // 100ms 内，被调用 1 次</span></span>
<span class="line"><span style="color:#24292e;">   verify(mock, after(100)).someMethod();</span></span>
<span class="line"><span style="color:#24292e;">   // 100ms 内，被调用 1 次</span></span>
<span class="line"><span style="color:#24292e;">   verify(mock, after(100).times(1)).someMethod();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   // 100ms 内，被调用 2 次</span></span>
<span class="line"><span style="color:#24292e;">   verify(mock, after(100).times(2)).someMethod();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   // 100ms 内，被调用 0 次</span></span>
<span class="line"><span style="color:#24292e;">   verify(mock, after(100).never()).someMethod();</span></span></code></pre></div></li></ul></li><li><p>timeout</p><ul><li><p>使用方式和<code>after</code>一样</p></li><li><p>但是timeout再满足条件后直接返回<code>success</code>，但是<code>after</code>需要等到时间结束才返回</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">   //1.</span></span>
<span class="line"><span style="color:#e1e4e8;">   mock.foo();</span></span>
<span class="line"><span style="color:#e1e4e8;">   verify(mock, after(1000)).foo();</span></span>
<span class="line"><span style="color:#e1e4e8;">   // 等 1000 ms</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   //2.</span></span>
<span class="line"><span style="color:#e1e4e8;">   mock.foo();</span></span>
<span class="line"><span style="color:#e1e4e8;">   verify(mock, timeout(1000)).foo();</span></span>
<span class="line"><span style="color:#e1e4e8;">   // 直接返回</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">   //1.</span></span>
<span class="line"><span style="color:#24292e;">   mock.foo();</span></span>
<span class="line"><span style="color:#24292e;">   verify(mock, after(1000)).foo();</span></span>
<span class="line"><span style="color:#24292e;">   // 等 1000 ms</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   //2.</span></span>
<span class="line"><span style="color:#24292e;">   mock.foo();</span></span>
<span class="line"><span style="color:#24292e;">   verify(mock, timeout(1000)).foo();</span></span>
<span class="line"><span style="color:#24292e;">   // 直接返回</span></span></code></pre></div></li></ul></li><li><p>atLeast，atLeastOnce</p><ul><li>最少调用次数</li></ul></li><li><p>atMostOnce，atMost</p><ul><li>最多调用次数</li></ul></li><li><p>times</p><ul><li>指定调用次数</li></ul></li><li><p>only</p><ul><li>是否是唯一调用的方法</li><li>和<code>verifyNoMoreInteractions</code>有相同的功能。</li></ul></li><li><p>verifyNoInteractions</p><ul><li>验证没有插桩的方法被调用</li></ul></li><li><p>verifyNoMoreInteractions</p><ul><li>验证没有非插桩方法被调用</li></ul></li><li><p>inOrder</p><ul><li>验证方法调用顺序</li></ul></li><li><p>calls</p><ul><li>指定调用次数</li><li>只能在<code>inOrder</code>使用</li></ul></li></ul><h5 id="参数捕捉" tabindex="-1">参数捕捉 <a class="header-anchor" href="#参数捕捉" aria-label="Permalink to &quot;参数捕捉&quot;">​</a></h5><blockquote><p>使用<code>@Captor</code>标记在<code>ArgumentCaptor</code>上。</p><p>在每一个插桩的方法都有一个栈来保存方法执行的参数，参数捕捉就是直接获取栈顶的数据。</p></blockquote><pre><code>     @Captor ArgumentCaptor&lt;Person&gt; captor;
     
     // when
     createPerson(&quot;Wes&quot;, &quot;Williams&quot;);
        
    // then
    ArgumentCaptor&lt;Person&gt; captor = ArgumentCaptor.forClass(Person.class);
    verify(peopleRepository).save(captor.capture());
    assertEquals(&quot;Wes&quot;, captor.getValue().getName());
    assertEquals(&quot;Williams&quot;, captor.getValue().getSurname());
</code></pre>`,17),p=[o];function t(c,i,r,u,d,h){return e(),n("div",null,p)}const k=s(l,[["render",t]]);export{m as __pageData,k as default};
