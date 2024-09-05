import{_ as t,c as l,a3 as d,o}from"./chunks/framework.D7KqzdP6.js";const m=JSON.parse('{"title":"JUnit","description":"","frontmatter":{"title":"JUnit"},"headers":[],"relativePath":"util/unit-test/JUnit.md","filePath":"util/unit-test/JUnit.md"}'),a={name:"util/unit-test/JUnit.md"};function i(r,e,c,s,n,u){return o(),l("div",null,e[0]||(e[0]=[d('<blockquote><p><a href="https://junit.org/junit5/" target="_blank" rel="noreferrer">JUnit 5</a></p><p><a href="https://github.com/junit-team/junit5" target="_blank" rel="noreferrer">junit-team/junit5: ✅ The 5th major version of the programmer-friendly testing framework for Java and the JVM (github.com)</a></p></blockquote><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><h4 id="常用注解" tabindex="-1">常用注解 <a class="header-anchor" href="#常用注解" aria-label="Permalink to &quot;常用注解&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">Annotation</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>@Test</code></td><td style="text-align:left;">标记为测试方法</td></tr><tr><td style="text-align:left;"><code>@ParameterizedTest</code></td><td style="text-align:left;">标记为参数化测试</td></tr><tr><td style="text-align:left;"><code>@RepeatedTest</code></td><td style="text-align:left;">多次执行</td></tr><tr><td style="text-align:left;"><code>@TestFactory</code></td><td style="text-align:left;">动态创建 Test。方法需返回<code>DynamicNode</code></td></tr><tr><td style="text-align:left;"><code>@TestClassOrder</code></td><td style="text-align:left;">有多个嵌套测试类，标记需要排序。</td></tr><tr><td style="text-align:left;"><code>@TestMethodOrder</code></td><td style="text-align:left;">有多个嵌套测试方法，标记需要排序</td></tr><tr><td style="text-align:left;"><code>@DisplayName</code></td><td style="text-align:left;">定义该测试名称</td></tr><tr><td style="text-align:left;"><code>@DisplayNameGeneration</code></td><td style="text-align:left;">指定测试名称生成类</td></tr><tr><td style="text-align:left;"><code>@BeforeEach</code></td><td style="text-align:left;">在标记<code>@Test</code>, <code>@RepeatedTest</code>, <code>@ParameterizedTest</code>, <code>@TestFactory</code> 的方法执行前执行</td></tr><tr><td style="text-align:left;"><code>@AfterEach</code></td><td style="text-align:left;">在标记<code>@Test</code>, <code>@RepeatedTest</code>, <code>@ParameterizedTest</code>, <code>@TestFactory</code> 的方法执行后执行</td></tr><tr><td style="text-align:left;"><code>@BeforeAll</code></td><td style="text-align:left;">在所有测试方法执行前执行</td></tr><tr><td style="text-align:left;"><code>@AfterAll</code></td><td style="text-align:left;">在所有测试方法执行后执行</td></tr><tr><td style="text-align:left;"><code>@Nested</code></td><td style="text-align:left;">标记为嵌套测试</td></tr><tr><td style="text-align:left;"><code>@Tag</code></td><td style="text-align:left;">打个标记，再使用插件是可以过滤。</td></tr><tr><td style="text-align:left;"><code>@Disabled</code></td><td style="text-align:left;">忽略该测试</td></tr><tr><td style="text-align:left;"><code>@Timeout</code></td><td style="text-align:left;">指定超时时间</td></tr><tr><td style="text-align:left;"><code>@TempDir</code></td><td style="text-align:left;">临时目录</td></tr><tr><td style="text-align:left;"><code>@Order</code></td><td style="text-align:left;">执行顺序</td></tr></tbody></table><h4 id="断言" tabindex="-1">断言 <a class="header-anchor" href="#断言" aria-label="Permalink to &quot;断言&quot;">​</a></h4><ul><li>Equals <ul><li>断言是否相等 <code>assertEquals</code>，<code>assertArrayEquals</code>，<code>assertNotEquals</code></li></ul></li><li>Boolean <ul><li>断言 Boolean 类型 <code>assertFalse</code>，<code>assertTrue</code></li></ul></li><li>Throw <ul><li>判断是否有异常 <code>assertDoesNotThrow</code>，<code>assertThrows</code></li><li><code>assertThrowsExactly</code>判断完全异常是否完全相等</li></ul></li><li>Timeout <ul><li>是否超时 <code>assertTimeout</code>（超时不会中断）</li><li><code>assertTimeoutPreemptively</code> 超时时会中断</li></ul></li></ul><h4 id="conditional" tabindex="-1">Conditional <a class="header-anchor" href="#conditional" aria-label="Permalink to &quot;Conditional&quot;">​</a></h4><ul><li><p><code>@EnabledOnOs</code>，根据操作系统判断</p></li><li><p><code>@EnabledForJreRange</code>，<code>@EnabledOnJre</code> ,<code>@DisabledForJreRange</code>,<code>@DisabledOnJre</code>根据Java运行环境</p></li><li><p><code>@DisabledInNativeImage</code>,<code>@DisabledInNativeImage</code>判断是否在<code>GraalVM</code>中</p></li><li><p><code>@EnabledIfSystemProperty</code>，<code>@DisabledIfSystemProperty</code> 根据系统参数判断</p></li><li><p><code>@EnabledIfEnvironmentVariable</code>，<code>@DisabledIfEnvironmentVariable</code> 根据环境变量判断</p></li></ul><h4 id="参数测试" tabindex="-1">参数测试 <a class="header-anchor" href="#参数测试" aria-label="Permalink to &quot;参数测试&quot;">​</a></h4><blockquote><p>使用不同的参数进行测试，使用<code>@ParameterizedTest</code>标记。</p></blockquote><ul><li><code>@NullSource</code> null对象，不能对基础数据类型使用</li><li><code>@EmptySource</code> 一个空值</li><li><code>@NullAndEmptySource</code> 包含<code>@NullSource</code>，<code>@EmptySource</code></li><li><code>@ValueSource</code> 一组参数</li><li><code>@EnumSource</code> 一组枚举</li><li><code>@MethodSource</code> 自定义方法返回参数，但是需要限定返回对象为 <ul><li>java.util.stream.Stream</li><li>java.util.stream.DoubleStream</li><li>java.util.stream.LongStream</li><li>java.util.stream.IntStream</li><li>java.util.Collection</li><li>java.util.Iterator</li><li>java.lang.Iterable</li><li>org.junit.jupiter.params.provider.Arguments</li><li>String[]</li></ul></li><li><code>@CsvSource</code> 使用 csv 格式的测试数据</li><li><code>@CsvFileSource</code> 使用 csv 格式的测试数据</li></ul><h4 id="参数配置" tabindex="-1">参数配置 <a class="header-anchor" href="#参数配置" aria-label="Permalink to &quot;参数配置&quot;">​</a></h4><p>配置方式</p><ul><li>通过构建工具的插件配置参数</li><li>通过 <code>JVM system properties</code></li><li><code>junit-platform.properties</code>文件</li></ul>',14)]))}const y=t(a,[["render",i]]);export{m as __pageData,y as default};
