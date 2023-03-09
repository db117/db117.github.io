import{_ as i,c as l,o as t,a as e,b as a}from"./app.a840672a.js";const T=JSON.parse('{"title":"sentinel","description":"","frontmatter":{"title":"sentinel"},"headers":[{"level":3,"title":"客户端","slug":"客户端","link":"#客户端","children":[{"level":4,"title":"客户端流程图","slug":"客户端流程图","link":"#客户端流程图","children":[]},{"level":4,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}]},{"level":3,"title":"alibaba.cloud","slug":"alibaba-cloud","link":"#alibaba-cloud","children":[{"level":4,"title":"流程图","slug":"流程图","link":"#流程图","children":[]}]},{"level":3,"title":"服务端","slug":"服务端","link":"#服务端","children":[{"level":4,"title":"扩展","slug":"扩展-1","link":"#扩展-1","children":[]}]}],"relativePath":"java/spring-cloud/sentinel.md","lastUpdated":1678341619000}'),o={name:"java/spring-cloud/sentinel.md"},c=e('<p>源码地址：<a href="https://github.com/alibaba/Sentinel" target="_blank" rel="noreferrer">https://github.com/alibaba/Sentinel</a></p><p>官方文档：<a href="https://github.com/alibaba/Sentinel/wiki" target="_blank" rel="noreferrer">https://github.com/alibaba/Sentinel/wiki</a></p><p><img src="https://user-images.githubusercontent.com/9434884/50505538-2c484880-0aaf-11e9-9ffc-cbaaef20be2b.png" alt="Sentinel-features-overview"></p><hr><h3 id="客户端" tabindex="-1">客户端 <a class="header-anchor" href="#客户端" aria-hidden="true">#</a></h3><h4 id="客户端流程图" tabindex="-1">客户端流程图 <a class="header-anchor" href="#客户端流程图" aria-hidden="true">#</a></h4>',6),n=a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61c042596376892b1df90c97"},null,-1),d=e('<hr><h4 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-hidden="true">#</a></h4><ul><li><p>InitFunc</p><blockquote><p><code>com.alibaba.csp.sentinel.init.InitExecutor#doInit</code>会在加载时调用。</p><p>在<code>META-INF/services/com.alibaba.csp.sentinel.init.InitFunc</code>中添加。</p></blockquote></li><li><p>MetricExtension，AdvancedMetricExtension</p><blockquote><p>用于统计。</p><p><code>com.alibaba.csp.sentinel.metric.extension.callback.MetricEntryCallback#onPass</code>会在操作完成后或发生<code>BlockException</code>时调用。</p></blockquote></li><li><p>ProcessorSlot</p><blockquote><p>核心调用链，在<code>META-INF/services/com.alibaba.csp.sentinel.slotchain.ProcessorSlot</code>中添加。</p></blockquote></li><li><p>SlotChainBuilder</p><blockquote><p>调用链构建。在<code>META-INF/services/com.alibaba.csp.sentinel.slotchain.SlotChainBuilder</code>中添加。</p></blockquote></li></ul><hr><h3 id="alibaba-cloud" tabindex="-1">alibaba.cloud <a class="header-anchor" href="#alibaba-cloud" aria-hidden="true">#</a></h3><h4 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-hidden="true">#</a></h4>',6),r=a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61bc2f9b1e08534094243f71"},null,-1),s=e('<hr><h3 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-hidden="true">#</a></h3><h4 id="扩展-1" tabindex="-1">扩展 <a class="header-anchor" href="#扩展-1" aria-hidden="true">#</a></h4><ul><li><p>DynamicRuleProvider</p><blockquote><p>动态规则获取，可扩展为从 <code>nacos</code> ，<code>appllo</code>，<code>redis</code>，<code>zk</code>等数据源获取。</p></blockquote></li><li><p>DynamicRulePublisher</p><blockquote><p>在发生配置变更时推送配置。可扩展为向 <code>nacos</code> ，<code>appllo</code>，<code>redis</code>，<code>zk</code>等数据源推送。</p></blockquote></li></ul>',4),h=[c,n,d,r,s];function b(p,_,u,m,k,f){return t(),l("div",null,h)}const S=i(o,[["render",b]]);export{T as __pageData,S as default};
