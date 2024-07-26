import{_ as a,c as s,o as n,a5 as t}from"./chunks/framework.B-Ov6ZuM.js";const _=JSON.parse('{"title":"ollama 相关","description":"","frontmatter":{"title":"ollama 相关"},"headers":[],"relativePath":"ai/ollama.md","filePath":"ai/ollama.md","lastUpdated":1721977240000}'),e={name:"ai/ollama.md"},l=t(`<blockquote><p><a href="https://github.com/ollama/ollama/tree/main" target="_blank" rel="noreferrer">ollama/ollama: Get up and running with Llama 3.1, Mistral, Gemma 2, and other large language models. (github.com)</a></p><p><a href="https://ollama.com/" target="_blank" rel="noreferrer">Ollama</a></p><p>主要就是运行本地模型</p></blockquote><h2 id="使用-huggingface-模型" tabindex="-1">使用 <code>HuggingFace</code> 模型 <a class="header-anchor" href="#使用-huggingface-模型" aria-label="Permalink to &quot;使用 \`HuggingFace\` 模型&quot;">​</a></h2><p><code>ollama</code>内置模型数量太少，可以导入<code>GGUF</code>类型的模型。</p><p>创建一个文件，名称随意。比如<code>config.txt</code></p><p>修改第一行为本地的模型文件位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM &quot;C:\\Users\\db117\\.cache\\lm-studio\\models\\second-state\\gte-Qwen2-1.5B-instruct-GGUF\\gte-Qwen2-1.5B-instruct-Q5_K_M.gguf&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TEMPLATE &quot;&quot;&quot;{{- if .System }}</span></span>
<span class="line"><span>&lt;|im_start|&gt;system {{ .System }}&lt;|im_end|&gt;</span></span>
<span class="line"><span>{{- end }}</span></span>
<span class="line"><span>&lt;|im_start|&gt;user</span></span>
<span class="line"><span>{{ .Prompt }}&lt;|im_end|&gt;</span></span>
<span class="line"><span>&lt;|im_start|&gt;assistant</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SYSTEM &quot;&quot;&quot;&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PARAMETER stop &lt;|im_start|&gt;</span></span>
<span class="line"><span>PARAMETER stop &lt;|im_end|&gt;</span></span></code></pre></div><p>执行命令即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ollama create llama3-cn -f ./config.txt</span></span></code></pre></div>`,8),p=[l];function o(i,c,r,d,m,u){return n(),s("div",null,p)}const h=a(e,[["render",o]]);export{_ as __pageData,h as default};
