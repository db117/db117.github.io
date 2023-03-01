import{_ as a,c as s,o as e,a as n}from"./app.bab73cad.js";const m=JSON.parse('{"title":"JdbcTemplate","description":"","frontmatter":{"title":"JdbcTemplate"},"headers":[{"level":3,"title":"常规使用","slug":"常规使用","link":"#常规使用","children":[]}],"relativePath":"java/spring/JdbcTemplate.md","lastUpdated":1677655177000}'),l={name:"java/spring/JdbcTemplate.md"},t=n(`<h3 id="常规使用" tabindex="-1">常规使用 <a class="header-anchor" href="#常规使用" aria-hidden="true">#</a></h3><h5 id="查询出对象" tabindex="-1">查询出对象 <a class="header-anchor" href="#查询出对象" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">List&lt;foo&gt; list = jdbcTemplate.query(sql,new BeanPropertyRowMapper &lt;Foo&gt;(Foo.class));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">List&lt;foo&gt; result = mock.getJdbcTemplate().query(sql,</span></span>
<span class="line"><span style="color:#A6ACCD;">				new DataClassRowMapper&lt;Foo&gt;(Foo.class));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="参数-in" tabindex="-1">参数 in <a class="header-anchor" href="#参数-in" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(new ParameterCollectionBean(3, 5));</span></span>
<span class="line"><span style="color:#A6ACCD;">long l = template.query(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Long.class).longValue();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MapSqlParameterSource params = new MapSqlParameterSource();</span></span>
<span class="line"><span style="color:#A6ACCD;">params.addValue(&quot;ids&quot;, Arrays.asList(3, 4));</span></span>
<span class="line"><span style="color:#A6ACCD;">template.queryForObject(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Integer.class);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="简单对象保存" tabindex="-1">简单对象保存 <a class="header-anchor" href="#简单对象保存" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 会自动获取表字段</span></span>
<span class="line"><span style="color:#A6ACCD;">SimpleJdbcInsert insert = new SimpleJdbcInsert(dataSource)</span></span>
<span class="line"><span style="color:#A6ACCD;">				.withTableName(&quot;me&quot;) // 表名称</span></span>
<span class="line"><span style="color:#A6ACCD;">				.usingGeneratedKeyColumns(&quot;id&quot;) // 自增</span></span>
<span class="line"><span style="color:#A6ACCD;">				.usingColumns(&quot;col1&quot;,&quot;col2&quot;);// 使用的字段,如设置则不会自动获取</span></span>
<span class="line"><span style="color:#A6ACCD;">// 自动匹配参数并执行</span></span>
<span class="line"><span style="color:#A6ACCD;">insert.execute(new BeanPropertySqlParameterSource(new Person()));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),p=[t];function o(r,c,i,d,C,A){return e(),s("div",null,p)}const h=a(l,[["render",o]]);export{m as __pageData,h as default};
