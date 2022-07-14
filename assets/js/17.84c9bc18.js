(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{287:function(r,n,e){"use strict";e.r(n);var _=e(10),s=Object(_.a)({},(function(){var r=this,n=r._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[n("h2",{attrs:{id:"字符串函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串函数"}},[r._v("#")]),r._v(" 字符串函数")]),r._v(" "),n("ul",[n("li",[n("p",[r._v("ascii(str)"),n("br"),r._v("\n返回字符串str的第一个字符的ascii值(str是空串时返回0)"),n("br"),r._v("\nmysql> select ascii('2');"),n("br"),r._v("\n　　-> 50"),n("br"),r._v("\nmysql> select ascii(2);"),n("br"),r._v("\n　　-> 50"),n("br"),r._v("\nmysql> select ascii('dete');"),n("br"),r._v("\n　　-> 100")])]),r._v(" "),n("li",[n("p",[r._v("ord(str)"),n("br"),r._v("\n如果字符串str句首是单字节返回与ascii()函数返回的相同值。")]),r._v(" "),n("p",[r._v("如果是一个多字节字符,以格式返回((first byte ascii code)*256+(second byte ascii code))[*256+third byte asciicode...]"),n("br"),r._v("\nmysql> select ord('2');"),n("br"),r._v("\n　　      -> 50")])]),r._v(" "),n("li",[n("p",[r._v("conv(n,from_base,to_base)"),n("br"),r._v("\n对数字n进制转换,并转换为字串返回(任何参数为null时返回null,进制范围为2-36进制,当to_base是负数时n作为有符号数否则作无符号数,conv以64位点精度工作)"),n("br"),r._v('\nmysql> select conv("a",16,2);'),n("br"),r._v("\n　　-> '1010'\nmysql> select conv(\"6e\",18,8);"),n("br"),r._v("\n　　-> '172'\nmysql> select conv(-17,10,-18);"),n("br"),r._v("\n　　-> '-h'\nmysql> select conv(10+\"10\"+'10'+0xa,10,10);"),n("br"),r._v("\n　　-> '40'")])]),r._v(" "),n("li",[n("p",[r._v("bin(n)"),n("br"),r._v("\n把n转为二进制值并以字串返回(n是bigint数字,等价于conv(n,10,2))"),n("br"),r._v("\nmysql> select bin(12);"),n("br"),r._v("\n　　-> '1100'")])]),r._v(" "),n("li",[n("p",[r._v("oct(n)"),n("br"),r._v("\n把n转为八进制值并以字串返回(n是bigint数字,等价于conv(n,10,8))"),n("br"),r._v("\nmysql> select oct(12);"),n("br"),r._v("\n　　-> '14'")])]),r._v(" "),n("li",[n("p",[r._v("hex(n)"),n("br"),r._v("\n把n转为十六进制并以字串返回(n是bigint数字,等价于conv(n,10,16))"),n("br"),r._v("\nmysql> select hex(255);"),n("br"),r._v("\n　　-> 'ff'")])]),r._v(" "),n("li",[n("p",[r._v("char(n,...)"),n("br"),r._v("\n返回由参数n,...对应的ascii代码字符组成的一个字串(参数是n,...是数字序列,null值被跳过)"),n("br"),r._v("\nmysql> select char(77,121,83,81,'76');"),n("br"),r._v("\n　　-> 'mysql'\nmysql> select char(77,77.3,'77.3');"),n("br"),r._v("\n　　-> 'mmm'")])]),r._v(" "),n("li",[n("p",[r._v("concat(str1,str2,...)"),n("br"),r._v("\n把参数连成一个长字符串并返回(任何参数是null时返回null)"),n("br"),r._v("\nmysql> select concat('my', 's', 'ql');"),n("br"),r._v("\n　　-> 'mysql'\nmysql> select concat('my', null, 'ql');"),n("br"),r._v("\n　　-> null\nmysql> select concat(14.3);"),n("br"),r._v("\n　　-> '14.3'")])]),r._v(" "),n("li",[n("p",[r._v("length(str)"),n("br"),r._v("\noctet_length(str)"),n("br"),r._v("\nchar_length(str)"),n("br"),r._v("\ncharacter_length(str)"),n("br"),r._v("\n返回字符串str的长度(对于多字节字符char_length仅计算一次)\nmysql> select length('text');"),n("br"),r._v("\n　　-> 4"),n("br"),r._v("\nmysql> select octet_length('text');"),n("br"),r._v("\n　　-> 4")])]),r._v(" "),n("li",[n("p",[r._v("locate(substr,str)"),n("br"),r._v("\nposition(substr in str)"),n("br"),r._v("\n返回字符串substr在字符串str第一次出现的位置(str不包含substr时返回0)"),n("br"),r._v("\nmysql> select locate('bar', 'foobarbar');"),n("br"),r._v("\n　　-> 4"),n("br"),r._v("\nmysql> select locate('xbar', 'foobar');"),n("br"),r._v("\n　　-> 0")])]),r._v(" "),n("li",[n("p",[r._v("locate(substr,str,pos)"),n("br"),r._v("\n返回字符串substr在字符串str的第pos个位置起第一次出现的位置(str不包含substr时返回0)"),n("br"),r._v("\nmysql> select locate('bar', 'foobarbar',5);"),n("br"),r._v("\n　　-> 7")])]),r._v(" "),n("li",[n("p",[r._v("instr(str,substr)"),n("br"),r._v("\n返回字符串substr在字符串str第一次出现的位置(str不包含substr时返回0)"),n("br"),r._v("\nmysql> select instr('foobarbar', 'bar');"),n("br"),r._v("\n　　-> 4"),n("br"),r._v("\nmysql> select instr('xbar', 'foobar');"),n("br"),r._v("\n　　-> 0")])]),r._v(" "),n("li",[n("p",[r._v("lpad(str,len,padstr)"),n("br"),r._v("\n用字符串padstr填补str左端直到字串长度为len并返回"),n("br"),r._v("\nmysql> select lpad('hi',4,'??');"),n("br"),r._v("\n　　-> '??hi'")])]),r._v(" "),n("li",[n("p",[r._v("rpad(str,len,padstr)"),n("br"),r._v("\n用字符串padstr填补str右端直到字串长度为len并返回"),n("br"),r._v("\nmysql> select rpad('hi',5,'?');"),n("br"),r._v("\n　　-> 'hi???'")])]),r._v(" "),n("li",[n("p",[r._v("left(str,len)"),n("br"),r._v("\n返回字符串str的左端len个字符"),n("br"),r._v("\nmysql> select left('foobarbar', 5);"),n("br"),r._v("\n　　-> 'fooba'")])]),r._v(" "),n("li",[n("p",[r._v("right(str,len)"),n("br"),r._v("\n返回字符串str的右端len个字符"),n("br"),r._v("\nmysql> select right('foobarbar', 4);"),n("br"),r._v("\n　　-> 'rbar'")])]),r._v(" "),n("li",[n("p",[r._v("substring(str,pos,len)"),n("br"),r._v("\nsubstring(str from pos for len)"),n("br"),r._v("\nmid(str,pos,len)"),n("br"),r._v("\n返回字符串str的位置pos起len个字符mysql> select substring('quadratically',5,6);"),n("br"),r._v("\n　　-> 'ratica'")])]),r._v(" "),n("li",[n("p",[r._v("substring(str,pos)"),n("br"),r._v("\nsubstring(str from pos)"),n("br"),r._v("\n返回字符串str的位置pos起的一个子串"),n("br"),r._v("\nmysql> select substring('quadratically',5);"),n("br"),r._v("\n　　-> 'ratically'\nmysql> select substring('foobarbar' from 4);"),n("br"),r._v("\n　　-> 'barbar'")])]),r._v(" "),n("li",[n("p",[r._v("substring_index(str,delim,count)"),n("br"),r._v("\n返回从字符串str的第count个出现的分隔符delim之后的子串\n(count为正数时返回左端,否则返回右端子串)"),n("br"),r._v("\nmysql> select substring_index('www.mysql.com', '.', 2);"),n("br"),r._v("\n　　-> 'www.mysql'\nmysql> select substring_index('www.mysql.com', '.', -2);"),n("br"),r._v("\n　　-> 'mysql.com'")])]),r._v(" "),n("li",[n("p",[r._v("ltrim(str)"),n("br"),r._v("\n返回删除了左空格的字符串str"),n("br"),r._v("\nmysql> select ltrim('  barbar');"),n("br"),r._v("\n　　-> 'barbar'")])]),r._v(" "),n("li",[n("p",[r._v("rtrim(str)"),n("br"),r._v("\n返回删除了右空格的字符串str"),n("br"),r._v("\nmysql> select rtrim('barbar   ');"),n("br"),r._v("\n　　-> 'barbar'")])]),r._v(" "),n("li",[n("p",[r._v("trim([[both | leading | trailing] [remstr] from] str)"),n("br"),r._v("\n返回前缀或后缀remstr被删除了的字符串str(位置参数默认both,remstr默认值为空格)"),n("br"),r._v("\nmysql> select trim('  bar   ');"),n("br"),r._v("\n　　-> 'bar'\nmysql> select trim(leading 'x' from 'xxxbarxxx');"),n("br"),r._v("\n　　-> 'barxxx'\nmysql> select trim(both 'x' from 'xxxbarxxx');"),n("br"),r._v("\n　　-> 'bar'\nmysql> select trim(trailing 'xyz' from 'barxxyz');"),n("br"),r._v("\n　　-> 'barx'")])]),r._v(" "),n("li",[n("p",[r._v("soundex(str)"),n("br"),r._v("\n返回str的一个同音字符串(听起来“大致相同”字符串有相同的\n同音字符串,非数字字母字符被忽略,在a-z外的字母被当作元音)"),n("br"),r._v("\nmysql> select soundex('hello');"),n("br"),r._v("\n　　-> 'h400'\nmysql> select soundex('quadratically');"),n("br"),r._v("\n　　-> 'q36324'")])]),r._v(" "),n("li",[n("p",[r._v("space(n)"),n("br"),r._v("\n返回由n个空格字符组成的一个字符串"),n("br"),r._v("\nmysql> select space(6);"),n("br"),r._v("\n　　-> '      '")])]),r._v(" "),n("li",[n("p",[r._v("replace(str,from_str,to_str)"),n("br"),r._v("\n用字符串to_str替换字符串str中的子串from_str并返回"),n("br"),r._v("\nmysql> select replace('www.mysql.com', 'w', 'ww');"),n("br"),r._v("\n　　-> 'wwwwww.mysql.com'")])]),r._v(" "),n("li",[n("p",[r._v("repeat(str,count)"),n("br"),r._v("\n返回由count个字符串str连成的一个字符串(任何参数为null时\n返回null,count<=0时返回一个空字符串)"),n("br"),r._v("\nmysql> select repeat('mysql', 3);"),n("br"),r._v("\n　　-> 'mysqlmysqlmysql'")])]),r._v(" "),n("li",[n("p",[r._v("reverse(str)"),n("br"),r._v("\n颠倒字符串str的字符顺序并返回"),n("br"),r._v("\nmysql> select reverse('abc');"),n("br"),r._v("\n　　-> 'cba'")])]),r._v(" "),n("li",[n("p",[r._v("insert(str,pos,len,newstr)"),n("br"),r._v("\n把字符串str由位置pos起len个字符长的子串替换为字符串\nnewstr并返回"),n("br"),r._v("\nmysql> select insert('quadratic', 3, 4, 'what');"),n("br"),r._v("\n　　-> 'quwhattic'")])]),r._v(" "),n("li",[n("p",[r._v("elt(n,str1,str2,str3,...)"),n("br"),r._v("\n返回第n个字符串(n小于1或大于参数个数返回null)"),n("br"),r._v("\nmysql> select elt(1, 'ej', 'heja', 'hej', 'foo');"),n("br"),r._v("\n　　-> 'ej'\nmysql> select elt(4, 'ej', 'heja', 'hej', 'foo');"),n("br"),r._v("\n　　-> 'foo'")])]),r._v(" "),n("li",[n("p",[r._v("field(str,str1,str2,str3,...)"),n("br"),r._v("\n返回str等于其后的第n个字符串的序号(如果str没找到返回0)"),n("br"),r._v("\nmysql> select field('ej', 'hej', 'ej', 'heja', 'hej',\n'foo');"),n("br"),r._v("\n　　-> 2"),n("br"),r._v("\nmysql> select field('fo', 'hej', 'ej', 'heja', 'hej',\n'foo');"),n("br"),r._v("\n　　-> 0")])]),r._v(" "),n("li",[n("p",[r._v("find_in_set(str,strlist)"),n("br"),r._v('\n返回str在字符串集strlist中的序号(任何参数是null则返回\nnull,如果str没找到返回0,参数1包含","时工作异常)'),n("br"),r._v("\nmysql> select find_in_set('b','a,b,c,d');"),n("br"),r._v("\n　　-> 2")])]),r._v(" "),n("li",[n("p",[r._v("make_set(bits,str1,str2,...)"),n("br"),r._v("\n把参数1的数字转为二进制,假如某个位置的二进制位等于1,对应\n位置的字串选入字串集并返回(null串不添加到结果中)"),n("br"),r._v("\nmysql> select make_set(1,'a','b','c');"),n("br"),r._v("\n　　-> 'a'\nmysql> select make_set(1 | 4,'hello','nice','world');"),n("br"),r._v("\n　　-> 'hello,world'\nmysql> select make_set(0,'a','b','c');"),n("br"),r._v("\n　　-> ''")])]),r._v(" "),n("li",[n("p",[r._v("export_set(bits,on,off,[separator,[number_of_bits]])"),n("br"),r._v('\n按bits排列字符串集,只有当位等于1时插入字串on,否则插入\noff(separator默认值",",number_of_bits参数使用时长度不足补0\n而过长截断)'),n("br"),r._v("\nmysql> select export_set(5,'y','n',',',4)"),n("br"),r._v("\n　　-> y,n,y,n")])]),r._v(" "),n("li",[n("p",[r._v("lcase(str)"),n("br"),r._v("\nlower(str)"),n("br"),r._v("\n返回小写的字符串str"),n("br"),r._v("\nmysql> select lcase('quadratically');"),n("br"),r._v("\n　　-> 'quadratically'")])]),r._v(" "),n("li",[n("p",[r._v("ucase(str)"),n("br"),r._v("\nupper(str)"),n("br"),r._v("\n返回大写的字符串str"),n("br"),r._v("\nmysql> select ucase('quadratically');"),n("br"),r._v("\n　　-> 'quadratically'")])]),r._v(" "),n("li",[n("p",[r._v("load_file(file_name)"),n("br"),r._v("\n读入文件并且作为一个字符串返回文件内容(文件无法找到,路径\n不完整,没有权限,长度大于max_allowed_packet会返回null)"),n("br"),r._v('\nmysql> update table_name set blob_column=load_file\n("/tmp/picture") where id=1;')])])]),r._v(" "),n("h2",{attrs:{id:"数学函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数学函数"}},[r._v("#")]),r._v(" 数学函数")]),r._v(" "),n("ul",[n("li",[n("p",[r._v("abs(n)"),n("br"),r._v("\n返回n的绝对值"),n("br"),r._v("\nmysql> select abs(2);"),n("br"),r._v("\n　　-> 2"),n("br"),r._v("\nmysql> select abs(-32);"),n("br"),r._v("\n　　-> 32")])]),r._v(" "),n("li",[n("p",[r._v("sign(n)"),n("br"),r._v("\n返回参数的符号(为-1、0或1)"),n("br"),r._v("\nmysql> select sign(-32);"),n("br"),r._v("\n　　-> -1"),n("br"),r._v("\nmysql> select sign(0);"),n("br"),r._v("\n　　-> 0"),n("br"),r._v("\nmysql> select sign(234);"),n("br"),r._v("\n　　-> 1")])]),r._v(" "),n("li",[n("p",[r._v("mod(n,m)"),n("br"),r._v("\n取模运算,返回n被m除的余数(同%操作符)"),n("br"),r._v("\nmysql> select mod(234, 10);"),n("br"),r._v("\n　　-> 4"),n("br"),r._v("\nmysql> select 234 % 10;"),n("br"),r._v("\n　　-> 4"),n("br"),r._v("\nmysql> select mod(29,9);"),n("br"),r._v("\n　　-> 2")])]),r._v(" "),n("li",[n("p",[r._v("floor(n)"),n("br"),r._v("\n返回不大于n的最大整数值"),n("br"),r._v("\nmysql> select floor(1.23);"),n("br"),r._v("\n　　-> 1"),n("br"),r._v("\nmysql> select floor(-1.23);"),n("br"),r._v("\n　　-> -2")])]),r._v(" "),n("li",[n("p",[r._v("ceiling(n)"),n("br"),r._v("\n返回不小于n的最小整数值"),n("br"),r._v("\nmysql> select ceiling(1.23);"),n("br"),r._v("\n　　-> 2"),n("br"),r._v("\nmysql> select ceiling(-1.23);"),n("br"),r._v("\n　　-> -1")])]),r._v(" "),n("li",[n("p",[r._v("round(n,d)"),n("br"),r._v("\n返回n的四舍五入值,保留d位小数(d的默认值为0)"),n("br"),r._v("\nmysql> select round(-1.23);"),n("br"),r._v("\n　　-> -1"),n("br"),r._v("\nmysql> select round(-1.58);"),n("br"),r._v("\n　　-> -2"),n("br"),r._v("\nmysql> select round(1.58);"),n("br"),r._v("\n　　-> 2"),n("br"),r._v("\nmysql> select round(1.298, 1);"),n("br"),r._v("\n　　-> 1.3"),n("br"),r._v("\nmysql> select round(1.298, 0);"),n("br"),r._v("\n　　-> 1")])]),r._v(" "),n("li",[n("p",[r._v("exp(n)"),n("br"),r._v("\n返回值e的n次方(自然对数的底)"),n("br"),r._v("\nmysql> select exp(2);"),n("br"),r._v("\n　　-> 7.389056"),n("br"),r._v("\nmysql> select exp(-2);"),n("br"),r._v("\n　　-> 0.135335")])]),r._v(" "),n("li",[n("p",[r._v("log(n)"),n("br"),r._v("\n返回n的自然对数"),n("br"),r._v("\nmysql> select log(2);"),n("br"),r._v("\n　　-> 0.693147"),n("br"),r._v("\nmysql> select log(-2);"),n("br"),r._v("\n　　-> null")])]),r._v(" "),n("li",[n("p",[r._v("log10(n)"),n("br"),r._v("\n返回n以10为底的对数"),n("br"),r._v("\nmysql> select log10(2);"),n("br"),r._v("\n　　-> 0.301030"),n("br"),r._v("\nmysql> select log10(100);"),n("br"),r._v("\n　　-> 2.000000"),n("br"),r._v("\nmysql> select log10(-100);"),n("br"),r._v("\n　　-> null")])]),r._v(" "),n("li",[n("p",[r._v("pow(x,y)"),n("br"),r._v("\npower(x,y)"),n("br"),r._v("\n　返回值x的y次幂"),n("br"),r._v("\nmysql> select pow(2,2);"),n("br"),r._v("\n　　-> 4.000000"),n("br"),r._v("\nmysql> select pow(2,-2);"),n("br"),r._v("\n　　-> 0.250000")])]),r._v(" "),n("li",[n("p",[r._v("sqrt(n)"),n("br"),r._v("\n　返回非负数n的平方根"),n("br"),r._v("\nmysql> select sqrt(4);"),n("br"),r._v("\n　　-> 2.000000"),n("br"),r._v("\nmysql> select sqrt(20);"),n("br"),r._v("\n　　-> 4.472136")])]),r._v(" "),n("li",[n("p",[r._v("pi()"),n("br"),r._v("\n　返回圆周率"),n("br"),r._v("\nmysql> select pi();"),n("br"),r._v("\n　　-> 3.141593")])]),r._v(" "),n("li",[n("p",[r._v("cos(n)"),n("br"),r._v("\n　返回n的余弦值"),n("br"),r._v("\nmysql> select cos(pi());"),n("br"),r._v("\n　　-> -1.000000")])]),r._v(" "),n("li",[n("p",[r._v("sin(n)"),n("br"),r._v("\n　返回n的正弦值"),n("br"),r._v("\nmysql> select sin(pi());"),n("br"),r._v("\n　　-> 0.000000")])]),r._v(" "),n("li",[n("p",[r._v("tan(n)"),n("br"),r._v("\n返回n的正切值"),n("br"),r._v("\nmysql> select tan(pi()+1);"),n("br"),r._v("\n　　-> 1.557408")])]),r._v(" "),n("li",[n("p",[r._v("acos(n)"),n("br"),r._v("\n　返回n反余弦(n是余弦值,在-1到1的范围,否则返回null)"),n("br"),r._v("\nmysql> select acos(1);"),n("br"),r._v("\n　　-> 0.000000"),n("br"),r._v("\nmysql> select acos(1.0001);"),n("br"),r._v("\n　　-> null"),n("br"),r._v("\nmysql> select acos(0);"),n("br"),r._v("\n　　-> 1.570796")])]),r._v(" "),n("li",[n("p",[r._v("asin(n)"),n("br"),r._v("\n返回n反正弦值"),n("br"),r._v("\nmysql> select asin(0.2);"),n("br"),r._v("\n　　-> 0.201358"),n("br"),r._v("\nmysql> select asin('foo');"),n("br"),r._v("\n　　-> 0.000000")])]),r._v(" "),n("li",[n("p",[r._v("atan(n)"),n("br"),r._v("\n返回n的反正切值"),n("br"),r._v("\nmysql> select atan(2);"),n("br"),r._v("\n　　-> 1.107149"),n("br"),r._v("\nmysql> select atan(-2);"),n("br"),r._v("\n　　-> -1.107149"),n("br"),r._v("\natan2(x,y)"),n("br"),r._v("\n　返回2个变量x和y的反正切(类似y/x的反正切,符号决定象限)"),n("br"),r._v("\nmysql> select atan(-2,2);"),n("br"),r._v("\n　　-> -0.785398"),n("br"),r._v("\nmysql> select atan(pi(),0);"),n("br"),r._v("\n　　-> 1.570796")])]),r._v(" "),n("li",[n("p",[r._v("cot(n)"),n("br"),r._v("\n返回x的余切"),n("br"),r._v("\nmysql> select cot(12);"),n("br"),r._v("\n　　-> -1.57267341"),n("br"),r._v("\nmysql> select cot(0);"),n("br"),r._v("\n　　-> null")])]),r._v(" "),n("li",[n("p",[r._v("rand()"),n("br"),r._v("\nrand(n)"),n("br"),r._v("\n返回在范围0到1.0内的随机浮点值(可以使用数字n作为初始值)\nmysql> select rand();"),n("br"),r._v("\n　　-> 0.5925"),n("br"),r._v("\nmysql> select rand(20);"),n("br"),r._v("\n　　-> 0.1811"),n("br"),r._v("\nmysql> select rand(20);"),n("br"),r._v("\n　　-> 0.1811"),n("br"),r._v("\nmysql> select rand();"),n("br"),r._v("\n　　-> 0.2079"),n("br"),r._v("\nmysql> select rand();"),n("br"),r._v("\n　　-> 0.7888")])]),r._v(" "),n("li",[n("p",[r._v("degrees(n)"),n("br"),r._v("\n把n从弧度变换为角度并返回"),n("br"),r._v("\nmysql> select degrees(pi());"),n("br"),r._v("\n　　-> 180.000000")])]),r._v(" "),n("li",[n("p",[r._v("radians(n)"),n("br"),r._v("\n把n从角度变换为弧度并返回"),n("br"),r._v("\nmysql> select radians(90);"),n("br"),r._v("\n　　-> 1.570796")])]),r._v(" "),n("li",[n("p",[r._v("truncate(n,d)"),n("br"),r._v("\n保留数字n的d位小数并返回"),n("br"),r._v("\nmysql> select truncate(1.223,1);"),n("br"),r._v("\n　　-> 1.2"),n("br"),r._v("\nmysql> select truncate(1.999,1);"),n("br"),r._v("\n　　-> 1.9"),n("br"),r._v("\nmysql> select truncate(1.999,0);"),n("br"),r._v("\n　　-> 1")])]),r._v(" "),n("li",[n("p",[r._v("least(x,y,...)"),n("br"),r._v("\n返回最小值(如果返回值被用在整数(实数或大小敏感字串)上下文或所有参数都是整数(实数或大小敏感字串)则他们作为整数(实数或大小敏感字串)比较,否则按忽略大小写的字符串被比较)"),n("br"),r._v("\nmysql> select least(2,0);"),n("br"),r._v("\n　　-> 0"),n("br"),r._v("\nmysql> select least(34.0,3.0,5.0,767.0);"),n("br"),r._v("\n　　-> 3.0"),n("br"),r._v('\nmysql> select least("b","a","c");'),n("br"),r._v('\n　　-> "a"')])]),r._v(" "),n("li",[n("p",[r._v("greatest(x,y,...)"),n("br"),r._v("\n返回最大值(其余同least())"),n("br"),r._v("\nmysql> select greatest(2,0);"),n("br"),r._v("\n　　-> 2"),n("br"),r._v("\nmysql> select greatest(34.0,3.0,5.0,767.0);"),n("br"),r._v("\n　　-> 767.0"),n("br"),r._v('\nmysql> select greatest("b","a","c");'),n("br"),r._v('\n　　-> "c"')])])]),r._v(" "),n("h2",{attrs:{id:"时间函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间函数"}},[r._v("#")]),r._v(" 时间函数")]),r._v(" "),n("ul",[n("li",[n("p",[r._v("dayofweek(date)"),n("br"),r._v("\n返回日期date是星期几(1=星期天,2=星期一,……7=星期六,odbc标准)"),n("br"),r._v("\nmysql> select dayofweek('1998-02-03');"),n("br"),r._v("\n　　-> 3")])]),r._v(" "),n("li",[n("p",[r._v("weekday(date)"),n("br"),r._v("\n返回日期date是星期几(0=星期一,1=星期二,……6= 星期天)。\nmysql> select weekday('1997-10-04 22:23:00');"),n("br"),r._v("\n　　-> 5"),n("br"),r._v("\nmysql> select weekday('1997-11-05');"),n("br"),r._v("\n　　-> 2")])]),r._v(" "),n("li",[n("p",[r._v("dayofmonth(date)"),n("br"),r._v("\n返回date是一月中的第几日(在1到31范围内)"),n("br"),r._v("\nmysql> select dayofmonth('1998-02-03');"),n("br"),r._v("\n　　-> 3")])]),r._v(" "),n("li",[n("p",[r._v("dayofyear(date)"),n("br"),r._v("\n返回date是一年中的第几日(在1到366范围内)"),n("br"),r._v("\nmysql> select dayofyear('1998-02-03');"),n("br"),r._v("\n　　-> 34")])]),r._v(" "),n("li",[n("p",[r._v("month(date)"),n("br"),r._v("\n返回date中的月份数值"),n("br"),r._v("\nmysql> select month('1998-02-03');"),n("br"),r._v("\n　　-> 2")])]),r._v(" "),n("li",[n("p",[r._v("dayname(date)"),n("br"),r._v("\n返回date是星期几(按英文名返回)"),n("br"),r._v('\nmysql> select dayname("1998-02-05");'),n("br"),r._v("\n　　-> 'thursday'")])]),r._v(" "),n("li",[n("p",[r._v("monthname(date)"),n("br"),r._v("\n返回date是几月(按英文名返回)"),n("br"),r._v('\nmysql> select monthname("1998-02-05");'),n("br"),r._v("\n　　-> 'february'")])]),r._v(" "),n("li",[n("p",[r._v("quarter(date)"),n("br"),r._v("\n返回date是一年的第几个季度"),n("br"),r._v("\nmysql> select quarter('98-04-01');"),n("br"),r._v("\n　　-> 2")])]),r._v(" "),n("li",[n("p",[r._v("week(date,first)"),n("br"),r._v("\n返回date是一年的第几周(first默认值0,first取值1表示周一是\n周的开始,0从周日开始)"),n("br"),r._v("\nmysql> select week('1998-02-20');"),n("br"),r._v("\n　　-> 7"),n("br"),r._v("\nmysql> select week('1998-02-20',0);"),n("br"),r._v("\n　　-> 7"),n("br"),r._v("\nmysql> select week('1998-02-20',1);"),n("br"),r._v("\n　　-> 8")])]),r._v(" "),n("li",[n("p",[r._v("year(date)"),n("br"),r._v("\n返回date的年份(范围在1000到9999)"),n("br"),r._v("\nmysql> select year('98-02-03');"),n("br"),r._v("\n　　-> 1998")])]),r._v(" "),n("li",[n("p",[r._v("hour(time)"),n("br"),r._v("\n返回time的小时数(范围是0到23)"),n("br"),r._v("\nmysql> select hour('10:05:03');"),n("br"),r._v("\n　　-> 10")])]),r._v(" "),n("li",[n("p",[r._v("minute(time)"),n("br"),r._v("\n返回time的分钟数(范围是0到59)"),n("br"),r._v("\nmysql> select minute('98-02-03 10:05:03');"),n("br"),r._v("\n　　-> 5")])]),r._v(" "),n("li",[n("p",[r._v("second(time)"),n("br"),r._v("\n返回time的秒数(范围是0到59)"),n("br"),r._v("\nmysql> select second('10:05:03');"),n("br"),r._v("\n　　-> 3")])]),r._v(" "),n("li",[n("p",[r._v("period_add(p,n)"),n("br"),r._v("\n增加n个月到时期p并返回(p的格式yymm或yyyymm)"),n("br"),r._v("\nmysql> select period_add(9801,2);"),n("br"),r._v("\n　　-> 199803")])]),r._v(" "),n("li",[n("p",[r._v("period_diff(p1,p2)"),n("br"),r._v("\n返回在时期p1和p2之间月数(p1和p2的格式yymm或yyyymm)"),n("br"),r._v("\nmysql> select period_diff(9802,199703);"),n("br"),r._v("\n　　-> 11")])]),r._v(" "),n("li",[n("p",[r._v("date_add(date,interval expr type)"),n("br"),r._v("\ndate_sub(date,interval expr type)"),n("br"),r._v("\nadddate(date,interval expr type)"),n("br"),r._v("\nsubdate(date,interval expr type)"),n("br"),r._v("\n对日期时间进行加减法运算"),n("br"),r._v("\n(adddate()和subdate()是date_add()和date_sub()的同义词,也\n可以用运算符+和-而不是函数"),n("br"),r._v("\ndate是一个datetime或date值,expr对date进行加减法的一个表\n达式字符串type指明表达式expr应该如何被解释"),n("br"),r._v("\n　[type值 含义 期望的expr格式]:"),n("br"),r._v("\n　second 秒 seconds"),n("br"),r._v("\n　minute 分钟 minutes"),n("br"),r._v("\n　hour 时间 hours"),n("br"),r._v("\n　day 天 days"),n("br"),r._v("\n　month 月 months"),n("br"),r._v("\n　year 年 years"),n("br"),r._v('\n　minute_second 分钟和秒 "minutes:seconds"'),n("br"),r._v('\n　hour_minute 小时和分钟 "hours:minutes"'),n("br"),r._v('\n　day_hour 天和小时 "days hours"'),n("br"),r._v('\n　year_month 年和月 "years-months"'),n("br"),r._v('\n　hour_second 小时, 分钟， "hours:minutes:seconds"'),n("br"),r._v('\n　day_minute 天, 小时, 分钟 "days hours:minutes"'),n("br"),r._v('\n　day_second 天, 小时, 分钟, 秒 "days\nhours:minutes:seconds"\n　expr中允许任何标点做分隔符,如果所有是date值时结果是一个\ndate值,否则结果是一个datetime值)'),n("br"),r._v("\n　如果type关键词不完整,则mysql从右端取值,day_second因为缺\n少小时分钟等于minute_second)"),n("br"),r._v("\n　如果增加month、year_month或year,天数大于结果月份的最大天\n数则使用最大天数)"),n("br"),r._v('\nmysql> select "1997-12-31 23:59:59" + interval 1 second;'),n("br"),r._v("\n　　-> 1998-01-01 00:00:00"),n("br"),r._v('\nmysql> select interval 1 day + "1997-12-31";'),n("br"),r._v("\n　　-> 1998-01-01"),n("br"),r._v('\nmysql> select "1998-01-01" - interval 1 second;'),n("br"),r._v("\n　　-> 1997-12-31 23:59:59"),n("br"),r._v('\nmysql> select date_add("1997-12-31 23:59:59",interval 1\nsecond);'),n("br"),r._v("\n　　-> 1998-01-01 00:00:00"),n("br"),r._v('\nmysql> select date_add("1997-12-31 23:59:59",interval 1\nday);'),n("br"),r._v("\n　　-> 1998-01-01 23:59:59"),n("br"),r._v('\nmysql> select date_add("1997-12-31 23:59:59",interval\n"1:1" minute_second);'),n("br"),r._v("\n　　-> 1998-01-01 00:01:00"),n("br"),r._v('\nmysql> select date_sub("1998-01-01 00:00:00",interval "1\n1:1:1" day_second);'),n("br"),r._v("\n　　-> 1997-12-30 22:58:59"),n("br"),r._v('\nmysql> select date_add("1998-01-01 00:00:00", interval "-1\n10" day_hour);'),n("br"),r._v("\n　　-> 1997-12-30 14:00:00"),n("br"),r._v('\nmysql> select date_sub("1998-01-02", interval 31 day);'),n("br"),r._v("\n　　-> 1997-12-02"),n("br"),r._v('\nmysql> select extract(year from "1999-07-02");'),n("br"),r._v("\n　　-> 1999"),n("br"),r._v('\nmysql> select extract(year_month from "1999-07-02\n01:02:03");'),n("br"),r._v("\n　　-> 199907"),n("br"),r._v('\nmysql> select extract(day_minute from "1999-07-02\n01:02:03");'),n("br"),r._v("\n　　-> 20102")])]),r._v(" "),n("li",[n("p",[r._v("to_days(date)"),n("br"),r._v("\n返回日期date是西元0年至今多少天(不计算1582年以前)"),n("br"),r._v("\nmysql> select to_days(950501);"),n("br"),r._v("\n　　-> 728779"),n("br"),r._v("\nmysql> select to_days('1997-10-07');"),n("br"),r._v("\n　　-> 729669")])]),r._v(" "),n("li",[n("p",[r._v("from_days(n)"),n("br"),r._v("\n给出西元0年至今多少天返回date值(不计算1582年以前)"),n("br"),r._v("\nmysql> select from_days(729669);"),n("br"),r._v("\n　　-> '1997-10-07'")])]),r._v(" "),n("li",[n("p",[r._v("date_format(date,format)"),n("br"),r._v("\n　根据format字符串格式化date值"),n("br"),r._v("\n　(在format字符串中可用标志符:"),n("br"),r._v("\n　%m 月名字(january……december)"),n("br"),r._v("\n　%w 星期名字(sunday……saturday)"),n("br"),r._v("\n　%d 有英语前缀的月份的日期(1st, 2nd, 3rd, 等等。）"),n("br"),r._v("\n　%y 年, 数字, 4 位"),n("br"),r._v("\n　%y 年, 数字, 2 位"),n("br"),r._v("\n　%a 缩写的星期名字(sun……sat)"),n("br"),r._v("\n　%d 月份中的天数, 数字(00……31)"),n("br"),r._v("\n　%e 月份中的天数, 数字(0……31)"),n("br"),r._v("\n　%m 月, 数字(01……12)"),n("br"),r._v("\n　%c 月, 数字(1……12)"),n("br"),r._v("\n　%b 缩写的月份名字(jan……dec)"),n("br"),r._v("\n　%j 一年中的天数(001……366)"),n("br"),r._v("\n　%h 小时(00……23)"),n("br"),r._v("\n　%k 小时(0……23)"),n("br"),r._v("\n　%h 小时(01……12)"),n("br"),r._v("\n　%i 小时(01……12)"),n("br"),r._v("\n　%l 小时(1……12)"),n("br"),r._v("\n　%i 分钟, 数字(00……59)"),n("br"),r._v("\n　%r 时间,12 小时(hh:mm:ss [ap]m)"),n("br"),r._v("\n　%t 时间,24 小时(hh:mm:ss)"),n("br"),r._v("\n　%s 秒(00……59)"),n("br"),r._v("\n　%s 秒(00……59)"),n("br"),r._v("\n　%p am或pm"),n("br"),r._v("\n　%w 一个星期中的天数(0=sunday ……6=saturday ）"),n("br"),r._v("\n　%u 星期(0……52), 这里星期天是星期的第一天"),n("br"),r._v("\n　%u 星期(0……52), 这里星期一是星期的第一天"),n("br"),r._v("\n　%% 字符% )"),n("br"),r._v("\nmysql> select date_format('1997-10-04 22:23:00','%w %m %\ny');"),n("br"),r._v("\n　　-> 'saturday october 1997'"),n("br"),r._v("\nmysql> select date_format('1997-10-04 22:23:00','%h:%i:%\ns');"),n("br"),r._v("\n　　-> '22:23:00'"),n("br"),r._v("\nmysql> select date_format('1997-10-04 22:23:00','%d %y %a\n%d %m %b %j');"),n("br"),r._v("\n　　-> '4th 97 sat 04 10 oct 277'"),n("br"),r._v("\nmysql> select date_format('1997-10-04 22:23:00','%h %k %i\n%r %t %s %w');"),n("br"),r._v("\n　　-> '22 22 10 10:23:00 pm 22:23:00 00 6'")])]),r._v(" "),n("li",[n("p",[r._v("time_format(time,format)"),n("br"),r._v("\n　和date_format()类似,但time_format只处理小时、分钟和秒(其\n余符号产生一个null值或0)")])]),r._v(" "),n("li",[n("p",[r._v("curdate()"),n("br"),r._v("\ncurrent_date()"),n("br"),r._v("\n　以'yyyy-mm-dd'或yyyymmdd格式返回当前日期值(根据返回值所\n处上下文是字符串或数字)"),n("br"),r._v("\nmysql> select curdate();"),n("br"),r._v("\n　　-> '1997-12-15'"),n("br"),r._v("\nmysql> select curdate() + 0;"),n("br"),r._v("\n　　-> 19971215")])]),r._v(" "),n("li",[n("p",[r._v("curtime()"),n("br"),r._v("\ncurrent_time()"),n("br"),r._v("\n　以'hh:mm:ss'或hhmmss格式返回当前时间值(根据返回值所处上\n下文是字符串或数字)"),n("br"),r._v("\nmysql> select curtime();"),n("br"),r._v("\n　　-> '23:50:26'"),n("br"),r._v("\nmysql> select curtime() + 0;"),n("br"),r._v("\n　　-> 235026")])]),r._v(" "),n("li",[n("p",[r._v("now()"),n("br"),r._v("\nsysdate()"),n("br"),r._v("\ncurrent_timestamp()"),n("br"),r._v("\n　以'yyyy-mm-dd hh:mm:ss'或yyyymmddhhmmss格式返回当前日期\n时间(根据返回值所处上下文是字符串或数字)"),n("br"),r._v("\nmysql> select now();"),n("br"),r._v("\n　　-> '1997-12-15 23:50:26'"),n("br"),r._v("\nmysql> select now() + 0;"),n("br"),r._v("\n　　-> 19971215235026")])]),r._v(" "),n("li",[n("p",[r._v("unix_timestamp()"),n("br"),r._v("\nunix_timestamp(date)"),n("br"),r._v("\n返回一个unix时间戳(从'1970-01-01 00:00:00'gmt开始的秒\n数,date默认值为当前时间)"),n("br"),r._v("\nmysql> select unix_timestamp();"),n("br"),r._v("\n　　-> 882226357"),n("br"),r._v("\nmysql> select unix_timestamp('1997-10-04 22:23:00');"),n("br"),r._v("\n　　-> 875996580")])]),r._v(" "),n("li",[n("p",[r._v("from_unixtime(unix_timestamp)"),n("br"),r._v("\n以'yyyy-mm-dd hh:mm:ss'或yyyymmddhhmmss格式返回时间戳的\n值(根据返回值所处上下文是字符串或数字)"),n("br"),r._v("\nmysql> select from_unixtime(875996580);"),n("br"),r._v("\n　　-> '1997-10-04 22:23:00'"),n("br"),r._v("\nmysql> select from_unixtime(875996580) + 0;"),n("br"),r._v("\n　　-> 19971004222300")])]),r._v(" "),n("li",[n("p",[r._v("from_unixtime(unix_timestamp,format)"),n("br"),r._v("\n以format字符串格式返回时间戳的值"),n("br"),r._v("\nmysql> select from_unixtime(unix_timestamp(),'%y %d %m %\nh:%i:%s %x');"),n("br"),r._v("\n　　-> '1997 23rd december 03:43:30 x'")])]),r._v(" "),n("li",[n("p",[r._v("sec_to_time(seconds)"),n("br"),r._v("\n以'hh:mm:ss'或hhmmss格式返回秒数转成的time值(根据返回值所处上下文是字符串或数字)"),n("br"),r._v("\nmysql> select sec_to_time(2378);"),n("br"),r._v("\n　　-> '00:39:38'"),n("br"),r._v("\nmysql> select sec_to_time(2378) + 0;"),n("br"),r._v("\n　　-> 3938")])]),r._v(" "),n("li",[n("p",[r._v("time_to_sec(time)"),n("br"),r._v("\n返回time值有多少秒"),n("br"),r._v("\nmysql> select time_to_sec('22:23:00');"),n("br"),r._v("\n　　-> 80580"),n("br"),r._v("\nmysql> select time_to_sec('00:39:38');"),n("br"),r._v("\n　　-> 2378")])])]),r._v(" "),n("h2",{attrs:{id:"转换函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转换函数"}},[r._v("#")]),r._v(" 转换函数")]),r._v(" "),n("ul",[n("li",[r._v("cast\n用法：cast(字段 as 数据类型) [当然是否可以成功转换，还要看数据类型强制转化时注意的问题]\n实例：select cast(a as unsigned) as b from cardserver where order by b desc;")]),r._v(" "),n("li",[r._v("convert：\n用法：convert(字段,数据类型)\n实例：select convert(a ,unsigned) as b from cardserver where order by b desc;")])])])}),[],!1,null,null,null);n.default=s.exports}}]);