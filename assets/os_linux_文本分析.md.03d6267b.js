import{_ as s,c as n,o as a,U as l}from"./chunks/framework.6f6f51de.js";const D=JSON.parse('{"title":"文本分析","description":"","frontmatter":{"title":"文本分析"},"headers":[],"relativePath":"os/linux/文本分析.md","lastUpdated":1680073183000}'),p={name:"os/linux/文本分析.md"},t=l(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><blockquote><ul><li>grep 更适合单纯的查找或匹配文本</li><li>sed 更适合编辑匹配到的文本</li><li>awk 更适合格式化文本，对文本进行较复杂格式处理</li></ul></blockquote><h2 id="grep" tabindex="-1">grep <a class="header-anchor" href="#grep" aria-label="Permalink to &quot;grep&quot;">​</a></h2><p>参数</p><blockquote><ul><li><strong>-a 或 --text</strong> : 不要忽略二进制的数据。</li><li><strong>-A&lt;显示行数&gt; 或 --after-context=&lt;显示行数&gt;</strong> : 除了显示符合范本样式的那一列之外，并显示该行之后的内容。</li><li><strong>-b 或 --byte-offset</strong> : 在显示符合样式的那一行之前，标示出该行第一个字符的编号。</li><li><strong>-B&lt;显示行数&gt; 或 --before-context=&lt;显示行数&gt;</strong> : 除了显示符合样式的那一行之外，并显示该行之前的内容。</li><li><strong>-c 或 --count</strong> : 计算符合样式的列数。</li><li><strong>-C&lt;显示行数&gt; 或 --context=&lt;显示行数&gt;或-&lt;显示行数&gt;</strong> : 除了显示符合样式的那一行之外，并显示该行之前后的内容。</li><li><strong>-d &lt;动作&gt; 或 --directories=&lt;动作&gt;</strong> : 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep指令将回报信息并停止动作。</li><li><strong>-e&lt;范本样式&gt; 或 --regexp=&lt;范本样式&gt;</strong> : 指定字符串做为查找文件内容的样式。</li><li><strong>-E 或 --extended-regexp</strong> : 将样式为延伸的正则表达式来使用。</li><li><strong>-f&lt;规则文件&gt; 或 --file=&lt;规则文件&gt;</strong> : 指定规则文件，其内容含有一个或多个规则样式，让grep查找符合规则条件的文件内容，格式为每行一个规则样式。</li><li><strong>-F 或 --fixed-regexp</strong> : 将样式视为固定字符串的列表。</li><li><strong>-G 或 --basic-regexp</strong> : 将样式视为普通的表示法来使用。</li><li><strong>-h 或 --no-filename</strong> : 在显示符合样式的那一行之前，不标示该行所属的文件名称。</li><li><strong>-H 或 --with-filename</strong> : 在显示符合样式的那一行之前，表示该行所属的文件名称。</li><li><strong>-i 或 --ignore-case</strong> : 忽略字符大小写的差别。</li><li><strong>-l 或 --file-with-matches</strong> : 列出文件内容符合指定的样式的文件名称。</li><li><strong>-L 或 --files-without-match</strong> : 列出文件内容不符合指定的样式的文件名称。</li><li><strong>-n 或 --line-number</strong> : 在显示符合样式的那一行之前，标示出该行的列数编号。</li><li><strong>-o 或 --only-matching</strong> : 只显示匹配PATTERN 部分。</li><li><strong>-q 或 --quiet或--silent</strong> : 不显示任何信息。</li><li><strong>-r 或 --recursive</strong> : 此参数的效果和指定&quot;-d recurse&quot;参数相同。</li><li><strong>-s 或 --no-messages</strong> : 不显示错误信息。</li><li><strong>-v 或 --invert-match</strong> : 显示不包含匹配文本的所有行。</li><li><strong>-V 或 --version</strong> : 显示版本信息。</li><li><strong>-w 或 --word-regexp</strong> : 只显示全字符合的列。</li><li><strong>-x --line-regexp</strong> : 只显示全列符合的列。</li><li><strong>-y</strong> : 此参数的效果和指定&quot;-i&quot;参数相同。</li></ul></blockquote><p>实例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行</span></span>
<span class="line"><span style="color:#A6ACCD;">grep test *file </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查找前缀有 test 的文件包含 test 字符串的文件  </span></span>
<span class="line"><span style="color:#A6ACCD;">grep test test*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 以递归的方式查找 etc/acpi 下包含 update 的文件  </span></span>
<span class="line"><span style="color:#A6ACCD;">grep -r update /etc/acpi </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查找文件名中包含 test 的文件中不包含 test 的行</span></span>
<span class="line"><span style="color:#A6ACCD;">grep -v test *test*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查询包含INFO的行,以及其前后7行</span></span>
<span class="line"><span style="color:#A6ACCD;">grep -A 7 -B 7 &#39;INFO&#39; demo.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 输出文件demo.log中查找所有包行ERROR的行的数</span></span>
<span class="line"><span style="color:#A6ACCD;">grep -c &#39;ERROR&#39; demo.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sed" tabindex="-1">sed <a class="header-anchor" href="#sed" aria-label="Permalink to &quot;sed&quot;">​</a></h2><p>参数:</p><blockquote><ul><li>-f script文件 或 --file=script文件 以选项中指定的script文件来处理输入的文本文件。</li><li>-h或--help 显示帮助。</li><li>-n或--quiet或--silent 仅显示script处理后的结果。</li><li>-V或--version 显示版本信息。</li><li>-i 直接修改源文件</li></ul></blockquote><p>动作说明</p><blockquote><ul><li>a ：新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～</li><li>c ：取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行！</li><li>d ：删除，因为是删除啊，所以 d 后面通常不接任何咚咚；</li><li>i ：插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；</li><li>p ：打印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行～</li><li>s ：取代，可以直接进行取代的工作哩！通常这个 s 的动作可以搭配正规表示法！</li></ul></blockquote><p>实例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 替换 test.txt 中所有的 abc 为 def</span></span>
<span class="line"><span style="color:#A6ACCD;">sed -i &#39;s/abc/def/g&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 替换 test.txt 中第二个 abc 为 def</span></span>
<span class="line"><span style="color:#A6ACCD;">sed -i &#39;s/abc/def/2&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># w 标记会将匹配后的结果保存到 test1.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;s/test/trial/w test1.txt&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除所有行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;d&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除第 3 行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;2d&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除第 1,3 行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;1,3d&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除 1 到 3 行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;/1/,/3/d&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除 test.txt 文件内容中第 3 行开始的所有的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;3,$d&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 插入到第 3 行,原来的第 3 行会变成第 4 行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;3i This is an inserted line.&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 插入到第 3 行后面,原来的第 4 行会变成第 5 行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;3a This is an inserted line.&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 替换第三行</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;3c This is an inserted line.&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 转换所有匹配的字符, 1-&gt;7 , 2-&gt;8 , 3-&gt;9</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;y/123/789/&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 把 test1.txt 文本的数据插入到 test.txt 第三行后面</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;3r test1.txt&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 把test1.txt 文本的数据插入到 test.txt 末尾</span></span>
<span class="line"><span style="color:#A6ACCD;">sed &#39;$r test1.txt&#39; test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="awk" tabindex="-1">awk <a class="header-anchor" href="#awk" aria-label="Permalink to &quot;awk&quot;">​</a></h2><p>常用参数</p><blockquote><ul><li>-F fs or --field-separator fs 指定输入文件折分隔符，fs是一个字符串或者是一个正则表达式，如-F:。</li><li>-v var=value or --asign var=value 赋值一个用户定义变量。</li><li>-f scripfile or --file scriptfile 从脚本文件中读取awk命令。</li><li>-W version or --version 打印bug报告信息的版本。</li></ul><hr></blockquote><p>实例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 行匹配语句 awk &#39;&#39; 只能用单引号</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;{[pattern] action}&#39; {filenames}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 每行按空格或 TAB 分割，输出文本中的 1、4 项</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;{print $1,$4}&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用&quot;,&quot;分割 输出文本中的 1、2 项</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F, &#39;{print $1,$2}&#39;   log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用多个分隔符.先使用空格分割，然后对分割结果再使用&quot;,&quot;分割</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F &#39;[ ,]&#39;  &#39;{print $1,$2,$5}&#39;   log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置变量,输出第 1 2 项</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -va=1 &#39;{print $1,$1+a}&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -f {awk脚本} {文件名}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 过滤第一列大于 2 的行</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;$1&gt;2&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 过滤第一列等于 2 的行</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;$1==2 {print $1,$3}&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 过滤第一列大于 2 并且第二列等于 Are 的行</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;$1&gt;2 &amp;&amp; $2==&quot;Are&quot; {print $1,$2,$3}&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 指定输出分割符</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;{print $1,$2,$5}&#39; OFS=&quot; $ &quot;  log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 输出第二列包含 &quot;th&quot;，并打印第二列与第四列</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;$2 ~ /th/ {print $2,$4}&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 输出包含 &quot;re&quot; 的行,跟 grep 效果一样</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;/re/ &#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 忽略大小写</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;BEGIN{IGNORECASE=1} /this/&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 第二项不包含 th 的行</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;$2 !~ /th/ {print $2,$4}&#39; log.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),e=[t];function o(i,c,r,A,C,g){return a(),n("div",null,e)}const d=s(p,[["render",o]]);export{D as __pageData,d as default};
