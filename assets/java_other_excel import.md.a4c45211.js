import{_ as s,c as n,o as a,U as l}from"./chunks/framework.f3e3bc1f.js";const d=JSON.parse('{"title":"大量Excel导入","description":"","frontmatter":{"title":"大量Excel导入"},"headers":[],"relativePath":"java/other/excel import.md","lastUpdated":1678872629000}'),p={name:"java/other/excel import.md"},e=l(`<h2 id="实现需求" tabindex="-1">实现需求 <a class="header-anchor" href="#实现需求" aria-label="Permalink to &quot;实现需求&quot;">​</a></h2><p>大批量Excel(07版)数据导入,内存暂用低(大概100m,不算解析出来的数据处理,以及数据占用内存),可实现对Excel 数据的流式处理</p><p>数据量200万(已测试,理论上是Excel的数量上限)大概在100s左右</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>实现poi的org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler接口</p><p>官方实例<a href="http://svn.apache.org/repos/asf/poi/trunk/src/examples/src/org/apache/poi/xssf/eventusermodel/XLSX2CSV.java" target="_blank" rel="noreferrer">http://svn.apache.org/repos/asf/poi/trunk/src/examples/src/org/apache/poi/xssf/eventusermodel/XLSX2CSV.java</a></p><p>官方是把Excel数据解析后的数据转为csv</p><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;poi.version&gt;4.1.0&lt;/poi.version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;poi&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;poi-ooxml-schemas&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="工具类" tabindex="-1">工具类 <a class="header-anchor" href="#工具类" aria-label="Permalink to &quot;工具类&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">package com.db117.example.poi;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import lombok.extern.slf4j.Slf4j;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.ooxml.util.SAXHelper;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.openxml4j.exceptions.InvalidFormatException;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.openxml4j.exceptions.OpenXML4JException;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.openxml4j.opc.OPCPackage;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.openxml4j.opc.PackageAccess;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.ss.usermodel.DataFormatter;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.ss.util.CellAddress;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.ss.util.CellReference;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.eventusermodel.ReadOnlySharedStringsTable;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.eventusermodel.XSSFReader;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.model.SharedStrings;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.model.Styles;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.model.StylesTable;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.apache.poi.xssf.usermodel.XSSFComment;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.xml.sax.ContentHandler;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.xml.sax.InputSource;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.xml.sax.SAXException;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.xml.sax.XMLReader;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import javax.xml.parsers.ParserConfigurationException;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.io.File;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.io.InputStream;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.text.SimpleDateFormat;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.HashMap;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.List;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.Map;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.function.Consumer;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Excel大数据量导入</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @author 大兵</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @date 2019/3/8 11:08</span></span>
<span class="line"><span style="color:#A6ACCD;"> **/</span></span>
<span class="line"><span style="color:#A6ACCD;">@Slf4j</span></span>
<span class="line"><span style="color:#A6ACCD;">public class ExcelImportUtil {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private OPCPackage xlsxPackage;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 头数组(从左到右)</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private String[] headers;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 处理行数据(k-&gt;头)</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private Consumer&lt;Map&lt;String, String&gt;&gt; consumer;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 是否读取第一行</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private boolean readFirst;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 是否读取空行</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private boolean readNullRaw;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 是否只读第一个sheet页</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private boolean readFirstSheetOnly;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param file     读取的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param headers  头数组</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param consumer 消费者</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public ExcelImportUtil(File file</span></span>
<span class="line"><span style="color:#A6ACCD;">            , String[] headers</span></span>
<span class="line"><span style="color:#A6ACCD;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this(file, headers, consumer</span></span>
<span class="line"><span style="color:#A6ACCD;">                , false, false, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param file               读取的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param headers            头数组</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param consumer           消费者</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param readFirst          是否读取第一行</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param readNullRaw        readNullRaw</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param readFirstSheetOnly 是否只读第一个sheet页</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public ExcelImportUtil(File file</span></span>
<span class="line"><span style="color:#A6ACCD;">            , String[] headers</span></span>
<span class="line"><span style="color:#A6ACCD;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer</span></span>
<span class="line"><span style="color:#A6ACCD;">            , boolean readFirst</span></span>
<span class="line"><span style="color:#A6ACCD;">            , boolean readNullRaw</span></span>
<span class="line"><span style="color:#A6ACCD;">            , boolean readFirstSheetOnly) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.xlsxPackage = OPCPackage.open(file, PackageAccess.READ);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } catch (InvalidFormatException e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.headers = headers;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.consumer = consumer;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.readFirst = readFirst;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.readNullRaw = readNullRaw;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.readFirstSheetOnly = readFirstSheetOnly;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 导入Excel</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param file   导入的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param header Excel头转对象</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return 对象集合</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static List&lt;Map&lt;String, String&gt;&gt; doImport(File file</span></span>
<span class="line"><span style="color:#A6ACCD;">            , String[] header) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        List&lt;Map&lt;String, String&gt;&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        ExcelImportUtil excelImportUtil = new ExcelImportUtil(</span></span>
<span class="line"><span style="color:#A6ACCD;">                file</span></span>
<span class="line"><span style="color:#A6ACCD;">                , header</span></span>
<span class="line"><span style="color:#A6ACCD;">                , list::add);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 执行解析</span></span>
<span class="line"><span style="color:#A6ACCD;">        excelImportUtil.process();</span></span>
<span class="line"><span style="color:#A6ACCD;">        return list;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void doImport(File file</span></span>
<span class="line"><span style="color:#A6ACCD;">            , String[] headers</span></span>
<span class="line"><span style="color:#A6ACCD;">            , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ExcelImportUtil excelImportUtil = new ExcelImportUtil(</span></span>
<span class="line"><span style="color:#A6ACCD;">                file</span></span>
<span class="line"><span style="color:#A6ACCD;">                , headers</span></span>
<span class="line"><span style="color:#A6ACCD;">                , consumer);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 执行解析</span></span>
<span class="line"><span style="color:#A6ACCD;">        excelImportUtil.process();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 解析Excel,并关闭流</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void process() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 只读字符表</span></span>
<span class="line"><span style="color:#A6ACCD;">            ReadOnlySharedStringsTable strings = new ReadOnlySharedStringsTable(this.xlsxPackage);</span></span>
<span class="line"><span style="color:#A6ACCD;">            // Xssf读取</span></span>
<span class="line"><span style="color:#A6ACCD;">            XSSFReader xssfReader = new XSSFReader(this.xlsxPackage);</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 样式表</span></span>
<span class="line"><span style="color:#A6ACCD;">            StylesTable styles = xssfReader.getStylesTable();</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 读取Excel</span></span>
<span class="line"><span style="color:#A6ACCD;">            XSSFReader.SheetIterator iter = (XSSFReader.SheetIterator) xssfReader.getSheetsData();</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (iter.hasNext()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                try (InputStream stream = iter.next()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    processSheet(styles</span></span>
<span class="line"><span style="color:#A6ACCD;">                            , strings</span></span>
<span class="line"><span style="color:#A6ACCD;">                            , new SimpleSheetContentsHandler(headers</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    , consumer</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    , readFirst</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    , readNullRaw)</span></span>
<span class="line"><span style="color:#A6ACCD;">                            , stream);</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 当自读第一个sheet是结束</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (readFirstSheetOnly) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        } catch (IOException | SAXException | OpenXML4JException e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 关流</span></span>
<span class="line"><span style="color:#A6ACCD;">            try {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.xlsxPackage.close();</span></span>
<span class="line"><span style="color:#A6ACCD;">            } catch (IOException e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                log.error(e.getMessage(), e);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 解析一个表的内容使用指定的样式和共享字符串表</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param styles           可以通过表中的单元格引用的样式表</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param strings          可以通过表中的单元格引用的字符串表</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param sheetInputStream 这条流读取了文件数据</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @throws IOException  来自解析器的IO异常,可能来自字节流或字符流</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @throws SAXException 如果解析XML数据失败</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private void processSheet(</span></span>
<span class="line"><span style="color:#A6ACCD;">            Styles styles,</span></span>
<span class="line"><span style="color:#A6ACCD;">            SharedStrings strings,</span></span>
<span class="line"><span style="color:#A6ACCD;">            SheetContentsHandler sheetHandler,</span></span>
<span class="line"><span style="color:#A6ACCD;">            InputStream sheetInputStream) throws IOException, SAXException {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 数据格式化对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        DataFormatter formatter = new DataFormatter();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // short date 数据读取</span></span>
<span class="line"><span style="color:#A6ACCD;">        formatter.addFormat(&quot;m/d/yy&quot;, new SimpleDateFormat(&quot;yyyy/MM/dd&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">        InputSource sheetSource = new InputSource(sheetInputStream);</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // xml读取类</span></span>
<span class="line"><span style="color:#A6ACCD;">            XMLReader sheetParser = SAXHelper.newXMLReader();</span></span>
<span class="line"><span style="color:#A6ACCD;">            // xml处理方法</span></span>
<span class="line"><span style="color:#A6ACCD;">            ContentHandler handler = new XSSFSheetXMLHandler(</span></span>
<span class="line"><span style="color:#A6ACCD;">                    styles</span></span>
<span class="line"><span style="color:#A6ACCD;">                    , null</span></span>
<span class="line"><span style="color:#A6ACCD;">                    , strings</span></span>
<span class="line"><span style="color:#A6ACCD;">                    , sheetHandler</span></span>
<span class="line"><span style="color:#A6ACCD;">                    , formatter</span></span>
<span class="line"><span style="color:#A6ACCD;">                    , false);</span></span>
<span class="line"><span style="color:#A6ACCD;">            sheetParser.setContentHandler(handler);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 解析Excel</span></span>
<span class="line"><span style="color:#A6ACCD;">            sheetParser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } catch (ParserConfigurationException e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            throw new RuntimeException(&quot;SAX parser appears to be broken - &quot; + e.getMessage());</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 数据处理</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    private class SimpleSheetContentsHandler implements SheetContentsHandler {</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 当前行号</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private int currentRow = -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 当前列号</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private int currentCol = -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 当前行数据</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private Map&lt;String, String&gt; rowData;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 数据头</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private String[] headers;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 数据处理方法</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private Consumer&lt;Map&lt;String, String&gt;&gt; consumer;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 是否读取第一行</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private boolean readFirst;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * 是否读取空行</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        private boolean readNullRaw;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * sheet页处理</span></span>
<span class="line"><span style="color:#A6ACCD;">         *</span></span>
<span class="line"><span style="color:#A6ACCD;">         * @param headers  表头数组</span></span>
<span class="line"><span style="color:#A6ACCD;">         * @param consumer 行消费</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        SimpleSheetContentsHandler(String[] headers</span></span>
<span class="line"><span style="color:#A6ACCD;">                , Consumer&lt;Map&lt;String, String&gt;&gt; consumer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this(headers, consumer, false, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /**</span></span>
<span class="line"><span style="color:#A6ACCD;">         * sheet页处理</span></span>
<span class="line"><span style="color:#A6ACCD;">         *</span></span>
<span class="line"><span style="color:#A6ACCD;">         * @param headers     表头数组</span></span>
<span class="line"><span style="color:#A6ACCD;">         * @param consumer    行消费</span></span>
<span class="line"><span style="color:#A6ACCD;">         * @param readFirst   是否读取第一行</span></span>
<span class="line"><span style="color:#A6ACCD;">         * @param readNullRaw 是否读取空行</span></span>
<span class="line"><span style="color:#A6ACCD;">         */</span></span>
<span class="line"><span style="color:#A6ACCD;">        public SimpleSheetContentsHandler(String[] headers</span></span>
<span class="line"><span style="color:#A6ACCD;">                , Consumer&lt;Map&lt;String, String&gt;&gt; consumer</span></span>
<span class="line"><span style="color:#A6ACCD;">                , boolean readFirst</span></span>
<span class="line"><span style="color:#A6ACCD;">                , boolean readNullRaw) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.headers = headers;</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.consumer = consumer;</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.readFirst = readFirst;</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.readNullRaw = readNullRaw;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        @Override</span></span>
<span class="line"><span style="color:#A6ACCD;">        public void startRow(int rowNum) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            currentRow = rowNum;</span></span>
<span class="line"><span style="color:#A6ACCD;">            currentCol = -1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 重置数据</span></span>
<span class="line"><span style="color:#A6ACCD;">            rowData = new HashMap&lt;&gt;(headers.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        @Override</span></span>
<span class="line"><span style="color:#A6ACCD;">        public void endRow(int rowNum) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 不处理第一行</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!readFirst &amp;&amp; rowNum == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 空行处理</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!readNullRaw &amp;&amp; rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 处理数据</span></span>
<span class="line"><span style="color:#A6ACCD;">            consumer.accept(rowData);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        @Override</span></span>
<span class="line"><span style="color:#A6ACCD;">        public void cell(String cellReference, String formattedValue, XSSFComment comment) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果为空则生成一个当前位置的单元格对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (cellReference == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cellReference = new CellAddress(currentRow, currentCol).formatAsString();</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 读取的列号</span></span>
<span class="line"><span style="color:#A6ACCD;">            int thisCol = (new CellReference(cellReference)).getCol();</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 大于头的列不处理</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (thisCol &gt;= this.headers.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 列为空的数量</span></span>
<span class="line"><span style="color:#A6ACCD;">            int missedCols = thisCol - currentCol - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (int i = 0; i &lt; missedCols; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                rowData.put(headers[currentCol + i + 1], null);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 当前行等于读取的列</span></span>
<span class="line"><span style="color:#A6ACCD;">            currentCol = thisCol;</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 大于头的列不处理</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (currentCol &gt; headers.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 设置值</span></span>
<span class="line"><span style="color:#A6ACCD;">            rowData.put(headers[currentCol], formattedValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h2><p>测试Excel文件</p><table><thead><tr><th>a1</th><th>b1</th><th>c1</th></tr></thead><tbody><tr><td>a2</td><td>b2</td><td>c2</td></tr><tr><td>a3</td><td>b3</td><td>c3</td></tr></tbody></table><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">package com.db117.example.poi;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import org.junit.Assert;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.junit.Before;</span></span>
<span class="line"><span style="color:#A6ACCD;">import org.junit.Test;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import java.io.File;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.List;</span></span>
<span class="line"><span style="color:#A6ACCD;">import java.util.Map;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class ExcelImportUtilTest {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private File file;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Before</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void setUp() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        file = new File(this.getClass().getResource(&quot;/importTest.xlsx&quot;).getFile());</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Test</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void doImport() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        List&lt;Map&lt;String, String&gt;&gt; maps = ExcelImportUtil.doImport(file, new String[]{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;});</span></span>
<span class="line"><span style="color:#A6ACCD;">        Assert.assertEquals(maps.size(), 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Assert.assertEquals(maps.get(0).get(&quot;a&quot;), &quot;a2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Test</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void doImport1() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ExcelImportUtil.doImport(file, new String[]{&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}, System.out::println);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[e];function t(c,r,C,A,i,y){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};
