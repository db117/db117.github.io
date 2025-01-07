import{_ as n,c as s,a3 as e,o as t}from"./chunks/framework.SFEPx7-A.js";const g=JSON.parse('{"title":"IP 查询","description":"","frontmatter":{"title":"IP 查询"},"headers":[],"relativePath":"util/IP.md","filePath":"util/IP.md"}'),p={name:"util/IP.md"};function i(l,a,o,r,c,d){return t(),s("div",null,a[0]||(a[0]=[e(`<blockquote><p>使用 <code>java</code> 对 <code>IP</code> 进行查询</p><p><a href="https://github.com/P3TERX/GeoLite.mmdb" target="_blank" rel="noreferrer">P3TERX/GeoLite.mmdb: MaxMind&#39;s GeoIP2 GeoLite2 Country, City, and ASN databases</a></p><p><a href="https://github.com/mayaxcn/china-ip-list" target="_blank" rel="noreferrer">mayaxcn/china-ip-list: 每小时更新中国IP范围列表，Update Mainland China ip‘s list in everyhour</a></p><p><a href="https://ispip.clang.cn/" target="_blank" rel="noreferrer">每日更新的电信IP段,联通IP段,移动IP段,铁通IP段,教育网IP段,长宽/鹏博士IP段 ISP IP - ╃苍狼山庄╃</a></p></blockquote><h2 id="maxmind" tabindex="-1">MaxMind <a class="header-anchor" href="#maxmind" aria-label="Permalink to &quot;MaxMind&quot;">​</a></h2><blockquote><p><a href="https://dev.maxmind.com/geoip/geolite2-free-geolocation-data/#integration" target="_blank" rel="noreferrer">GeoLite2 Free Geolocation Data | MaxMind Developer Portal</a></p></blockquote><h4 id="数据库文件获取途经" tabindex="-1">数据库文件获取途经 <a class="header-anchor" href="#数据库文件获取途经" aria-label="Permalink to &quot;数据库文件获取途经&quot;">​</a></h4><ul><li>去官网注册，并下载文件</li><li>github有人下载好了<a href="https://github.com/P3TERX/GeoLite.mmdb" target="_blank" rel="noreferrer">P3TERX/GeoLite.mmdb: MaxMind&#39;s GeoIP2 GeoLite2 Country, City, and ASN databases</a></li></ul><h4 id="maven" tabindex="-1">maven <a class="header-anchor" href="#maven" aria-label="Permalink to &quot;maven&quot;">​</a></h4><p><code>jdk 8</code>，目前最高2.17.0</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.maxmind.geoip2&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;geoip2&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.17.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // A File object pointing to your GeoIP2 or GeoLite2 database</span></span>
<span class="line"><span>File database = ResourceUtils.getFile(&quot;classpath:ip/GeoLite2-Country.mmdb&quot;);;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DatabaseReader reader = new DatabaseReader.Builder(database)</span></span>
<span class="line"><span>        .fileMode(Reader.FileMode.MEMORY)</span></span>
<span class="line"><span>        .withCache(new CHMCache()).build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>InetAddress ipAddress = InetAddress.getByName(&quot;103.75.152.102&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Optional&lt;CountryResponse&gt; triedCountry = reader.tryCountry(ipAddress);</span></span>
<span class="line"><span>triedCountry.ifPresent(x -&gt; {</span></span>
<span class="line"><span>    System.out.println(x.getCountry().getIsoCode());</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="ip2region" tabindex="-1">ip2region <a class="header-anchor" href="#ip2region" aria-label="Permalink to &quot;ip2region&quot;">​</a></h2><blockquote><p><a href="https://github.com/lionsoul2014/ip2region" target="_blank" rel="noreferrer">lionsoul2014/ip2region: Ip2region (2.0 - xdb) is a offline IP address manager framework and locator, support billions of data segments, ten microsecond searching performance. xdb engine implementation for many programming languages</a></p><p>一个本地IP查询库</p></blockquote><h4 id="maven-仓库" tabindex="-1">maven 仓库 <a class="header-anchor" href="#maven-仓库" aria-label="Permalink to &quot;maven 仓库&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.lionsoul&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;ip2region&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;2.7.0&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h4 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void ip2region() throws Exception {</span></span>
<span class="line"><span>    String dbPath = &quot;C:\\\\ip2region.xdb&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 1、从 dbPath 加载整个 xdb 到内存。</span></span>
<span class="line"><span>    byte[] cBuff = Searcher.loadContentFromFile(dbPath);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2、使用上述的 cBuff 创建一个完全基于内存的查询对象。</span></span>
<span class="line"><span>    Searcher searcher = Searcher.newWithBuffer(cBuff);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3、查询</span></span>
<span class="line"><span>    String ip = &quot;1.2.3.4&quot;;</span></span>
<span class="line"><span>    String region = searcher.search(ip);</span></span>
<span class="line"><span>    System.out.println(region);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16)]))}const u=n(p,[["render",i]]);export{g as __pageData,u as default};
