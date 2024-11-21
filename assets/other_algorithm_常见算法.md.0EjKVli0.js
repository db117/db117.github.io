import{_ as s,c as a,a3 as p,o as l}from"./chunks/framework.lVUbth6I.js";const h=JSON.parse('{"title":"常见算法","description":"","frontmatter":{"title":"常见算法"},"headers":[],"relativePath":"other/algorithm/常见算法.md","filePath":"other/algorithm/常见算法.md"}'),e={name:"other/algorithm/常见算法.md"};function i(t,n,c,o,r,d){return l(),a("div",null,n[0]||(n[0]=[p(`<h3 id="蓄水池抽样算法-reservoir-sampling" tabindex="-1">蓄水池抽样算法（Reservoir Sampling） <a class="header-anchor" href="#蓄水池抽样算法-reservoir-sampling" aria-label="Permalink to &quot;蓄水池抽样算法（Reservoir Sampling）&quot;">​</a></h3><blockquote><p><strong>给定一个数据流，数据流长度N很大，且N直到处理完所有数据之前都不可知，请问如何在只遍历一遍数据（O(N)）的情况下，能够随机选取出K个不重复的数据。</strong></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int[] result = new int[K];</span></span>
<span class="line"><span>for (int i = 0; i &lt; K; i++) { // 前 K 个元素直接放入数组中</span></span>
<span class="line"><span> 	result[i] = pool[i];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (int i = K; i &lt; N; i++) { // K + 1 个元素开始进行概率采样</span></span>
<span class="line"><span>  int r = random.nextInt(i + 1);</span></span>
<span class="line"><span>  if (r &lt; K) {</span></span>
<span class="line"><span> 	 result[r] = pool[i];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="最大公约数-最小公倍数" tabindex="-1">最大公约数，最小公倍数 <a class="header-anchor" href="#最大公约数-最小公倍数" aria-label="Permalink to &quot;最大公约数，最小公倍数&quot;">​</a></h3><blockquote><p>求最小公倍数需要最大公约数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 最小公倍数</span></span>
<span class="line"><span>private long lcm(long a, long b) {</span></span>
<span class="line"><span>	return a * b / gcd(a, b);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// 最大公约数</span></span>
<span class="line"><span>private long gcd(long x, long y) {</span></span>
<span class="line"><span>  if (x == 0) return y;</span></span>
<span class="line"><span>  return gcd(y % x, x);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="枚举二进制子集" tabindex="-1">枚举二进制子集 <a class="header-anchor" href="#枚举二进制子集" aria-label="Permalink to &quot;枚举二进制子集&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// m =&gt; 总状态数</span></span>
<span class="line"><span>for (int i = 1; i &lt; m; i++) {</span></span>
<span class="line"><span>    // 枚举状态 i 的二进制子集</span></span>
<span class="line"><span>    for (int j = i; j &gt; 0; j = (j - 1) &amp; i) {</span></span>
<span class="line"><span>        // To Do..</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="最长上升子序列-longest-increasing-subsequence" tabindex="-1">最长上升子序列（Longest Increasing Subsequence） <a class="header-anchor" href="#最长上升子序列-longest-increasing-subsequence" aria-label="Permalink to &quot;最长上升子序列（Longest Increasing Subsequence）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 动态规划 O(n2)</span></span>
<span class="line"><span>public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span>    if (nums == null || nums.length == 0) {</span></span>
<span class="line"><span>    		return 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int[] dp = new int[nums.length];</span></span>
<span class="line"><span>    // 最小值都为1</span></span>
<span class="line"><span>    Arrays.fill(dp, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int max = 0;</span></span>
<span class="line"><span>    // 遍历前面的所以数字</span></span>
<span class="line"><span>    for (int i = 1; i &lt; nums.length; i++) {</span></span>
<span class="line"><span>        for (int j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span>          if (nums[j] &lt; nums[i]) {</span></span>
<span class="line"><span>            // 当小于当前值时,取最大的数量</span></span>
<span class="line"><span>            dp[i] = Math.max(dp[i], dp[j] + 1);</span></span>
<span class="line"><span>            max = Math.max(max, dp[i]);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return max;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 二分 贪心 O(n*logn)</span></span>
<span class="line"><span>    public int lengthOfLIS(int[] nums) {</span></span>
<span class="line"><span>        int ans = 0;</span></span>
<span class="line"><span>        // 最长上升子序列（Longest  Increasing Subsequence）</span></span>
<span class="line"><span>        int[] lis = new int[nums.length];</span></span>
<span class="line"><span>        int index = 0;</span></span>
<span class="line"><span>        for (int num : nums) {</span></span>
<span class="line"><span>            if (index == 0) {</span></span>
<span class="line"><span>                // 初始化子序列</span></span>
<span class="line"><span>                lis[index++] = num;</span></span>
<span class="line"><span>                continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (num &gt; lis[index - 1]) {</span></span>
<span class="line"><span>                // 大于直接添加到尾部</span></span>
<span class="line"><span>                lis[index++] = num;</span></span>
<span class="line"><span>                continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 二分找第一个大于当前值的索引</span></span>
<span class="line"><span>            int left = 0, right = index - 1;</span></span>
<span class="line"><span>            while (left &lt; right) {</span></span>
<span class="line"><span>                // 找左边中位数</span></span>
<span class="line"><span>                int mid = (left + right) / 2;</span></span>
<span class="line"><span>                if (lis[mid] &lt; num) {</span></span>
<span class="line"><span>                    // 继续找右边的</span></span>
<span class="line"><span>                    left = mid + 1;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    // 可能是目标</span></span>
<span class="line"><span>                    right = mid;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 替换掉</span></span>
<span class="line"><span>            lis[right] = num;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return index;</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,10)]))}const g=s(e,[["render",i]]);export{h as __pageData,g as default};
