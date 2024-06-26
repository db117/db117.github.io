import{_ as s,c as t,o as a,a7 as e}from"./chunks/framework.D38zyZX2.js";const m=JSON.parse('{"title":"zsh配置","description":"","frontmatter":{"title":"zsh配置"},"headers":[],"relativePath":"os/mac/zsh.md","filePath":"os/mac/zsh.md","lastUpdated":1716896352000}'),o={name:"os/mac/zsh.md"},h=e('<h1 id="oh-my-zsh" tabindex="-1">Oh My Zsh <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;Oh My Zsh&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">ohmyzsh</a></p><table tabindex="0"><thead><tr><th>Method</th><th>Command</th></tr></thead><tbody><tr><td><strong>curl</strong></td><td><code>sh -c &quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</code></td></tr><tr><td><strong>wget</strong></td><td><code>sh -c &quot;$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</code></td></tr><tr><td><strong>fetch</strong></td><td><code>sh -c &quot;$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</code></td></tr></tbody></table><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim ~/.zshrc</span></span></code></pre></div><h2 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to &quot;更新&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>omz update</span></span>\n<span class="line"><span># 已过期</span></span>\n<span class="line"><span>upgrade_oh_my_zsh</span></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><h3 id="zsh-autosuggestions" tabindex="-1">zsh-autosuggestions <a class="header-anchor" href="#zsh-autosuggestions" aria-label="Permalink to &quot;zsh-autosuggestions&quot;">​</a></h3><blockquote><p>命令行提示</p></blockquote><p><a href="https://github.com/void-linux/void-packages/blob/master/srcpkgs/zsh-autosuggestions/template" target="_blank" rel="noreferrer">zsh-autosuggestions</a></p><ol><li><p>克隆仓库 <code>$ZSH_CUSTOM/plugins</code> (默认 <code>~/.oh-my-zsh/custom/plugins</code>)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions</span></span></code></pre></div></li><li><p>添加到配置文件 <code>~/.zshrc</code>):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>plugins=(zsh-autosuggestions)</span></span></code></pre></div></li></ol><h4 id="zsh-syntax-highlighting" tabindex="-1">zsh-syntax-highlighting <a class="header-anchor" href="#zsh-syntax-highlighting" aria-label="Permalink to &quot;zsh-syntax-highlighting&quot;">​</a></h4><blockquote><p>命令行高亮</p></blockquote><p><a href="https://github.com/zsh-users/zsh-syntax-highlighting" target="_blank" rel="noreferrer">zsh-syntax-highlighting</a></p><ol><li><p>克隆仓库到<code>$ZSH_CUSTOM/plugins</code> (默认 <code>~/.oh-my-zsh/custom/plugins</code>)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting</span></span></code></pre></div></li><li><p>添加到配置文件 <code>~/.zshrc</code>):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>plugins=( [plugins...] zsh-syntax-highlighting)</span></span></code></pre></div></li></ol>',17),i=[h];function n(l,c,p,d,r,g){return a(),t("div",null,i)}const b=s(o,[["render",n]]);export{m as __pageData,b as default};
