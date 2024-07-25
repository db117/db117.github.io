import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.BX4HWtES.js";const b=JSON.parse('{"title":"Freemarker","description":"","frontmatter":{"title":"Freemarker"},"headers":[],"relativePath":"util/Freemarker.md","filePath":"util/Freemarker.md","lastUpdated":1721877623000}'),e={name:"util/Freemarker.md"},l=p(`<h2 id="基础语法" tabindex="-1">基础语法 <a class="header-anchor" href="#基础语法" aria-label="Permalink to &quot;基础语法&quot;">​</a></h2><h3 id="字符输出" tabindex="-1">字符输出 <a class="header-anchor" href="#字符输出" aria-label="Permalink to &quot;字符输出&quot;">​</a></h3><ul><li><p>变量存在，输出该变量，否则不输出 <code>\${emp.name?if_exists} </code></p></li><li><p>变量存在，输出该变量，否则不输出</p><pre><code>\${emp.name!}
</code></pre></li><li><p>变量不存在，取默认值xxx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${emp.name?default(&quot;xxx&quot;)}</span></span></code></pre></div></li><li><p>变量不存在，取默认值xxx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${emp.name!&quot;xxx&quot;}</span></span></code></pre></div></li><li><p>对字符串进行HTML编码，对html中特殊字符进行转义</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${&quot;123&lt;br&gt;456&quot;?html}</span></span></code></pre></div></li><li><p>使字符串第一个字母大写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${&quot;str&quot;?cap_first}</span></span></code></pre></div></li><li><p>将字符串转换成小写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${&quot;Str&quot;?lower_case}</span></span></code></pre></div></li><li><p>将字符串转换成大写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${&quot;Str&quot;?upper_case}</span></span></code></pre></div></li><li><p>去掉字符串前后的空白字符</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  \${&quot;str&quot;?trim}</span></span></code></pre></div></li></ul></li><li><p>输出hello+变量名</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  \${&quot;hello\${emp.name!}&quot;}</span></span></code></pre></div></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  \${&quot;hello&quot;+emp.name!}</span></span></code></pre></div></li></ul></li><li><p>截取子串</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;#assign str = &quot;abcdefghijklmn&quot;/&gt;</span></span>
<span class="line"><span>  // 方法1\${str?substring(0,4)} // 输出abcd</span></span>
<span class="line"><span>  // 方法2\${str[0]}\${str[4]} // 结果是ae</span></span>
<span class="line"><span>  \${str[1..4]} 　　　 // 结果是bcde// 返回指定字符的索引\${str?index_of(&quot;n&quot;)}</span></span></code></pre></div></li></ul></li></ul><h3 id="日期输出" tabindex="-1">日期输出 <a class="header-anchor" href="#日期输出" aria-label="Permalink to &quot;日期输出&quot;">​</a></h3><ul><li><p>日期格式</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${emp.date?string(&#39;yyyy-MM-dd&#39;)}</span></span></code></pre></div></li></ul></li></ul><h3 id="数字输出" tabindex="-1">数字输出 <a class="header-anchor" href="#数字输出" aria-label="Permalink to &quot;数字输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\${num?c}</span></span>
<span class="line"><span>// 不添加逗号输出数字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${emp.name?string.number} 　					 </span></span>
<span class="line"><span>// 输出20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${emp.name?string.currency} 				 </span></span>
<span class="line"><span>// ￥20.00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${emp.name?string.percent} 					 </span></span>
<span class="line"><span>// 20%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${1.222?int} 　　　　　　　　　　 			</span></span>
<span class="line"><span>// 将小数转为int，输出1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#setting number_format=&quot;percent&quot;/&gt; 	</span></span>
<span class="line"><span>// 设置数字默认输出方式(&#39;percent&#39;,百分比)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#assign answer=42/&gt; 　　　　　　　　 	</span></span>
<span class="line"><span>// 声明变量 answer 42</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#{answer} 　　　　　　　　 </span></span>
<span class="line"><span>// 输出 4,200%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${answer?string} 　　　　 </span></span>
<span class="line"><span>// 输出 4,200%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${answer?string.number} 　　</span></span>
<span class="line"><span>// 输出 42</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${answer?string.currency} </span></span>
<span class="line"><span>// 输出 ￥42.00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${answer?string.percent} 　</span></span>
<span class="line"><span>// 输出 4,200%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#{answer} 　　　　　　　　</span></span>
<span class="line"><span>// 输出 42</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>数字格式化插值可采用#{expr;format}形式来格式化数字,其中format可以是:</span></span>
<span class="line"><span>mX:小数部分最小X位</span></span>
<span class="line"><span>MX:小数部分最大X位</span></span>
<span class="line"><span>如下面的例子:</span></span>
<span class="line"><span>&lt;#assign x=2.582/&gt;&lt;#assign y=4/&gt;#{x; M2} // 输出2.58</span></span>
<span class="line"><span>#{y; M2} // 输出4</span></span>
<span class="line"><span>#{x; m2} // 输出2.58</span></span>
<span class="line"><span>#{y; m2} // 输出4.0</span></span>
<span class="line"><span>#{x; m1M2} // 输出2.58</span></span>
<span class="line"><span>#{x; m1M2} // 输出4.0</span></span></code></pre></div><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>= 或 == ：判断两个值是否相等.</span></span>
<span class="line"><span>!= ：判断两个值是否不等.</span></span>
<span class="line"><span>&gt; 或 gt ：判断左边值是否大于右边值</span></span>
<span class="line"><span>&gt;= 或 gte ：判断左边值是否大于等于右边值</span></span>
<span class="line"><span>&lt; 或 lt ：判断左边值是否小于右边值</span></span>
<span class="line"><span>&lt;= 或 lte ：判断左边值是否小于等于右边值</span></span></code></pre></div><h3 id="逻辑判断" tabindex="-1">逻辑判断 <a class="header-anchor" href="#逻辑判断" aria-label="Permalink to &quot;逻辑判断&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;#if condition&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;#elseif condition2&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;#elseif condition3&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;#else&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;/#if&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>条件可为数字，可为字符串</span></span>
<span class="line"><span>&lt;#switch value&gt;</span></span>
<span class="line"><span> &lt;#case refValue1&gt;</span></span>
<span class="line"><span> ....</span></span>
<span class="line"><span>&lt;#break&gt;</span></span>
<span class="line"><span>&lt;#case refValue2&gt;</span></span>
<span class="line"><span>....</span></span>
<span class="line"><span>&lt;#break&gt;</span></span>
<span class="line"><span> &lt;#case refValueN&gt;</span></span>
<span class="line"><span> ....</span></span>
<span class="line"><span>&lt;#break&gt;</span></span>
<span class="line"><span> &lt;#default&gt;</span></span>
<span class="line"><span> ....</span></span>
<span class="line"><span> &lt;/#switch&gt;</span></span></code></pre></div><h3 id="空值判断" tabindex="-1">空值判断 <a class="header-anchor" href="#空值判断" aria-label="Permalink to &quot;空值判断&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 当 object 不为空时</span></span>
<span class="line"><span>&lt;#if object??&gt;...&lt;/#if&gt;</span></span></code></pre></div><h3 id="集合-循环" tabindex="-1">集合 &amp; 循环 <a class="header-anchor" href="#集合-循环" aria-label="Permalink to &quot;集合 &amp; 循环&quot;">​</a></h3><h4 id="遍历集合" tabindex="-1">遍历集合 <a class="header-anchor" href="#遍历集合" aria-label="Permalink to &quot;遍历集合&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;#list empList! as emp&gt;</span></span>
<span class="line"><span>    \${emp.name!}</span></span>
<span class="line"><span>&lt;/#list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 等效于java for(int i=0; i &lt;= 100; i++)</span></span>
<span class="line"><span>&lt;#list 0..100 as i&gt; 　　</span></span>
<span class="line"><span>　　\${i}</span></span>
<span class="line"><span>&lt;/#list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>循环索引</span></span>
<span class="line"><span>&lt;#list 0..(empList!?size-1) as i&gt;</span></span>
<span class="line"><span>    \${empList[i].name!}</span></span>
<span class="line"><span>&lt;/#list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>循环的状态</span></span>
<span class="line"><span>empList?size 　　　// 取集合的长度</span></span>
<span class="line"><span>emp_index: 　　　　// int类型，当前对象的索引值</span></span>
<span class="line"><span>emp_has_next:     // boolean类型，是否存在下一个对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用&lt;#break&gt;跳出循环</span></span>
<span class="line"><span>&lt;#if emp_index = 0&gt;&lt;#break&gt;&lt;/#if&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 集合长度判断</span></span>
<span class="line"><span>&lt;#if empList?size != 0&gt;&lt;/#if&gt;</span></span></code></pre></div><h4 id="集合" tabindex="-1">集合 <a class="header-anchor" href="#集合" aria-label="Permalink to &quot;集合&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 定义一个int区间的0~100的集合，数字范围也支持反递增,如100..2</span></span>
<span class="line"><span>&lt;#assign l=0..100/&gt;    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 截取子集合：</span></span>
<span class="line"><span>empList[3..5] //返回empList集合的子集合,子集合中的元素是empList集合中的第4-6个元素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建集合：</span></span>
<span class="line"><span>&lt;#list [&quot;星期一&quot;, &quot;星期二&quot;, &quot;星期三&quot;, &quot;星期四&quot;, &quot;星期五&quot;, &quot;星期六&quot;, &quot;星期天&quot;] as x&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 集合连接运算,将两个集合连接成一个新的集合</span></span>
<span class="line"><span>&lt;#list [&quot;星期一&quot;,&quot;星期二&quot;,&quot;星期三&quot;] + [&quot;星期四&quot;,&quot;星期五&quot;,&quot;星期六&quot;,&quot;星期天&quot;] as x&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>seq_contains：判断序列中的元素是否存在</span></span>
<span class="line"><span>&lt;#assign x = [&quot;red&quot;, 16, &quot;blue&quot;, &quot;cyan&quot;]&gt;</span></span>
<span class="line"><span>\${x?seq_contains(&quot;blue&quot;)?string(&quot;yes&quot;, &quot;no&quot;)}    // yes</span></span>
<span class="line"><span>\${x?seq_contains(&quot;yellow&quot;)?string(&quot;yes&quot;, &quot;no&quot;)}  // no</span></span>
<span class="line"><span>\${x?seq_contains(16)?string(&quot;yes&quot;, &quot;no&quot;)}        // yes</span></span>
<span class="line"><span>\${x?seq_contains(&quot;16&quot;)?string(&quot;yes&quot;, &quot;no&quot;)}      // no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// seq_index_of：第一次出现的索引</span></span>
<span class="line"><span>&lt;#assign x = [&quot;red&quot;, 16, &quot;blue&quot;, &quot;cyan&quot;, &quot;blue&quot;]&gt;</span></span>
<span class="line"><span>\${x?seq_index_of(&quot;blue&quot;)}  // 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// sort_by：排序（升序）</span></span>
<span class="line"><span>&lt;#list movies?sort_by(&quot;showtime&quot;) as movie&gt;&lt;/#list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// sort_by：排序（降序）</span></span>
<span class="line"><span>&lt;#list movies?sort_by(&quot;showtime&quot;)?reverse as movie&gt;&lt;/#list&gt;</span></span></code></pre></div><h4 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>排序，按元素的首字母</span></span>
<span class="line"><span>&lt;#list movies?sort as movie&gt;</span></span>
<span class="line"><span>　　&lt;a href=&quot;\${movie.url}&quot;&gt;\${movie.name}&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/#list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 若要按list中对象元素的某一属性排序的话，则用</span></span>
<span class="line"><span>&lt;#list moives?sort_by([&quot;name&quot;]) as movie&gt;</span></span>
<span class="line"><span>　　&lt;a href=&quot;\${movie.url}&quot;&gt;\${movie.name}&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/#list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按list中对象元素的[name]属性排序的，是升序，如果需要降序的话，如下所示：</span></span>
<span class="line"><span>&lt;#list movies?sort_by([&quot;name&quot;])?reverse as movie&gt;</span></span>
<span class="line"><span>　　&lt;a href=&quot;\${movie.url}&quot;&gt;\${movie.name}&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/#list&gt;</span></span></code></pre></div><h4 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 创建map</span></span>
<span class="line"><span>&lt;#assign scores = {&quot;语文&quot;:86,&quot;数学&quot;:78}&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Map连接运算符</span></span>
<span class="line"><span>&lt;#assign scores = {&quot;语文&quot;:86,&quot;数学&quot;:78} + {&quot;数学&quot;:87,&quot;Java&quot;:93}&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Map元素输出</span></span>
<span class="line"><span>emp.name       // 全部使用点语法</span></span>
<span class="line"><span>emp[&quot;name&quot;]    // 使用方括号</span></span></code></pre></div><h3 id="转义字符" tabindex="-1">转义字符 <a class="header-anchor" href="#转义字符" aria-label="Permalink to &quot;转义字符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\\&quot; ：双引号(u0022)</span></span>
<span class="line"><span>\\&#39; ：单引号(u0027)</span></span>
<span class="line"><span>\\\\ ：反斜杠(u005C)</span></span>
<span class="line"><span>\\n ：换行(u000A)</span></span>
<span class="line"><span>\\r ：回车(u000D)</span></span>
<span class="line"><span>\\t ：Tab(u0009)</span></span>
<span class="line"><span>\\b ：退格键(u0008)</span></span>
<span class="line"><span>\\f ：Form feed(u000C)</span></span>
<span class="line"><span>\\l ：&lt;</span></span>
<span class="line"><span>\\g ：&gt;</span></span>
<span class="line"><span>\\a ：&amp;</span></span>
<span class="line"><span>\\{ ：{</span></span>
<span class="line"><span>\\xCode ：直接通过4位的16进制数来指定Unicode码,输出该unicode码对应的字符.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果某段文本中包含大量的特殊符号,FreeMarker提供了另一种特殊格式:</span></span>
<span class="line"><span>可以在指定字符串内容的引号前增加r标记,在r标记后的文件将会直接输出.看如下代码:</span></span>
<span class="line"><span>\${r&quot;\${foo}&quot;}    // 输出 \${foo}</span></span>
<span class="line"><span>\${r&quot;C:/foo/bar&quot;}    // 输出 C:/foo/bar</span></span></code></pre></div><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><h4 id="include指令" tabindex="-1">include指令 <a class="header-anchor" href="#include指令" aria-label="Permalink to &quot;include指令&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// include指令的作用类似于JSP的包含指令:</span></span>
<span class="line"><span>&lt;#include &quot;/test.ftl&quot; encoding=&quot;UTF-8&quot; parse=true&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在上面的语法格式中,两个参数的解释如下:</span></span>
<span class="line"><span>encoding=&quot;GBK&quot;  // 编码格式</span></span>
<span class="line"><span>parse=true 　　 // 是否作为ftl语法解析,默认是true，false就是以文本方式引入,</span></span>
<span class="line"><span>注意:在ftl文件里布尔值都是直接赋值的如parse=true,而不是parse=&quot;true&quot;</span></span></code></pre></div><h4 id="import指令" tabindex="-1">import指令 <a class="header-anchor" href="#import指令" aria-label="Permalink to &quot;import指令&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 类似于jsp里的import,它导入文件，然后就可以在当前文件里使用被导入文件里的宏组件</span></span>
<span class="line"><span>&lt;#import &quot;/libs/mylib.ftl&quot; as my&gt;</span></span>
<span class="line"><span>// 上面的代码将导入/lib/common.ftl模板文件中的所有变量,</span></span>
<span class="line"><span>交将这些变量放置在一个名为com的Map对象中，</span></span>
<span class="line"><span>&quot;my&quot;在freemarker里被称作namespace</span></span></code></pre></div><h4 id="compress-压缩" tabindex="-1">compress 压缩 <a class="header-anchor" href="#compress-压缩" aria-label="Permalink to &quot;compress 压缩&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;#compress&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>&lt;/#compress&gt;</span></span>
<span class="line"><span>&lt;#t&gt; // 去掉左右空白和回车换行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#lt&gt;// 去掉左边空白和回车换行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#rt&gt;// 去掉右边空白和回车换行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;#nt&gt;// 取消上面的效果</span></span></code></pre></div>`,32),t=[l];function i(c,o,u,d,r,h){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
