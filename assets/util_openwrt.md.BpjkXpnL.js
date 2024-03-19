import{_ as a,c as s,o as n,a8 as e}from"./chunks/framework.BaglXmoE.js";const b=JSON.parse('{"title":"openwrt 编译","description":"","frontmatter":{"title":"openwrt 编译"},"headers":[],"relativePath":"util/openwrt.md","filePath":"util/openwrt.md","lastUpdated":1710853433000}'),p={name:"util/openwrt.md"},l=e(`<h3 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h3><p>openwrt 源码</p><p><a href="https://github.com/coolsnowwolf/lede" target="_blank" rel="noreferrer">coolsnowwolf/lede: Lean&#39;s LEDE source (github.com)</a></p><p>常用插件</p><p><a href="https://github.com/kenzok8/openwrt-packages" target="_blank" rel="noreferrer">kenzok8/openwrt-packages: openwrt常用软件包 (github.com)</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 依赖</span></span>
<span class="line"><span>sudo apt update -y</span></span>
<span class="line"><span>sudo apt full-upgrade -y</span></span>
<span class="line"><span>sudo apt install -y ack antlr3 asciidoc autoconf automake autopoint binutils bison build-essential \\</span></span>
<span class="line"><span>bzip2 ccache cmake cpio curl device-tree-compiler fastjar flex gawk gettext gcc-multilib g++-multilib \\</span></span>
<span class="line"><span>git gperf haveged help2man intltool libc6-dev-i386 libelf-dev libglib2.0-dev libgmp3-dev libltdl-dev \\</span></span>
<span class="line"><span>libmpc-dev libmpfr-dev libncurses5-dev libncursesw5-dev libreadline-dev libssl-dev libtool lrzsz \\</span></span>
<span class="line"><span>mkisofs msmtp nano ninja-build p7zip p7zip-full patch pkgconf python2.7 python3 python3-pyelftools \\</span></span>
<span class="line"><span>libpython3-dev qemu-utils rsync scons squashfs-tools subversion swig texinfo uglifyjs upx-ucl unzip \\</span></span>
<span class="line"><span>vim wget xmlto xxd zlib1g-dev python3-setuptools</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当使用 win 的 wsl 的时候 需要其他操作</span></span>
<span class="line"><span># 下载源码</span></span>
<span class="line"><span>git clone https://github.com/coolsnowwolf/lede</span></span>
<span class="line"><span>cd lede</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置插件</span></span>
<span class="line"><span>sed -i &#39;$a src-git kenzo https://github.com/kenzok8/openwrt-packages&#39; feeds.conf.default</span></span>
<span class="line"><span>sed -i &#39;$a src-git small https://github.com/kenzok8/small&#39; feeds.conf.default</span></span>
<span class="line"><span>git pull</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新插件</span></span>
<span class="line"><span>./scripts/feeds update -a</span></span>
<span class="line"><span>./scripts/feeds install -a</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译配置</span></span>
<span class="line"><span>make menuconfig</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下载 dl 库，编译固件 （-j 后面是线程数，第一次编译推荐用单线程）</span></span>
<span class="line"><span>ulimit -s 102400 # 堆栈调大点,有可能报错</span></span>
<span class="line"><span>make download -j8</span></span>
<span class="line"><span>make V=s -j1</span></span></code></pre></div><p>当使用 wsl 进行的时候需要</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 以管理员身份打开终端</span></span>
<span class="line"><span>PS &gt; fsutil.exe file setCaseSensitiveInfo &lt;your_local_lede_path&gt; enable</span></span>
<span class="line"><span># 将本项目 git clone 到开启了大小写敏感的目录 &lt;your_local_lede_path&gt; 中</span></span>
<span class="line"><span>PS &gt; git clone git@github.com:coolsnowwolf/lede.git &lt;your_local_lede_path&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在执行make前</span></span>
<span class="line"><span>PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin</span></span></code></pre></div><p>二次编译</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd lede</span></span>
<span class="line"><span>git pull</span></span>
<span class="line"><span>./scripts/feeds update -a</span></span>
<span class="line"><span>./scripts/feeds install -a</span></span>
<span class="line"><span>make defconfig</span></span>
<span class="line"><span>make download -j8</span></span>
<span class="line"><span>make V=s -j$(nproc)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果需要重新配置</span></span>
<span class="line"><span>rm -rf ./tmp &amp;&amp; rm -rf .config</span></span>
<span class="line"><span>make menuconfig</span></span>
<span class="line"><span>make V=s -j$(nproc)</span></span></code></pre></div><p>menuconfig 配置</p><p>cr660x</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Target System -&gt;  MediaTek Ralink MTPS</span></span>
<span class="line"><span>Subtarget -&gt;      MT7621 based boards</span></span>
<span class="line"><span>Target profile -&gt; Xiaomi Mi Router CR660X</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 插件选择</span></span>
<span class="line"><span>LuCI -&gt; Applications</span></span></code></pre></div><h2 id="小主机安装openwrt" tabindex="-1">小主机安装openwrt <a class="header-anchor" href="#小主机安装openwrt" aria-label="Permalink to &quot;小主机安装openwrt&quot;">​</a></h2><h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h3><p>镜像刷入U盘工具 <a href="https://sourceforge.net/projects/win32diskimager/" target="_blank" rel="noreferrer">Win32 Disk Imager download | SourceForge.net</a></p><p>openwrt开源项目</p><blockquote><p><a href="https://github.com/coolsnowwolf/lede" target="_blank" rel="noreferrer">Releases · coolsnowwolf/lede (github.com)</a></p><p><a href="https://github.com/immortalwrt/immortalwrt" target="_blank" rel="noreferrer">immortalwrt/immortalwrt: An opensource OpenWrt variant for mainland China users. (github.com)</a></p><p>有很多内置的软件源</p></blockquote><h4 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h4><ul><li><p>把镜像刷入到U盘中</p></li><li><p>插入小主机</p></li><li><p>计入 <code>bios</code> 中设置 U盘启动</p></li><li><p>使用网线，进入管理界面（默认密码一般为<code>password</code>）</p></li><li><p>查找安装硬盘的盘符</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fdisk -l</span></span></code></pre></div></li><li><p>把U盘中的系统刷入到小主机的硬盘中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dd if=&lt;要写入的镜像.img&gt; of=&lt;需要写入的硬盘,上一步查询出来的&gt;</span></span></code></pre></div></li><li><p>拔掉 U 盘，重启就使用硬盘中的系统进入了</p></li></ul><h4 id="旁路由设置" tabindex="-1">旁路由设置 <a class="header-anchor" href="#旁路由设置" aria-label="Permalink to &quot;旁路由设置&quot;">​</a></h4><ul><li>在<code>网络</code>-<code>接口</code>的<code>常规设置</code>中给 <code>LAN</code> 网络接口设置一个和现有局域网同网段的静态 IP 地址，注意不要和现有设备的 IP 地址冲突</li><li>将 LAN 网络接口的<code>默认网关</code>设为主路由的 IP 地址</li><li>在<code>高级设置</code>中找到<code>使用自定义的 DNS 服务器</code>设为主路由的 IP 地址</li><li>在<code>DHCP 服务器</code>中勾选<code>忽略此接口</code></li><li>在<code>网络</code>-<code>防火墙</code>中，关闭<code>SYN-flood 防御</code>，点击<code>保存并应用</code></li><li>重启</li></ul><p>客户端接入</p><ul><li>设置 IP 为静态</li><li>设置 IP 地址为不冲突的路由器网段的地址</li><li>设置路由器（网关地址）为旁路由 IP</li><li>设置 DNS 为主路由 IP</li></ul><h2 id="app-配置" tabindex="-1">app 配置 <a class="header-anchor" href="#app-配置" aria-label="Permalink to &quot;app 配置&quot;">​</a></h2><h4 id="openclash" tabindex="-1">openclash <a class="header-anchor" href="#openclash" aria-label="Permalink to &quot;openclash&quot;">​</a></h4><p>内核下载</p><blockquote><p>Dev 内核下载: <a href="https://github.com/vernesong/OpenClash/releases/tag/Clash" target="_blank" rel="noreferrer">https://github.com/vernesong/OpenClash/releases/tag/Clash</a> Tun 内核下载: <a href="https://github.com/vernesong/OpenClash/releases/tag/TUN-Premium" target="_blank" rel="noreferrer">https://github.com/vernesong/OpenClash/releases/tag/TUN-Premium</a> Tun 游戏内核: <a href="https://github.com/vernesong/OpenClash/releases/tag/TUN" target="_blank" rel="noreferrer">https://github.com/vernesong/OpenClash/releases/tag/TUN</a></p></blockquote>`,29),i=[l];function t(o,c,r,d,h,u){return n(),s("div",null,i)}const m=a(p,[["render",t]]);export{b as __pageData,m as default};
