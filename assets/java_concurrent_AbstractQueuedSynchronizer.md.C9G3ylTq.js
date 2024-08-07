import{_ as r,c as i,a as o,a5 as a,j as e,o as t}from"./chunks/framework.CyS7wUzW.js";const N=JSON.parse('{"title":"AbstractQueuedSynchronizer相关","description":"","frontmatter":{"title":"AbstractQueuedSynchronizer相关"},"headers":[],"relativePath":"java/concurrent/AbstractQueuedSynchronizer.md","filePath":"java/concurrent/AbstractQueuedSynchronizer.md"}'),l={name:"java/concurrent/AbstractQueuedSynchronizer.md"},c=a('<p>[TOC]</p><nav class="table-of-contents"><ul><li><a href="#abstractqueuedsynchronizer">AbstractQueuedSynchronizer</a><ul><li><a href="#特性">特性</a></li><li><a href="#关键字段">关键字段</a></li><li><a href="#扩展方法">扩展方法</a></li><li><a href="#队列">队列</a></li></ul></li><li><a href="#reentrantlock">ReentrantLock</a><ul><li><a href="#synchronized对比">synchronized对比</a></li></ul></li><li><a href="#condition">Condition</a></li><li><a href="#semaphore">Semaphore</a></li><li><a href="#countdownlatch">CountDownLatch</a></li><li><a href="#cyclicbarrier">CyclicBarrier</a></li><li><a href="#reentrantreadwritelock">ReentrantReadWriteLock</a></li></ul></nav><h2 id="abstractqueuedsynchronizer" tabindex="-1">AbstractQueuedSynchronizer <a class="header-anchor" href="#abstractqueuedsynchronizer" aria-label="Permalink to &quot;AbstractQueuedSynchronizer&quot;">​</a></h2><blockquote><p>java.util.concurrent包中的大多数同步器实现都是围绕着共同的基础行为，比如等待队列、条件队列、独占获取、共享获取等，而这些行为的抽象就是基于 AbstractQueuedSynchronizer（简称AQS）实现的，AQS是一个抽象同步框架，可以用来实现一个依赖状态的同步器。</p><p>是一个 Java 层面实现的<strong>管程</strong>。</p></blockquote><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h3><ul><li>阻塞等待队列</li><li>共享/独占</li><li>公平/非公平</li><li>可重入</li><li>允许中断</li></ul><h3 id="关键字段" tabindex="-1">关键字段 <a class="header-anchor" href="#关键字段" aria-label="Permalink to &quot;关键字段&quot;">​</a></h3><ul><li>state：表示资源可用状态，在不同的子类中有不同的含义。</li><li>head ：同步队列头结点</li><li>tail：同步队列尾节点</li></ul><h3 id="扩展方法" tabindex="-1">扩展方法 <a class="header-anchor" href="#扩展方法" aria-label="Permalink to &quot;扩展方法&quot;">​</a></h3><blockquote><p>需要子类实现。</p></blockquote><ul><li>isHeldExclusively()：该线程是否正在独占资源。只有用到condition才需要去实现 它。</li><li>tryAcquire(int)：独占方式。尝试获取资源，成功则返回true，失败则返回false。</li><li>tryRelease(int)：独占方式。尝试释放资源，成功则返回true，失败则返回false。</li><li>tryAcquireShared(int)：共享方式。尝试获取资源。负数表示失败；0表示成功，但 没有剩余可用资源；正数表示成功，且有剩余资源。</li><li>tryReleaseShared(int)：共享方式。尝试释放资源，如果释放后允许唤醒后续等待 结点返回true，否则返回false。</li></ul><h3 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h3><h4 id="节点-node" tabindex="-1">节点 node <a class="header-anchor" href="#节点-node" aria-label="Permalink to &quot;节点 node&quot;">​</a></h4><h5 id="关键属性" tabindex="-1">关键属性 <a class="header-anchor" href="#关键属性" aria-label="Permalink to &quot;关键属性&quot;">​</a></h5><ul><li><strong>waitStatus</strong>：节点状态 <ul><li>0：初始状态，表示当前节点在队列中，等待获取锁</li><li><strong>CANCELLED</strong>：0x80000000。表示当前线程被取消</li><li><strong>WAITING</strong>：1。表示当前节点的后续节点需要被唤醒。</li><li><strong>CONDITION</strong>：2。表示当前节点在等待 condition，即在等待队列中。</li></ul></li><li>prev：前置节点</li><li>next：后置节点</li><li>thread：节点代表的线程</li><li>nextWaiter：等待队列</li></ul><h4 id="节点状态变更流程图" tabindex="-1">节点状态变更流程图 <a class="header-anchor" href="#节点状态变更流程图" aria-label="Permalink to &quot;节点状态变更流程图&quot;">​</a></h4>',16),n=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"300px"},src:"https://www.processon.com/embed/61b076ac0791297e6083896a"},null,-1),d=e("p",null,"jdk17",-1),h=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"300px"},src:"https://www.processon.com/embed/660ff9c5a25e0014b9491ef5?cid=660ff9c5a25e0014b9491ef8"},null,-1),s=e("p",null,"jdk17 获取锁的核心方法",-1),u=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"300px"},src:"https://www.processon.com/embed/6610fd806809f87e7d097eb7"},null,-1),b=a('<h4 id="同步等待队列" tabindex="-1">同步等待队列 <a class="header-anchor" href="#同步等待队列" aria-label="Permalink to &quot;同步等待队列&quot;">​</a></h4><blockquote><p>AQS当中的同步等待队列也称CLH队列，CLH队列是Craig、Landin、Hagersten三人发明 的一种基于双向链表数据结构的队列，是FIFO先进先出线程等待队列，Java中的CLH队列是原 CLH队列的一个变种,线程由原自旋机制改为阻塞机制。主要用于维护获取锁失败时入队的线程。</p></blockquote><h4 id="条件等待队列" tabindex="-1">条件等待队列 <a class="header-anchor" href="#条件等待队列" aria-label="Permalink to &quot;条件等待队列&quot;">​</a></h4><blockquote><p>调用<code>await()</code>的时候会释放锁，然后线程会加入到条件队列，调用 <code>signal()</code>唤醒的时候会把条件队列中的线程节点移动到同步队列中，等待再次获得锁</p></blockquote><h4 id="propagate状态理解" tabindex="-1">PROPAGATE状态理解 <a class="header-anchor" href="#propagate状态理解" aria-label="Permalink to &quot;PROPAGATE状态理解&quot;">​</a></h4><blockquote><p><a href="http://gee.cs.oswego.edu/cgi-bin/viewcvs.cgi/jsr166/src/main/java/util/concurrent/locks/AbstractQueuedSynchronizer.java?r1=1.73&amp;r2=1.74" target="_blank" rel="noreferrer">http://gee.cs.oswego.edu/cgi-bin/viewcvs.cgi/jsr166/src/main/java/util/concurrent/locks/AbstractQueuedSynchronizer.java?r1=1.73&amp;r2=1.74</a></p><p>简单说就是为了解决 bug 添加的。</p><p>jdk17 把这个状态给删了。</p></blockquote><hr><h2 id="reentrantlock" tabindex="-1">ReentrantLock <a class="header-anchor" href="#reentrantlock" aria-label="Permalink to &quot;ReentrantLock&quot;">​</a></h2><blockquote><p>ReentrantLock是一种基于AQS框架的应用实现，是JDK中的一种线程并发访问的同步手 段，它的功能类似于synchronized是一种互斥锁，可以保证线程安全。</p></blockquote><h3 id="synchronized对比" tabindex="-1">synchronized对比 <a class="header-anchor" href="#synchronized对比" aria-label="Permalink to &quot;synchronized对比&quot;">​</a></h3><ul><li>可中断，<code>lockInterruptibly</code>可以被中断</li><li>可设置超时时间</li><li>可设置为公平锁，<code>synchronized</code>只能是非公平锁</li><li>支持多个等待条件</li><li>可判断获取锁状态，<code>isLocked</code></li><li>需要开发者在 finally 中释放锁。<code>synchronized</code>会自动释放。</li></ul><h4 id="reentrantlock流程图" tabindex="-1">ReentrantLock流程图 <a class="header-anchor" href="#reentrantlock流程图" aria-label="Permalink to &quot;ReentrantLock流程图&quot;">​</a></h4>',12),m=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61a9d9b10791293428031a40"},null,-1),_=e("p",null,"jdk17",-1),p=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/660fbe3e6809f87e7d08a31a"},null,-1),f=a('<h2 id="condition" tabindex="-1">Condition <a class="header-anchor" href="#condition" aria-label="Permalink to &quot;Condition&quot;">​</a></h2><blockquote><p>条件队列，在<code>ReentrantLock</code>和<code>ReentrantReadWriteLock</code>中使用。</p><p>条件队列仅仅是一个等待队列，获取锁的流程还是在阻塞队列的流程中，即通过子类实现的方法中。</p><p><code>await</code> 就是把添加 <code>node</code> 节点到条件队列中去，<code>signal</code> 就是把 <code>node</code> 节点从条件队列移入到等待队列中。</p></blockquote><h4 id="条件等待队列流程图" tabindex="-1">条件等待队列流程图 <a class="header-anchor" href="#条件等待队列流程图" aria-label="Permalink to &quot;条件等待队列流程图&quot;">​</a></h4>',3),k=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61a9f25f63768928167810f6"},null,-1),q=e("hr",null,null,-1),w=e("h2",{id:"semaphore",tabindex:"-1"},[o("Semaphore "),e("a",{class:"header-anchor",href:"#semaphore","aria-label":'Permalink to "Semaphore"'},"​")],-1),y=e("blockquote",null,[e("p",null,"用来控制同时访问特定资源的线程数量，通过协调各个线程，以保证合理的使用资源。"),e("p",null,"常见于限流，资源池等。"),e("p",null,"是 aqs 的一个简单实现。")],-1),x=e("h4",{id:"信号量流程图",tabindex:"-1"},[o("信号量流程图 "),e("a",{class:"header-anchor",href:"#信号量流程图","aria-label":'Permalink to "信号量流程图"'},"​")],-1),C=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61add0830791296ac4dcf645"},null,-1),P=a('<hr><h2 id="countdownlatch" tabindex="-1">CountDownLatch <a class="header-anchor" href="#countdownlatch" aria-label="Permalink to &quot;CountDownLatch&quot;">​</a></h2><blockquote><p>是一个同步协助类，允许一个或多个线程等待，直到其他线程完成操作集。</p><p>简单来说就是开始设置一个值，通过<code>countDown</code>进行减一操作，到 0 的时候所有通过<code>await</code>进行等待的线程全部开始执行。</p></blockquote><h4 id="countdownlatch与thread-join的区别" tabindex="-1">CountDownLatch与Thread.join的区别 <a class="header-anchor" href="#countdownlatch与thread-join的区别" aria-label="Permalink to &quot;CountDownLatch与Thread.join的区别&quot;">​</a></h4><ul><li>CountDownLatch的作用就是允许一个或多个线程等待其他线程完成操作，看起来有点类似join() 方法，但其提供了比 join() 更加灵活的API。</li><li>CountDownLatch可以手动控制在n个线程里调用n次countDown()方法使计数器进行减一操作，也可以在一个线程里调用n次执行减一操作。</li><li>join() 的实现原理是不停检查join线程是否存活，如果 join 线程存活则让当前线程永远等待。所以两者之间相对来说还是CountDownLatch使用起来较为灵活。</li></ul><h4 id="countdownlatch与cyclicbarrier的区别" tabindex="-1">CountDownLatch与CyclicBarrier的区别 <a class="header-anchor" href="#countdownlatch与cyclicbarrier的区别" aria-label="Permalink to &quot;CountDownLatch与CyclicBarrier的区别&quot;">​</a></h4><ul><li><p><code>CountDownLatch</code>的计数器只能使用一次，而<code>CyclicBarrier</code>的计数器可以使用<code>reset()</code> 方法重置。所以<code>CyclicBarrier</code>能处理更为复杂的业务场景，比如如果计算发生错误，可以重置计数器，并让线程们重新执行一次</p></li><li><p><code>CyclicBarrier</code>还提供<code>getNumberWaiting</code>(可以获得<code>CyclicBarrier</code>阻塞的线程数量)、 <code>isBroken</code>(用来知道阻塞的线程是否被中断)等方法。</p></li><li><p><code>CountDownLatch</code>和<code>CyclicBarrier</code>都能够实现线程之间的等待，只不过它们侧重点不 同。<code>CountDownLatch</code>一般用于一个或多个线程，等待其他线程执行完任务后，再执行。<code>CyclicBarrier</code>一般用于一组线程互相等待至某个状态，然后这一组线程再同时执 行。</p></li><li><p><code>CyclicBarrier</code> 还可以提供一个 <code>barrierAction</code>，合并多线程计算结果。</p></li><li><p><code>CyclicBarrier</code>是通过<code>ReentrantLock</code>的&quot;独占锁&quot;和<code>Conditon</code>来实现一组线程的阻塞唤 醒的，而<code>CountDownLatch</code>则是通过<code>AQS</code>的“共享锁”实现</p></li></ul><hr><h2 id="cyclicbarrier" tabindex="-1">CyclicBarrier <a class="header-anchor" href="#cyclicbarrier" aria-label="Permalink to &quot;CyclicBarrier&quot;">​</a></h2><blockquote><p>翻译为循环屏障或回环栅栏。通过它可以实现让一组线程等待至某个状态（屏障点）之后再全部同时执行。叫做回环是因为当所有等待线程都被释放以后，CyclicBarrier可以被<strong>重用</strong>。</p></blockquote><h4 id="主要属性" tabindex="-1">主要属性 <a class="header-anchor" href="#主要属性" aria-label="Permalink to &quot;主要属性&quot;">​</a></h4><ul><li>lock：除<code>getParties</code>外所有操作都需要持有该锁</li><li>trip：等待条件，除最后一个任务外都会<code>trip.await()</code>进行等待</li><li>parties：等待的线程数量</li><li>barrierCommand：最后一个到达的线程会执行该任务（有的话），执行完才放行</li><li>Generation：屏障实例，每一次都是一个新的。</li><li>count：剩余需要阻塞的线程数量</li></ul><h4 id="循环屏障流程图" tabindex="-1">循环屏障流程图 <a class="header-anchor" href="#循环屏障流程图" aria-label="Permalink to &quot;循环屏障流程图&quot;">​</a></h4>',13),A=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61aec9dd0e3e74014814eb94"},null,-1),g=a('<hr><h2 id="reentrantreadwritelock" tabindex="-1">ReentrantReadWriteLock <a class="header-anchor" href="#reentrantreadwritelock" aria-label="Permalink to &quot;ReentrantReadWriteLock&quot;">​</a></h2><blockquote><p>读写锁，适合读多写少的场景</p><p>使用 Sync ( 实际是 AQS )的 int 类型的 state 来表示同步状态，维护着一对读写锁，如果要用一个变量维护多种状态，需要采用“按位切割使用”的方式来维护这个变量，将其切分为两部分：高16为表示读，低16为表示写。</p></blockquote><h4 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h4><ul><li>读写互斥</li><li>写写互斥</li><li>可重入</li><li>支持公平与非公平</li><li>支持条件队列</li><li>提供一下锁状态监控api</li><li>读锁不支持等待队列</li><li>重入不能升级，持有读锁的情况下去获取写锁会导致获取永久等待</li><li>可支持锁降级，在获取写锁时获取读锁、然后释放写锁，则降级为读锁</li></ul><h4 id="读写锁流程图" tabindex="-1">读写锁流程图 <a class="header-anchor" href="#读写锁流程图" aria-label="Permalink to &quot;读写锁流程图&quot;">​</a></h4>',6),S=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61af0642e0b34d775429161c"},null,-1),T=e("p",null,"jdk 17",-1),L=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/6610fd806809f87e7d097eb7?cid=6610fd806809f87e7d097eba"},null,-1);function j(D,R,z,v,B,Q){return t(),i("div",null,[c,n,d,h,s,u,b,m,_,p,o(" ------ "),f,k,q,w,y,x,C,P,A,g,S,T,L])}const V=r(l,[["render",j]]);export{N as __pageData,V as default};
