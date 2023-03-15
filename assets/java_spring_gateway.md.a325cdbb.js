import{_ as a,c as t,o,x as e,U as s}from"./chunks/framework.f3e3bc1f.js";const A=JSON.parse('{"title":"gateway","description":"","frontmatter":{"title":"gateway"},"headers":[],"relativePath":"java/spring/gateway.md","lastUpdated":1678872629000}'),n={name:"java/spring/gateway.md"},l=e("blockquote",null,[e("p",null,"基于spring-webflux，netty，springCloud的一个反应式网关。")],-1),r=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/616fc00e1efad42eb5ebffb5"},null,-1),p=s(`<h3 id="基础组件" tabindex="-1">基础组件 <a class="header-anchor" href="#基础组件" aria-label="Permalink to &quot;基础组件&quot;">​</a></h3><ul><li><p><strong>route</strong></p><p>由一个id，一个目标URL，一组谓词（<strong>Predicate</strong>），和一组过滤器（<strong>Filter</strong>）组成</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">org.springframework.cloud.gateway.route.Route</span></span>
<span class="line"><span style="color:#A6ACCD;">  private final String id;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	private final URI uri;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	private final int order;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	private final AsyncPredicate&lt;ServerWebExchange&gt; predicate;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	private final List&lt;GatewayFilter&gt; gatewayFilters;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	private final Map&lt;String, Object&gt; metadata;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p><strong>Predicate</strong></p><p>继承与<code>java.util.function.Predicate</code>，入参为 <code>org.springframework.web.server.ServerWebExchange</code>，通过 <code>test（）</code>方法判断是否匹配</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public interface GatewayPredicate extends Predicate&lt;ServerWebExchange&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p><strong>Filter</strong></p><p>形成过滤器调用链，处理请求值，返回值。</p></li></ul><h3 id="默认配置" tabindex="-1">默认配置 <a class="header-anchor" href="#默认配置" aria-label="Permalink to &quot;默认配置&quot;">​</a></h3><blockquote><p>介绍一下主要的配置信息 <code>org.springframework.cloud.gateway.config.GatewayAutoConfiguration</code></p></blockquote><ul><li><p><strong>CompositeRouteDefinitionLocator</strong></p><p>一个<code>org.springframework.cloud.gateway.route.RouteDefinitionLocator</code>合集，主要获取route。集成了一下几个</p><ul><li>CachingRouteDefinitionLocator：缓存如有信息</li><li>DiscoveryClientRouteDefinitionLocator：通过服务发现加载路由</li><li>InMemoryRouteDefinitionRepository：通过api管理的路由信息</li><li>PropertiesRouteDefinitionLocator：配置文件的路由信息</li></ul></li><li><p><strong>CachingRouteLocator</strong></p><p>获取所有<code>RouteLocator</code>，通过<code>RouteDefinitionLocator</code>获取路由配置信息，生成路由并缓存。</p><p>发生<code>RefreshRoutesEvent</code>事件时刷新缓存</p></li><li><p><strong>RouteRefreshListener</strong></p><p>监听<code>ContextRefreshedEvent</code>，<code>RefreshScopeRefreshedEvent</code>，<code>InstanceRegisteredEvent</code>，<code>ParentHeartbeatEvent</code>，<code>HeartbeatEvent</code>等事件。发送<code>RefreshRoutesEvent</code>事件。</p></li><li><p><strong>FilteringWebHandler</strong></p><p>Gateway入口，由webflux核心<code>DispatcherHandler</code>调用，主要工作就是把GlobalFilter通过<code>GatewayFilterAdapter</code>适配成<code>GatewayFilter</code>并生成调用链<code>org.springframework.cloud.gateway.handler.FilteringWebHandler.DefaultGatewayFilterChain</code>。</p></li><li><p><strong>RoutePredicateHandlerMapping</strong></p><p>主要负责找到执行的路由，通过调用路由的<code>AsyncPredicate</code>判断。</p></li><li><p>GatewayProperties</p><p>就是配置文件<code>spring.cloud.gateway</code>的东西</p></li><li><p><strong>HttpClient</strong></p><p>netty发起请求的客户端</p></li><li><p>HttpClientProperties</p><p><code>spring.cloud.gateway.httpclient</code>下的配置</p></li></ul><h4 id="predicatefactory" tabindex="-1">PredicateFactory <a class="header-anchor" href="#predicatefactory" aria-label="Permalink to &quot;PredicateFactory&quot;">​</a></h4><blockquote><p>通过一下形式进行配置，会在系统加载的时候进行创建并组装到route中。</p><p>名称为下面的名称去掉<code>RoutePredicateFactory</code>，参数逗号分隔。</p><p>格式为 <code>- &lt;name&gt;=arg,arg...</code> 或者 kv形式的</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">predicates:</span></span>
<span class="line"><span style="color:#A6ACCD;">- Cookie=mycookie, mycookievalue</span></span>
<span class="line"><span style="color:#A6ACCD;">- name: Cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">  args:</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: mycookie</span></span>
<span class="line"><span style="color:#A6ACCD;">    regexp: mycookievalue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>AfterRoutePredicateFactory</p><p>在某个时间段后，入参为<code>datetime</code></p></li><li><p>BeforeRoutePredicateFactory</p><p>在某个时间段前，入参为<code>datetime</code></p></li><li><p>BetweenRoutePredicateFactory</p><p>在某个时间段之间，入参为<code>datetime1</code>，<code>datetime1</code></p></li><li><p>CookieRoutePredicateFactory</p><p>判断cookies是否满足正则匹配规则，入参为<code>name</code>，<code>regexp</code></p></li><li><p>HeaderRoutePredicateFactory</p><p>判断Header是否满足正则匹配规则，入参为<code>header</code>，<code>regexp</code></p></li><li><p>HostRoutePredicateFactory</p><p>进行host匹配判断，入参为<code>patterns</code>集合（逗号分隔）</p></li><li><p>MethodRoutePredicateFactory</p><p>通过请求方法进行判断，入参为<code>methods</code>集合（逗号分隔）</p></li><li><p>PathRoutePredicateFactory</p><p>根据path判断，入参为<code>patterns</code>集合，最后一个参数可以为布尔类型<code>matchTrailingSlash</code>是否匹配反斜杠，默认为</p><p>可在配置文件中添加{segment}，在filter中通过以下代码获取</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">predicates:</span></span>
<span class="line"><span style="color:#A6ACCD;">- Path=/red/{segment},/blue/{segment}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Map&lt;String, String&gt; uriVariables = ServerWebExchangeUtils.getPathPredicateVariables(exchange);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">String segment = uriVariables.get(&quot;segment&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>QueryRoutePredicateFactory</p><p>通过查询参数来搬到判断，入参为<code>param</code>，<code>regexp</code></p></li><li><p>RemoteAddrRoutePredicateFactory</p><p>通过远程地址来判断，入参为<code>sources</code></p></li></ul><h4 id="gatewayfilterfactory" tabindex="-1">GatewayFilterFactory <a class="header-anchor" href="#gatewayfilterfactory" aria-label="Permalink to &quot;GatewayFilterFactory&quot;">​</a></h4><blockquote><p>网关过滤器，和PredicateFactory配置模式基本上一致</p><p>详细查看 <a href="https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#gatewayfilter-factories" target="_blank" rel="noreferrer">Spring Cloud Gateway</a></p></blockquote><h4 id="globalfilter" tabindex="-1">GlobalFilter <a class="header-anchor" href="#globalfilter" aria-label="Permalink to &quot;GlobalFilter&quot;">​</a></h4><blockquote><p>所有请求都走的过滤器，与<code>gatewayFilter</code>的接口签名一致。在执行是会转换成<code>gatewayFilter</code>即<code>org.springframework.cloud.gateway.handler.FilteringWebHandler.GatewayFilterAdapter</code>，形成一个调用链。</p><p>以下介绍主要的过滤器，按照优先级进行排列</p></blockquote><ul><li><p>RemoveCachedBodyFilter</p><p>优先级为<code>Integer.MIN_VALUE</code>，作用为所有操作完成后执行回调，清除缓存。缓存是通过<code>org.springframework.cloud.gateway.support.ServerWebExchangeUtils#cacheRequestBodyAndRequest</code>添加的。</p></li><li><p>NettyWriteResponseFilter</p><p><strong>优先级为-1</strong>，会调用<code>org.springframework.http.ReactiveHttpOutputMessage#writeWith</code>或<code>writeAndFlushWith</code>把连接返回值写入到http层。</p><p>**如需加入修改返回值的过滤器，优先级一定要比-1小，才会生效。**比如<code>org.springframework.cloud.gateway.filter.factory.rewrite.ModifyResponseBodyGatewayFilterFactory.ModifyResponseGatewayFiltery</code>优先级为-2。</p></li><li><p>ForwardPathFilter</p><p>优先级为0，对forward请求修改请求path。</p></li><li><p>RouteToRequestUrlFilter</p><p>优先级为<code>10000</code>，获取路由并修改请求地址为路由地址。路由在<code>org.springframework.cloud.gateway.handler.RoutePredicateHandlerMapping#getHandlerInternal</code>中添加。</p></li><li><p>ReactiveLoadBalancerClientFilter</p><p>优先级为<code>10150</code>，对<code>lb</code>进行负载均衡获取实例，并把实际请求路径写入到属性中。</p></li><li><p>NettyRoutingFilter</p><p>优先级为<code>Integer.MAX_VALUE</code>，实际转发请求的地方，并把返回信息保存到参数信息中。所有需要修改请求信息的都在它之前。</p></li></ul>`,14),i=[l,r,p];function c(d,g,u,y,h,C){return o(),t("div",null,i)}const m=a(n,[["render",c]]);export{A as __pageData,m as default};
