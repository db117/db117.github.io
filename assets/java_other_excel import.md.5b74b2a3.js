import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const u=JSON.parse('{"title":"大量Excel导入","description":"","frontmatter":{"title":"大量Excel导入"},"headers":[],"relativePath":"java/other/excel import.md","filePath":"java/other/excel import.md","lastUpdated":1697773070000}'),l={name:"java/other/excel import.md"},p=e(`<h2 id="实现需求" tabindex="-1">实现需求 <a class="header-anchor" href="#实现需求" aria-label="Permalink to &quot;实现需求&quot;">​</a></h2><p>大批量Excel(07版)数据导入,内存暂用低(大概100m,不算解析出来的数据处理,以及数据占用内存),可实现对Excel 数据的流式处理</p><p>数据量200万(已测试,理论上是Excel的数量上限)大概在100s左右</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>实现poi的org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler接口</p><p>官方实例<a href="http://svn.apache.org/repos/asf/poi/trunk/src/examples/src/org/apache/poi/xssf/eventusermodel/XLSX2CSV.java" target="_blank" rel="noreferrer">http://svn.apache.org/repos/asf/poi/trunk/src/examples/src/org/apache/poi/xssf/eventusermodel/XLSX2CSV.java</a></p><p>官方是把Excel数据解析后的数据转为csv</p><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;poi.version&gt;4.1.0&lt;/poi.version&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;poi.version&gt;4.1.0&lt;/poi.version&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;poi&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;poi-ooxml-schemas&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;poi&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;poi-ooxml-schemas&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><h2 id="工具类" tabindex="-1">工具类 <a class="header-anchor" href="#工具类" aria-label="Permalink to &quot;工具类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">package com.db117.example.poi;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.ooxml.util.SAXHelper;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.openxml4j.exceptions.InvalidFormatException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.openxml4j.exceptions.OpenXML4JException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.openxml4j.opc.OPCPackage;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.openxml4j.opc.PackageAccess;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.ss.usermodel.DataFormatter;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.ss.util.CellAddress;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.ss.util.CellReference;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.eventusermodel.ReadOnlySharedStringsTable;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.eventusermodel.XSSFReader;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.model.SharedStrings;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.model.Styles;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.model.StylesTable;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.usermodel.XSSFComment;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.ContentHandler;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.InputSource;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.SAXException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.XMLReader;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import javax.xml.parsers.ParserConfigurationException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.File;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.InputStream;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.text.SimpleDateFormat;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.HashMap;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.List;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Map;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.function.Consumer;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * Excel大数据量导入</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @author 大兵</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @date 2019/3/8 11:08</span></span>
<span class="line"><span style="color:#e1e4e8;"> **/</span></span>
<span class="line"><span style="color:#e1e4e8;">@Slf4j</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ExcelImportUtil {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private OPCPackage xlsxPackage;</span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 头数组(从左到右)</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String[] headers;</span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 处理行数据(k-&gt;头)</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Consumer&lt;Map&lt;String, String&gt;&gt; consumer;</span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 是否读取第一行</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private boolean readFirst;</span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 是否读取空行</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private boolean readNullRaw;</span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 是否只读第一个sheet页</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private boolean readFirstSheetOnly;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param file     读取的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param headers  头数组</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param consumer 消费者</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public ExcelImportUtil(File file</span></span>
<span class="line"><span style="color:#e1e4e8;">            , String[] headers</span></span>
<span class="line"><span style="color:#e1e4e8;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this(file, headers, consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">                , false, false, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param file               读取的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param headers            头数组</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param consumer           消费者</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param readFirst          是否读取第一行</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param readNullRaw        readNullRaw</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param readFirstSheetOnly 是否只读第一个sheet页</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public ExcelImportUtil(File file</span></span>
<span class="line"><span style="color:#e1e4e8;">            , String[] headers</span></span>
<span class="line"><span style="color:#e1e4e8;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">            , boolean readFirst</span></span>
<span class="line"><span style="color:#e1e4e8;">            , boolean readNullRaw</span></span>
<span class="line"><span style="color:#e1e4e8;">            , boolean readFirstSheetOnly) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.xlsxPackage = OPCPackage.open(file, PackageAccess.READ);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (InvalidFormatException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.headers = headers;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.consumer = consumer;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.readFirst = readFirst;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.readNullRaw = readNullRaw;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.readFirstSheetOnly = readFirstSheetOnly;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 导入Excel</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param file   导入的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param header Excel头转对象</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 对象集合</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static List&lt;Map&lt;String, String&gt;&gt; doImport(File file</span></span>
<span class="line"><span style="color:#e1e4e8;">            , String[] header) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;Map&lt;String, String&gt;&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelImportUtil excelImportUtil = new ExcelImportUtil(</span></span>
<span class="line"><span style="color:#e1e4e8;">                file</span></span>
<span class="line"><span style="color:#e1e4e8;">                , header</span></span>
<span class="line"><span style="color:#e1e4e8;">                , list::add);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 执行解析</span></span>
<span class="line"><span style="color:#e1e4e8;">        excelImportUtil.process();</span></span>
<span class="line"><span style="color:#e1e4e8;">        return list;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void doImport(File file</span></span>
<span class="line"><span style="color:#e1e4e8;">            , String[] headers</span></span>
<span class="line"><span style="color:#e1e4e8;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelImportUtil excelImportUtil = new ExcelImportUtil(</span></span>
<span class="line"><span style="color:#e1e4e8;">                file</span></span>
<span class="line"><span style="color:#e1e4e8;">                , headers</span></span>
<span class="line"><span style="color:#e1e4e8;">                , consumer);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 执行解析</span></span>
<span class="line"><span style="color:#e1e4e8;">        excelImportUtil.process();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 解析Excel,并关闭流</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void process() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 只读字符表</span></span>
<span class="line"><span style="color:#e1e4e8;">            ReadOnlySharedStringsTable strings = new ReadOnlySharedStringsTable(this.xlsxPackage);</span></span>
<span class="line"><span style="color:#e1e4e8;">            // Xssf读取</span></span>
<span class="line"><span style="color:#e1e4e8;">            XSSFReader xssfReader = new XSSFReader(this.xlsxPackage);</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 样式表</span></span>
<span class="line"><span style="color:#e1e4e8;">            StylesTable styles = xssfReader.getStylesTable();</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 读取Excel</span></span>
<span class="line"><span style="color:#e1e4e8;">            XSSFReader.SheetIterator iter = (XSSFReader.SheetIterator) xssfReader.getSheetsData();</span></span>
<span class="line"><span style="color:#e1e4e8;">            while (iter.hasNext()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                try (InputStream stream = iter.next()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    processSheet(styles</span></span>
<span class="line"><span style="color:#e1e4e8;">                            , strings</span></span>
<span class="line"><span style="color:#e1e4e8;">                            , new SimpleSheetContentsHandler(headers</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    , consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    , readFirst</span></span>
<span class="line"><span style="color:#e1e4e8;">                                    , readNullRaw)</span></span>
<span class="line"><span style="color:#e1e4e8;">                            , stream);</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 当自读第一个sheet是结束</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (readFirstSheetOnly) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (IOException | SAXException | OpenXML4JException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 关流</span></span>
<span class="line"><span style="color:#e1e4e8;">            try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                this.xlsxPackage.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">            } catch (IOException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 解析一个表的内容使用指定的样式和共享字符串表</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param styles           可以通过表中的单元格引用的样式表</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param strings          可以通过表中的单元格引用的字符串表</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param sheetInputStream 这条流读取了文件数据</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @throws IOException  来自解析器的IO异常,可能来自字节流或字符流</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @throws SAXException 如果解析XML数据失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private void processSheet(</span></span>
<span class="line"><span style="color:#e1e4e8;">            Styles styles,</span></span>
<span class="line"><span style="color:#e1e4e8;">            SharedStrings strings,</span></span>
<span class="line"><span style="color:#e1e4e8;">            SheetContentsHandler sheetHandler,</span></span>
<span class="line"><span style="color:#e1e4e8;">            InputStream sheetInputStream) throws IOException, SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 数据格式化对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        DataFormatter formatter = new DataFormatter();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // short date 数据读取</span></span>
<span class="line"><span style="color:#e1e4e8;">        formatter.addFormat(&quot;m/d/yy&quot;, new SimpleDateFormat(&quot;yyyy/MM/dd&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">        InputSource sheetSource = new InputSource(sheetInputStream);</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // xml读取类</span></span>
<span class="line"><span style="color:#e1e4e8;">            XMLReader sheetParser = SAXHelper.newXMLReader();</span></span>
<span class="line"><span style="color:#e1e4e8;">            // xml处理方法</span></span>
<span class="line"><span style="color:#e1e4e8;">            ContentHandler handler = new XSSFSheetXMLHandler(</span></span>
<span class="line"><span style="color:#e1e4e8;">                    styles</span></span>
<span class="line"><span style="color:#e1e4e8;">                    , null</span></span>
<span class="line"><span style="color:#e1e4e8;">                    , strings</span></span>
<span class="line"><span style="color:#e1e4e8;">                    , sheetHandler</span></span>
<span class="line"><span style="color:#e1e4e8;">                    , formatter</span></span>
<span class="line"><span style="color:#e1e4e8;">                    , false);</span></span>
<span class="line"><span style="color:#e1e4e8;">            sheetParser.setContentHandler(handler);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 解析Excel</span></span>
<span class="line"><span style="color:#e1e4e8;">            sheetParser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (ParserConfigurationException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new RuntimeException(&quot;SAX parser appears to be broken - &quot; + e.getMessage());</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 数据处理</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private class SimpleSheetContentsHandler implements SheetContentsHandler {</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 当前行号</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private int currentRow = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 当前列号</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private int currentCol = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 当前行数据</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private Map&lt;String, String&gt; rowData;</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 数据头</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private String[] headers;</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 数据处理方法</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private Consumer&lt;Map&lt;String, String&gt;&gt; consumer;</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 是否读取第一行</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private boolean readFirst;</span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 是否读取空行</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        private boolean readNullRaw;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * sheet页处理</span></span>
<span class="line"><span style="color:#e1e4e8;">         *</span></span>
<span class="line"><span style="color:#e1e4e8;">         * @param headers  表头数组</span></span>
<span class="line"><span style="color:#e1e4e8;">         * @param consumer 行消费</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        SimpleSheetContentsHandler(String[] headers</span></span>
<span class="line"><span style="color:#e1e4e8;">                , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this(headers, consumer, false, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * sheet页处理</span></span>
<span class="line"><span style="color:#e1e4e8;">         *</span></span>
<span class="line"><span style="color:#e1e4e8;">         * @param headers     表头数组</span></span>
<span class="line"><span style="color:#e1e4e8;">         * @param consumer    行消费</span></span>
<span class="line"><span style="color:#e1e4e8;">         * @param readFirst   是否读取第一行</span></span>
<span class="line"><span style="color:#e1e4e8;">         * @param readNullRaw 是否读取空行</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        public SimpleSheetContentsHandler(String[] headers</span></span>
<span class="line"><span style="color:#e1e4e8;">                , Consumer&lt;Map&lt;String, String&gt;&gt; consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">                , boolean readFirst</span></span>
<span class="line"><span style="color:#e1e4e8;">                , boolean readNullRaw) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.headers = headers;</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.consumer = consumer;</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.readFirst = readFirst;</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.readNullRaw = readNullRaw;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void startRow(int rowNum) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            currentRow = rowNum;</span></span>
<span class="line"><span style="color:#e1e4e8;">            currentCol = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 重置数据</span></span>
<span class="line"><span style="color:#e1e4e8;">            rowData = new HashMap&lt;&gt;(headers.length);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void endRow(int rowNum) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 不处理第一行</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (!readFirst &amp;&amp; rowNum == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 空行处理</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (!readNullRaw &amp;&amp; rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 处理数据</span></span>
<span class="line"><span style="color:#e1e4e8;">            consumer.accept(rowData);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void cell(String cellReference, String formattedValue, XSSFComment comment) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 如果为空则生成一个当前位置的单元格对象</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (cellReference == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                cellReference = new CellAddress(currentRow, currentCol).formatAsString();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 读取的列号</span></span>
<span class="line"><span style="color:#e1e4e8;">            int thisCol = (new CellReference(cellReference)).getCol();</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 大于头的列不处理</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (thisCol &gt;= this.headers.length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 列为空的数量</span></span>
<span class="line"><span style="color:#e1e4e8;">            int missedCols = thisCol - currentCol - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (int i = 0; i &lt; missedCols; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                rowData.put(headers[currentCol + i + 1], null);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 当前行等于读取的列</span></span>
<span class="line"><span style="color:#e1e4e8;">            currentCol = thisCol;</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 大于头的列不处理</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (currentCol &gt; headers.length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 设置值</span></span>
<span class="line"><span style="color:#e1e4e8;">            rowData.put(headers[currentCol], formattedValue);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.db117.example.poi;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.ooxml.util.SAXHelper;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.openxml4j.exceptions.InvalidFormatException;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.openxml4j.exceptions.OpenXML4JException;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.openxml4j.opc.OPCPackage;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.openxml4j.opc.PackageAccess;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.ss.usermodel.DataFormatter;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.ss.util.CellAddress;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.ss.util.CellReference;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.eventusermodel.ReadOnlySharedStringsTable;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.eventusermodel.XSSFReader;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.model.SharedStrings;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.model.Styles;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.model.StylesTable;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.usermodel.XSSFComment;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.ContentHandler;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.InputSource;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.SAXException;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.XMLReader;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import javax.xml.parsers.ParserConfigurationException;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.File;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.InputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.text.SimpleDateFormat;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.HashMap;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.List;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Map;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.function.Consumer;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * Excel大数据量导入</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @author 大兵</span></span>
<span class="line"><span style="color:#24292e;"> * @date 2019/3/8 11:08</span></span>
<span class="line"><span style="color:#24292e;"> **/</span></span>
<span class="line"><span style="color:#24292e;">@Slf4j</span></span>
<span class="line"><span style="color:#24292e;">public class ExcelImportUtil {</span></span>
<span class="line"><span style="color:#24292e;">    private OPCPackage xlsxPackage;</span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 头数组(从左到右)</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private String[] headers;</span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 处理行数据(k-&gt;头)</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private Consumer&lt;Map&lt;String, String&gt;&gt; consumer;</span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 是否读取第一行</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private boolean readFirst;</span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 是否读取空行</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private boolean readNullRaw;</span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 是否只读第一个sheet页</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private boolean readFirstSheetOnly;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * @param file     读取的文件</span></span>
<span class="line"><span style="color:#24292e;">     * @param headers  头数组</span></span>
<span class="line"><span style="color:#24292e;">     * @param consumer 消费者</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public ExcelImportUtil(File file</span></span>
<span class="line"><span style="color:#24292e;">            , String[] headers</span></span>
<span class="line"><span style="color:#24292e;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#24292e;">        this(file, headers, consumer</span></span>
<span class="line"><span style="color:#24292e;">                , false, false, false);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * @param file               读取的文件</span></span>
<span class="line"><span style="color:#24292e;">     * @param headers            头数组</span></span>
<span class="line"><span style="color:#24292e;">     * @param consumer           消费者</span></span>
<span class="line"><span style="color:#24292e;">     * @param readFirst          是否读取第一行</span></span>
<span class="line"><span style="color:#24292e;">     * @param readNullRaw        readNullRaw</span></span>
<span class="line"><span style="color:#24292e;">     * @param readFirstSheetOnly 是否只读第一个sheet页</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public ExcelImportUtil(File file</span></span>
<span class="line"><span style="color:#24292e;">            , String[] headers</span></span>
<span class="line"><span style="color:#24292e;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer</span></span>
<span class="line"><span style="color:#24292e;">            , boolean readFirst</span></span>
<span class="line"><span style="color:#24292e;">            , boolean readNullRaw</span></span>
<span class="line"><span style="color:#24292e;">            , boolean readFirstSheetOnly) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            this.xlsxPackage = OPCPackage.open(file, PackageAccess.READ);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (InvalidFormatException e) {</span></span>
<span class="line"><span style="color:#24292e;">            log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        this.headers = headers;</span></span>
<span class="line"><span style="color:#24292e;">        this.consumer = consumer;</span></span>
<span class="line"><span style="color:#24292e;">        this.readFirst = readFirst;</span></span>
<span class="line"><span style="color:#24292e;">        this.readNullRaw = readNullRaw;</span></span>
<span class="line"><span style="color:#24292e;">        this.readFirstSheetOnly = readFirstSheetOnly;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 导入Excel</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param file   导入的文件</span></span>
<span class="line"><span style="color:#24292e;">     * @param header Excel头转对象</span></span>
<span class="line"><span style="color:#24292e;">     * @return 对象集合</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public static List&lt;Map&lt;String, String&gt;&gt; doImport(File file</span></span>
<span class="line"><span style="color:#24292e;">            , String[] header) {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Map&lt;String, String&gt;&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        ExcelImportUtil excelImportUtil = new ExcelImportUtil(</span></span>
<span class="line"><span style="color:#24292e;">                file</span></span>
<span class="line"><span style="color:#24292e;">                , header</span></span>
<span class="line"><span style="color:#24292e;">                , list::add);</span></span>
<span class="line"><span style="color:#24292e;">        // 执行解析</span></span>
<span class="line"><span style="color:#24292e;">        excelImportUtil.process();</span></span>
<span class="line"><span style="color:#24292e;">        return list;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void doImport(File file</span></span>
<span class="line"><span style="color:#24292e;">            , String[] headers</span></span>
<span class="line"><span style="color:#24292e;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#24292e;">        ExcelImportUtil excelImportUtil = new ExcelImportUtil(</span></span>
<span class="line"><span style="color:#24292e;">                file</span></span>
<span class="line"><span style="color:#24292e;">                , headers</span></span>
<span class="line"><span style="color:#24292e;">                , consumer);</span></span>
<span class="line"><span style="color:#24292e;">        // 执行解析</span></span>
<span class="line"><span style="color:#24292e;">        excelImportUtil.process();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 解析Excel,并关闭流</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public void process() {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            // 只读字符表</span></span>
<span class="line"><span style="color:#24292e;">            ReadOnlySharedStringsTable strings = new ReadOnlySharedStringsTable(this.xlsxPackage);</span></span>
<span class="line"><span style="color:#24292e;">            // Xssf读取</span></span>
<span class="line"><span style="color:#24292e;">            XSSFReader xssfReader = new XSSFReader(this.xlsxPackage);</span></span>
<span class="line"><span style="color:#24292e;">            // 样式表</span></span>
<span class="line"><span style="color:#24292e;">            StylesTable styles = xssfReader.getStylesTable();</span></span>
<span class="line"><span style="color:#24292e;">            // 读取Excel</span></span>
<span class="line"><span style="color:#24292e;">            XSSFReader.SheetIterator iter = (XSSFReader.SheetIterator) xssfReader.getSheetsData();</span></span>
<span class="line"><span style="color:#24292e;">            while (iter.hasNext()) {</span></span>
<span class="line"><span style="color:#24292e;">                try (InputStream stream = iter.next()) {</span></span>
<span class="line"><span style="color:#24292e;">                    processSheet(styles</span></span>
<span class="line"><span style="color:#24292e;">                            , strings</span></span>
<span class="line"><span style="color:#24292e;">                            , new SimpleSheetContentsHandler(headers</span></span>
<span class="line"><span style="color:#24292e;">                                    , consumer</span></span>
<span class="line"><span style="color:#24292e;">                                    , readFirst</span></span>
<span class="line"><span style="color:#24292e;">                                    , readNullRaw)</span></span>
<span class="line"><span style="color:#24292e;">                            , stream);</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                // 当自读第一个sheet是结束</span></span>
<span class="line"><span style="color:#24292e;">                if (readFirstSheetOnly) {</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        } catch (IOException | SAXException | OpenXML4JException e) {</span></span>
<span class="line"><span style="color:#24292e;">            log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#24292e;">        } finally {</span></span>
<span class="line"><span style="color:#24292e;">            // 关流</span></span>
<span class="line"><span style="color:#24292e;">            try {</span></span>
<span class="line"><span style="color:#24292e;">                this.xlsxPackage.close();</span></span>
<span class="line"><span style="color:#24292e;">            } catch (IOException e) {</span></span>
<span class="line"><span style="color:#24292e;">                log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 解析一个表的内容使用指定的样式和共享字符串表</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param styles           可以通过表中的单元格引用的样式表</span></span>
<span class="line"><span style="color:#24292e;">     * @param strings          可以通过表中的单元格引用的字符串表</span></span>
<span class="line"><span style="color:#24292e;">     * @param sheetInputStream 这条流读取了文件数据</span></span>
<span class="line"><span style="color:#24292e;">     * @throws IOException  来自解析器的IO异常,可能来自字节流或字符流</span></span>
<span class="line"><span style="color:#24292e;">     * @throws SAXException 如果解析XML数据失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private void processSheet(</span></span>
<span class="line"><span style="color:#24292e;">            Styles styles,</span></span>
<span class="line"><span style="color:#24292e;">            SharedStrings strings,</span></span>
<span class="line"><span style="color:#24292e;">            SheetContentsHandler sheetHandler,</span></span>
<span class="line"><span style="color:#24292e;">            InputStream sheetInputStream) throws IOException, SAXException {</span></span>
<span class="line"><span style="color:#24292e;">        // 数据格式化对象</span></span>
<span class="line"><span style="color:#24292e;">        DataFormatter formatter = new DataFormatter();</span></span>
<span class="line"><span style="color:#24292e;">        // short date 数据读取</span></span>
<span class="line"><span style="color:#24292e;">        formatter.addFormat(&quot;m/d/yy&quot;, new SimpleDateFormat(&quot;yyyy/MM/dd&quot;));</span></span>
<span class="line"><span style="color:#24292e;">        InputSource sheetSource = new InputSource(sheetInputStream);</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            // xml读取类</span></span>
<span class="line"><span style="color:#24292e;">            XMLReader sheetParser = SAXHelper.newXMLReader();</span></span>
<span class="line"><span style="color:#24292e;">            // xml处理方法</span></span>
<span class="line"><span style="color:#24292e;">            ContentHandler handler = new XSSFSheetXMLHandler(</span></span>
<span class="line"><span style="color:#24292e;">                    styles</span></span>
<span class="line"><span style="color:#24292e;">                    , null</span></span>
<span class="line"><span style="color:#24292e;">                    , strings</span></span>
<span class="line"><span style="color:#24292e;">                    , sheetHandler</span></span>
<span class="line"><span style="color:#24292e;">                    , formatter</span></span>
<span class="line"><span style="color:#24292e;">                    , false);</span></span>
<span class="line"><span style="color:#24292e;">            sheetParser.setContentHandler(handler);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 解析Excel</span></span>
<span class="line"><span style="color:#24292e;">            sheetParser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (ParserConfigurationException e) {</span></span>
<span class="line"><span style="color:#24292e;">            throw new RuntimeException(&quot;SAX parser appears to be broken - &quot; + e.getMessage());</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 数据处理</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private class SimpleSheetContentsHandler implements SheetContentsHandler {</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 当前行号</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private int currentRow = -1;</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 当前列号</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private int currentCol = -1;</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 当前行数据</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private Map&lt;String, String&gt; rowData;</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 数据头</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private String[] headers;</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 数据处理方法</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private Consumer&lt;Map&lt;String, String&gt;&gt; consumer;</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 是否读取第一行</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private boolean readFirst;</span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 是否读取空行</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        private boolean readNullRaw;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * sheet页处理</span></span>
<span class="line"><span style="color:#24292e;">         *</span></span>
<span class="line"><span style="color:#24292e;">         * @param headers  表头数组</span></span>
<span class="line"><span style="color:#24292e;">         * @param consumer 行消费</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        SimpleSheetContentsHandler(String[] headers</span></span>
<span class="line"><span style="color:#24292e;">                , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#24292e;">            this(headers, consumer, false, false);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * sheet页处理</span></span>
<span class="line"><span style="color:#24292e;">         *</span></span>
<span class="line"><span style="color:#24292e;">         * @param headers     表头数组</span></span>
<span class="line"><span style="color:#24292e;">         * @param consumer    行消费</span></span>
<span class="line"><span style="color:#24292e;">         * @param readFirst   是否读取第一行</span></span>
<span class="line"><span style="color:#24292e;">         * @param readNullRaw 是否读取空行</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        public SimpleSheetContentsHandler(String[] headers</span></span>
<span class="line"><span style="color:#24292e;">                , Consumer&lt;Map&lt;String, String&gt;&gt; consumer</span></span>
<span class="line"><span style="color:#24292e;">                , boolean readFirst</span></span>
<span class="line"><span style="color:#24292e;">                , boolean readNullRaw) {</span></span>
<span class="line"><span style="color:#24292e;">            this.headers = headers;</span></span>
<span class="line"><span style="color:#24292e;">            this.consumer = consumer;</span></span>
<span class="line"><span style="color:#24292e;">            this.readFirst = readFirst;</span></span>
<span class="line"><span style="color:#24292e;">            this.readNullRaw = readNullRaw;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void startRow(int rowNum) {</span></span>
<span class="line"><span style="color:#24292e;">            currentRow = rowNum;</span></span>
<span class="line"><span style="color:#24292e;">            currentCol = -1;</span></span>
<span class="line"><span style="color:#24292e;">            // 重置数据</span></span>
<span class="line"><span style="color:#24292e;">            rowData = new HashMap&lt;&gt;(headers.length);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void endRow(int rowNum) {</span></span>
<span class="line"><span style="color:#24292e;">            // 不处理第一行</span></span>
<span class="line"><span style="color:#24292e;">            if (!readFirst &amp;&amp; rowNum == 0) {</span></span>
<span class="line"><span style="color:#24292e;">                return;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // 空行处理</span></span>
<span class="line"><span style="color:#24292e;">            if (!readNullRaw &amp;&amp; rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#24292e;">                return;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // 处理数据</span></span>
<span class="line"><span style="color:#24292e;">            consumer.accept(rowData);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void cell(String cellReference, String formattedValue, XSSFComment comment) {</span></span>
<span class="line"><span style="color:#24292e;">            // 如果为空则生成一个当前位置的单元格对象</span></span>
<span class="line"><span style="color:#24292e;">            if (cellReference == null) {</span></span>
<span class="line"><span style="color:#24292e;">                cellReference = new CellAddress(currentRow, currentCol).formatAsString();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 读取的列号</span></span>
<span class="line"><span style="color:#24292e;">            int thisCol = (new CellReference(cellReference)).getCol();</span></span>
<span class="line"><span style="color:#24292e;">            // 大于头的列不处理</span></span>
<span class="line"><span style="color:#24292e;">            if (thisCol &gt;= this.headers.length) {</span></span>
<span class="line"><span style="color:#24292e;">                return;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // 列为空的数量</span></span>
<span class="line"><span style="color:#24292e;">            int missedCols = thisCol - currentCol - 1;</span></span>
<span class="line"><span style="color:#24292e;">            for (int i = 0; i &lt; missedCols; i++) {</span></span>
<span class="line"><span style="color:#24292e;">                rowData.put(headers[currentCol + i + 1], null);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // 当前行等于读取的列</span></span>
<span class="line"><span style="color:#24292e;">            currentCol = thisCol;</span></span>
<span class="line"><span style="color:#24292e;">            // 大于头的列不处理</span></span>
<span class="line"><span style="color:#24292e;">            if (currentCol &gt; headers.length) {</span></span>
<span class="line"><span style="color:#24292e;">                return;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // 设置值</span></span>
<span class="line"><span style="color:#24292e;">            rowData.put(headers[currentCol], formattedValue);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h2><p>测试Excel文件</p><table><thead><tr><th>a1</th><th>b1</th><th>c1</th></tr></thead><tbody><tr><td>a2</td><td>b2</td><td>c2</td></tr><tr><td>a3</td><td>b3</td><td>c3</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">package com.db117.example.poi;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import org.junit.Assert;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.junit.Before;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.junit.Test;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.File;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.List;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Map;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class ExcelImportUtilTest {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private File file;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Before</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setUp() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        file = new File(this.getClass().getResource(&quot;/importTest.xlsx&quot;).getFile());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void doImport() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;Map&lt;String, String&gt;&gt; maps = ExcelImportUtil.doImport(file, new String[]{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;});</span></span>
<span class="line"><span style="color:#e1e4e8;">        Assert.assertEquals(maps.size(), 2);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Assert.assertEquals(maps.get(0).get(&quot;a&quot;), &quot;a2&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void doImport1() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelImportUtil.doImport(file, new String[]{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}, System.out::println);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.db117.example.poi;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import org.junit.Assert;</span></span>
<span class="line"><span style="color:#24292e;">import org.junit.Before;</span></span>
<span class="line"><span style="color:#24292e;">import org.junit.Test;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.io.File;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.List;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Map;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class ExcelImportUtilTest {</span></span>
<span class="line"><span style="color:#24292e;">    private File file;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Before</span></span>
<span class="line"><span style="color:#24292e;">    public void setUp() {</span></span>
<span class="line"><span style="color:#24292e;">        file = new File(this.getClass().getResource(&quot;/importTest.xlsx&quot;).getFile());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void doImport() {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Map&lt;String, String&gt;&gt; maps = ExcelImportUtil.doImport(file, new String[]{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;});</span></span>
<span class="line"><span style="color:#24292e;">        Assert.assertEquals(maps.size(), 2);</span></span>
<span class="line"><span style="color:#24292e;">        Assert.assertEquals(maps.get(0).get(&quot;a&quot;), &quot;a2&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void doImport1() {</span></span>
<span class="line"><span style="color:#24292e;">        ExcelImportUtil.doImport(file, new String[]{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}, System.out::println);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,16),o=[p];function t(c,r,i,y,d,m){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
