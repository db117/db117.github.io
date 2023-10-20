import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const g=JSON.parse('{"title":"redis","description":"","frontmatter":{"title":"redis"},"headers":[],"relativePath":"database/redis/index.md","filePath":"database/redis/index.md","lastUpdated":1697773070000}'),l={name:"database/redis/index.md"},p=e(`<blockquote><p><a href="http://www.redis.cn/" target="_blank" rel="noreferrer">CRUG网站 (redis.cn)</a></p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><h4 id="连接服务" tabindex="-1">连接服务 <a class="header-anchor" href="#连接服务" aria-label="Permalink to &quot;连接服务&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 直接输入密码</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli -h &lt;host&gt; -p &lt;port&gt; -a &lt;password&gt; -n 0（数据库）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 先登录后输入密码</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli -h &lt;host&gt; -p &lt;port&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">auth &lt;password&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出</span></span>
<span class="line"><span style="color:#e1e4e8;">quit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 直接输入密码</span></span>
<span class="line"><span style="color:#24292e;">redis-cli -h &lt;host&gt; -p &lt;port&gt; -a &lt;password&gt; -n 0（数据库）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 先登录后输入密码</span></span>
<span class="line"><span style="color:#24292e;">redis-cli -h &lt;host&gt; -p &lt;port&gt;</span></span>
<span class="line"><span style="color:#24292e;">auth &lt;password&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 退出</span></span>
<span class="line"><span style="color:#24292e;">quit</span></span></code></pre></div><h4 id="锁" tabindex="-1">锁 <a class="header-anchor" href="#锁" aria-label="Permalink to &quot;锁&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SET &lt;key&gt;  &lt;value&gt; NX EX &lt;max-lock-time&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SET &lt;key&gt;  &lt;value&gt; NX EX &lt;max-lock-time&gt;</span></span></code></pre></div><h4 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span></code></pre></div><h4 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 使用 UNLINK 异步删除</span></span>
<span class="line"><span style="color:#e1e4e8;"># 看需要添加 host port password db</span></span>
<span class="line"><span style="color:#e1e4e8;"># ksys</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli KEYS key* （查找条件） | xargs redis-cli UNLINK </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 使用 scan</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli scan 0 match &quot;匹配内容&quot; count 扫描数量 | xargs -t  redis-cli  UNLINK</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 使用 UNLINK 异步删除</span></span>
<span class="line"><span style="color:#24292e;"># 看需要添加 host port password db</span></span>
<span class="line"><span style="color:#24292e;"># ksys</span></span>
<span class="line"><span style="color:#24292e;">redis-cli KEYS key* （查找条件） | xargs redis-cli UNLINK </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 使用 scan</span></span>
<span class="line"><span style="color:#24292e;">redis-cli scan 0 match &quot;匹配内容&quot; count 扫描数量 | xargs -t  redis-cli  UNLINK</span></span></code></pre></div><p>网上搜的脚本</p><p><a href="https://blog.csdn.net/wen3qin/article/details/120789060" target="_blank" rel="noreferrer">redis如何优雅删除大量的key？_八号码农的博客-CSDN博客_redis 删除多个key</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">#定义变量《根据个人需要填写》</span></span>
<span class="line"><span style="color:#e1e4e8;">redis_url=地址</span></span>
<span class="line"><span style="color:#e1e4e8;">redis_pass=密码</span></span>
<span class="line"><span style="color:#e1e4e8;">redis_db=操作DB</span></span>
<span class="line"><span style="color:#e1e4e8;">scan_patten=匹配字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">scan_count=扫描数量</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">yb=0</span></span>
<span class="line"><span style="color:#e1e4e8;">#0：循环获取游标进行遍历</span></span>
<span class="line"><span style="color:#e1e4e8;">while 1&gt;0</span></span>
<span class="line"><span style="color:#e1e4e8;">do</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">count=0</span></span>
<span class="line"><span style="color:#e1e4e8;">declare -a array</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#1：扫描获取结果</span></span>
<span class="line"><span style="color:#e1e4e8;">declare -a result</span></span>
<span class="line"><span style="color:#e1e4e8;">for i in \`redis-cli -h $redis_url -a $redis_pass -n $redis_db scan $yb match $scan_patten count $scan_count\`;do</span></span>
<span class="line"><span style="color:#e1e4e8;">		result[\${count}]=\${i}</span></span>
<span class="line"><span style="color:#e1e4e8;">    count=$(expr \${count} + 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">done</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#2：设置游标值</span></span>
<span class="line"><span style="color:#e1e4e8;">yb=\${result[0]}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#3：赋值array,打印寻找到的key值</span></span>
<span class="line"><span style="color:#e1e4e8;">for j in \${!result[@]}</span></span>
<span class="line"><span style="color:#e1e4e8;">do		</span></span>
<span class="line"><span style="color:#e1e4e8;">		if [ $j -gt 0 ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    then echo \${result[$j]}</span></span>
<span class="line"><span style="color:#e1e4e8;">    array[\${count}]=\${result[$j]}</span></span>
<span class="line"><span style="color:#e1e4e8;">    fi</span></span>
<span class="line"><span style="color:#e1e4e8;">done    </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#4：批量删除key值</span></span>
<span class="line"><span style="color:#e1e4e8;">		if [ \${#array[@]} -gt 0 ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    then </span></span>
<span class="line"><span style="color:#e1e4e8;">    #\${result[$j]}</span></span>
<span class="line"><span style="color:#e1e4e8;">    echo \${array[@]} | xargs -t redis-cli -h $redis_url -a $redis_pass -n $redis_db del </span></span>
<span class="line"><span style="color:#e1e4e8;">    fi</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#5：判断条件结束循环</span></span>
<span class="line"><span style="color:#e1e4e8;">if [ $yb -eq 0 ]</span></span>
<span class="line"><span style="color:#e1e4e8;">then break</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">unset result</span></span>
<span class="line"><span style="color:#e1e4e8;">unset array    </span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">#定义变量《根据个人需要填写》</span></span>
<span class="line"><span style="color:#24292e;">redis_url=地址</span></span>
<span class="line"><span style="color:#24292e;">redis_pass=密码</span></span>
<span class="line"><span style="color:#24292e;">redis_db=操作DB</span></span>
<span class="line"><span style="color:#24292e;">scan_patten=匹配字符串</span></span>
<span class="line"><span style="color:#24292e;">scan_count=扫描数量</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">yb=0</span></span>
<span class="line"><span style="color:#24292e;">#0：循环获取游标进行遍历</span></span>
<span class="line"><span style="color:#24292e;">while 1&gt;0</span></span>
<span class="line"><span style="color:#24292e;">do</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">count=0</span></span>
<span class="line"><span style="color:#24292e;">declare -a array</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#1：扫描获取结果</span></span>
<span class="line"><span style="color:#24292e;">declare -a result</span></span>
<span class="line"><span style="color:#24292e;">for i in \`redis-cli -h $redis_url -a $redis_pass -n $redis_db scan $yb match $scan_patten count $scan_count\`;do</span></span>
<span class="line"><span style="color:#24292e;">		result[\${count}]=\${i}</span></span>
<span class="line"><span style="color:#24292e;">    count=$(expr \${count} + 1)</span></span>
<span class="line"><span style="color:#24292e;">done</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#2：设置游标值</span></span>
<span class="line"><span style="color:#24292e;">yb=\${result[0]}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#3：赋值array,打印寻找到的key值</span></span>
<span class="line"><span style="color:#24292e;">for j in \${!result[@]}</span></span>
<span class="line"><span style="color:#24292e;">do		</span></span>
<span class="line"><span style="color:#24292e;">		if [ $j -gt 0 ]</span></span>
<span class="line"><span style="color:#24292e;">    then echo \${result[$j]}</span></span>
<span class="line"><span style="color:#24292e;">    array[\${count}]=\${result[$j]}</span></span>
<span class="line"><span style="color:#24292e;">    fi</span></span>
<span class="line"><span style="color:#24292e;">done    </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#4：批量删除key值</span></span>
<span class="line"><span style="color:#24292e;">		if [ \${#array[@]} -gt 0 ]</span></span>
<span class="line"><span style="color:#24292e;">    then </span></span>
<span class="line"><span style="color:#24292e;">    #\${result[$j]}</span></span>
<span class="line"><span style="color:#24292e;">    echo \${array[@]} | xargs -t redis-cli -h $redis_url -a $redis_pass -n $redis_db del </span></span>
<span class="line"><span style="color:#24292e;">    fi</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#5：判断条件结束循环</span></span>
<span class="line"><span style="color:#24292e;">if [ $yb -eq 0 ]</span></span>
<span class="line"><span style="color:#24292e;">then break</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">unset result</span></span>
<span class="line"><span style="color:#24292e;">unset array    </span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">done</span></span></code></pre></div>`,13),o=[p];function c(t,r,i,y,d,h){return n(),a("div",null,o)}const b=s(l,[["render",c]]);export{g as __pageData,b as default};
