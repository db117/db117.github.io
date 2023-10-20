import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.54cab62e.js";const q=JSON.parse('{"title":"JdbcTemplate","description":"","frontmatter":{"title":"JdbcTemplate"},"headers":[],"relativePath":"java/spring/JdbcTemplate.md","filePath":"java/spring/JdbcTemplate.md","lastUpdated":1697773070000}'),l={name:"java/spring/JdbcTemplate.md"},t=n(`<h3 id="常规使用" tabindex="-1">常规使用 <a class="header-anchor" href="#常规使用" aria-label="Permalink to &quot;常规使用&quot;">​</a></h3><h5 id="查询出对象" tabindex="-1">查询出对象 <a class="header-anchor" href="#查询出对象" aria-label="Permalink to &quot;查询出对象&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;foo&gt; list = jdbcTemplate.query(sql,new BeanPropertyRowMapper &lt;Foo&gt;(Foo.class));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;foo&gt; result = mock.getJdbcTemplate().query(sql,</span></span>
<span class="line"><span style="color:#e1e4e8;">				new DataClassRowMapper&lt;Foo&gt;(Foo.class));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">List&lt;foo&gt; list = jdbcTemplate.query(sql,new BeanPropertyRowMapper &lt;Foo&gt;(Foo.class));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">List&lt;foo&gt; result = mock.getJdbcTemplate().query(sql,</span></span>
<span class="line"><span style="color:#24292e;">				new DataClassRowMapper&lt;Foo&gt;(Foo.class));</span></span></code></pre></div><h5 id="参数-in" tabindex="-1">参数 in <a class="header-anchor" href="#参数-in" aria-label="Permalink to &quot;参数 in&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(new ParameterCollectionBean(3, 5));</span></span>
<span class="line"><span style="color:#e1e4e8;">long l = template.query(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Long.class).longValue();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">MapSqlParameterSource params = new MapSqlParameterSource();</span></span>
<span class="line"><span style="color:#e1e4e8;">params.addValue(&quot;ids&quot;, Arrays.asList(3, 4));</span></span>
<span class="line"><span style="color:#e1e4e8;">template.queryForObject(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Integer.class);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(new ParameterCollectionBean(3, 5));</span></span>
<span class="line"><span style="color:#24292e;">long l = template.query(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Long.class).longValue();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">MapSqlParameterSource params = new MapSqlParameterSource();</span></span>
<span class="line"><span style="color:#24292e;">params.addValue(&quot;ids&quot;, Arrays.asList(3, 4));</span></span>
<span class="line"><span style="color:#24292e;">template.queryForObject(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Integer.class);</span></span></code></pre></div><h5 id="简单对象保存" tabindex="-1">简单对象保存 <a class="header-anchor" href="#简单对象保存" aria-label="Permalink to &quot;简单对象保存&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 会自动获取表字段</span></span>
<span class="line"><span style="color:#e1e4e8;">SimpleJdbcInsert insert = new SimpleJdbcInsert(dataSource)</span></span>
<span class="line"><span style="color:#e1e4e8;">				.withTableName(&quot;me&quot;) // 表名称</span></span>
<span class="line"><span style="color:#e1e4e8;">				.usingGeneratedKeyColumns(&quot;id&quot;) // 自增</span></span>
<span class="line"><span style="color:#e1e4e8;">				.usingColumns(&quot;col1&quot;,&quot;col2&quot;);// 使用的字段,如设置则不会自动获取</span></span>
<span class="line"><span style="color:#e1e4e8;">// 自动匹配参数并执行</span></span>
<span class="line"><span style="color:#e1e4e8;">insert.execute(new BeanPropertySqlParameterSource(new Person()));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 会自动获取表字段</span></span>
<span class="line"><span style="color:#24292e;">SimpleJdbcInsert insert = new SimpleJdbcInsert(dataSource)</span></span>
<span class="line"><span style="color:#24292e;">				.withTableName(&quot;me&quot;) // 表名称</span></span>
<span class="line"><span style="color:#24292e;">				.usingGeneratedKeyColumns(&quot;id&quot;) // 自增</span></span>
<span class="line"><span style="color:#24292e;">				.usingColumns(&quot;col1&quot;,&quot;col2&quot;);// 使用的字段,如设置则不会自动获取</span></span>
<span class="line"><span style="color:#24292e;">// 自动匹配参数并执行</span></span>
<span class="line"><span style="color:#24292e;">insert.execute(new BeanPropertySqlParameterSource(new Person()));</span></span></code></pre></div>`,7),p=[t];function o(r,c,i,d,u,m){return e(),a("div",null,p)}const h=s(l,[["render",o]]);export{q as __pageData,h as default};
