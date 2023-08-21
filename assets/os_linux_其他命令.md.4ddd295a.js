import{_ as s,o as n,c as a,S as l}from"./chunks/framework.1603d207.js";const u=JSON.parse('{"title":"其他命令","description":"","frontmatter":{"title":"其他命令"},"headers":[],"relativePath":"os/linux/其他命令.md","filePath":"os/linux/其他命令.md","lastUpdated":1692600405000}'),p={name:"os/linux/其他命令.md"},o=l(`<h3 id="xargs" tabindex="-1">xargs <a class="header-anchor" href="#xargs" aria-label="Permalink to &quot;xargs&quot;">​</a></h3><blockquote><p>xargs 可以将管道或标准输入（stdin）数据转换成命令行参数，也能够从文件的输出中读取数据。</p></blockquote><p><strong>参数</strong></p><ul><li>-a file 从文件中读入作为 stdin</li><li>-e flag ，注意有的时候可能会是-E，flag必须是一个以空格分隔的标志，当xargs分析到含有flag这个标志的时候就停止。</li><li>-p 当每次执行一个argument的时候询问一次用户。</li><li>-n num 后面加次数，表示命令在执行的时候一次用的argument的个数，默认是用所有的。</li><li>-t 表示先打印命令，然后再执行。</li><li>-i 或者是-I，这得看linux支持了，将xargs的每项名称，一般是一行一行赋值给 {}，可以用 {} 代替。</li><li>-r no-run-if-empty 当xargs的输入为空的时候则停止xargs，不用再去执行了。</li><li>-s num 命令行的最大字符数，指的是 xargs 后面那个命令的最大命令行字符数。</li><li>-L num 从标准输入一次读取 num 行送给 command 命令。</li><li>-l 同 -L。</li><li>-d delim 分隔符，默认的xargs分隔符是回车，argument的分隔符是空格，这里修改的是xargs的分隔符。</li></ul><p><strong>注意事项</strong></p><blockquote><p>由于<code>xargs</code>默认将空格作为分隔符，所以不太适合处理文件名，因为文件名可能包含空格。</p><p><code>find</code>命令有一个特别的参数<code>-print0</code>，指定输出的文件列表以<code>null</code>分隔。然后，<code>xargs</code>命令的<code>-0</code>参数表示用<code>null</code>当作分隔符。</p></blockquote><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 复制 *.jpg 文件到 /data/images 目录下</span></span>
<span class="line"><span style="color:#A6ACCD;">ls *.jpg | xargs -n1 -I {} cp {} /data/images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除/path路径下的所有文件。由于分隔符是null，所以处理包含空格的文件名，也不会报错。</span></span>
<span class="line"><span style="color:#A6ACCD;">find /path -type f -print0 | xargs -0 rm</span></span></code></pre></div><h3 id="curl" tabindex="-1">curl <a class="header-anchor" href="#curl" aria-label="Permalink to &quot;curl&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 简单的发送 post 请求</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -X POST https://www.db117.site</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 pos t发送表单数据，-X 可以省略</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -d &#39;login=emma&amp;password=123&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -d &#39;login=emma&#39; -d &#39;password=123&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;"># 发送表单请求，并支持重定向</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -L -d &#39;tweet=hi&#39; https://api.twitter.com/tweet</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 post 发送 JSON 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -d &#39;{&quot;login&quot;: &quot;emma&quot;, &quot;pass&quot;: &quot;123&quot;}&#39; -H &#39;Content-Type: application/json&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 post 发送文件数据</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -d &#39;@data.txt&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用url编码数据(转义一些特殊字符)</span></span>
<span class="line"><span style="color:#A6ACCD;">curl --data-urlencode &#39;comment=hello world&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 post 发送表单文件</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -F &#39;file=@photo.png&#39; https://google.com/profile</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 post 发送表单文件并指定 MIME Type</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -F &#39;file=@photo.png;type=image/png&#39; https://google.com/profile</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 post 发送表单文件并指定文件名称</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -F &#39;file=@photo.png;filename=me.png&#39; https://google.com/profile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加文件头(可以添加多个)</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -H &#39;Accept-Language: en-US&#39; https://google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加一个 cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -b &#39;session=1&#39; https://google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"># 从文件中加载 cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -b cookies.txt https://www.google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"># 把响应 cookie 保存在文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -c cookies.txt https://www.google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 支持重定向</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -L https://www.google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"># 忽略 ssl 认证</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -k https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 Basic 认证</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -u &#39;bob:12345&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;">curl https://bob:12345@google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;"># 把 username 放在 shell 命令里面，密码单独输入</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -u &#39;bob&#39; https://google.com/login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用代理</span></span>
<span class="line"><span style="color:#A6ACCD;"># socks5</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -x socks5://james:cats@myproxy.com:8080 https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># socks4</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -x socks4://james:cats@myproxy.com:8080 https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># HTTP </span></span>
<span class="line"><span style="color:#A6ACCD;">curl -x james:cats@myproxy.com:8080 https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 silent 模式</span></span>
<span class="line"><span style="color:#A6ACCD;"># 成功则打印返回值, 失败什么都不打印，出现异常只能通过 echo $? 获取上次 exit code 来判读</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -s https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># 什么都不会打印，不管是否成功  出现异常只能通过 echo $? 获取上次 exit code 来判读</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -s -o /dev/null https://google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"># 成功什么都不会打印  出现异常会打印出异常</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -S -s -o /dev/null https://google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 把响应保存到文件 response.txt 中</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -o response.txt https://google.com?q=kitties</span></span>
<span class="line"><span style="color:#A6ACCD;"># 把响应保存到文件中，文件名称是 url 的最后一部分</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -O https://catonmat.net/ftp/digg.pm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 限速（默认单位是字节，可以使用 k,m,g）</span></span>
<span class="line"><span style="color:#A6ACCD;">curl --limit-rate 200k https://google.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># debug </span></span>
<span class="line"><span style="color:#A6ACCD;"># 打印出所有请求,主要包括 ssl 认证</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -v https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打印出详细的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">curl --trace - https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打印出详细的数据，添加时间戳</span></span>
<span class="line"><span style="color:#A6ACCD;">curl --trace - --trace-time https://catonmat.net  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 把响应头也打印出来</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -i https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># 只打印响应头</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -s -o /dev/null -D - https://catonmat.net</span></span>
<span class="line"><span style="color:#A6ACCD;"># 只打印请求头</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -v -s -o /dev/null --stderr - https://catonmat.net | grep &#39;^&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 只打印响应编码</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -w &#39;%{response_code}&#39; -s -o /dev/null https://catonmat.net</span></span></code></pre></div>`,10),e=[o];function t(c,r,i,C,A,g){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
