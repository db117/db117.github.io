import{_ as n,c as a,o as s,a5 as e}from"./chunks/framework.CDo-_4TQ.js";const m=JSON.parse('{"title":"CompletableFuture","description":"","frontmatter":{"title":"CompletableFuture"},"headers":[],"relativePath":"java/concurrent/CompletableFuture.md","filePath":"java/concurrent/CompletableFuture.md","lastUpdated":1721634331000}'),p={name:"java/concurrent/CompletableFuture.md"},l=e(`<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p><code>CompletableFuture</code>是对Future的扩展和增强。<code>CompletableFuture</code>实现了Future接口，并在此基础上进行了丰富的扩展，完美弥补了Future的局限性，同时<code>CompletableFuture</code>实现了对任务编排的能力。借助这项能力，可以轻松地组织不同任务的运行顺序、规则以及方式。<code>CompletionStage</code>接口定义了任务编排的方法，执行某一阶段，可以向下执行后续阶段。</p><ul><li>默认线程池是<code>ForkJoinPool.commonPool()</code>，使用的时候最好使用自定义的线程池。</li><li>方法中没有带<code>async</code>的会有相同的线程执行，否则会在线程池里面执行。</li></ul><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><h3 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h3><p>依赖关系</p><ul><li><code>thenApply()</code>：把前面任务的执行结果，交给后面的Function</li><li><code>thenCompose()</code>：用来连接两个有依赖关系的任务，结果由第二个任务返回</li></ul><p>and集合关系</p><ul><li><code>thenCombine()</code>：合并任务，有返回值</li><li><code>thenAccepetBoth()</code>：两个任务执行完成后，将结果交给<code>thenAccepetBoth</code>处理，无返回值</li><li><code>runAfterBoth()</code>：两个任务都执行完成后，执行下一步操作(Runnable类型任务)</li></ul><p>or聚合关系</p><ul><li><code>applyToEither()</code>：两个任务哪个执行的快，就使用哪一个结果，有返回值</li><li><code>acceptEither()</code>：两个任务哪个执行的快，就消费哪一个结果，无返回值</li><li><code>runAfterEither()</code>：任意一个任务执行完成，进行下一步操作(Runnable类型任务)</li></ul><p>并行执行</p><ul><li><code>allOf()</code>：当所有给定的 <code>CompletableFuture</code> 完成时，返回一个新的 <code>CompletableFuture</code></li><li><code>anyOf()</code>：当任何一个给定的<code>CompletablFuture</code>完成时，返回一个新的<code>CompletableFuture</code></li></ul><p>结果处理</p><ul><li><code>whenComplete</code>：当任务完成时，将使用结果(或 null)和此阶段的异常(或 null如果没有)执行给定操作</li><li><code>exceptionally</code>：返回一个新的<code>CompletableFuture</code>，当前面的<code>CompletableFuture</code>完成时，它也完成，当它异常完成时，给定函数的异常触发这个<code>CompletableFuture</code>的完成</li></ul><h3 id="异步操作" tabindex="-1">异步操作 <a class="header-anchor" href="#异步操作" aria-label="Permalink to &quot;异步操作&quot;">​</a></h3><p>如果指定了线程池这使用指定的线程池，不然就用<code>ForkJoinPool.commonPool()</code></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 没有返回值</span></span>
<span class="line"><span>public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable)</span></span>
<span class="line"><span>public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable, Executor executor)</span></span>
<span class="line"><span>// 有返回值</span></span>
<span class="line"><span>public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier)</span></span>
<span class="line"><span>public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier, Executor executor)</span></span></code></pre></div><h3 id="获取结果" tabindex="-1">获取结果 <a class="header-anchor" href="#获取结果" aria-label="Permalink to &quot;获取结果&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// get 方法需要用户处理异常</span></span>
<span class="line"><span>get(long timeout, TimeUnit unit)</span></span>
<span class="line"><span>get()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>join()</span></span></code></pre></div><h3 id="结果处理" tabindex="-1">结果处理 <a class="header-anchor" href="#结果处理" aria-label="Permalink to &quot;结果处理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 任务结束了进行处理</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; whenComplete(BiConsumer&lt;? super T,? super Throwable&gt; action)</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; whenCompleteAsync(BiConsumer&lt;? super T,? super Throwable&gt; action)</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; whenCompleteAsync(BiConsumer&lt;? super T,? super Throwable&gt; action, Executor executor)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有异常了进行处理，返回一个对象</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; exceptionally(Function&lt;Throwable, ? extends T&gt; fn)</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; exceptionallyAsync(Function&lt;Throwable, ? extends T&gt; fn)</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; exceptionallyAsync(Function&lt;Throwable, ? extends T&gt; fn, Executor executor)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有异常了处理成一个 CompletableFuture</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; exceptionallyCompose(Function&lt;Throwable, ? extends CompletionStage&lt;T&gt;&gt; fn)</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; exceptionallyComposeAsync(Function&lt;Throwable, ? extends CompletionStage&lt;T&gt;&gt; fn)</span></span>
<span class="line"><span>public CompletableFuture&lt;T&gt; exceptionallyComposeAsync(Function&lt;Throwable, ? extends CompletionStage&lt;T&gt;&gt; fn,Executor executor)</span></span></code></pre></div><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><h3 id="异步任务" tabindex="-1">异步任务 <a class="header-anchor" href="#异步任务" aria-label="Permalink to &quot;异步任务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -&gt; {</span></span>
<span class="line"><span>    // 执行耗时的网络请求</span></span>
<span class="line"><span>    return performNetworkRequest();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>future.thenApply(result -&gt; {</span></span>
<span class="line"><span>    // 对结果进行处理</span></span>
<span class="line"><span>    return processResult(result);</span></span>
<span class="line"><span>}).thenAccept(finalResult -&gt; {</span></span>
<span class="line"><span>    // 执行最终的结果处理</span></span>
<span class="line"><span>    System.out.println(&quot;Final result: &quot; + finalResult);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String result = future.get(); // 阻塞等待任务完成并获取结果</span></span></code></pre></div><h3 id="并行任务的执行" tabindex="-1">并行任务的执行 <a class="header-anchor" href="#并行任务的执行" aria-label="Permalink to &quot;并行任务的执行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CompletableFuture&lt;String&gt; request1 = CompletableFuture.supplyAsync(() -&gt; performNetworkRequest1());</span></span>
<span class="line"><span>CompletableFuture&lt;String&gt; request2 = CompletableFuture.supplyAsync(() -&gt; performNetworkRequest2());</span></span>
<span class="line"><span>CompletableFuture&lt;String&gt; request3 = CompletableFuture.supplyAsync(() -&gt; performNetworkRequest3());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CompletableFuture&lt;Void&gt; allRequests = CompletableFuture.allOf(request1, request2, request3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>allRequests.thenRun(() -&gt; {</span></span>
<span class="line"><span>    // 所有请求完成后执行汇总或处理</span></span>
<span class="line"><span>    String result1 = request1.join();</span></span>
<span class="line"><span>    String result2 = request2.join();</span></span>
<span class="line"><span>    String result3 = request3.join();</span></span>
<span class="line"><span>    // 处理结果</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="异常处理和容错机制" tabindex="-1">异常处理和容错机制 <a class="header-anchor" href="#异常处理和容错机制" aria-label="Permalink to &quot;异常处理和容错机制&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -&gt; {</span></span>
<span class="line"><span>    // 可能会抛出异常的任务</span></span>
<span class="line"><span>    if (someCondition) {</span></span>
<span class="line"><span>        throw new RuntimeException(&quot;An error occurred&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return &quot;Success&quot;;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>future.exceptionally(ex -&gt; {</span></span>
<span class="line"><span>    // 处理异常情况</span></span>
<span class="line"><span>    System.out.println(&quot;Exception: &quot; + ex.getMessage());</span></span>
<span class="line"><span>    return &quot;Default value&quot;;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>future.handle((result, ex) -&gt; {</span></span>
<span class="line"><span>    // 处理结果和异常</span></span>
<span class="line"><span>    if (ex != null) {</span></span>
<span class="line"><span>        System.out.println(&quot;Exception: &quot; + ex.getMessage());</span></span>
<span class="line"><span>        return &quot;Default value&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="替代-java-util-concurrent-countdownlatch-的功能" tabindex="-1">替代 <code>java.util.concurrent.CountDownLatch</code> 的功能 <a class="header-anchor" href="#替代-java-util-concurrent-countdownlatch-的功能" aria-label="Permalink to &quot;替代 \`java.util.concurrent.CountDownLatch\` 的功能&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import java.util.concurrent.CompletableFuture;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CompletableFutureCountDownLatchExample {</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        int taskCount = 5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        CompletableFuture&lt;Void&gt; latchFuture = new CompletableFuture&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int i = 0; i &lt; taskCount; i++) {</span></span>
<span class="line"><span>            int taskId = i;</span></span>
<span class="line"><span>            CompletableFuture.runAsync(() -&gt; {</span></span>
<span class="line"><span>                // 执行任务</span></span>
<span class="line"><span>                System.out.println(&quot;Task &quot; + taskId + &quot; started&quot;);</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    // 模拟任务执行时间</span></span>
<span class="line"><span>                    TimeUnit.SECONDS.sleep(2);</span></span>
<span class="line"><span>                } catch (InterruptedException e) {</span></span>
<span class="line"><span>                    e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                System.out.println(&quot;Task &quot; + taskId + &quot; completed&quot;);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        latchFuture.thenRun(() -&gt; {</span></span>
<span class="line"><span>            // 所有任务完成后执行的操作</span></span>
<span class="line"><span>            System.out.println(&quot;All tasks completed&quot;);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待所有任务完成</span></span>
<span class="line"><span>        latchFuture.join();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,31),t=[l];function i(o,c,u,r,d,h){return s(),a("div",null,t)}const g=n(p,[["render",i]]);export{m as __pageData,g as default};
