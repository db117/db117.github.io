import{_ as n,o as e,c as p,k as a,R as s}from"./chunks/framework.H_1uJR_t.js";const y=JSON.parse('{"title":"java集合","description":"","frontmatter":{"title":"java集合"},"headers":[],"relativePath":"java/集合.md","filePath":"java/集合.md","lastUpdated":1699241780000}'),l={name:"java/集合.md"},t=a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60e5834f6376892c1ec611af"},null,-1),i=s(`<h2 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h2><h3 id="arraylist" tabindex="-1">ArrayList <a class="header-anchor" href="#arraylist" aria-label="Permalink to &quot;ArrayList&quot;">​</a></h3><blockquote><p><code>java.util.ArrayList</code></p><p>最常用的集合,实现方式为数组</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ArrayList&lt;E&gt; extends AbstractList&lt;E&gt;</span></span>
<span class="line"><span>        implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable</span></span></code></pre></div><ul><li><p>使用<code>transient Object[] elementData;</code>来保存数据，默认大小为10</p></li><li><p>每一次扩容为之前的1.5倍<code>int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1);</code></p></li><li><p>标记为java.util.RandomAccess，可进行随机访问</p></li><li><p>删除元素需要调用 <code>System.arraycopy()</code> 将 index+1 后面的元素都复制到 index 位置上，该操作的时间复杂度为 O(N)</p></li><li><p>subList</p><blockquote><p>访问时通过从定向index来实现，添加修改会改变原来的List</p></blockquote></li><li><p><code>java.util.Arrays.ArrayList</code>为<code>Arrays</code>的实现，不能修改。但是可以get，set</p></li></ul><h3 id="linkedlist" tabindex="-1">LinkedList <a class="header-anchor" href="#linkedlist" aria-label="Permalink to &quot;LinkedList&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class LinkedList&lt;E&gt;</span></span>
<span class="line"><span>    extends AbstractSequentialList&lt;E&gt;</span></span>
<span class="line"><span>    implements List&lt;E&gt;, Deque&lt;E&gt;, Cloneable, java.io.Serializable</span></span></code></pre></div><blockquote><p><code>java.util.LinkedList</code></p><p>相比ArrayList多实现了java.util.Deque接口</p><p>使用双向链表来保存数据</p></blockquote><h3 id="vector-线程安全" tabindex="-1">Vector(线程安全) <a class="header-anchor" href="#vector-线程安全" aria-label="Permalink to &quot;Vector(线程安全)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Vector&lt;E&gt;</span></span>
<span class="line"><span>    extends AbstractList&lt;E&gt;</span></span>
<span class="line"><span>    implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable</span></span></code></pre></div><blockquote><p><code>java.util.Vector</code></p><p>跟java.util.ArrayList类似，不过接口通过synchronized来保证并发安全</p></blockquote><ul><li>扩容直接翻倍</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 容量满了后，如果设置了capacityIncrement这按照设置的数量进行增加，否则翻倍</span></span>
<span class="line"><span>int newCapacity = oldCapacity + ((capacityIncrement &gt; 0) ?</span></span>
<span class="line"><span>                                 capacityIncrement : oldCapacity);</span></span></code></pre></div><h3 id="stack-线程安全" tabindex="-1">Stack(线程安全) <a class="header-anchor" href="#stack-线程安全" aria-label="Permalink to &quot;Stack(线程安全)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Stack&lt;E&gt; extends Vector&lt;E&gt;</span></span></code></pre></div><blockquote><p><code>java.util.Stack</code></p><p>直接继承自<code>java.util.Vector</code></p><p>实现stack数据结构</p></blockquote><h3 id="copyonwritearraylist-线程安全" tabindex="-1">CopyOnWriteArrayList(线程安全) <a class="header-anchor" href="#copyonwritearraylist-线程安全" aria-label="Permalink to &quot;CopyOnWriteArrayList(线程安全)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class CopyOnWriteArrayList&lt;E&gt;</span></span>
<span class="line"><span>    implements List&lt;E&gt;, RandomAccess, Cloneable, java.io.Serializable </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 不存在才加入</span></span>
<span class="line"><span>    // 比其他 list 多的 api </span></span>
<span class="line"><span>    public boolean addIfAbsent(E e)</span></span></code></pre></div><blockquote><p><code>java.util.concurrent.CopyOnWriteArrayList</code></p></blockquote><ul><li>和ArrayList一样，其底层数据结构也是数组，加上transient不让其被序列化，加上volatile修饰来保证多线程下的其可见性和有序性</li><li>CopyOnWriteArrayList适合于多线程场景下使用，其采用读写分离的思想，读操作不上锁，写操作上锁，且写操作效率较低</li><li>CopyOnWriteArrayList基于fail-safe机制，每次修改都会在原先基础上复制一份，修改完毕后在进行替换</li><li>CopyOnWriteArrayList在1.8中采用的是ReentrantLock进行上锁。jdk11中采用的是synchronized进行加锁</li><li><strong>不能保证实时一致性</strong>，只能保证最终一致性</li><li>迭代器使用数组快照。</li></ul><h2 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h2><h3 id="hashmap" tabindex="-1">HashMap <a class="header-anchor" href="#hashmap" aria-label="Permalink to &quot;HashMap&quot;">​</a></h3><blockquote><p>最常用的map，使用拉链发解决 hash 冲突</p><p>在 1.8 后链表长度过长会转换为红黑树</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class HashMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements Map&lt;K,V&gt;, Cloneable, Serializable </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span> static final int DEFAULT_INITIAL_CAPACITY = 1 &lt;&lt; 4;// 默认容量</span></span>
<span class="line"><span> static final float DEFAULT_LOAD_FACTOR = 0.75f;// 扩容阈值</span></span>
<span class="line"><span> static final int TREEIFY_THRESHOLD = 8;// 链表改红黑树阈值</span></span>
<span class="line"><span> static final int UNTREEIFY_THRESHOLD = 6;// 红黑树改链表阈值</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> transient Node&lt;K,V&gt;[] table;// 存数据的数组</span></span>
<span class="line"><span> transient int size;// map的数量</span></span>
<span class="line"><span> transient int modCount;// 线程不安全是.快速失败</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> static class Node&lt;K,V&gt; implements Map.Entry&lt;K,V&gt; {</span></span>
<span class="line"><span>        final int hash;//对key的hashcode值进行hash运算后得到的值，存储在Entry，避免重复计算</span></span>
<span class="line"><span>        final K key;</span></span>
<span class="line"><span>        V value;</span></span>
<span class="line"><span>        Node&lt;K,V&gt; next;//存储指向下一个Entry的引用，单链表结构</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 高低位异或,减小冲突</span></span>
<span class="line"><span> static final int hash(Object key) {</span></span>
<span class="line"><span>        int h;</span></span>
<span class="line"><span>        return (key == null) ? 0 : (h = key.hashCode()) ^ (h &gt;&gt;&gt; 16);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="treemap" tabindex="-1">TreeMap <a class="header-anchor" href="#treemap" aria-label="Permalink to &quot;TreeMap&quot;">​</a></h3><blockquote><p>TreeMap的实现是红黑树算法的实现</p><p>为有序map</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class TreeMap&lt;K,V&gt;</span></span>
<span class="line"><span>    extends AbstractMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements NavigableMap&lt;K,V&gt;, Cloneable, java.io.Serializable</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 重要属性</span></span>
<span class="line"><span>    // 比较器，因为TreeMap是有序的</span></span>
<span class="line"><span>    private final Comparator&lt;? super K&gt; comparator;</span></span>
<span class="line"><span>    //TreeMap红-黑节点，为TreeMap的内部类</span></span>
<span class="line"><span>    private transient Entry&lt;K,V&gt; root = null;</span></span>
<span class="line"><span>    //容器大小</span></span>
<span class="line"><span>    private transient int size = 0;</span></span>
<span class="line"><span>    //TreeMap修改次数</span></span>
<span class="line"><span>    private transient int modCount = 0;</span></span>
<span class="line"><span>    //红黑树的节点颜色--红色</span></span>
<span class="line"><span>    private static final boolean RED = false;</span></span>
<span class="line"><span>    //红黑树的节点颜色--黑色</span></span>
<span class="line"><span>    private static final boolean BLACK = true;</span></span></code></pre></div><h3 id="hashtable-线程安全" tabindex="-1">Hashtable(线程安全) <a class="header-anchor" href="#hashtable-线程安全" aria-label="Permalink to &quot;Hashtable(线程安全)&quot;">​</a></h3><blockquote><p>很古老的线程安全的map</p><p>可以简单粗暴的理解为对 hashmap 的修改方法加锁</p><p>推荐使用 <code>java.util.concurrent.ConcurrentHashMap</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class Hashtable&lt;K,V&gt;</span></span>
<span class="line"><span>    extends Dictionary&lt;K,V&gt;</span></span>
<span class="line"><span>    implements Map&lt;K,V&gt;, Cloneable, java.io.Serializable</span></span></code></pre></div><h3 id="identityhashmap" tabindex="-1">IdentityHashMap <a class="header-anchor" href="#identityhashmap" aria-label="Permalink to &quot;IdentityHashMap&quot;">​</a></h3><blockquote><p><code>Hashmap</code> 使用 equals 来比较是否相等，而<code>IdentityHashMap</code>使用 ==</p><p><strong>不是Map的通用实现</strong>，它有意违反了Map的常规协定。并且IdentityHashMap允许key和value都为null</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class IdentityHashMap&lt;K,V&gt;</span></span>
<span class="line"><span>    extends AbstractMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements Map&lt;K,V&gt;, java.io.Serializable, Cloneable</span></span></code></pre></div><h3 id="linkedhashmap" tabindex="-1">LinkedHashMap <a class="header-anchor" href="#linkedhashmap" aria-label="Permalink to &quot;LinkedHashMap&quot;">​</a></h3><blockquote><p>继承自<code>HashMap</code>，添加双向链表来保证迭代循序</p><p>通过重写 newNode 和 newTreeNode 来说实现添加数据放入队尾</p><p>可扩展实现 LRU 缓存</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class LinkedHashMap&lt;K,V&gt;</span></span>
<span class="line"><span>    extends HashMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements Map&lt;K,V&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 双端列表头</span></span>
<span class="line"><span>    transient LinkedHashMap.Entry&lt;K,V&gt; head;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 双端列表尾</span></span>
<span class="line"><span>    transient LinkedHashMap.Entry&lt;K,V&gt; tail;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 链表顺序：{@code true}表示访问顺序，{@code false}表示插入顺序。</span></span>
<span class="line"><span>    final boolean accessOrder;</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		// 扩展方法，可以实现 LRU 缓存</span></span>
<span class="line"><span>		// 返回 true 就会在插入数据的时候删除最老的 node</span></span>
<span class="line"><span>    protected boolean removeEldestEntry(Map.Entry&lt;K,V&gt; eldest) {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 对 hashmap 中下面三个方法进行重写</span></span>
<span class="line"><span>    // Callbacks to allow LinkedHashMap post-actions</span></span>
<span class="line"><span>    // accessOrder 为 true 时访问数据时会把  node 移动到链表尾部</span></span>
<span class="line"><span>    void afterNodeAccess(Node&lt;K,V&gt; p) { }</span></span>
<span class="line"><span>    // 符合条件会删除最老的 node</span></span>
<span class="line"><span>    void afterNodeInsertion(boolean evict) { }</span></span>
<span class="line"><span>    // 把 node 移动到队列尾部</span></span>
<span class="line"><span>    void afterNodeRemoval(Node&lt;K,V&gt; p) { }</span></span></code></pre></div><h3 id="weakhashmap" tabindex="-1">WeakHashMap <a class="header-anchor" href="#weakhashmap" aria-label="Permalink to &quot;WeakHashMap&quot;">​</a></h3><blockquote><p>主要是用在内存敏感的系统中，当缓存使用</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class WeakHashMap&lt;K,V&gt;</span></span>
<span class="line"><span>    extends AbstractMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements Map&lt;K,V&gt; </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 准备被 gc 掉的key放入到队列中</span></span>
<span class="line"><span>    private final ReferenceQueue&lt;Object&gt; queue = new ReferenceQueue&lt;&gt;();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 每一次操作时删除掉在队列中的 key</span></span>
<span class="line"><span>    private void expungeStaleEntries() {}</span></span></code></pre></div><h3 id="enummap" tabindex="-1">EnumMap <a class="header-anchor" href="#enummap" aria-label="Permalink to &quot;EnumMap&quot;">​</a></h3><blockquote><p>key 必须为<code>Eunm</code>的map</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class EnumMap&lt;K extends Enum&lt;K&gt;, V&gt; extends AbstractMap&lt;K, V&gt;</span></span>
<span class="line"><span>    implements java.io.Serializable, Cloneable</span></span></code></pre></div><h3 id="concurrenthashmap-线程安全" tabindex="-1">ConcurrentHashMap(线程安全) <a class="header-anchor" href="#concurrenthashmap-线程安全" aria-label="Permalink to &quot;ConcurrentHashMap(线程安全)&quot;">​</a></h3><blockquote><p>最常用的线程安全map，主要结构跟 <code>hashmap</code>差不多。</p><p>synchronized 只锁定当前链表或红⿊⼆叉树的⾸节点，这样只要 hash 不冲突，就不会产⽣并发，效率⼜提升 N 倍。</p></blockquote><h5 id="concurrenthashmap流程图" tabindex="-1">ConcurrentHashMap流程图 <a class="header-anchor" href="#concurrenthashmap流程图" aria-label="Permalink to &quot;ConcurrentHashMap流程图&quot;">​</a></h5>`,45),c=a("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/61b6ee4a1efad42237b9a3ac"},null,-1),o=s(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ConcurrentHashMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements ConcurrentMap&lt;K,V&gt;, Serializable </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// node数组最大容量：2^30=1073741824</span></span>
<span class="line"><span>private static final int MAXIMUM_CAPACITY = 1 &lt;&lt; 30;</span></span>
<span class="line"><span>// 默认初始值，必须是2的幕数</span></span>
<span class="line"><span>private static final int DEFAULT_CAPACITY = 16</span></span>
<span class="line"><span>//数组可能最大值，需要与toArray（）相关方法关联</span></span>
<span class="line"><span>static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;</span></span>
<span class="line"><span>//并发级别，遗留下来的，为兼容以前的版本 在序列话时使用</span></span>
<span class="line"><span>private static final int DEFAULT_CONCURRENCY_LEVEL = 16;</span></span>
<span class="line"><span>private static final float LOAD_FACTOR = 0.75f;// 负载因子</span></span>
<span class="line"><span>static final int TREEIFY_THRESHOLD = 8;// 链表转红黑树阀值,&gt; 8 链表转换为红黑树</span></span>
<span class="line"><span>//树转链表阀值，小于等于6（tranfer时，lc、hc=0两个计数器分别++记录原bin、新binTreeNode数量，&lt;=UNTREEIFY_THRESHOLD 则untreeify(lo)）</span></span>
<span class="line"><span>static final int UNTREEIFY_THRESHOLD = 6;</span></span>
<span class="line"><span>// 需要转换红黑树的最小阈值 </span></span>
<span class="line"><span>static final int MIN_TREEIFY_CAPACITY = 64;</span></span>
<span class="line"><span>// 2^15-1，help resize的最大线程数</span></span>
<span class="line"><span>private static final int MAX_RESIZERS = (1 &lt;&lt; (32 - RESIZE_STAMP_BITS)) - 1;</span></span>
<span class="line"><span>// 32-16=16，sizeCtl中记录size大小的偏移量</span></span>
<span class="line"><span>private static final int RESIZE_STAMP_SHIFT = 32 - RESIZE_STAMP_BITS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transient volatile Node&lt;K,V&gt;[] table;//存放node的数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private transient volatile Node&lt;K,V&gt;[] nextTable;// 仅仅在扩容是非空</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*控制标识符，用来控制table的初始化和扩容的操作，不同的值有不同的含义</span></span>
<span class="line"><span> *当为负数时：-1代表正在初始化，-N代表有N-1个线程正在 进行扩容</span></span>
<span class="line"><span> *当为0时：代表当时的table还没有被初始化</span></span>
<span class="line"><span> *当为正数时：表示初始化或者下一次进行扩容的大小</span></span>
<span class="line"><span>private transient volatile int sizeCtl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 特定 hash 值</span></span>
<span class="line"><span>static final int MOVED     = -1; // 正在扩容中</span></span>
<span class="line"><span>static final int TREEBIN   = -2; // 已经转换为红黑树了</span></span>
<span class="line"><span>static final int RESERVED  = -3; // compute，computeIfAbsent时用于标记正在处理，只会对数组节点为 null 时出现</span></span>
<span class="line"><span>static final int HASH_BITS = 0x7fffffff; // 会和 hash 进行 &amp; 运算，保证 hash 不小于 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 当当前操作节点正在扩容时辅助扩容</span></span>
<span class="line"><span>final Node&lt;K,V&gt;[] helpTransfer(Node&lt;K,V&gt;[] tab, Node&lt;K,V&gt; f) {}</span></span></code></pre></div><ul><li>使用<code>synchronized</code>锁住链表头或红黑树根节点</li><li>key 和 value 都不容许为 null</li><li>Nod节点中value和next都用volatile修饰，保证并发的可见性</li><li>通过节点 hash 来分辨类型</li></ul><h4 id="节点类型" tabindex="-1">节点类型 <a class="header-anchor" href="#节点类型" aria-label="Permalink to &quot;节点类型&quot;">​</a></h4><h5 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h5><blockquote><p>一个链表节点，如果转换成红黑树也会有链表结构</p></blockquote><ul><li>hash：key 的 hash</li><li>next：链表的下一个</li></ul><h5 id="treenode" tabindex="-1">TreeNode <a class="header-anchor" href="#treenode" aria-label="Permalink to &quot;TreeNode&quot;">​</a></h5><blockquote><p>红黑树节点</p><p><code>hash</code> 值为<code>key</code>的 hash值</p></blockquote><h5 id="treebin" tabindex="-1">TreeBin <a class="header-anchor" href="#treebin" aria-label="Permalink to &quot;TreeBin&quot;">​</a></h5><blockquote><p>不保存数据，指向红黑树的根节点。</p><p>提供一个简单的读写锁，保证同时只有一个线程会对当前红黑树进行修改</p><p><code>hash</code> 值为<code>-2</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>TreeNode&lt;K,V&gt; root;            // 指向红黑树根节点</span></span>
<span class="line"><span>volatile TreeNode&lt;K,V&gt; first;  // 保证根节点变化后其他线程的可见性</span></span>
<span class="line"><span>volatile Thread waiter;        // 等待的线程</span></span>
<span class="line"><span>volatile int lockState;        // 锁状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static final int WRITER = 1;   // 有线程在修改</span></span>
<span class="line"><span>static final int WAITER = 2;   // 有线程在等待</span></span>
<span class="line"><span>static final int READER = 4;   // 有线程在读的时候对 lockState 的累加值</span></span></code></pre></div><h5 id="forwardingnode" tabindex="-1">ForwardingNode <a class="header-anchor" href="#forwardingnode" aria-label="Permalink to &quot;ForwardingNode&quot;">​</a></h5><blockquote><p>不保存数据，只有一个 <code>nextTable</code> 的引用。</p><p>标记当前节点已经迁移完成，提供一个 <code>find</code> 方法，会到 <code>nextTable</code> 中查找节点。</p><p><code>hash</code> 值为<code>-1</code></p></blockquote><h5 id="reservationnode" tabindex="-1">ReservationNode <a class="header-anchor" href="#reservationnode" aria-label="Permalink to &quot;ReservationNode&quot;">​</a></h5><blockquote><p><code>hash</code> 值为<code>-3</code></p><p>compute，computeIfAbsent时用于标记正在处理，只会对数组节点为 null 时出现</p></blockquote><h3 id="concurrentskiplistmap-线程安全" tabindex="-1">ConcurrentSkipListMap(线程安全) <a class="header-anchor" href="#concurrentskiplistmap-线程安全" aria-label="Permalink to &quot;ConcurrentSkipListMap(线程安全)&quot;">​</a></h3><blockquote><p>提供了一种线程安全的并发访问的排序映射表。内部是SkipList（跳表）结构实现，在理论上能够O(log(n))时间内完成查找、插入、删除操作。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ConcurrentSkipListMap&lt;K,V&gt; extends AbstractMap&lt;K,V&gt;</span></span>
<span class="line"><span>    implements ConcurrentNavigableMap&lt;K,V&gt;, Cloneable, Serializable</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 使用 node 来保存数据，不参与构建跳表结构</span></span>
<span class="line"><span>    // 有序的链表</span></span>
<span class="line"><span>     static final class Node&lt;K,V&gt; {</span></span>
<span class="line"><span>        final K key; </span></span>
<span class="line"><span>        V val;</span></span>
<span class="line"><span>        Node&lt;K,V&gt; next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 实现跳表结构</span></span>
<span class="line"><span>    static final class Index&lt;K,V&gt; {</span></span>
<span class="line"><span>        final Node&lt;K,V&gt; node; // 实际保存的数据</span></span>
<span class="line"><span>        final Index&lt;K,V&gt; down;// 指向下一级</span></span>
<span class="line"><span>        Index&lt;K,V&gt; right;			// 指向右边链表</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h2><h3 id="hashset" tabindex="-1">HashSet <a class="header-anchor" href="#hashset" aria-label="Permalink to &quot;HashSet&quot;">​</a></h3><blockquote><p>就是封装 <code>Hashmap</code>，value 为一个空对象</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class HashSet&lt;E&gt;</span></span>
<span class="line"><span>    extends AbstractSet&lt;E&gt;</span></span>
<span class="line"><span>    implements Set&lt;E&gt;, Cloneable, java.io.Serializable</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 一个特殊的构造器，dummy 主要是区分其他构造器</span></span>
<span class="line"><span>    // 使用 LinkedHashMap 来保存数据</span></span>
<span class="line"><span>    HashSet(int initialCapacity, float loadFactor, boolean dummy) {</span></span>
<span class="line"><span>        map = new LinkedHashMap&lt;&gt;(initialCapacity, loadFactor);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="treeset" tabindex="-1">TreeSet <a class="header-anchor" href="#treeset" aria-label="Permalink to &quot;TreeSet&quot;">​</a></h3><blockquote><p>默认使用 <code>TreeMap</code>，可以是用其他 <code>java.util.NavigableMap</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class TreeSet&lt;E&gt; extends AbstractSet&lt;E&gt;</span></span>
<span class="line"><span>    implements NavigableSet&lt;E&gt;, Cloneable, java.io.Serializable</span></span></code></pre></div><h3 id="linkedhashset" tabindex="-1">LinkedHashSet <a class="header-anchor" href="#linkedhashset" aria-label="Permalink to &quot;LinkedHashSet&quot;">​</a></h3><blockquote><p>相对于 <code>HashSet</code> 主要是在迭代时是按照插入顺序</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class LinkedHashSet&lt;E&gt;</span></span>
<span class="line"><span>    extends HashSet&lt;E&gt;</span></span>
<span class="line"><span>    implements Set&lt;E&gt;, Cloneable, java.io.Serializable</span></span></code></pre></div><h3 id="concurrentskiplistset-线程安全" tabindex="-1">ConcurrentSkipListSet(线程安全) <a class="header-anchor" href="#concurrentskiplistset-线程安全" aria-label="Permalink to &quot;ConcurrentSkipListSet(线程安全)&quot;">​</a></h3><blockquote><p>封装 <code>ConcurrentSkipListMap</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ConcurrentSkipListSet&lt;E&gt;</span></span>
<span class="line"><span>    extends AbstractSet&lt;E&gt;</span></span>
<span class="line"><span>    implements NavigableSet&lt;E&gt;, Cloneable, java.io.Serializable</span></span></code></pre></div><h3 id="copyonwritearrayset-线程安全" tabindex="-1">CopyOnWriteArraySet(线程安全) <a class="header-anchor" href="#copyonwritearrayset-线程安全" aria-label="Permalink to &quot;CopyOnWriteArraySet(线程安全)&quot;">​</a></h3><blockquote><p>与其他的set最大的区别是封装 <code>CopyOnWriteArrayList</code>，而其他set都是封装的 map。</p><p>主要是调用</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class CopyOnWriteArraySet&lt;E&gt; extends AbstractSet&lt;E&gt;</span></span>
<span class="line"><span>        implements java.io.Serializable</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    // 核心方法，就是掉用 CopyOnWriteArrayList 的 addIfAbsent</span></span>
<span class="line"><span>    public boolean add(E e) {</span></span>
<span class="line"><span>        return al.addIfAbsent(e);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="qeque" tabindex="-1">Qeque <a class="header-anchor" href="#qeque" aria-label="Permalink to &quot;Qeque&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public interface Queue&lt;E&gt; extends Collection&lt;E&gt;</span></span></code></pre></div><h3 id="priorityqueue" tabindex="-1">PriorityQueue <a class="header-anchor" href="#priorityqueue" aria-label="Permalink to &quot;PriorityQueue&quot;">​</a></h3><blockquote><p>基于优先堆的一个无界队列，这个优先队列中的元素可以默认自然排序或者通过提供的比较器在队列实例化的时排序。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class PriorityQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>    implements java.io.Serializable {</span></span></code></pre></div><ul><li>插入数据不能为null，即不能排序</li></ul><h3 id="synchronousqueue-线程安全" tabindex="-1">SynchronousQueue（线程安全） <a class="header-anchor" href="#synchronousqueue-线程安全" aria-label="Permalink to &quot;SynchronousQueue（线程安全）&quot;">​</a></h3><blockquote><p>其内部是没有容器的，所以生产者生产一个数据，就堵塞了，必须等消费者消费后，生产者才能再次生产。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class SynchronousQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>    implements BlockingQueue&lt;E&gt;, java.io.Serializable {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 有公平，非公平</span></span>
<span class="line"><span>     public SynchronousQueue(boolean fair)</span></span></code></pre></div><h3 id="linkedblockingqueue-线程安全" tabindex="-1">LinkedBlockingQueue（线程安全） <a class="header-anchor" href="#linkedblockingqueue-线程安全" aria-label="Permalink to &quot;LinkedBlockingQueue（线程安全）&quot;">​</a></h3><blockquote><p>基于双向链表来实现阻塞队列。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class LinkedBlockingQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>        implements BlockingQueue&lt;E&gt;, java.io.Serializable {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>   /** 最大容量, 没有设置则为 Integer.MAX_VALUE*/</span></span>
<span class="line"><span>    private final int capacity;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 当前元素数量 */</span></span>
<span class="line"><span>    private final AtomicInteger count = new AtomicInteger();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 双端队列头元素</span></span>
<span class="line"><span>    transient Node&lt;E&gt; head;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 双端队列队尾元素</span></span>
<span class="line"><span>    private transient Node&lt;E&gt; last;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 出队使用的锁 take, poll, etc */</span></span>
<span class="line"><span>    private final ReentrantLock takeLock = new ReentrantLock();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 出队等待队列 */</span></span>
<span class="line"><span>    private final Condition notEmpty = takeLock.newCondition();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 入队使用的锁 put, offer, etc */</span></span>
<span class="line"><span>    private final ReentrantLock putLock = new ReentrantLock();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 入队等待队列 */</span></span>
<span class="line"><span>    private final Condition notFull = putLock.newCondition();</span></span></code></pre></div><ul><li>大小可以初始化设置，如果不设置，默认设置大小为Integer.MAX_VALUE</li><li>有两个锁对象，可以并行处理</li><li>因为有两把锁，所以不能选择公平锁</li></ul><h3 id="arrayblockingqueue-线程安全" tabindex="-1">ArrayBlockingQueue（线程安全） <a class="header-anchor" href="#arrayblockingqueue-线程安全" aria-label="Permalink to &quot;ArrayBlockingQueue（线程安全）&quot;">​</a></h3><blockquote><p>底层以数组的形式保存数据(实际上可看作一个循环数组)。</p></blockquote><ul><li>初始化时设置数组长度</li><li>是一个有界队列</li><li>只有一个锁对象</li><li>可以选择公平锁</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ArrayBlockingQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>        implements BlockingQueue&lt;E&gt;, java.io.Serializable {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>   /** 存放元素 */</span></span>
<span class="line"><span>    final Object[] items;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**下一次操作位置，即队列最前面元素 take, poll, peek，remove */</span></span>
<span class="line"><span>    int takeIndex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 下一次添加位置 put, offer, add */</span></span>
<span class="line"><span>    int putIndex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 当前数量 */</span></span>
<span class="line"><span>    int count;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 所有操作使用的锁 */</span></span>
<span class="line"><span>    final ReentrantLock lock;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 出队等待队列 */</span></span>
<span class="line"><span>    private final Condition notEmpty;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 入队等待队列 */</span></span>
<span class="line"><span>    private final Condition notFull;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 可选择公平锁</span></span>
<span class="line"><span>    public ArrayBlockingQueue(int capacity, boolean fair)</span></span></code></pre></div><h3 id="linkedtransferqueue-线程安全" tabindex="-1">LinkedTransferQueue（线程安全） <a class="header-anchor" href="#linkedtransferqueue-线程安全" aria-label="Permalink to &quot;LinkedTransferQueue（线程安全）&quot;">​</a></h3><blockquote><p><code>LinkedTransferQueue</code>是 <code>SynchronousQueue</code> 和 <code>LinkedBlockingQueue</code> 的合体，性能比 <code>LinkedBlockingQueue</code> 更高（没有锁操作），比 <code>SynchronousQueue</code>能存储更多的元素。</p><p>当 <code>put</code> 时，如果有等待的线程，就直接将元素 “交给” 等待者， 否则直接进入队列。</p><p><code>put</code>和 <code>transfer</code> 方法的区别是，put 是立即返回的， transfer 是阻塞等待消费者拿到数据才返回。<code>transfer</code>方法和 <code>SynchronousQueue</code>的 put 方法类似。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class LinkedTransferQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>    implements TransferQueue&lt;E&gt;, java.io.Serializable {</span></span></code></pre></div><h3 id="priorityblockingqueue-线程安全" tabindex="-1">PriorityBlockingQueue（线程安全） <a class="header-anchor" href="#priorityblockingqueue-线程安全" aria-label="Permalink to &quot;PriorityBlockingQueue（线程安全）&quot;">​</a></h3><ul><li>基于优先级的一个无界队列</li><li>底层是基于数组存储元素的</li><li>元素按照优选级顺序存储，优先级是通过Comparable的compareTo方法来实现的（自然排序）</li><li>其只会堵塞消费者，<strong>不会堵塞生产者，数组会不断扩容</strong>，使用时要谨慎。</li><li>使用 <code>contains</code> <code>remove</code>方法需要遍历所有值。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class PriorityBlockingQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>    implements BlockingQueue&lt;E&gt;, java.io.Serializable {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 扩容</span></span>
<span class="line"><span>    // 实际只有一个线程会进行实际扩容，其他线程一直等，但不影响出队操作</span></span>
<span class="line"><span>     private void tryGrow(Object[] array, int oldCap)</span></span></code></pre></div><h3 id="delayqueue-线程安全" tabindex="-1">DelayQueue（线程安全） <a class="header-anchor" href="#delayqueue-线程安全" aria-label="Permalink to &quot;DelayQueue（线程安全）&quot;">​</a></h3><ul><li>基于优先级的一个无界队列</li><li>队列元素必须实现Delayed接口</li><li>支持延迟获取</li><li>元素按照时间排序</li><li>只有元素到期后，消费者才能从队列中取出</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class DelayQueue&lt;E extends Delayed&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>    implements BlockingQueue&lt;E&gt; {</span></span></code></pre></div><h3 id="concurrentlinkedqueue-线程安全" tabindex="-1">ConcurrentLinkedQueue（线程安全） <a class="header-anchor" href="#concurrentlinkedqueue-线程安全" aria-label="Permalink to &quot;ConcurrentLinkedQueue（线程安全）&quot;">​</a></h3><blockquote><p>基于链接节点的无界线程安全的队列，使用cas保证线程安全</p></blockquote><ul><li>不允许null入列</li><li>删除节点是将item设置为null, 队列迭代时跳过item为null节点</li><li>head节点跟tail不一定指向头节点或尾节点，可能存在滞后性</li><li>入列出列线程安全，遍历不安全</li><li>使用 cas 保证线程安全</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ConcurrentLinkedQueue&lt;E&gt; extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>        implements Queue&lt;E&gt;, java.io.Serializable {</span></span></code></pre></div><h2 id="deque" tabindex="-1">Deque <a class="header-anchor" href="#deque" aria-label="Permalink to &quot;Deque&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public interface Deque&lt;E&gt; extends Queue&lt;E&gt;</span></span></code></pre></div><h3 id="arraydeque" tabindex="-1">ArrayDeque <a class="header-anchor" href="#arraydeque" aria-label="Permalink to &quot;ArrayDeque&quot;">​</a></h3><blockquote><p>通过循环数组来实现队列。</p></blockquote><ul><li>不能添加null值</li><li>每次扩容都是2的n次方</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ArrayDeque&lt;E&gt; extends AbstractCollection&lt;E&gt;</span></span>
<span class="line"><span>                           implements Deque&lt;E&gt;, Cloneable, Serializable</span></span></code></pre></div><h3 id="concurrentlinkeddeque-线程安全" tabindex="-1">ConcurrentLinkedDeque（线程安全） <a class="header-anchor" href="#concurrentlinkeddeque-线程安全" aria-label="Permalink to &quot;ConcurrentLinkedDeque（线程安全）&quot;">​</a></h3><blockquote><p>与 <code>ConcurrentLinkedQueue</code> 的区别是该阻塞队列同时支持FIFO和FILO两种操作方式</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class ConcurrentLinkedDeque&lt;E&gt;</span></span>
<span class="line"><span>    extends AbstractCollection&lt;E&gt;</span></span>
<span class="line"><span>    implements Deque&lt;E&gt;, java.io.Serializable {</span></span></code></pre></div><h3 id="linkedblockingdeque-线程安全" tabindex="-1">LinkedBlockingDeque（线程安全） <a class="header-anchor" href="#linkedblockingdeque-线程安全" aria-label="Permalink to &quot;LinkedBlockingDeque（线程安全）&quot;">​</a></h3><blockquote><p>与 <code>LinkedBlockingQueue</code>的区别是该阻塞队列同时支持FIFO和FILO两种操作方式</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class LinkedBlockingDeque&lt;E&gt;</span></span>
<span class="line"><span>    extends AbstractQueue&lt;E&gt;</span></span>
<span class="line"><span>    implements BlockingDeque&lt;E&gt;, java.io.Serializable {</span></span></code></pre></div>`,76),r=[t,i,c,o];function d(u,h,b,g,k,m){return e(),p("div",null,r)}const q=n(l,[["render",d]]);export{y as __pageData,q as default};
