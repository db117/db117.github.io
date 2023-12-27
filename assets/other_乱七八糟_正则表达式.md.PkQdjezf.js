import{_ as d,o as e,c as a,R as o}from"./chunks/framework.H_1uJR_t.js";const f=JSON.parse('{"title":"正则","description":"","frontmatter":{"title":"正则"},"headers":[],"relativePath":"other/乱七八糟/正则表达式.md","filePath":"other/乱七八糟/正则表达式.md","lastUpdated":1699241780000}'),l={name:"other/乱七八糟/正则表达式.md"},t=o(`<h2 id="正则规则" tabindex="-1">正则规则 <a class="header-anchor" href="#正则规则" aria-label="Permalink to &quot;正则规则&quot;">​</a></h2><h3 id="正则替换字符串" tabindex="-1">正则替换字符串 <a class="header-anchor" href="#正则替换字符串" aria-label="Permalink to &quot;正则替换字符串&quot;">​</a></h3><blockquote><p>使用括号记住配置，并回调使用。通过$1,$2...调用。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var re = /(\\w+)\\s(\\w+)/;</span></span>
<span class="line"><span>var str = &quot;abc def&quot;;</span></span>
<span class="line"><span>var newstr = str.replace(re, &quot;$2-$1&quot;);</span></span>
<span class="line"><span>// def-abc</span></span></code></pre></div><h3 id="驼峰转下划线" tabindex="-1">驼峰转下划线 <a class="header-anchor" href="#驼峰转下划线" aria-label="Permalink to &quot;驼峰转下划线&quot;">​</a></h3><blockquote><p>正则转换是控制字符大小写</p></blockquote><table><thead><tr><th>1</th><th>\\l</th><th>下个字符小写</th></tr></thead><tbody><tr><td>2</td><td>\\L</td><td>接着的字符均小写直到\\E</td></tr><tr><td>3</td><td>\\u</td><td>下个字符大写</td></tr><tr><td>4</td><td>\\U</td><td>接着的字符均大写直到\\E</td></tr><tr><td>5</td><td>\\Q</td><td>在non-word 字符前加上\\，直到\\E</td></tr><tr><td>6</td><td>\\E</td><td>结束\\L,\\E和\\Q</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 直接匹配所有的</span></span>
<span class="line"><span># 大写 -&gt; 小写</span></span>
<span class="line"><span>([A-Z]) 转 \\L$1\\E</span></span>
<span class="line"><span># 小写 -&gt; 大写</span></span>
<span class="line"><span>([a-z]) 转 \\U$1\\E </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 需要对一些字符进行处理,每一个修改一个字符,需要多次调用</span></span>
<span class="line"><span>&quot;([a-z_]*)([A-Z])([a-zA-Z]*)&quot;   -&gt;   &quot;$1_\\l$2$3&quot;</span></span></code></pre></div><h2 id="常用正则表达式" tabindex="-1">常用正则表达式 <a class="header-anchor" href="#常用正则表达式" aria-label="Permalink to &quot;常用正则表达式&quot;">​</a></h2><h3 id="数字类型" tabindex="-1">数字类型 <a class="header-anchor" href="#数字类型" aria-label="Permalink to &quot;数字类型&quot;">​</a></h3><ol><li>数字：<code>^[0-9]*$</code></li><li>n位的数字：<code>^\\d{n}$</code></li><li>至少n位的数字：<code>^\\d{n,}$</code></li><li>m-n位的数字：<code>^\\d{m,n}$</code></li><li>零和非零开头的数字：<code>^(0|[1-9][0-9]*)$</code></li><li>非零开头的最多带两位小数的数字：<code>^([1-9][0-9]*)+(.[0-9]{1,2})?$</code></li><li>带1-2位小数的正数或负数：<code>^(\\-)?\\d+(\\.\\d{1,2})?$</code></li><li>正数、负数、和小数：<code>^(\\-|\\+)?\\d+(\\.\\d+)?$</code></li><li>有两位小数的正实数：<code>^[0-9]+(.[0-9]{2})?$</code></li><li>非零的正整数：<code>^[1-9]\\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\\+?[1-9][0-9]*$</code></li><li>非零的负整数：<code>^\\-[1-9][]0-9&quot;*$ 或 ^-[1-9]\\d*$</code></li><li>非负整数：<code>^\\d+$ 或 ^[1-9]\\d*|0$</code></li><li>非正整数：<code>^-[1-9]\\d*|0$ 或 ^((-\\d+)|(0+))$</code></li><li>非负浮点数：<code>^\\d+(\\.\\d+)?$ 或 ^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$</code></li><li>非正浮点数：<code>^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$ 或 ^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$</code></li><li>正浮点数：<code>^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$ 或 ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$</code></li><li>浮点数：<code>^(-?\\d+)(\\.\\d+)?$ 或 ^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$</code></li></ol><h3 id="字符类型" tabindex="-1">字符类型 <a class="header-anchor" href="#字符类型" aria-label="Permalink to &quot;字符类型&quot;">​</a></h3><ol><li>汉字：<code>^[\\u4e00-\\u9fa5]{0,}$</code></li><li>英文和数字：<code>^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$</code></li><li>长度为3-20的所有字符：<code>^.{3,20}$</code></li><li>由26个英文字母组成的字符串：<code>^[A-Za-z]+$</code></li><li>由26个大写英文字母组成的字符串：<code>^[A-Z]+$</code></li><li>由26个小写英文字母组成的字符串：<code>^[a-z]+$</code></li><li>由数字和26个英文字母组成的字符串：<code>^[A-Za-z0-9]+$</code></li><li>由数字、26个英文字母或者下划线组成的字符串：<code>^\\w+$ 或 ^\\w{3,20}</code></li><li>中文、英文、数字包括下划线：<code>^[\\u4E00-\\u9FA5A-Za-z0-9_]+$</code></li><li>中文、英文、数字但不包括下划线等符号：<code>^[\\u4E00-\\u9FA5A-Za-z0-9]+$ 或 ^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$</code></li><li>可以输入含有<code>^%&amp;&#39;,;=?$\\&quot;</code>等字符：<code>[^%&amp;&#39;,;=?$\\x22]+</code></li><li>禁止输入含有~的字符<code>[^~\\x22]+</code></li></ol><h2 id="其他类型" tabindex="-1">其他类型 <a class="header-anchor" href="#其他类型" aria-label="Permalink to &quot;其他类型&quot;">​</a></h2><ol><li><p>匹配一行<code>[^\\n]*search[^\\n]*\\n?</code></p></li><li><p>Email地址：<code>^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$</code></p></li><li><p>手机号码：<code>^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$</code></p></li><li><p>短身份证号码(数字、字母x结尾)：<code>^([0-9]){7,18}(x|X)?$ 或 ^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$</code></p></li><li><p>一年的12个月(01～09和1～12)：<code>^(0?[1-9]|1[0-2])$</code></p></li><li><p>一个月的31天(01～09和1～31)：<code>^((0?[1-9])|((1|2)[0-9])|30|31)$</code></p></li><li><p>xml文件：<code>^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$</code></p></li><li><p>中文字符的正则表达式：<code>[\\u4e00-\\u9fa5]</code></p></li><li><p>双字节字符：<code>[^\\x00-\\xff]</code> (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))</p></li><li><p>空白行的正则表达式：<code>\\n\\s*\\r</code> (可以用来<strong>删除空白行</strong>)</p></li><li><p>首尾空白字符的正则表达式：<code>^\\s*|\\s*$或(^\\s*)|(\\s*$)</code> (可以用来<strong>删除行首行尾的空白字符</strong>(包括空格、制表符、换页符等等))</p></li><li><p>IP地址：<code>\\d+\\.\\d+\\.\\d+\\.\\d+</code> (提取IP地址时有用)</p></li><li><p>IP地址：<code>((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))</code></p></li><li><p>校验IP-v6地址:<code>(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))</code></p></li><li><p>子网掩码：<code>((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))</code></p></li><li><p>校验日期:<code>^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$</code>(“yyyy-mm-dd“ 格式的日期校验，已考虑<strong>平闰年</strong>。)</p></li><li><p>抽取注释：<code>&lt;!--(.*?)--&gt;</code></p></li><li><p>查找CSS属性:<code>^\\\\s*[a-zA-Z\\\\-]+\\\\s*[:]{1}\\\\s[a-zA-Z0-9\\\\s.#]+[;]{1}</code></p></li><li><p>提取页面超链接:<code>(&lt;a\\\\s*(?!.*\\\\brel=)[^&gt;]*)(href=&quot;https?:\\\\/\\\\/)((?!(?:(?:www\\\\.)?&#39;.implode(&#39;|(?:www\\\\.)?&#39;, $follow_list).&#39;))[^&quot; rel=&quot;external nofollow&quot; ]+)&quot;((?!.*\\\\brel=)[^&gt;]*)(?:[^&gt;]*)&gt;</code></p></li><li><p>提取网页图片:<code>\\\\&lt; *[img][^\\\\\\\\&gt;]*[src] *= *[\\\\&quot;\\\\&#39;]{0,1}([^\\\\&quot;\\\\&#39;\\\\ &gt;]*)</code></p></li><li><p>提取网页颜色代码:<code>^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$</code></p></li><li><p>文件扩展名效验:<code>^([a-zA-Z]\\\\:|\\\\\\\\)\\\\\\\\([^\\\\\\\\]+\\\\\\\\)*[^\\\\/:*?&quot;&lt;&gt;|]+\\\\.txt(l)?$</code></p></li></ol>`,15),i=[t];function c(s,n,p,r,h,$){return e(),a("div",null,i)}const A=d(l,[["render",c]]);export{f as __pageData,A as default};
