import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const m=JSON.parse('{"title":"二分算法","description":"","frontmatter":{"title":"二分算法"},"headers":[],"relativePath":"algorithm/binarySearch.md","filePath":"algorithm/binarySearch.md","lastUpdated":1697773070000}'),l={name:"algorithm/binarySearch.md"},p=e(`<h3 id="精确查找" tabindex="-1">精确查找 <a class="header-anchor" href="#精确查找" aria-label="Permalink to &quot;精确查找&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 精准查询,查询不到返回-1</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">public int bs(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt;= right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 偶数取左边</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        int num = nums[mid];</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (num == target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 找到返回</span></span>
<span class="line"><span style="color:#e1e4e8;">            return mid;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (num &lt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动左边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动右边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 精准查询,查询不到返回-1</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public int bs(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt;= right) {</span></span>
<span class="line"><span style="color:#24292e;">        // 偶数取左边</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        int num = nums[mid];</span></span>
<span class="line"><span style="color:#24292e;">        if (num == target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 找到返回</span></span>
<span class="line"><span style="color:#24292e;">            return mid;</span></span>
<span class="line"><span style="color:#24292e;">        } else if (num &lt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动左边界</span></span>
<span class="line"><span style="color:#24292e;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动右边界</span></span>
<span class="line"><span style="color:#24292e;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return -1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="找等于目标值的最小索引" tabindex="-1">找等于目标值的最小索引 <a class="header-anchor" href="#找等于目标值的最小索引" aria-label="Permalink to &quot;找等于目标值的最小索引&quot;">​</a></h3><p>两种写法，主要区别是 <code>while</code> 判断条件。</p><p>当 <code>left&lt;=right</code> 时结束时 <code>left</code> 不等于 <code>right</code>。<code>left</code> 有越界风险。需要判断。</p><p>当 <code>left&lt;right</code>时结束时 <code>left</code> 等于 <code>right</code>。无需判断是否越界。但是需要判断是否找到目标值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 找到最左边的索引,找不到返回-1</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">public int bsLeft(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt;= right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        int num = nums[mid];</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (num &lt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动左边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (num &gt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动右边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 锁定左边</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 检查越界,是否找到</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (left &gt;= nums.length || nums[left] != target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return left;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public int bsLeft1(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 左边中位数</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (nums[mid] &lt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动左边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 上面选择左边中位数,所有加一</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 大于等于则保持右边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 等于则继续往左边查找</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 需要判断是否找到</span></span>
<span class="line"><span style="color:#e1e4e8;">    return nums[right] == target ? right : -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 找到最左边的索引,找不到返回-1</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public int bsLeft(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt;= right) {</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;">        int num = nums[mid];</span></span>
<span class="line"><span style="color:#24292e;">        if (num &lt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动左边界</span></span>
<span class="line"><span style="color:#24292e;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else if (num &gt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动右边界</span></span>
<span class="line"><span style="color:#24292e;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 锁定左边</span></span>
<span class="line"><span style="color:#24292e;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 检查越界,是否找到</span></span>
<span class="line"><span style="color:#24292e;">    if (left &gt;= nums.length || nums[left] != target) {</span></span>
<span class="line"><span style="color:#24292e;">        return -1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return left;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public int bsLeft1(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#24292e;">        // 左边中位数</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;">        if (nums[mid] &lt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动左边界</span></span>
<span class="line"><span style="color:#24292e;">            // 上面选择左边中位数,所有加一</span></span>
<span class="line"><span style="color:#24292e;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 大于等于则保持右边界</span></span>
<span class="line"><span style="color:#24292e;">            // 等于则继续往左边查找</span></span>
<span class="line"><span style="color:#24292e;">            right = mid;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 需要判断是否找到</span></span>
<span class="line"><span style="color:#24292e;">    return nums[right] == target ? right : -1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="找等于目标值的最大索引" tabindex="-1">找等于目标值的最大索引 <a class="header-anchor" href="#找等于目标值的最大索引" aria-label="Permalink to &quot;找等于目标值的最大索引&quot;">​</a></h3><p>区别同上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 查找最右边的索引,找不到返回-1</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">public int bsRight(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt;= right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        int num = nums[mid];</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (num &lt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动左边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (num &gt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动右边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 锁定右边,移动左边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 检查越界,是否找到</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (right &lt; 0 || nums[right] != target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return right;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public int bsRight1(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 选右边中位数</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left + 1) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (nums[mid] &lt;= target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 小于移动左边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 上面选择的是右边中位数,所以这里不加一</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 等于则继续往右边寻找</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 移动右边界</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 需要判断是否找到</span></span>
<span class="line"><span style="color:#e1e4e8;">    return nums[right] == target ? right : -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 查找最右边的索引,找不到返回-1</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public int bsRight(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt;= right) {</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;">        int num = nums[mid];</span></span>
<span class="line"><span style="color:#24292e;">        if (num &lt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动左边界</span></span>
<span class="line"><span style="color:#24292e;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else if (num &gt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动右边界</span></span>
<span class="line"><span style="color:#24292e;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 锁定右边,移动左边界</span></span>
<span class="line"><span style="color:#24292e;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 检查越界,是否找到</span></span>
<span class="line"><span style="color:#24292e;">    if (right &lt; 0 || nums[right] != target) {</span></span>
<span class="line"><span style="color:#24292e;">        return -1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return right;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public int bsRight1(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#24292e;">        // 选右边中位数</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left + 1) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;">        if (nums[mid] &lt;= target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 小于移动左边界</span></span>
<span class="line"><span style="color:#24292e;">            // 上面选择的是右边中位数,所以这里不加一</span></span>
<span class="line"><span style="color:#24292e;">            // 等于则继续往右边寻找</span></span>
<span class="line"><span style="color:#24292e;">            left = mid;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 移动右边界</span></span>
<span class="line"><span style="color:#24292e;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 需要判断是否找到</span></span>
<span class="line"><span style="color:#24292e;">    return nums[right] == target ? right : -1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="找小于目标的最大值" tabindex="-1">找小于目标的最大值 <a class="header-anchor" href="#找小于目标的最大值" aria-label="Permalink to &quot;找小于目标的最大值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 找小于目标的最大值</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">public int bsLeftMax(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 选右边中位数</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left + 1) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (nums[mid] &lt; target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 当前值可能是目标值,继续往右边找</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 当前值不可能是目标值,想左边找</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 防止所有数据都大于目标值</span></span>
<span class="line"><span style="color:#e1e4e8;">    return nums[right] &lt; target ? right : -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 找小于目标的最大值</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public int bsLeftMax(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#24292e;">        // 选右边中位数</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left + 1) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;">        if (nums[mid] &lt; target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 当前值可能是目标值,继续往右边找</span></span>
<span class="line"><span style="color:#24292e;">            left = mid;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 当前值不可能是目标值,想左边找</span></span>
<span class="line"><span style="color:#24292e;">            right = mid - 1;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 防止所有数据都大于目标值</span></span>
<span class="line"><span style="color:#24292e;">    return nums[right] &lt; target ? right : -1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="找大于目标的最小值" tabindex="-1">找大于目标的最小值 <a class="header-anchor" href="#找大于目标的最小值" aria-label="Permalink to &quot;找大于目标的最小值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 找大于目标的最小值</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">public int bsRightMin(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 选右边中位数</span></span>
<span class="line"><span style="color:#e1e4e8;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (nums[mid] &lt;= target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 当前值不可能是目标,继续往右边找</span></span>
<span class="line"><span style="color:#e1e4e8;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 当前值可能是目标,继续往左边找</span></span>
<span class="line"><span style="color:#e1e4e8;">            right = mid;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 防止所有数据都小于目标值</span></span>
<span class="line"><span style="color:#e1e4e8;">    return nums[right] &gt; target ? right : -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 找大于目标的最小值</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public int bsRightMin(int[] nums, int target) {</span></span>
<span class="line"><span style="color:#24292e;">    int left = 0, right = nums.length - 1;</span></span>
<span class="line"><span style="color:#24292e;">    while (left &lt; right) {</span></span>
<span class="line"><span style="color:#24292e;">        // 选右边中位数</span></span>
<span class="line"><span style="color:#24292e;">        int mid = left + ((right - left) &gt;&gt; 1);</span></span>
<span class="line"><span style="color:#24292e;">        if (nums[mid] &lt;= target) {</span></span>
<span class="line"><span style="color:#24292e;">            // 当前值不可能是目标,继续往右边找</span></span>
<span class="line"><span style="color:#24292e;">            left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 当前值可能是目标,继续往左边找</span></span>
<span class="line"><span style="color:#24292e;">            right = mid;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 防止所有数据都小于目标值</span></span>
<span class="line"><span style="color:#24292e;">    return nums[right] &gt; target ? right : -1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,14),t=[p];function c(o,i,r,y,g,h){return n(),a("div",null,t)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
