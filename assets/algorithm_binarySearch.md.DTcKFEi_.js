import{_ as n,c as s,o as a,a8 as p}from"./chunks/framework.yI1Kwid6.js";const u=JSON.parse('{"title":"二分算法","description":"","frontmatter":{"title":"二分算法"},"headers":[],"relativePath":"algorithm/binarySearch.md","filePath":"algorithm/binarySearch.md","lastUpdated":1721123255000}'),l={name:"algorithm/binarySearch.md"},e=p(`<h3 id="精确查找" tabindex="-1">精确查找 <a class="header-anchor" href="#精确查找" aria-label="Permalink to &quot;精确查找&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 精准查询,查询不到返回-1</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public int bs(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (left &lt;= right) {</span></span>
<span class="line"><span>        // 偶数取左边</span></span>
<span class="line"><span>        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int num = nums[mid];</span></span>
<span class="line"><span>        if (num == target) {</span></span>
<span class="line"><span>            // 找到返回</span></span>
<span class="line"><span>            return mid;</span></span>
<span class="line"><span>        } else if (num &lt; target) {</span></span>
<span class="line"><span>            // 移动左边界</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 移动右边界</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="找等于目标值的最小索引" tabindex="-1">找等于目标值的最小索引 <a class="header-anchor" href="#找等于目标值的最小索引" aria-label="Permalink to &quot;找等于目标值的最小索引&quot;">​</a></h3><p>两种写法，主要区别是 <code>while</code> 判断条件。</p><p>当 <code>left&lt;=right</code> 时结束时 <code>left</code> 不等于 <code>right</code>。<code>left</code> 有越界风险。需要判断。</p><p>当 <code>left&lt;right</code>时结束时 <code>left</code> 等于 <code>right</code>。无需判断是否越界。但是需要判断是否找到目标值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 找到最左边的索引,找不到返回-1</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public int bsLeft(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span>    while (left &lt;= right) {</span></span>
<span class="line"><span>        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span>        int num = nums[mid];</span></span>
<span class="line"><span>        if (num &lt; target) {</span></span>
<span class="line"><span>            // 移动左边界</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        } else if (num &gt; target) {</span></span>
<span class="line"><span>            // 移动右边界</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 锁定左边</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 检查越界,是否找到</span></span>
<span class="line"><span>    if (left &gt;= nums.length || nums[left] != target) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return left;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public int bsLeft1(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span>    while (left &lt; right) {</span></span>
<span class="line"><span>        // 左边中位数</span></span>
<span class="line"><span>        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span>        if (nums[mid] &lt; target) {</span></span>
<span class="line"><span>            // 移动左边界</span></span>
<span class="line"><span>            // 上面选择左边中位数,所有加一</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 大于等于则保持右边界</span></span>
<span class="line"><span>            // 等于则继续往左边查找</span></span>
<span class="line"><span>            right = mid;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 需要判断是否找到</span></span>
<span class="line"><span>    return nums[right] == target ? right : -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="找等于目标值的最大索引" tabindex="-1">找等于目标值的最大索引 <a class="header-anchor" href="#找等于目标值的最大索引" aria-label="Permalink to &quot;找等于目标值的最大索引&quot;">​</a></h3><p>区别同上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 查找最右边的索引,找不到返回-1</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public int bsRight(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span>    while (left &lt;= right) {</span></span>
<span class="line"><span>        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span>        int num = nums[mid];</span></span>
<span class="line"><span>        if (num &lt; target) {</span></span>
<span class="line"><span>            // 移动左边界</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        } else if (num &gt; target) {</span></span>
<span class="line"><span>            // 移动右边界</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 锁定右边,移动左边界</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 检查越界,是否找到</span></span>
<span class="line"><span>    if (right &lt; 0 || nums[right] != target) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return right;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public int bsRight1(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span>    while (left &lt; right) {</span></span>
<span class="line"><span>        // 选右边中位数</span></span>
<span class="line"><span>        int mid = left + ((right - left + 1) &gt;&gt; 1);</span></span>
<span class="line"><span>        if (nums[mid] &lt;= target) {</span></span>
<span class="line"><span>            // 小于移动左边界</span></span>
<span class="line"><span>            // 上面选择的是右边中位数,所以这里不加一</span></span>
<span class="line"><span>            // 等于则继续往右边寻找</span></span>
<span class="line"><span>            left = mid;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 移动右边界</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 需要判断是否找到</span></span>
<span class="line"><span>    return nums[right] == target ? right : -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="找小于目标的最大值" tabindex="-1">找小于目标的最大值 <a class="header-anchor" href="#找小于目标的最大值" aria-label="Permalink to &quot;找小于目标的最大值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 找小于目标的最大值</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public int bsLeftMax(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span>    while (left &lt; right) {</span></span>
<span class="line"><span>        // 选右边中位数</span></span>
<span class="line"><span>        int mid = left + ((right - left + 1) &gt;&gt; 1);</span></span>
<span class="line"><span>        if (nums[mid] &lt; target) {</span></span>
<span class="line"><span>            // 当前值可能是目标值,继续往右边找</span></span>
<span class="line"><span>            left = mid;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 当前值不可能是目标值,想左边找</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 防止所有数据都大于目标值</span></span>
<span class="line"><span>    return nums[right] &lt; target ? right : -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="找大于目标的最小值" tabindex="-1">找大于目标的最小值 <a class="header-anchor" href="#找大于目标的最小值" aria-label="Permalink to &quot;找大于目标的最小值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 找大于目标的最小值</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public int bsRightMin(int[] nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span>    while (left &lt; right) {</span></span>
<span class="line"><span>        // 选右边中位数</span></span>
<span class="line"><span>        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span>        if (nums[mid] &lt;= target) {</span></span>
<span class="line"><span>            // 当前值不可能是目标,继续往右边找</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 当前值可能是目标,继续往左边找</span></span>
<span class="line"><span>            right = mid;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 防止所有数据都小于目标值</span></span>
<span class="line"><span>    return nums[right] &gt; target ? right : -1;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,14),i=[e];function t(c,r,h,g,d,o){return a(),s("div",null,i)}const f=n(l,[["render",t]]);export{u as __pageData,f as default};
