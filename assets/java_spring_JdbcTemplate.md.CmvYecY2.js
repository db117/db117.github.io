import{_ as s,c as n,o as e,ah as t}from"./chunks/framework.HOMaeY8S.js";const m=JSON.parse('{"title":"JdbcTemplate","description":"","frontmatter":{"title":"JdbcTemplate"},"headers":[],"relativePath":"java/spring/JdbcTemplate.md","filePath":"java/spring/JdbcTemplate.md"}'),p={name:"java/spring/JdbcTemplate.md"};function l(o,a,i,r,c,d){return e(),n("div",null,a[0]||(a[0]=[t(`<h3 id="常规使用" tabindex="-1">常规使用 <a class="header-anchor" href="#常规使用" aria-label="Permalink to &quot;常规使用&quot;">​</a></h3><h5 id="查询出对象" tabindex="-1">查询出对象 <a class="header-anchor" href="#查询出对象" aria-label="Permalink to &quot;查询出对象&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>List&lt;foo&gt; list = jdbcTemplate.query(sql,new BeanPropertyRowMapper &lt;Foo&gt;(Foo.class));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>List&lt;foo&gt; result = mock.getJdbcTemplate().query(sql,</span></span>
<span class="line"><span>				new DataClassRowMapper&lt;Foo&gt;(Foo.class));</span></span></code></pre></div><h5 id="参数-in" tabindex="-1">参数 in <a class="header-anchor" href="#参数-in" aria-label="Permalink to &quot;参数 in&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(new ParameterCollectionBean(3, 5));</span></span>
<span class="line"><span>long l = template.query(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Long.class).longValue();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>MapSqlParameterSource params = new MapSqlParameterSource();</span></span>
<span class="line"><span>params.addValue(&quot;ids&quot;, Arrays.asList(3, 4));</span></span>
<span class="line"><span>template.queryForObject(&quot;SELECT AGE FROM CUSTMR WHERE ID IN (:ids)&quot;, params, Integer.class);</span></span></code></pre></div><h5 id="简单对象保存" tabindex="-1">简单对象保存 <a class="header-anchor" href="#简单对象保存" aria-label="Permalink to &quot;简单对象保存&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 会自动获取表字段</span></span>
<span class="line"><span>SimpleJdbcInsert insert = new SimpleJdbcInsert(dataSource)</span></span>
<span class="line"><span>				.withTableName(&quot;me&quot;) // 表名称</span></span>
<span class="line"><span>				.usingGeneratedKeyColumns(&quot;id&quot;) // 自增</span></span>
<span class="line"><span>				.usingColumns(&quot;col1&quot;,&quot;col2&quot;);// 使用的字段,如设置则不会自动获取</span></span>
<span class="line"><span>// 自动匹配参数并执行</span></span>
<span class="line"><span>insert.execute(new BeanPropertySqlParameterSource(new Person()));</span></span></code></pre></div>`,7)]))}const h=s(p,[["render",l]]);export{m as __pageData,h as default};
