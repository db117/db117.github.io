import{_ as s,c as a,o as t,a as e}from"./app.55d73d08.js";const m=JSON.parse('{"title":"zsh配置","description":"","frontmatter":{"title":"zsh配置"},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}]},{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[{"level":3,"title":"zsh-autosuggestions","slug":"zsh-autosuggestions","link":"#zsh-autosuggestions","children":[]}]}],"relativePath":"os/mac/zsh.md","lastUpdated":1677490656000}'),n={name:"os/mac/zsh.md"},o=e(`<h1 id="oh-my-zsh" tabindex="-1">Oh My Zsh <a class="header-anchor" href="#oh-my-zsh" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">ohmyzsh</a></p><table><thead><tr><th>Method</th><th>Command</th></tr></thead><tbody><tr><td><strong>curl</strong></td><td><code>sh -c &quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</code></td></tr><tr><td><strong>wget</strong></td><td><code>sh -c &quot;$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</code></td></tr><tr><td><strong>fetch</strong></td><td><code>sh -c &quot;$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</code></td></tr></tbody></table><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">vim ~/.zshrc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">omz update</span></span>
<span class="line"><span style="color:#A6ACCD;"># 已过期</span></span>
<span class="line"><span style="color:#A6ACCD;">upgrade_oh_my_zsh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h2><h3 id="zsh-autosuggestions" tabindex="-1">zsh-autosuggestions <a class="header-anchor" href="#zsh-autosuggestions" aria-hidden="true">#</a></h3><blockquote><p>命令行提示</p></blockquote><p><a href="https://github.com/void-linux/void-packages/blob/master/srcpkgs/zsh-autosuggestions/template" target="_blank" rel="noreferrer">zsh-autosuggestions</a></p><ol><li><p>克隆仓库 <code>$ZSH_CUSTOM/plugins</code> (默认 <code>~/.oh-my-zsh/custom/plugins</code>)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>添加到配置文件 <code>~/.zshrc</code>):</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">plugins=(zsh-autosuggestions)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h4 id="zsh-syntax-highlighting" tabindex="-1">zsh-syntax-highlighting <a class="header-anchor" href="#zsh-syntax-highlighting" aria-hidden="true">#</a></h4><blockquote><p>命令行高亮</p></blockquote><p><a href="https://github.com/zsh-users/zsh-syntax-highlighting" target="_blank" rel="noreferrer">zsh-syntax-highlighting</a></p><ol><li><p>克隆仓库到<code>$ZSH_CUSTOM/plugins</code> (默认 <code>~/.oh-my-zsh/custom/plugins</code>)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>添加到配置文件 <code>~/.zshrc</code>):</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">plugins=( [plugins...] zsh-syntax-highlighting)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol>`,17),l=[o];function h(i,c,p,r,d,g){return t(),a("div",null,l)}const y=s(n,[["render",h]]);export{m as __pageData,y as default};