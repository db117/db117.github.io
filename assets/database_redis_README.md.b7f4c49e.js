import{_ as s,c as a,o as n,a as l}from"./app.55d73d08.js";const D=JSON.parse('{"title":"redis","description":"","frontmatter":{"title":"redis"},"headers":[{"level":2,"title":"备忘单","slug":"备忘单","link":"#备忘单","children":[]}],"relativePath":"database/redis/README.md","lastUpdated":1677490656000}'),p={name:"database/redis/README.md"},e=l(`<blockquote><p><a href="http://www.redis.cn/" target="_blank" rel="noreferrer">CRUG网站 (redis.cn)</a></p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-hidden="true">#</a></h2><h4 id="连接服务" tabindex="-1">连接服务 <a class="header-anchor" href="#连接服务" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 直接输入密码</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli -h &lt;host&gt; -p &lt;port&gt; -a &lt;password&gt; -n 0（数据库）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 先登录后输入密码</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli -h &lt;host&gt; -p &lt;port&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">auth &lt;password&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 退出</span></span>
<span class="line"><span style="color:#A6ACCD;">quit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="锁" tabindex="-1">锁 <a class="header-anchor" href="#锁" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">SET &lt;key&gt;  &lt;value&gt; NX EX &lt;max-lock-time&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 使用 UNLINK 异步删除</span></span>
<span class="line"><span style="color:#A6ACCD;"># 看需要添加 host port password db</span></span>
<span class="line"><span style="color:#A6ACCD;"># ksys</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli KEYS key* （查找条件） | xargs redis-cli UNLINK </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 scan</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli scan 0 match &quot;匹配内容&quot; count 扫描数量 | xargs -t  redis-cli  UNLINK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>网上搜的脚本</p><p><a href="https://blog.csdn.net/wen3qin/article/details/120789060" target="_blank" rel="noreferrer">redis如何优雅删除大量的key？_八号码农的博客-CSDN博客_redis 删除多个key</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">#定义变量《根据个人需要填写》</span></span>
<span class="line"><span style="color:#A6ACCD;">redis_url=地址</span></span>
<span class="line"><span style="color:#A6ACCD;">redis_pass=密码</span></span>
<span class="line"><span style="color:#A6ACCD;">redis_db=操作DB</span></span>
<span class="line"><span style="color:#A6ACCD;">scan_patten=匹配字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">scan_count=扫描数量</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yb=0</span></span>
<span class="line"><span style="color:#A6ACCD;">#0：循环获取游标进行遍历</span></span>
<span class="line"><span style="color:#A6ACCD;">while 1&gt;0</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">count=0</span></span>
<span class="line"><span style="color:#A6ACCD;">declare -a array</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#1：扫描获取结果</span></span>
<span class="line"><span style="color:#A6ACCD;">declare -a result</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in \`redis-cli -h $redis_url -a $redis_pass -n $redis_db scan $yb match $scan_patten count $scan_count\`;do</span></span>
<span class="line"><span style="color:#A6ACCD;">		result[\${count}]=\${i}</span></span>
<span class="line"><span style="color:#A6ACCD;">    count=$(expr \${count} + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#2：设置游标值</span></span>
<span class="line"><span style="color:#A6ACCD;">yb=\${result[0]}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#3：赋值array,打印寻找到的key值</span></span>
<span class="line"><span style="color:#A6ACCD;">for j in \${!result[@]}</span></span>
<span class="line"><span style="color:#A6ACCD;">do		</span></span>
<span class="line"><span style="color:#A6ACCD;">		if [ $j -gt 0 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    then echo \${result[$j]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    array[\${count}]=\${result[$j]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    fi</span></span>
<span class="line"><span style="color:#A6ACCD;">done    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#4：批量删除key值</span></span>
<span class="line"><span style="color:#A6ACCD;">		if [ \${#array[@]} -gt 0 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    then </span></span>
<span class="line"><span style="color:#A6ACCD;">    #\${result[$j]}</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo \${array[@]} | xargs -t redis-cli -h $redis_url -a $redis_pass -n $redis_db del </span></span>
<span class="line"><span style="color:#A6ACCD;">    fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#5：判断条件结束循环</span></span>
<span class="line"><span style="color:#A6ACCD;">if [ $yb -eq 0 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">then break</span></span>
<span class="line"><span style="color:#A6ACCD;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">unset result</span></span>
<span class="line"><span style="color:#A6ACCD;">unset array    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),t=[e];function c(o,r,i,C,A,d){return n(),a("div",null,t)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
