import{_ as r,c as e,o as a,a5 as o}from"./chunks/framework.CyS7wUzW.js";const g=JSON.parse('{"title":"Nginx 性能参数调优","description":"","frontmatter":{},"headers":[],"relativePath":"ops/nginx/Nginx 性能参数调优.md","filePath":"ops/nginx/Nginx 性能参数调优.md"}'),n={name:"ops/nginx/Nginx 性能参数调优.md"},t=o('<h1 id="nginx-性能参数调优" tabindex="-1">Nginx 性能参数调优 <a class="header-anchor" href="#nginx-性能参数调优" aria-label="Permalink to &quot;Nginx 性能参数调优&quot;">​</a></h1><h2 id="工作线程数量" tabindex="-1">工作线程数量 <a class="header-anchor" href="#工作线程数量" aria-label="Permalink to &quot;工作线程数量&quot;">​</a></h2><p>worker_processes number; 每个worker进程都是单线程的进程，它们会调用各个模块以实现多种多样的功能。如果这些模块确认不会出现阻塞式的调用，那么，有多少CPU内核就应该配置多少个进程；反之，如果有可能出现阻塞式调用，那么需要配置稍多一些的worker进程。例如，如果业务方面会致使用户请求大量读取本地磁盘上的静态资源文件，而且服务器上的内存较小，以至于大部分的请求访问静态资源文件时都必须读取磁盘（磁头的寻址是缓慢的），而不是内存中的磁盘缓存，那么磁盘I/O调用可能会阻塞住worker进程少量时间，进而导致服务整体性能下降。</p><h2 id="每个worker-进程的最大连接数" tabindex="-1">每个worker 进程的最大连接数 <a class="header-anchor" href="#每个worker-进程的最大连接数" aria-label="Permalink to &quot;每个worker 进程的最大连接数&quot;">​</a></h2><p><strong>语法</strong>：worker_connections number; <strong>默认</strong>：worker_connections 1024</p><h2 id="绑定nginx-worker进程到指定的cpu内核" tabindex="-1">绑定Nginx worker进程到指定的CPU内核 <a class="header-anchor" href="#绑定nginx-worker进程到指定的cpu内核" aria-label="Permalink to &quot;绑定Nginx worker进程到指定的CPU内核&quot;">​</a></h2><p><strong>worker_cpu_affinity cpumask[cpumask……]</strong></p><p>为什么要绑定worker进程到指定的CPU内核呢？假定每一个worker进程都是非常繁忙的，如果多个worker进程都在抢同一个CPU，那么这就会出现同步问题。反之，如果每一个worker进程都独享一个CPU，就在内核的调度策略上实现了完全的并发。 例如，如果有4颗CPU内核，就可以进行如下配置： worker_processes 4; worker_cpu_affinity 1000 0100 0010 0001; 注意 worker_cpu_affinity配置仅对Linux操作系统有效。</p><h2 id="nginx-worker-进程优先级设置" tabindex="-1">Nginx worker 进程优先级设置 <a class="header-anchor" href="#nginx-worker-进程优先级设置" aria-label="Permalink to &quot;Nginx worker 进程优先级设置&quot;">​</a></h2><p><strong>语法</strong>：worker_priority nice; <strong>默认</strong>：worker_priority 0; 优先级由静态优先级和内核根据进程执行情况所做的动态调整（目前只有±5的调整）共同决定。nice值是进程的静态优先级，它的取值范围是–20～+19，–20是最高优先级，+19是最低优先级。因此，如果用户希望Nginx占有更多的系统资源，那么可以把nice值配置得更小一些，但不建议比内核进程的nice值（通常为–5）还要小</p><h2 id="nginx-worker进程可以打开的最大句柄描述符个数" tabindex="-1">Nginx worker进程可以打开的最大句柄描述符个数 <a class="header-anchor" href="#nginx-worker进程可以打开的最大句柄描述符个数" aria-label="Permalink to &quot;Nginx worker进程可以打开的最大句柄描述符个数&quot;">​</a></h2><p><strong>语法</strong>： worker_rlimit_nofile limit; **默认：**空 更改worker进程的最大打开文件数限制。如果没设置的话，这个值为操作系统的限制。设置后你的操作系统和Nginx可以处理比“ulimit -a”更多的文件，所以把这个值设高，这样nginx就不会有“too many open files”问题了。</p><h2 id="是否打开accept锁" tabindex="-1">是否打开accept锁 <a class="header-anchor" href="#是否打开accept锁" aria-label="Permalink to &quot;是否打开accept锁&quot;">​</a></h2><p><strong>语法</strong>：accept_mutex[on|off] <strong>默认</strong>：accept_mutext on; accept_mutex是Nginx的负载均衡锁，当某一个worker进程建立的连接数量达到worker_connections配置的最大连接数的7/8时，会大大地减小该worker进程试图建立新TCP连接的机会，accept锁默认是打开的，如果关闭它，那么建立TCP连接的耗时会更短，但worker进程之间的负载会非常不均衡，因此不建议关闭它。</p><h2 id="使用accept锁后到真正建立连接之间的延迟时间" tabindex="-1">使用accept锁后到真正建立连接之间的延迟时间 <a class="header-anchor" href="#使用accept锁后到真正建立连接之间的延迟时间" aria-label="Permalink to &quot;使用accept锁后到真正建立连接之间的延迟时间&quot;">​</a></h2><p>语法：accept_mutex_delay Nms;  默认：accept_mutex_delay 500ms;  在使用accept锁后，同一时间只有一个worker进程能够取到accept锁。这个accept锁不是堵塞锁，如果取不到会立刻返回。如果只有一个worker进程试图取锁而没有取到，他至少要等待accept_mutex_delay定义的时间才能再次试图取锁。</p>',16),i=[t];function c(s,p,_,k,l,h){return a(),e("div",null,i)}const d=r(n,[["render",c]]);export{g as __pageData,d as default};
