import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.BaglXmoE.js";const g=JSON.parse('{"title":"redis","description":"","frontmatter":{"title":"redis"},"headers":[],"relativePath":"database/redis/index.md","filePath":"database/redis/index.md","lastUpdated":1710853433000}'),e={name:"database/redis/index.md"},l=p(`<blockquote><p><a href="http://www.redis.cn/" target="_blank" rel="noreferrer">CRUG网站 (redis.cn)</a></p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><h4 id="连接服务" tabindex="-1">连接服务 <a class="header-anchor" href="#连接服务" aria-label="Permalink to &quot;连接服务&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 直接输入密码</span></span>
<span class="line"><span>redis-cli -h &lt;host&gt; -p &lt;port&gt; -a &lt;password&gt; -n 0（数据库）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 先登录后输入密码</span></span>
<span class="line"><span>redis-cli -h &lt;host&gt; -p &lt;port&gt;</span></span>
<span class="line"><span>auth &lt;password&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 退出</span></span>
<span class="line"><span>quit</span></span></code></pre></div><h4 id="锁" tabindex="-1">锁 <a class="header-anchor" href="#锁" aria-label="Permalink to &quot;锁&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SET &lt;key&gt;  &lt;value&gt; NX EX &lt;max-lock-time&gt;</span></span></code></pre></div><h4 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span></code></pre></div><h4 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 使用 UNLINK 异步删除</span></span>
<span class="line"><span># 看需要添加 host port password db</span></span>
<span class="line"><span># ksys</span></span>
<span class="line"><span>redis-cli KEYS key* （查找条件） | xargs redis-cli UNLINK </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用 scan</span></span>
<span class="line"><span>redis-cli scan 0 match &quot;匹配内容&quot; count 扫描数量 | xargs -t  redis-cli  UNLINK</span></span></code></pre></div><p>网上搜的脚本</p><p><a href="https://blog.csdn.net/wen3qin/article/details/120789060" target="_blank" rel="noreferrer">redis如何优雅删除大量的key？_八号码农的博客-CSDN博客_redis 删除多个key</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#定义变量《根据个人需要填写》</span></span>
<span class="line"><span>redis_url=地址</span></span>
<span class="line"><span>redis_pass=密码</span></span>
<span class="line"><span>redis_db=操作DB</span></span>
<span class="line"><span>scan_patten=匹配字符串</span></span>
<span class="line"><span>scan_count=扫描数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yb=0</span></span>
<span class="line"><span>#0：循环获取游标进行遍历</span></span>
<span class="line"><span>while 1&gt;0</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span></span></span>
<span class="line"><span>count=0</span></span>
<span class="line"><span>declare -a array</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1：扫描获取结果</span></span>
<span class="line"><span>declare -a result</span></span>
<span class="line"><span>for i in \`redis-cli -h $redis_url -a $redis_pass -n $redis_db scan $yb match $scan_patten count $scan_count\`;do</span></span>
<span class="line"><span>		result[\${count}]=\${i}</span></span>
<span class="line"><span>    count=$(expr \${count} + 1)</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2：设置游标值</span></span>
<span class="line"><span>yb=\${result[0]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#3：赋值array,打印寻找到的key值</span></span>
<span class="line"><span>for j in \${!result[@]}</span></span>
<span class="line"><span>do		</span></span>
<span class="line"><span>		if [ $j -gt 0 ]</span></span>
<span class="line"><span>    then echo \${result[$j]}</span></span>
<span class="line"><span>    array[\${count}]=\${result[$j]}</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>done    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#4：批量删除key值</span></span>
<span class="line"><span>		if [ \${#array[@]} -gt 0 ]</span></span>
<span class="line"><span>    then </span></span>
<span class="line"><span>    #\${result[$j]}</span></span>
<span class="line"><span>    echo \${array[@]} | xargs -t redis-cli -h $redis_url -a $redis_pass -n $redis_db del </span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#5：判断条件结束循环</span></span>
<span class="line"><span>if [ $yb -eq 0 ]</span></span>
<span class="line"><span>then break</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unset result</span></span>
<span class="line"><span>unset array    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>done</span></span></code></pre></div>`,13),i=[l];function t(c,r,d,o,h,u){return n(),a("div",null,i)}const _=s(e,[["render",t]]);export{g as __pageData,_ as default};
