import{_ as s,c as e,a3 as t,j as a,o}from"./chunks/framework.B112ehe2.js";const g=JSON.parse('{"title":"synchronized","description":"","frontmatter":{"title":"synchronized"},"headers":[],"relativePath":"java/JVM/synchronized.md","filePath":"java/JVM/synchronized.md"}'),i={name:"java/JVM/synchronized.md"};function p(r,n,l,c,d,b){return o(),e("div",null,n[0]||(n[0]=[t(`<blockquote><p>加锁目的：<strong>序列化访问临界资源</strong>，即同一时刻只能有一个线程访问临界资源(<strong>同步互斥访问</strong>)</p><p><code>synchronized</code>内置锁是一种对象锁(锁的是对象而非引用)，作用粒度是对象，可以用来实现对临界资源的同步互斥访问，是可重入的。</p></blockquote><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>加锁的方式</p><ul><li><p>同步实例方法，锁是当前实例对象</p></li><li><p>同步类方法，锁是当前类对象</p></li><li><p>同步代码块，锁是括号里面的对象</p></li></ul><h3 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h3><blockquote><p><strong>synchronized是基于JVM</strong>内置锁实现，通过内部对象<strong>Monitor</strong>(监视器锁)实现，基于进入与退出<strong>Monitor</strong>对象实现方法与代码块同步，监视器锁的实现依赖底层操作系统的<strong>Mutex lock</strong>（互斥锁）实现，它是一个重量级锁性能较低。当然，**JVM内置锁在1.5之后版本做了重大的优化，**如锁粗化（Lock Coarsening）、锁消除（Lock Elimination）、轻量级锁（Lightweight Locking）、偏向锁（Biased Locking）、适应性自旋（Adaptive Spinning）等技术来减少锁操作的开销，，内置锁的并发性能已经基本与Lock持平。</p><p>synchronized关键字被编译成字节码后会被翻译成monitorenter 和 monitorexit 两条指令分别在同步块逻辑代码的起始位置与结束位置。</p></blockquote><h4 id="monitor" tabindex="-1">Monitor <a class="header-anchor" href="#monitor" aria-label="Permalink to &quot;Monitor&quot;">​</a></h4><blockquote><p><strong>任何一个对象都有一个Monitor与之关联，当且一个Monitor被持有后，它将处于锁定状态</strong>。Synchronized在JVM里的实现都是 <strong>基于进入和退出Monitor对象来实现方法同步和代码块同步</strong>，虽然具体实现细节不一样，但是都可以通过成对的MonitorEnter和MonitorExit指令来实现。</p></blockquote><ul><li><p><strong>monitorenter</strong>：每个对象都是一个监视器锁（monitor）。当monitor被占用时就会处于锁定状态，线程执行monitorenter指令时尝试获取monitor的所有权，过程如下：</p></li><li><ol><li><strong>如果monitor的进入数为0</strong>，则该线程进入monitor，然后将进入数设置为1，该线程即为monitor的所有者；</li><li><strong>如果线程已经占有该monitor</strong>，只是重新进入，则进入monitor的进入数加1；</li><li><strong>如果其他线程已经占用了monitor</strong>，则该线程进入阻塞状态，直到monitor的进入数为0，再重新尝试获取monitor的所有权；</li></ol></li><li><p><strong>monitorexit</strong>：执行monitorexit的线程必须是objectref所对应的monitor的所有者。<strong>指令执行时，monitor的进入数减1，如果减1后进入数为0，那线程退出monitor，不再是这个monitor的所有者</strong>。其他被这个monitor阻塞的线程可以尝试去获取这个 monitor 的所有权。</p></li><li><p><strong>ACC_SYNCHRONIZED</strong>：方法的同步并没有通过指令 <strong>monitorenter</strong> 和 <strong>monitorexit</strong> 来完成（理论上其实也可以通过这两条指令来实现），不过相对于普通方法，其常量池中多了 <strong>ACC_SYNCHRONIZED</strong> 标示符。<strong>JVM就是根据该标示符来实现方法的同步的</strong>：</p><p>当方法调用时，<strong>调用指令将会检查方法的 ACC_SYNCHRONIZED 访问标志是否被设置</strong>，如果设置了，<strong>执行线程将先获取monitor</strong>，获取成功之后才能执行方法体，<strong>方法执行完后再释放monitor</strong>。在方法执行期间，其他任何线程都无法再获得同一个monitor对象。</p></li></ul><h3 id="objectmonitor" tabindex="-1">ObjectMonitor <a class="header-anchor" href="#objectmonitor" aria-label="Permalink to &quot;ObjectMonitor&quot;">​</a></h3><blockquote><p><strong>每一个Java对象自打娘胎里出来就带了一把看不见的锁，它叫做内部锁或者Monitor锁</strong>。</p><p><a href="https://github.com/openjdk/jdk/blob/e92e2fd4e0bc805d8f7d70f632cce0282eb1809b/src/hotspot/share/runtime/objectMonitor.hpp" target="_blank" rel="noreferrer">源码</a></p></blockquote><p><code>ObjectWaiter</code>结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 对所有需要进入的线程进行封装</span></span>
<span class="line"><span>class ObjectWaiter : public StackObj {</span></span>
<span class="line"><span> public:</span></span>
<span class="line"><span>  enum TStates { TS_UNDEF, TS_READY, TS_RUN, TS_WAIT, TS_ENTER, TS_CXQ };// 线程状态</span></span>
<span class="line"><span>  ObjectWaiter* volatile _next;		// 下一个等待对象</span></span>
<span class="line"><span>  ObjectWaiter* volatile _prev;   // 上一个等待对象</span></span>
<span class="line"><span>  JavaThread*   _thread;					// 线程</span></span>
<span class="line"><span>  uint64_t      _notifier_tid;</span></span>
<span class="line"><span>  ParkEvent *   _event;</span></span>
<span class="line"><span>  volatile int  _notified;</span></span>
<span class="line"><span>  volatile TStates TState;					// 线程状态</span></span>
<span class="line"><span>  bool          _active;           // Contention monitoring is enabled</span></span>
<span class="line"><span> public:</span></span>
<span class="line"><span>  ObjectWaiter(JavaThread* current);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void wait_reenter_begin(ObjectMonitor *mon);</span></span>
<span class="line"><span>  void wait_reenter_end(ObjectMonitor *mon);</span></span>
<span class="line"><span>};</span></span></code></pre></div><p><code>ObjectMonitor</code>主要结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class ObjectMonitor : public CHeapObj&lt;mtInternal&gt; {</span></span>
<span class="line"><span>  friend class ObjectSynchronizer;</span></span>
<span class="line"><span>  friend class ObjectWaiter;</span></span>
<span class="line"><span>  friend class VMStructs;</span></span>
<span class="line"><span>  JVMCI_ONLY(friend class JVMCIVMStructs;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  volatile markWord _header;    		// 对象头</span></span>
<span class="line"><span>  WeakHandle _object;               // 锁不是平白出现的，而是寄托存储于对象中。</span></span>
<span class="line"><span>  void* volatile _owner;            // 指向所属线程或栈锁的指针</span></span>
<span class="line"><span>  volatile uint64_t _previous_owner_tid;  // 上一个拥有当前锁的线程id</span></span>
<span class="line"><span>  ObjectMonitor* _next_om;          	// Next ObjectMonitor* linkage</span></span>
<span class="line"><span>  volatile intx _recursions;        	// 递归次数</span></span>
<span class="line"><span>  ObjectWaiter* volatile _EntryList;  // 处于等待锁block状态的线程，会被加入到entry set；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ObjectWaiter* volatile _cxq;      // LL of recently-arrived threads blocked on entry.</span></span>
<span class="line"><span>  JavaThread* volatile _succ;       // Heir presumptive thread - used for futile wakeup throttling</span></span>
<span class="line"><span>  int _contentions;                 // 竞争数量</span></span></code></pre></div><h3 id="对象头" tabindex="-1">对象头 <a class="header-anchor" href="#对象头" aria-label="Permalink to &quot;对象头&quot;">​</a></h3><blockquote><p>所有对象都有的。主要包含锁状态，以及hash值，gc信息</p><p><a href="https://github.com/openjdk/jdk/blob/e92e2fd4e0bc805d8f7d70f632cce0282eb1809b/src/hotspot/share/oops/markWord.hpp" target="_blank" rel="noreferrer">源码</a></p></blockquote><p><strong>32位</strong></p><table tabindex="0"><thead><tr><th></th><th>25bit</th><th>4bit</th><th>1bit</th><th>2bit</th></tr></thead><tbody><tr><td>锁状态</td><td></td><td>分代年龄</td><td>是否偏向锁（是否禁用偏向）</td><td>锁标志位</td></tr><tr><td>无锁态</td><td>对象的hashCode</td><td></td><td>0</td><td>01</td></tr><tr><td>轻量级锁</td><td>指向栈中锁记录的指针</td><td></td><td></td><td>00</td></tr><tr><td>重量级锁</td><td>指向Monitor的指针</td><td></td><td></td><td>10</td></tr><tr><td>GC标记</td><td>空</td><td></td><td></td><td>11</td></tr><tr><td>偏向锁</td><td>线程ID/Epoch(2bit)</td><td></td><td>1</td><td>01</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//  jdk源码注释</span></span>
<span class="line"><span>//  32 bits:</span></span>
<span class="line"><span>//  --------</span></span>
<span class="line"><span>//             hash:25 ------------&gt;| age:4  unused_gap:1  lock:2 (normal object)</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//  64 bits:</span></span>
<span class="line"><span>//  --------</span></span>
<span class="line"><span>//  unused:25 hash:31 --&gt;| unused_gap:1  age:4  unused_gap:1  lock:2 (normal object)</span></span></code></pre></div><p><strong>对象头分析工具</strong></p><blockquote><p>分析java对象的工具包</p><p><a href="https://openjdk.java.net/projects/code-tools/jol/" target="_blank" rel="noreferrer">OpenJDK: jol (java.net)</a></p><p><a href="https://github.com/openjdk/jol" target="_blank" rel="noreferrer">github.com</a></p></blockquote><h3 id="锁升级" tabindex="-1">锁升级 <a class="header-anchor" href="#锁升级" aria-label="Permalink to &quot;锁升级&quot;">​</a></h3><blockquote><p>锁的状态总共有四种，无锁状态、偏向锁、轻量级锁和重量级锁。随着锁的竞争，锁可以从偏向锁升级到轻量级锁，再升级的重量级锁，但是锁的升级是单向的，也就是说只能从低到高升级，不会出现锁的降级。</p></blockquote>`,24),a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60efe8155653bb06f24c1df7"},null,-1),t('<p><strong>偏向锁</strong></p><blockquote><p>为了减少同一线程获取锁(会涉及到一些CAS操作,耗时)的代价而引入偏向锁。偏向锁的核心思想是，如果一个线程获得了锁，那么锁就进入偏向模式，此时Mark Word 的结构也变为偏向锁结构，当这个线程再次请求锁时，无需再做任何同步操作，即获取锁的过程，这样就省去了大量有关锁申请的操作，从而也就提供程序的性能。所以，对于没有锁竞争的场合，偏向锁有很好的优化效果，毕竟极有可能连续多次是同一个线程申请相同的锁。但是对于锁竞争比较激烈的场合，偏向锁就失效了，因为这样场合极有可能每次申请锁的线程都是不相同的，因此这种场合下不应该使用偏向锁，否则会得不偿失，需要注意的是，偏向锁失败后，并不会立即膨胀为重量级锁，而是先升级为轻量级锁。</p></blockquote><ul><li><p>JDK 1.6 开始默认开启偏向锁</p></li><li><p>在jdk15中偏向锁默认关闭</p></li><li><p>开启偏向锁：<code>-XX:+UseBiasedLocking</code></p></li><li><p>关闭偏向锁：<code>-XX:-UseBiasedLocking</code></p></li><li><p>偏向锁生效时间：<code>-XX:BiasedLockingStartupDelay=5</code></p></li></ul><p><strong>轻量级锁</strong></p><blockquote><p>倘若偏向锁失败，虚拟机并不会立即升级为重量级锁，它还会尝试使用一种称为轻量级锁的优化手段(1.6之后加入的)，此时Mark Word 的结构也变为轻量级锁的结构。轻量级锁能够提升程序性能的依据是“对绝大部分的锁，在整个同步周期内都不存在竞争”，注意这是经验数据。需要了解的是，轻量级锁所适应的场景是线程交替执行同步块的场合，如果存在同一时间访问同一锁的场合，就会导致轻量级锁膨胀为重量级锁。</p></blockquote><p><strong>锁消除</strong></p><blockquote><p>消除锁是虚拟机另外一种锁的优化，这种优化更彻底，Java虚拟机在JIT编译时(可以简单理解为当某段代码即将第一次被执行时进行编译，又称即时编译)，通过对运行上下文的扫描，去除不可能存在共享资源竞争的锁，通过这种方式消除没有必要的锁，可以节省毫无意义的请求锁时间，如下StringBuffer的append是一个同步方法，但是在add方法中的StringBuffer属于一个局部变量，并且不会被其他线程所使用，因此StringBuffer不可能存在共享资源竞争的情景，JVM会自动将其锁消除。<strong>锁消除的依据是逃逸分析的数据支持。</strong></p></blockquote><ul><li>锁消除，前提是java必须运行在server模式（server模式会比client模式作更多的优化），<strong>同时必须开启逃逸分析</strong></li><li>开启锁消除：-XX:+EliminateLocks</li></ul><p><strong>逃逸分析</strong></p><p>使用逃逸分析，编译器可以对代码做如下优化：</p><ul><li><p>同步省略。如果一个对象被发现只能从一个线程被访问到，那么对于这个对象的操作可以不考虑同步。</p></li><li><p>将堆分配转化为栈分配。如果一个对象在子程序中被分配，要使指向该对象的指针永远不会逃逸，对象可能是栈分配的候选，而不是堆分配。</p></li><li><p>分离对象或标量替换。有的对象可能不需要作为一个连续的内存结构存在也可以被访问到，那么对象的部分（或全部）可以不存储在内存，而是存储在CPU寄存器中。</p></li><li><p>开启逃逸分析， <code>-XX:+DoEscapeAnalysis</code></p></li><li><p>从jdk 1.7开始已经默认开启逃逸分析，如需关闭，需要指定<code>-XX:-DoEscapeAnalysis</code></p></li></ul><h3 id="wait-notify" tabindex="-1">wait notify <a class="header-anchor" href="#wait-notify" aria-label="Permalink to &quot;wait notify&quot;">​</a></h3><blockquote><p>只能在获得同步锁后使用</p><p>调用wait后进入 waitSet 队列吗，等待 notify</p></blockquote><ul><li>有些情况 WaitSet 的对象会被移动到 EntryList</li></ul>',14),a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60f555b1637689739c3e5294"},null,-1)]))}const u=s(i,[["render",p]]);export{g as __pageData,u as default};
