(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{367:function(e,n,r){"use strict";r.r(n);var t=r(19),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"实现需求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现需求"}},[e._v("#")]),e._v(" 实现需求")]),e._v(" "),r("p",[e._v("大批量Excel(07版)数据导入,内存暂用低(大概100m,不算解析出来的数据处理,以及数据占用内存),可实现对Excel 数据的流式处理")]),e._v(" "),r("p",[e._v("数据量200万(已测试,理论上是Excel的数量上限)大概在100s左右")]),e._v(" "),r("h2",{attrs:{id:"实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[e._v("#")]),e._v(" 实现原理")]),e._v(" "),r("p",[e._v("实现poi的org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler接口")]),e._v(" "),r("p",[e._v("官方实例"),r("a",{attrs:{href:"http://svn.apache.org/repos/asf/poi/trunk/src/examples/src/org/apache/poi/xssf/eventusermodel/XLSX2CSV.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://svn.apache.org/repos/asf/poi/trunk/src/examples/src/org/apache/poi/xssf/eventusermodel/XLSX2CSV.java"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("官方是把Excel数据解析后的数据转为csv")]),e._v(" "),r("h2",{attrs:{id:"依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[e._v("#")]),e._v(" 依赖")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<poi.version>4.1.0</poi.version>\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<dependency>\n    <groupId>org.apache.poi</groupId>\n    <artifactId>poi</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>org.apache.poi</groupId>\n    <artifactId>poi-ooxml</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>org.apache.poi</groupId>\n    <artifactId>poi-ooxml-schemas</artifactId>\n</dependency>\n")])])]),r("h2",{attrs:{id:"工具类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工具类"}},[e._v("#")]),e._v(" 工具类")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package com.db117.example.poi;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.poi.ooxml.util.SAXHelper;\nimport org.apache.poi.openxml4j.exceptions.InvalidFormatException;\nimport org.apache.poi.openxml4j.exceptions.OpenXML4JException;\nimport org.apache.poi.openxml4j.opc.OPCPackage;\nimport org.apache.poi.openxml4j.opc.PackageAccess;\nimport org.apache.poi.ss.usermodel.DataFormatter;\nimport org.apache.poi.ss.util.CellAddress;\nimport org.apache.poi.ss.util.CellReference;\nimport org.apache.poi.xssf.eventusermodel.ReadOnlySharedStringsTable;\nimport org.apache.poi.xssf.eventusermodel.XSSFReader;\nimport org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler;\nimport org.apache.poi.xssf.eventusermodel.XSSFSheetXMLHandler.SheetContentsHandler;\nimport org.apache.poi.xssf.model.SharedStrings;\nimport org.apache.poi.xssf.model.Styles;\nimport org.apache.poi.xssf.model.StylesTable;\nimport org.apache.poi.xssf.usermodel.XSSFComment;\nimport org.xml.sax.ContentHandler;\nimport org.xml.sax.InputSource;\nimport org.xml.sax.SAXException;\nimport org.xml.sax.XMLReader;\n\nimport javax.xml.parsers.ParserConfigurationException;\nimport java.io.File;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.text.SimpleDateFormat;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.function.Consumer;\n\n/**\n * Excel大数据量导入\n *\n * @author 大兵\n * @date 2019/3/8 11:08\n **/\n@Slf4j\npublic class ExcelImportUtil {\n    private OPCPackage xlsxPackage;\n    /**\n     * 头数组(从左到右)\n     */\n    private String[] headers;\n    /**\n     * 处理行数据(k->头)\n     */\n    private Consumer<Map<String, String>> consumer;\n    /**\n     * 是否读取第一行\n     */\n    private boolean readFirst;\n    /**\n     * 是否读取空行\n     */\n    private boolean readNullRaw;\n    /**\n     * 是否只读第一个sheet页\n     */\n    private boolean readFirstSheetOnly;\n\n    /**\n     * @param file     读取的文件\n     * @param headers  头数组\n     * @param consumer 消费者\n     */\n    public ExcelImportUtil(File file\n            , String[] headers\n            , Consumer<Map<String, String>> consumer) {\n        this(file, headers, consumer\n                , false, false, false);\n    }\n\n    /**\n     * @param file               读取的文件\n     * @param headers            头数组\n     * @param consumer           消费者\n     * @param readFirst          是否读取第一行\n     * @param readNullRaw        readNullRaw\n     * @param readFirstSheetOnly 是否只读第一个sheet页\n     */\n    public ExcelImportUtil(File file\n            , String[] headers\n            , Consumer<Map<String, String>> consumer\n            , boolean readFirst\n            , boolean readNullRaw\n            , boolean readFirstSheetOnly) {\n        try {\n            this.xlsxPackage = OPCPackage.open(file, PackageAccess.READ);\n        } catch (InvalidFormatException e) {\n            log.error(e.getMessage(), e);\n        }\n        this.headers = headers;\n        this.consumer = consumer;\n        this.readFirst = readFirst;\n        this.readNullRaw = readNullRaw;\n        this.readFirstSheetOnly = readFirstSheetOnly;\n    }\n\n\n    /**\n     * 导入Excel\n     *\n     * @param file   导入的文件\n     * @param header Excel头转对象\n     * @return 对象集合\n     */\n    public static List<Map<String, String>> doImport(File file\n            , String[] header) {\n        List<Map<String, String>> list = new ArrayList<>();\n        ExcelImportUtil excelImportUtil = new ExcelImportUtil(\n                file\n                , header\n                , list::add);\n        // 执行解析\n        excelImportUtil.process();\n        return list;\n    }\n\n    public static void doImport(File file\n            , String[] headers\n            , Consumer<Map<String, String>> consumer) {\n        ExcelImportUtil excelImportUtil = new ExcelImportUtil(\n                file\n                , headers\n                , consumer);\n        // 执行解析\n        excelImportUtil.process();\n    }\n\n    /**\n     * 解析Excel,并关闭流\n     */\n    public void process() {\n        try {\n            // 只读字符表\n            ReadOnlySharedStringsTable strings = new ReadOnlySharedStringsTable(this.xlsxPackage);\n            // Xssf读取\n            XSSFReader xssfReader = new XSSFReader(this.xlsxPackage);\n            // 样式表\n            StylesTable styles = xssfReader.getStylesTable();\n            // 读取Excel\n            XSSFReader.SheetIterator iter = (XSSFReader.SheetIterator) xssfReader.getSheetsData();\n            while (iter.hasNext()) {\n                try (InputStream stream = iter.next()) {\n                    processSheet(styles\n                            , strings\n                            , new SimpleSheetContentsHandler(headers\n                                    , consumer\n                                    , readFirst\n                                    , readNullRaw)\n                            , stream);\n                }\n                // 当自读第一个sheet是结束\n                if (readFirstSheetOnly) {\n                    break;\n                }\n            }\n        } catch (IOException | SAXException | OpenXML4JException e) {\n            log.error(e.getMessage(), e);\n        } finally {\n            // 关流\n            try {\n                this.xlsxPackage.close();\n            } catch (IOException e) {\n                log.error(e.getMessage(), e);\n            }\n        }\n    }\n\n    /**\n     * 解析一个表的内容使用指定的样式和共享字符串表\n     *\n     * @param styles           可以通过表中的单元格引用的样式表\n     * @param strings          可以通过表中的单元格引用的字符串表\n     * @param sheetInputStream 这条流读取了文件数据\n     * @throws IOException  来自解析器的IO异常,可能来自字节流或字符流\n     * @throws SAXException 如果解析XML数据失败\n     */\n    private void processSheet(\n            Styles styles,\n            SharedStrings strings,\n            SheetContentsHandler sheetHandler,\n            InputStream sheetInputStream) throws IOException, SAXException {\n        // 数据格式化对象\n        DataFormatter formatter = new DataFormatter();\n        // short date 数据读取\n        formatter.addFormat("m/d/yy", new SimpleDateFormat("yyyy/MM/dd"));\n        InputSource sheetSource = new InputSource(sheetInputStream);\n        try {\n            // xml读取类\n            XMLReader sheetParser = SAXHelper.newXMLReader();\n            // xml处理方法\n            ContentHandler handler = new XSSFSheetXMLHandler(\n                    styles\n                    , null\n                    , strings\n                    , sheetHandler\n                    , formatter\n                    , false);\n            sheetParser.setContentHandler(handler);\n\n            // 解析Excel\n            sheetParser.parse(sheetSource);\n        } catch (ParserConfigurationException e) {\n            throw new RuntimeException("SAX parser appears to be broken - " + e.getMessage());\n        }\n    }\n\n    /**\n     * 数据处理\n     */\n    private class SimpleSheetContentsHandler implements SheetContentsHandler {\n        /**\n         * 当前行号\n         */\n        private int currentRow = -1;\n        /**\n         * 当前列号\n         */\n        private int currentCol = -1;\n        /**\n         * 当前行数据\n         */\n        private Map<String, String> rowData;\n        /**\n         * 数据头\n         */\n        private String[] headers;\n        /**\n         * 数据处理方法\n         */\n        private Consumer<Map<String, String>> consumer;\n        /**\n         * 是否读取第一行\n         */\n        private boolean readFirst;\n        /**\n         * 是否读取空行\n         */\n        private boolean readNullRaw;\n\n        /**\n         * sheet页处理\n         *\n         * @param headers  表头数组\n         * @param consumer 行消费\n         */\n        SimpleSheetContentsHandler(String[] headers\n                , Consumer<Map<String, String>> consumer) {\n            this(headers, consumer, false, false);\n        }\n\n        /**\n         * sheet页处理\n         *\n         * @param headers     表头数组\n         * @param consumer    行消费\n         * @param readFirst   是否读取第一行\n         * @param readNullRaw 是否读取空行\n         */\n        public SimpleSheetContentsHandler(String[] headers\n                , Consumer<Map<String, String>> consumer\n                , boolean readFirst\n                , boolean readNullRaw) {\n            this.headers = headers;\n            this.consumer = consumer;\n            this.readFirst = readFirst;\n            this.readNullRaw = readNullRaw;\n        }\n\n        @Override\n        public void startRow(int rowNum) {\n            currentRow = rowNum;\n            currentCol = -1;\n            // 重置数据\n            rowData = new HashMap<>(headers.length);\n        }\n\n        @Override\n        public void endRow(int rowNum) {\n            // 不处理第一行\n            if (!readFirst && rowNum == 0) {\n                return;\n            }\n            // 空行处理\n            if (!readNullRaw && rowData.isEmpty()) {\n                return;\n            }\n            // 处理数据\n            consumer.accept(rowData);\n        }\n\n        @Override\n        public void cell(String cellReference, String formattedValue, XSSFComment comment) {\n            // 如果为空则生成一个当前位置的单元格对象\n            if (cellReference == null) {\n                cellReference = new CellAddress(currentRow, currentCol).formatAsString();\n            }\n\n            // 读取的列号\n            int thisCol = (new CellReference(cellReference)).getCol();\n            // 大于头的列不处理\n            if (thisCol >= this.headers.length) {\n                return;\n            }\n            // 列为空的数量\n            int missedCols = thisCol - currentCol - 1;\n            for (int i = 0; i < missedCols; i++) {\n                rowData.put(headers[currentCol + i + 1], null);\n            }\n            // 当前行等于读取的列\n            currentCol = thisCol;\n            // 大于头的列不处理\n            if (currentCol > headers.length) {\n                return;\n            }\n            // 设置值\n            rowData.put(headers[currentCol], formattedValue);\n        }\n    }\n}\n')])])]),r("h2",{attrs:{id:"测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),r("p",[e._v("测试Excel文件")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("a1")]),e._v(" "),r("th",[e._v("b1")]),e._v(" "),r("th",[e._v("c1")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("a2")]),e._v(" "),r("td",[e._v("b2")]),e._v(" "),r("td",[e._v("c2")])]),e._v(" "),r("tr",[r("td",[e._v("a3")]),e._v(" "),r("td",[e._v("b3")]),e._v(" "),r("td",[e._v("c3")])])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package com.db117.example.poi;\n\nimport org.junit.Assert;\nimport org.junit.Before;\nimport org.junit.Test;\n\nimport java.io.File;\nimport java.util.List;\nimport java.util.Map;\n\npublic class ExcelImportUtilTest {\n    private File file;\n\n    @Before\n    public void setUp() {\n        file = new File(this.getClass().getResource("/importTest.xlsx").getFile());\n    }\n\n    @Test\n    public void doImport() {\n        List<Map<String, String>> maps = ExcelImportUtil.doImport(file, new String[]{"a", "b", "c"});\n        Assert.assertEquals(maps.size(), 2);\n        Assert.assertEquals(maps.get(0).get("a"), "a2");\n    }\n\n    @Test\n    public void doImport1() {\n        ExcelImportUtil.doImport(file, new String[]{"a", "b", "c"}, System.out::println);\n    }\n}\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);