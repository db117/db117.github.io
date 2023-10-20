import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const m=JSON.parse('{"title":"常见算法","description":"","frontmatter":{"title":"常见算法"},"headers":[],"relativePath":"algorithm/常见算法.md","filePath":"algorithm/常见算法.md","lastUpdated":1697773070000}'),l={name:"algorithm/常见算法.md"},p=e(`<h3 id="蓄水池抽样算法-reservoir-sampling" tabindex="-1">蓄水池抽样算法（Reservoir Sampling） <a class="header-anchor" href="#蓄水池抽样算法-reservoir-sampling" aria-label="Permalink to &quot;蓄水池抽样算法（Reservoir Sampling）&quot;">​</a></h3><blockquote><p><strong>给定一个数据流，数据流长度N很大，且N直到处理完所有数据之前都不可知，请问如何在只遍历一遍数据（O(N)）的情况下，能够随机选取出K个不重复的数据。</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int[] result = new int[K];</span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = 0; i &lt; K; i++) { // 前 K 个元素直接放入数组中</span></span>
<span class="line"><span style="color:#e1e4e8;"> 	result[i] = pool[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = K; i &lt; N; i++) { // K + 1 个元素开始进行概率采样</span></span>
<span class="line"><span style="color:#e1e4e8;">  int r = random.nextInt(i + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (r &lt; K) {</span></span>
<span class="line"><span style="color:#e1e4e8;"> 	 result[r] = pool[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int[] result = new int[K];</span></span>
<span class="line"><span style="color:#24292e;">for (int i = 0; i &lt; K; i++) { // 前 K 个元素直接放入数组中</span></span>
<span class="line"><span style="color:#24292e;"> 	result[i] = pool[i];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">for (int i = K; i &lt; N; i++) { // K + 1 个元素开始进行概率采样</span></span>
<span class="line"><span style="color:#24292e;">  int r = random.nextInt(i + 1);</span></span>
<span class="line"><span style="color:#24292e;">  if (r &lt; K) {</span></span>
<span class="line"><span style="color:#24292e;"> 	 result[r] = pool[i];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="最大公约数-最小公倍数" tabindex="-1">最大公约数，最小公倍数 <a class="header-anchor" href="#最大公约数-最小公倍数" aria-label="Permalink to &quot;最大公约数，最小公倍数&quot;">​</a></h3><blockquote><p>求最小公倍数需要最大公约数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 最小公倍数</span></span>
<span class="line"><span style="color:#e1e4e8;">private long lcm(long a, long b) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return a * b / gcd(a, b);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">// 最大公约数</span></span>
<span class="line"><span style="color:#e1e4e8;">private long gcd(long x, long y) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (x == 0) return y;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return gcd(y % x, x);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 最小公倍数</span></span>
<span class="line"><span style="color:#24292e;">private long lcm(long a, long b) {</span></span>
<span class="line"><span style="color:#24292e;">	return a * b / gcd(a, b);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">// 最大公约数</span></span>
<span class="line"><span style="color:#24292e;">private long gcd(long x, long y) {</span></span>
<span class="line"><span style="color:#24292e;">  if (x == 0) return y;</span></span>
<span class="line"><span style="color:#24292e;">  return gcd(y % x, x);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="枚举二进制子集" tabindex="-1">枚举二进制子集 <a class="header-anchor" href="#枚举二进制子集" aria-label="Permalink to &quot;枚举二进制子集&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// m =&gt; 总状态数</span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = 1; i &lt; m; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 枚举状态 i 的二进制子集</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int j = i; j &gt; 0; j = (j - 1) &amp; i) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // To Do..</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// m =&gt; 总状态数</span></span>
<span class="line"><span style="color:#24292e;">for (int i = 1; i &lt; m; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    // 枚举状态 i 的二进制子集</span></span>
<span class="line"><span style="color:#24292e;">    for (int j = i; j &gt; 0; j = (j - 1) &amp; i) {</span></span>
<span class="line"><span style="color:#24292e;">        // To Do..</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="最长上升子序列-longest-increasing-subsequence" tabindex="-1">最长上升子序列（Longest Increasing Subsequence） <a class="header-anchor" href="#最长上升子序列-longest-increasing-subsequence" aria-label="Permalink to &quot;最长上升子序列（Longest Increasing Subsequence）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 动态规划 O(n2)</span></span>
<span class="line"><span style="color:#e1e4e8;">public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (nums == null || nums.length == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    		return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    int[] dp = new int[nums.length];</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 最小值都为1</span></span>
<span class="line"><span style="color:#e1e4e8;">    Arrays.fill(dp, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    int max = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 遍历前面的所以数字</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (int i = 1; i &lt; nums.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          if (nums[j] &lt; nums[i]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 当小于当前值时,取最大的数量</span></span>
<span class="line"><span style="color:#e1e4e8;">            dp[i] = Math.max(dp[i], dp[j] + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">            max = Math.max(max, dp[i]);</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return max;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 二分 贪心 O(n*logn)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        int ans = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 最长上升子序列（Longest  Increasing Subsequence）</span></span>
<span class="line"><span style="color:#e1e4e8;">        int[] lis = new int[nums.length];</span></span>
<span class="line"><span style="color:#e1e4e8;">        int index = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int num : nums) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (index == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 初始化子序列</span></span>
<span class="line"><span style="color:#e1e4e8;">                lis[index++] = num;</span></span>
<span class="line"><span style="color:#e1e4e8;">                continue;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            if (num &gt; lis[index - 1]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 大于直接添加到尾部</span></span>
<span class="line"><span style="color:#e1e4e8;">                lis[index++] = num;</span></span>
<span class="line"><span style="color:#e1e4e8;">                continue;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 二分找第一个大于当前值的索引</span></span>
<span class="line"><span style="color:#e1e4e8;">            int left = 0, right = index - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            while (left &lt; right) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 找左边中位数</span></span>
<span class="line"><span style="color:#e1e4e8;">                int mid = (left + right) / 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (lis[mid] &lt; num) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 继续找右边的</span></span>
<span class="line"><span style="color:#e1e4e8;">                    left = mid + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">                } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 可能是目标</span></span>
<span class="line"><span style="color:#e1e4e8;">                    right = mid;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 替换掉</span></span>
<span class="line"><span style="color:#e1e4e8;">            lis[right] = num;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return index;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 动态规划 O(n2)</span></span>
<span class="line"><span style="color:#24292e;">public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span style="color:#24292e;">    if (nums == null || nums.length == 0) {</span></span>
<span class="line"><span style="color:#24292e;">    		return 0;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    int[] dp = new int[nums.length];</span></span>
<span class="line"><span style="color:#24292e;">    // 最小值都为1</span></span>
<span class="line"><span style="color:#24292e;">    Arrays.fill(dp, 1);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    int max = 0;</span></span>
<span class="line"><span style="color:#24292e;">    // 遍历前面的所以数字</span></span>
<span class="line"><span style="color:#24292e;">    for (int i = 1; i &lt; nums.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">        for (int j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span style="color:#24292e;">          if (nums[j] &lt; nums[i]) {</span></span>
<span class="line"><span style="color:#24292e;">            // 当小于当前值时,取最大的数量</span></span>
<span class="line"><span style="color:#24292e;">            dp[i] = Math.max(dp[i], dp[j] + 1);</span></span>
<span class="line"><span style="color:#24292e;">            max = Math.max(max, dp[i]);</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return max;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 二分 贪心 O(n*logn)</span></span>
<span class="line"><span style="color:#24292e;">    public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span style="color:#24292e;">        int ans = 0;</span></span>
<span class="line"><span style="color:#24292e;">        // 最长上升子序列（Longest  Increasing Subsequence）</span></span>
<span class="line"><span style="color:#24292e;">        int[] lis = new int[nums.length];</span></span>
<span class="line"><span style="color:#24292e;">        int index = 0;</span></span>
<span class="line"><span style="color:#24292e;">        for (int num : nums) {</span></span>
<span class="line"><span style="color:#24292e;">            if (index == 0) {</span></span>
<span class="line"><span style="color:#24292e;">                // 初始化子序列</span></span>
<span class="line"><span style="color:#24292e;">                lis[index++] = num;</span></span>
<span class="line"><span style="color:#24292e;">                continue;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            if (num &gt; lis[index - 1]) {</span></span>
<span class="line"><span style="color:#24292e;">                // 大于直接添加到尾部</span></span>
<span class="line"><span style="color:#24292e;">                lis[index++] = num;</span></span>
<span class="line"><span style="color:#24292e;">                continue;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 二分找第一个大于当前值的索引</span></span>
<span class="line"><span style="color:#24292e;">            int left = 0, right = index - 1;</span></span>
<span class="line"><span style="color:#24292e;">            while (left &lt; right) {</span></span>
<span class="line"><span style="color:#24292e;">                // 找左边中位数</span></span>
<span class="line"><span style="color:#24292e;">                int mid = (left + right) / 2;</span></span>
<span class="line"><span style="color:#24292e;">                if (lis[mid] &lt; num) {</span></span>
<span class="line"><span style="color:#24292e;">                    // 继续找右边的</span></span>
<span class="line"><span style="color:#24292e;">                    left = mid + 1;</span></span>
<span class="line"><span style="color:#24292e;">                } else {</span></span>
<span class="line"><span style="color:#24292e;">                    // 可能是目标</span></span>
<span class="line"><span style="color:#24292e;">                    right = mid;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 替换掉</span></span>
<span class="line"><span style="color:#24292e;">            lis[right] = num;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return index;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div>`,10),o=[p];function c(i,t,r,y,d,u){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{m as __pageData,h as default};
