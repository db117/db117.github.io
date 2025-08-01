import{_ as a,c as n,o as p,ah as e}from"./chunks/framework.HOMaeY8S.js";const h=JSON.parse('{"title":"linux","description":"","frontmatter":{"title":"linux"},"headers":[],"relativePath":"os/linux/index.md","filePath":"os/linux/index.md"}'),l={name:"os/linux/index.md"};function t(i,s,c,o,d,r){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><h3 id="权限" tabindex="-1">权限 <a class="header-anchor" href="#权限" aria-label="Permalink to &quot;权限&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 将文件 file1.txt 设为所有人皆可读取</span></span>
<span class="line"><span>chmod ugo+r file1.txt</span></span>
<span class="line"><span>chmod a+r file1.txt</span></span>
<span class="line"><span>chmod 444 file1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 文件file的所有者增加读和运行的权限</span></span>
<span class="line"><span>chmod u+rx file </span></span>
<span class="line"><span># 文件file的群组用户增加读的权限</span></span>
<span class="line"><span>chmod g+r file </span></span>
<span class="line"><span>#文件file的其它用户移除读的权限</span></span>
<span class="line"><span>chmod o-r file </span></span>
<span class="line"><span># 文件file的群组用户增加读的权限，其它用户移除读的权限</span></span>
<span class="line"><span>chmod g+r o-r file </span></span>
<span class="line"><span># 文件file的所有用户增加运行的权限</span></span>
<span class="line"><span>chmod +x file </span></span>
<span class="line"><span>#文件file的所有者分配读写和执行的权限，群组其它用户分配读的权限，其他用户没有任何权限</span></span>
<span class="line"><span>chmod u=rwx,g=r,o=- file</span></span>
<span class="line"><span># 将目前目录下的所有文件与子目录皆设为任何人可读取</span></span>
<span class="line"><span>chmod -R a+r *</span></span></code></pre></div><h3 id="进程" tabindex="-1">进程 <a class="header-anchor" href="#进程" aria-label="Permalink to &quot;进程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看进程</span></span>
<span class="line"><span># 显示当前系统进程的列表 </span></span>
<span class="line"><span>ps -ax</span></span>
<span class="line"><span># 显示当前系统进程详细列表以及进程用户</span></span>
<span class="line"><span>ps -aux </span></span>
<span class="line"><span># 过滤具体进程（XXX为进程名称）</span></span>
<span class="line"><span>ps -ax|grep XXX | grep -v grep</span></span>
<span class="line"><span># 按 CPU 使用降序排列</span></span>
<span class="line"><span>ps -aux --sort -pcpu</span></span>
<span class="line"><span># 表示按内存使用降序排列</span></span>
<span class="line"><span>ps -aux --sort -pmem </span></span>
<span class="line"><span># 以树形结构显示进程</span></span>
<span class="line"><span>ps -axjf </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取进程id</span></span>
<span class="line"><span>ps -A | grep &quot;cmdname&quot; | grep -v grep| awk &#39;{print $1}&#39;</span></span>
<span class="line"><span>pgrep &quot;cmdname&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 杀进程</span></span>
<span class="line"><span>kill PID</span></span>
<span class="line"><span># 强制杀进程</span></span>
<span class="line"><span>kill -9 PID </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 杀掉所有匹配的进程进程</span></span>
<span class="line"><span># 先检查一下，在 kill</span></span>
<span class="line"><span>ps -A |grep &quot;cmdname&quot;| grep -v grep | awk &#39;{print $1}&#39;</span></span>
<span class="line"><span>ps -A |grep &quot;cmdname&quot;| grep -v grep | awk &#39;{print $1}&#39;| while read s;do kill $s;done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 杀掉所有匹配的进程进程（通过参数匹配）</span></span>
<span class="line"><span># 一定要先检查一下，在 kill</span></span>
<span class="line"><span>ps -ef |grep &quot;cmdname args&quot;| grep -v grep | awk &#39;{print $2}&#39;</span></span>
<span class="line"><span>ps -ef |grep &quot;cmdname args&quot;| grep -v grep | awk &#39;{print $2}&#39;| while read s;do kill $s;done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 杀掉进程（指定 cmd 名称，在通过参数过滤）</span></span>
<span class="line"><span># 一定要先检查一下，在 kill</span></span>
<span class="line"><span>ps -C java -o pid,cmd |grep &quot;cmdname args&quot;| grep -v grep | awk &#39;{print $1}&#39;</span></span>
<span class="line"><span>ps -C java -o pid,cmd |grep &quot;cmdname args&quot;| grep -v grep | awk &#39;{print $1}&#39;| while read s;do kill $s;done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询 java 命令的执行文件地址</span></span>
<span class="line"><span>which java</span></span></code></pre></div><h3 id="文件" tabindex="-1">文件 <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 当前文件夹大小</span></span>
<span class="line"><span>du -sh</span></span>
<span class="line"><span># 当前文件夹以及子文件夹大小</span></span>
<span class="line"><span>du -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 批量删除空文件</span></span>
<span class="line"><span>find . -type f -empty -delete</span></span>
<span class="line"><span>find . -type f -size 0 -delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 近 7天内访问过的.txt结尾的文件</span></span>
<span class="line"><span>find -name &quot;*.txt&quot; -atime -7 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 解压文件 #####</span></span>
<span class="line"><span># 压缩文件 file1 和目录 dir2 到 test.tar.gz</span></span>
<span class="line"><span>tar -zcvf test.tar.gz file1 dir2</span></span>
<span class="line"><span># 解压 test.tar.gz（将 c 换成 x 即可）</span></span>
<span class="line"><span>tar -zxvf test.tar.gz</span></span>
<span class="line"><span># 列出压缩文件的内容</span></span>
<span class="line"><span>tar -ztvf test.tar.gz </span></span>
<span class="line"><span># 使用 -d 选项手动指定解压缩位置</span></span>
<span class="line"><span>unzip -d /tmp/ ana.zip</span></span>
<span class="line"><span># 把 tar.gz 解压缩为 tar</span></span>
<span class="line"><span>gzip -d file.tar.gz</span></span></code></pre></div><h4 id="文本浏览" tabindex="-1">文本浏览 <a class="header-anchor" href="#文本浏览" aria-label="Permalink to &quot;文本浏览&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 显示文本内容</span></span>
<span class="line"><span>cat &lt;file&gt;  					# 一次性显示完</span></span>
<span class="line"><span>head -20 &lt;file&gt;				# 显示开头 20 行文本</span></span>
<span class="line"><span>tail -n3 &lt;file&gt;				# 显示最后 3 行文本</span></span>
<span class="line"><span>tail -n10 &lt;file&gt;			# 显示最后 10 行文本，并监听文件</span></span>
<span class="line"><span>sed -n &#39;3,7p&#39; &lt;file&gt;	# 指定读取某个文件的第3-7行</span></span>
<span class="line"><span>sed -n &#39;3,$p&#39; &lt;file&gt;	# 指定读取某个文件第 3 行到最后一行，$代表最后一行</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 浏览文本</span></span>
<span class="line"><span>less -N &lt;file&gt; 			# 开始浏览文本</span></span>
<span class="line"><span># 搜索</span></span>
<span class="line"><span>  /字符串：向下搜索</span></span>
<span class="line"><span>  ?字符串：向上搜索</span></span>
<span class="line"><span>  n：重复前一个搜索（与 / 或 ? 有关）</span></span>
<span class="line"><span>  N：反向重复前一个搜索（与 / 或 ? 有关）</span></span>
<span class="line"><span># 向前翻页</span></span>
<span class="line"><span>  y 向前滚动一行</span></span>
<span class="line"><span>  u 向前滚动半页</span></span>
<span class="line"><span>  b 向上翻一页</span></span>
<span class="line"><span># 向后翻页</span></span>
<span class="line"><span>	回车键 滚动一行</span></span>
<span class="line"><span>	d 向后翻半页</span></span>
<span class="line"><span>	空格键 滚动一页</span></span>
<span class="line"><span>h 显示帮助界面</span></span>
<span class="line"><span>Q 退出less 命令</span></span></code></pre></div><h4 id="文本搜索" tabindex="-1">文本搜索 <a class="header-anchor" href="#文本搜索" aria-label="Permalink to &quot;文本搜索&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 搜索某个文件中，包含某个关键词的内容</span></span>
<span class="line"><span>grep root /etc/passwd</span></span>
<span class="line"><span># 搜索某个文件中，以某个关键词开头的内容</span></span>
<span class="line"><span>grep ^root /etc/passwd</span></span>
<span class="line"><span># 展示匹配行的前后若干行（B：前 A：后 C： 前后）</span></span>
<span class="line"><span>grep -C1 leo passwd</span></span>
<span class="line"><span># 搜索多个文件中，包含某个关键词的内容</span></span>
<span class="line"><span>grep root /etc/passwd /etc/shadow</span></span>
<span class="line"><span># 搜索多个文件中，包含某个关键词的内容，不显示文件名称</span></span>
<span class="line"><span>grep -h root /etc/passwd /etc/shadow</span></span>
<span class="line"><span># 输出在某个文件中，包含某个关键词行的数量</span></span>
<span class="line"><span>grep -c root /etc/passwd /etc/shadow</span></span>
<span class="line"><span># 搜索某个文件中，不包含某个关键词的内容</span></span>
<span class="line"><span>grep -v nologin /etc/passwd</span></span>
<span class="line"><span># 搜索某个文件中，精准匹配到某个关键词的内容（搜索词应与整行内容完全一样才会显示，有别于一般搜索）</span></span>
<span class="line"><span>grep -x cdrom anaconda-ks.cfg</span></span>
<span class="line"><span># 搜索某个文件中，空行的数量</span></span>
<span class="line"><span>grep -c ^$ anaconda-ks.cfg </span></span>
<span class="line"><span># 统计某个字符串在文本中出现的次数</span></span>
<span class="line"><span>grep -o -i &#39;error&#39; service.log | wc -l</span></span></code></pre></div><h4 id="文本编辑" tabindex="-1">文本编辑 <a class="header-anchor" href="#文本编辑" aria-label="Permalink to &quot;文本编辑&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># sed 可以接在管道上，也可以在后面指定文件</span></span>
<span class="line"><span># sed 添加 -i 可以直接修改文件</span></span>
<span class="line"><span># 删除所有行</span></span>
<span class="line"><span>sed &#39;d&#39;</span></span>
<span class="line"><span># 删除第2行</span></span>
<span class="line"><span>sed &#39;2d&#39;</span></span>
<span class="line"><span># 删除第2~5行</span></span>
<span class="line"><span>sed &#39;2,5d&#39;</span></span>
<span class="line"><span># 删除第3到最后一行，$代表最后一行</span></span>
<span class="line"><span>sed &#39;3,$d&#39;</span></span>
<span class="line"><span># 删除空行</span></span>
<span class="line"><span>sed &#39;/^$/d&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 替换第二个 test 为 trial</span></span>
<span class="line"><span>sed &#39;s/test/trial/2&#39;</span></span>
<span class="line"><span># 替换所有 test 为 trial</span></span>
<span class="line"><span>sed &#39;s/test/trial/g&#39;</span></span>
<span class="line"><span># -n 选项会禁止 sed 输出，但 p 标记会输出修改过的行，将二者匹配使用的效果就是只输出被替换命令修改过的行</span></span>
<span class="line"><span>sed -n &#39;s/test/trial/p&#39; </span></span>
<span class="line"><span># 将处理后的结果保存到指定文件中</span></span>
<span class="line"><span>sed &#39;s/test/trial/w test.txt&#39; </span></span>
<span class="line"><span># 将第2到5行替换为一行字符串&quot;No 2~5 lines&quot;</span></span>
<span class="line"><span>sed &#39;2,5c No 2~5 lines&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 插入多行数据只需对要插入或附加的文本中的每一行末尾（除最后一行）添加反斜线即可</span></span>
<span class="line"><span># 在第三行插入数据，即第三行和第二行中间</span></span>
<span class="line"><span>sed &#39;3i\\</span></span>
<span class="line"><span>&gt; This is an inserted line.&#39;</span></span>
<span class="line"><span># 在第三行追加数据，即第三行和第四行中间</span></span>
<span class="line"><span>sed &#39;3a\\</span></span>
<span class="line"><span>&gt; This is an appended line.&#39;</span></span>
<span class="line"><span># 把第三行数据替换掉</span></span>
<span class="line"><span>sed &#39;3c\\</span></span>
<span class="line"><span>&gt; This is a changed line of text.&#39;</span></span>
<span class="line"><span># 把 data.txt 文件内容插入到第三行后面</span></span>
<span class="line"><span>sed &#39;3r data.txt&#39;</span></span>
<span class="line"><span># 把 data.txt 文件内容插入到数据流尾部</span></span>
<span class="line"><span>sed &#39;$r data.txt&#39;</span></span>
<span class="line"><span># 可以添加一个完全为空的空行</span></span>
<span class="line"><span>sed &#39;4 a \\\\&#39;</span></span>
<span class="line"><span># 可以添加两个完全为空的空行</span></span>
<span class="line"><span>sed &#39;4 a \\\\n&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 替换字符</span></span>
<span class="line"><span># 把 1 替换成 7,2 替换成 8,3 替换成 9</span></span>
<span class="line"><span>sed &#39;y/123/789/&#39;</span></span></code></pre></div><h4 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看 Tcp 连接</span></span>
<span class="line"><span>netstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看哪个端口被哪个进程占用</span></span>
<span class="line"><span>lsof -i :80</span></span>
<span class="line"><span>netstat -naptcp | grep 80</span></span></code></pre></div><h4 id="系统" tabindex="-1">系统 <a class="header-anchor" href="#系统" aria-label="Permalink to &quot;系统&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看内存使用情况</span></span>
<span class="line"><span>free -m</span></span>
<span class="line"><span>top</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看负载情况</span></span>
<span class="line"><span>uptime</span></span></code></pre></div><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 打印全部环境变量</span></span>
<span class="line"><span>env </span></span>
<span class="line"><span># 打印指定变量</span></span>
<span class="line"><span>echo $env_name</span></span>
<span class="line"><span># 设置变量</span></span>
<span class="line"><span>export VARIABLE_NAME=value</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 全局变量</span></span>
<span class="line"><span>/etc/environment</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 端口占用</span></span>
<span class="line"><span>netstat -tunlp | grep 端口号</span></span></code></pre></div><h4 id="文本处理-awk" tabindex="-1">文本处理 awk <a class="header-anchor" href="#文本处理-awk" aria-label="Permalink to &quot;文本处理 awk&quot;">​</a></h4><p><strong>常用参数：</strong></p><table tabindex="0"><thead><tr><th>-F</th><th>指定输入时用到的字段分隔符</th></tr></thead><tbody><tr><td>-v</td><td>自定义变量</td></tr><tr><td>-f</td><td>从脚本中读取awk命令</td></tr><tr><td>-m</td><td>对val值设置内在限制</td></tr></tbody></table><p>内置变量：</p><table tabindex="0"><thead><tr><th>变量名称</th><th>说明</th></tr></thead><tbody><tr><td>ARGC</td><td>命令行参数个数</td></tr><tr><td>ARGV</td><td>命令行参数排列</td></tr><tr><td>ENVIRON</td><td>支持队列中系统环境变量的使用</td></tr><tr><td>FILENAME</td><td>awk浏览的文件名</td></tr><tr><td>FNR</td><td>浏览文件的记录数</td></tr><tr><td>FS</td><td>设置输入域分隔符，等价于命令行 -F选项</td></tr><tr><td>NF</td><td>浏览记录的域的个数</td></tr><tr><td>NR</td><td>已读的记录数</td></tr><tr><td>OFS</td><td>输出域分隔符</td></tr><tr><td>ORS</td><td>输出记录分隔符</td></tr><tr><td>RS</td><td>控制记录分隔符</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 打印内容</span></span>
<span class="line"><span># 仅显示指定文件中第1、2列的内容（默认以空格为间隔符）</span></span>
<span class="line"><span>awk &#39; {print $1,$2} &#39; test.log</span></span>
<span class="line"><span># 以冒号为间隔符，仅显示指定文件中第1列的内容</span></span>
<span class="line"><span>awk -F &#39;:&#39; &#39;{print $1}&#39; test.log</span></span>
<span class="line"><span># 以冒号为间隔符，显示系统中所有UID号码大于500的用户信息（第3列）</span></span>
<span class="line"><span>awk -F : &#39;$3&gt;=500&#39; /etc/passwd</span></span>
<span class="line"><span># 仅显示指定文件中最后一个字段的内容</span></span>
<span class="line"><span>awk &#39;{print $NF}&#39; test.log</span></span>
<span class="line"><span># 第一列匹配 oo 的行</span></span>
<span class="line"><span>awk -F &#39;:&#39; &#39;$1 ~/oo/&#39; test.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 处理脚本</span></span>
<span class="line"><span># 第一条命令会给字段变量 $4 赋值。第二条命令会打印整个数据字段。</span></span>
<span class="line"><span>awk &#39;{$4=&quot;Christine&quot;; print $0}&#39; test.log</span></span>
<span class="line"><span># 累加第五列，并打印</span></span>
<span class="line"><span>awk &#39;{sum+=$5} END {print sum}&#39;</span></span>
<span class="line"><span># 过滤第一列大于2并且第二列等于&#39;Are&#39;的行</span></span>
<span class="line"><span>awk &#39;$1&gt;2 &amp;&amp; $2==&quot;Are&quot; {print $1,$2,$3}&#39; log.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打印九九乘法表</span></span>
<span class="line"><span>seq 9 | sed &#39;H;g&#39; | awk -v RS=&#39;&#39; &#39;{for(i=1;i&lt;=NF;i++)printf(&quot;%dx%d=%d%s&quot;, i, NR, i*NR, i==NR?&quot;\\n&quot;:&quot;\\t&quot;)}&#39;</span></span></code></pre></div><h3 id="系统参数" tabindex="-1">系统参数 <a class="header-anchor" href="#系统参数" aria-label="Permalink to &quot;系统参数&quot;">​</a></h3><h4 id="ulimit" tabindex="-1">ulimit <a class="header-anchor" href="#ulimit" aria-label="Permalink to &quot;ulimit&quot;">​</a></h4><blockquote><p>/etc/security/limits.conf</p><p>限制应用打开的文件数量</p><p>配置格式如下: <code>&lt;domain&gt; &lt;type&gt; &lt;item&gt; &lt;value&gt;</code></p><p><code>&lt;domain&gt;</code> 指定的用户或者组，可以使用通配符 * % 等 <code>&lt;type&gt;</code> 有soft，hard和-，soft指的是当前系统生效的设置值，软限制也可以理解为警告值。 hard表名系统中所能设定的最大值。soft的限制不能比hard限制高，用-表名同时设置了soft和hard的值。 <code>&lt;item&gt;</code> 设置项的名称 <code>&lt;value&gt;</code> 设置项的值</p></blockquote><p>可配置项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># - core - limits the core file size (KB)    限制内核文件的大小。</span></span>
<span class="line"><span># - data - max data size (KB)    最大数据大小</span></span>
<span class="line"><span># - fsize - maximum filesize (KB)    最大文件大小</span></span>
<span class="line"><span># - memlock - max locked-in-memory address space (KB)    最大锁定内存地址空间</span></span>
<span class="line"><span># - nofile - max number of open file descriptors 最大打开的文件数(以文件描叙符，file descripter计数) </span></span>
<span class="line"><span># - rss - max resident set size (KB) 最大持久设置大小</span></span>
<span class="line"><span># - stack - max stack size (KB) 最大栈大小</span></span>
<span class="line"><span># - cpu - max CPU time (MIN)    最多CPU占用时间，单位为MIN分钟</span></span>
<span class="line"><span># - nproc - max number of processes 进程的最大数目</span></span>
<span class="line"><span># - as - address space limit (KB) 地址空间限制 </span></span>
<span class="line"><span># - maxlogins - max number of logins for this user    此用户允许登录的最大数目</span></span>
<span class="line"><span># - maxsyslogins - max number of logins on the system    系统最大同时在线用户数</span></span>
<span class="line"><span># - priority - the priority to run user process with    运行用户进程的优先级</span></span>
<span class="line"><span># - locks - max number of file locks the user can hold    用户可以持有的文件锁的最大数量</span></span>
<span class="line"><span># - sigpending - max number of pending signals</span></span>
<span class="line"><span># - msgqueue - max memory used by POSIX message queues (bytes)</span></span>
<span class="line"><span># - nice - max nice priority allowed to raise to values: [-20, 19] max nice优先级允许提升到值</span></span>
<span class="line"><span># - rtprio - max realtime pr iority</span></span></code></pre></div><p>临时修改</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 调整最大限制数量</span></span>
<span class="line"><span>ulimit -HSn 65536</span></span>
<span class="line"><span># 移除限制</span></span>
<span class="line"><span>ulimit -c unlimited</span></span></code></pre></div><p>永久修改，完后需要重新登录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* soft nofile 65536</span></span>
<span class="line"><span>* hard nofile 65536</span></span></code></pre></div><hr><h3 id="字符串变量操作" tabindex="-1">字符串变量操作 <a class="header-anchor" href="#字符串变量操作" aria-label="Permalink to &quot;字符串变量操作&quot;">​</a></h3><blockquote><p>特殊符合使用<code>\\</code>进行转义</p></blockquote><ul><li>替换第一个匹配到的文本<code>\${&lt;源文本&gt;/&lt;需要替换的文本&gt;/&lt;替换后的文本&gt;}</code></li><li>替换所有匹配的文本<code>\${&lt;源文本&gt;//&lt;需要替换的文本&gt;/&lt;替换后的文本&gt;}</code></li><li>删除变量中第一个匹配的字符串<code>\${&lt;源文本&gt;/&lt;需要删除的文本&gt;}</code></li><li>删除变量中所有匹配的字符串<code>\${&lt;源文本&gt;//&lt;需要删除的文本&gt;}</code></li></ul><h3 id="base64" tabindex="-1">BASE64 <a class="header-anchor" href="#base64" aria-label="Permalink to &quot;BASE64&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>编码</span></span>
<span class="line"><span>base64 a  &gt; b</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解码</span></span>
<span class="line"><span>base -d a &gt; b</span></span></code></pre></div><hr><h3 id="nslookup" tabindex="-1">nslookup <a class="header-anchor" href="#nslookup" aria-label="Permalink to &quot;nslookup&quot;">​</a></h3><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><blockquote><p>Ubuntu</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt-get install dnsutils</span></span></code></pre></div><blockquote><p>Debian</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt-get update</span></span>
<span class="line"><span>apt-get install dnsutils</span></span></code></pre></div><blockquote><p>Fedora / Centos</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install bind-utils</span></span></code></pre></div><hr><h3 id="文件的组织" tabindex="-1">文件的组织 <a class="header-anchor" href="#文件的组织" aria-label="Permalink to &quot;文件的组织&quot;">​</a></h3><p>以下是对这些目录的解释：</p><ul><li><p><strong>/bin</strong>：</p><blockquote><p>Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。</p></blockquote></li><li><p><strong>/boot：</strong></p><blockquote><p>这里存放的是启动 Linux 时使用的一些核 心文件，包括一些连接文件以及镜像文件。</p></blockquote></li><li><p><strong>/dev ：</strong></p><blockquote><p>Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。</p></blockquote></li><li><p><strong>/etc：</strong></p><blockquote><p>etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。</p></blockquote></li><li><p><strong>/home</strong>： 用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。</p></li><li><p><strong>/lib</strong>：</p><blockquote><p>Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。</p></blockquote></li><li><p><strong>/lost+found</strong>：</p><blockquote><p>这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。</p></blockquote></li><li><p><strong>/media</strong>：</p><blockquote><p>linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。</p></blockquote></li><li><p><strong>/mnt</strong>：</p><blockquote><p>系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。</p></blockquote></li><li><p><strong>/opt</strong>：</p><blockquote><p>optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。</p></blockquote></li><li><p><strong>/proc</strong>：</p><blockquote><p>proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。 这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，</p></blockquote></li><li><p><strong>/root</strong>：</p><blockquote><p>该目录为系统管理员，也称作超级权限者的用户主目录。</p></blockquote></li><li><p><strong>/sbin</strong>：</p><blockquote><p>s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。</p></blockquote></li><li><p><strong>/selinux</strong>：</p><blockquote><p>这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。</p></blockquote></li><li><p><strong>/srv</strong>：</p><blockquote><p>该目录存放一些服务启动之后需要提取的数据。</p></blockquote></li><li><p><strong>/sys</strong>：</p><blockquote><p>这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。</p><p>sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。</p><p>该文件系统是内核设备树的一个直观反映。</p><p>当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建</p></blockquote></li><li><p><strong>/tmp</strong>：</p><blockquote><p>tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。</p></blockquote></li><li><p><strong>/usr</strong>：</p><blockquote><p>usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。</p></blockquote></li><li><p><strong>/usr/bin：</strong></p><blockquote><p>系统用户使用的应用程序。</p></blockquote></li><li><p><strong>/usr/sbin：</strong></p><blockquote><p>超级用户使用的比较高级的管理程序和系统守护程序。</p></blockquote></li><li><p><strong>/usr/src：</strong></p><blockquote><p>内核源代码默认的放置目录。</p></blockquote></li><li><p><strong>/var</strong>：</p><blockquote><p>var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。</p></blockquote></li><li><p><strong>/run</strong>：</p><blockquote><p>是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。</p></blockquote></li></ul>`,53)]))}const g=a(l,[["render",t]]);export{h as __pageData,g as default};
