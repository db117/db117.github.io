import{_ as n,c as a,ah as p,o as e}from"./chunks/framework.QVDyGnW_.js";const d=JSON.parse('{"title":"wireshark","description":"","frontmatter":{"title":"wireshark"},"headers":[],"relativePath":"util/wireshark.md","filePath":"util/wireshark.md"}'),l={name:"util/wireshark.md"};function t(i,s,r,o,c,u){return e(),a("div",null,s[0]||(s[0]=[p(`<blockquote><p>一个非常强大的抓包工具</p><p><a href="https://www.wireshark.org/docs/wsug_html/" target="_blank" rel="noreferrer">Wireshark User’s Guide</a></p><p><a href="https://github.com/wireshark/wireshark" target="_blank" rel="noreferrer">wireshark/wireshark: GitHub</a></p></blockquote><h3 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>######### TCP  ############</span></span>
<span class="line"><span># TCP超时或丢包重传的报文</span></span>
<span class="line"><span>tcp.analysis.retransmission</span></span>
<span class="line"><span># TCP重传并且时间差大于等于0.2s</span></span>
<span class="line"><span>tcp.analysis.retransmission &amp;&amp; tcp.time_delta &gt;= 0.2</span></span>
<span class="line"><span># 帧间隔大于100秒</span></span>
<span class="line"><span>tcp.time_delta &gt;= 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>######### HTTP  ############</span></span>
<span class="line"><span># 过滤HTTP/HTTPS/TLS请求域名</span></span>
<span class="line"><span>tls.handshake.type == 1 || http.request</span></span>
<span class="line"><span># HTTP响应4xx、5xx状态码报文</span></span>
<span class="line"><span>string(http.response.code) ~ &quot;^4[0-9]{2}$|^5[0-9]{2}$&quot;</span></span>
<span class="line"><span># 查找固定状态码</span></span>
<span class="line"><span>http.response.code in {403,404,502,503,504}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>######### PING  ############</span></span>
<span class="line"><span># 过滤耗时超过8.5ms的请求</span></span>
<span class="line"><span>icmp.resptime &gt;= 8.5</span></span>
<span class="line"><span># 过滤Ping超时/不响应的报文</span></span>
<span class="line"><span>icmp.resp_not_found</span></span>
<span class="line"><span></span></span>
<span class="line"><span>######### DNS  ############</span></span>
<span class="line"><span># 过滤耗时超过50ms的dns响应</span></span>
<span class="line"><span>dns.time &gt; 0.05</span></span>
<span class="line"><span># 过滤没有解析到地址的报文</span></span>
<span class="line"><span>dns.count.answers == 0</span></span>
<span class="line"><span># 过滤dns解析的域名</span></span>
<span class="line"><span>dns.qry.name == &quot;test.com&quot;</span></span>
<span class="line"><span>dns.qry.name ~ &quot;bing.com$|microsoft.com$&quot; # 正则匹配</span></span>
<span class="line"><span></span></span>
<span class="line"><span>######### IP  ############</span></span>
<span class="line"><span># 通过IP归属地过滤</span></span>
<span class="line"><span>ip.geoip.country == &quot;United States&quot;</span></span>
<span class="line"><span>ip.geoip.city in {&quot;Los Angeles&quot;,&quot;Chicago&quot;}</span></span>
<span class="line"><span>ip.geoip.asnum == 20326</span></span>
<span class="line"><span></span></span>
<span class="line"><span>######### 函数转换类  ############</span></span>
<span class="line"><span># upper()/lower()函数</span></span>
<span class="line"><span>lower(http.server) ~ &quot;apache&quot;</span></span>
<span class="line"><span>upper(http.request.method) ~ &quot;post|get&quot;</span></span>
<span class="line"><span># len()函数</span></span>
<span class="line"><span>len(http.request.uri) &gt;= 10  # 过滤http头部的URI字段，大于等于10字节的报文</span></span>
<span class="line"><span>len(http.host) &gt;= 20  #过滤HTTP主机名大于等于20字节的报文：</span></span>
<span class="line"><span># string()函数</span></span>
<span class="line"><span>string(ip.addr) ~ &quot;^10|^11&quot;  #过滤IP为10网段开头或者11网段开头的IP</span></span>
<span class="line"><span>string(ip.dst) matches r&quot;^172\\.(1[6-9]|2[0-9]|3[0-1])\\.[0-9]{1,3}\\.255&quot; # 匹配目的IP地址(172.16到172.31)</span></span>
<span class="line"><span># max()、min()函数</span></span>
<span class="line"><span>max(tcp.srcport,tcp.dstport) &lt;= 1024  # 过滤tcp源端口、目的端口，最大不能超过1024的报文</span></span></code></pre></div><h3 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h3><ul><li><p>任何字段都能成为过滤条件</p><ul><li>鼠标拖动任意字段过滤</li></ul></li><li><p>分析</p><ul><li><strong>分析(Analyze)</strong> --&gt; <strong>显示过滤表达式(Display Filter Expression)</strong> 可以进入到过滤表达式页面</li><li>选择要过滤的字段，选择操作符，写入数值即可</li></ul></li><li><p>查看并搜索过滤字段</p><ul><li>在 视图（View） --&gt; 内部（Internals） --&gt; 支持的协议（Supported Protocols）即可查看支持的所有协议，在搜索框中键入想要搜索的字段</li></ul></li><li><p>抓<code>https</code></p></li></ul><blockquote><p>在系统环境变量中设置<code>SSLKEYLOGFILE</code>=C:\\tmp\\tls.log</p><p>在<code>wireshark</code>的首选项-&gt;Protocls-&gt;TLS：配置好刚才配置的目录</p></blockquote>`,6)]))}const g=n(l,[["render",t]]);export{d as __pageData,g as default};
