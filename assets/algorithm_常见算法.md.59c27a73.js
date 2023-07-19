import{_ as s,o as n,c as a,U as l}from"./chunks/framework.190aac23.js";const u=JSON.parse('{"title":"常见算法","description":"","frontmatter":{"title":"常见算法"},"headers":[],"relativePath":"algorithm/常见算法.md","filePath":"algorithm/常见算法.md","lastUpdated":1689760198000}'),p={name:"algorithm/常见算法.md"},e=l(`<h3 id="蓄水池抽样算法-reservoir-sampling" tabindex="-1">蓄水池抽样算法（Reservoir Sampling） <a class="header-anchor" href="#蓄水池抽样算法-reservoir-sampling" aria-label="Permalink to &quot;蓄水池抽样算法（Reservoir Sampling）&quot;">​</a></h3><blockquote><p><strong>给定一个数据流，数据流长度N很大，且N直到处理完所有数据之前都不可知，请问如何在只遍历一遍数据（O(N)）的情况下，能够随机选取出K个不重复的数据。</strong></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">int[] result = new int[K];</span></span>
<span class="line"><span style="color:#A6ACCD;">for (int i = 0; i &lt; K; i++) { // 前 K 个元素直接放入数组中</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	result[i] = pool[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (int i = K; i &lt; N; i++) { // K + 1 个元素开始进行概率采样</span></span>
<span class="line"><span style="color:#A6ACCD;">  int r = random.nextInt(i + 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (r &lt; K) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	 result[r] = pool[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="最大公约数-最小公倍数" tabindex="-1">最大公约数，最小公倍数 <a class="header-anchor" href="#最大公约数-最小公倍数" aria-label="Permalink to &quot;最大公约数，最小公倍数&quot;">​</a></h3><blockquote><p>求最小公倍数需要最大公约数</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 最小公倍数</span></span>
<span class="line"><span style="color:#A6ACCD;">private long lcm(long a, long b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	return a * b / gcd(a, b);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">// 最大公约数</span></span>
<span class="line"><span style="color:#A6ACCD;">private long gcd(long x, long y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (x == 0) return y;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return gcd(y % x, x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="枚举二进制子集" tabindex="-1">枚举二进制子集 <a class="header-anchor" href="#枚举二进制子集" aria-label="Permalink to &quot;枚举二进制子集&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// m =&gt; 总状态数</span></span>
<span class="line"><span style="color:#A6ACCD;">for (int i = 1; i &lt; m; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 枚举状态 i 的二进制子集</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int j = i; j &gt; 0; j = (j - 1) &amp; i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // To Do..</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="最长上升子序列-longest-increasing-subsequence" tabindex="-1">最长上升子序列（Longest Increasing Subsequence） <a class="header-anchor" href="#最长上升子序列-longest-increasing-subsequence" aria-label="Permalink to &quot;最长上升子序列（Longest Increasing Subsequence）&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 动态规划 O(n2)</span></span>
<span class="line"><span style="color:#A6ACCD;">public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (nums == null || nums.length == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    		return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    int[] dp = new int[nums.length];</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 最小值都为1</span></span>
<span class="line"><span style="color:#A6ACCD;">    Arrays.fill(dp, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    int max = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 遍历前面的所以数字</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (int i = 1; i &lt; nums.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (nums[j] &lt; nums[i]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 当小于当前值时,取最大的数量</span></span>
<span class="line"><span style="color:#A6ACCD;">            dp[i] = Math.max(dp[i], dp[j] + 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            max = Math.max(max, dp[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return max;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 二分 贪心 O(n*logn)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        int ans = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 最长上升子序列（Longest  Increasing Subsequence）</span></span>
<span class="line"><span style="color:#A6ACCD;">        int[] lis = new int[nums.length];</span></span>
<span class="line"><span style="color:#A6ACCD;">        int index = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int num : nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (index == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 初始化子序列</span></span>
<span class="line"><span style="color:#A6ACCD;">                lis[index++] = num;</span></span>
<span class="line"><span style="color:#A6ACCD;">                continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (num &gt; lis[index - 1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 大于直接添加到尾部</span></span>
<span class="line"><span style="color:#A6ACCD;">                lis[index++] = num;</span></span>
<span class="line"><span style="color:#A6ACCD;">                continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 二分找第一个大于当前值的索引</span></span>
<span class="line"><span style="color:#A6ACCD;">            int left = 0, right = index - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (left &lt; right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 找左边中位数</span></span>
<span class="line"><span style="color:#A6ACCD;">                int mid = (left + right) / 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (lis[mid] &lt; num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // 继续找右边的</span></span>
<span class="line"><span style="color:#A6ACCD;">                    left = mid + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // 可能是目标</span></span>
<span class="line"><span style="color:#A6ACCD;">                    right = mid;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 替换掉</span></span>
<span class="line"><span style="color:#A6ACCD;">            lis[right] = num;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return index;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div>`,10),o=[e];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
