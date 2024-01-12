import{_ as s,c as a,o as n,U as p}from"./chunks/framework.jrTOfirO.js";const b=JSON.parse('{"title":"openwrt 编译","description":"","frontmatter":{"title":"openwrt 编译"},"headers":[],"relativePath":"util/openwrt.md","filePath":"util/openwrt.md","lastUpdated":1705028997000}'),e={name:"util/openwrt.md"},l=p(`<h3 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h3><p>openwrt 源码</p><p><a href="https://github.com/coolsnowwolf/lede" target="_blank" rel="noreferrer">coolsnowwolf/lede: Lean&#39;s LEDE source (github.com)</a></p><p>常用插件</p><p><a href="https://github.com/kenzok8/openwrt-packages" target="_blank" rel="noreferrer">kenzok8/openwrt-packages: openwrt常用软件包 (github.com)</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 依赖</span></span>
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
<span class="line"><span>LuCI -&gt; Applications</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>`,15),i=[l];function t(c,o,d,r,u,g){return n(),a("div",null,i)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};
