import{_ as E,o as A,c as e,V as T}from"./chunks/framework.7cbf217e.js";const n=JSON.parse('{"title":"ORACLE表空间","description":"","frontmatter":{"title":"ORACLE表空间"},"headers":[],"relativePath":"database/oracle/oracle表空间.md","filePath":"database/oracle/oracle表空间.md","lastUpdated":1684479953000}'),a={name:"database/oracle/oracle表空间.md"},l=T('<h2 id="oracle表空间" tabindex="-1">ORACLE表空间 <a class="header-anchor" href="#oracle表空间" aria-label="Permalink to &quot;ORACLE表空间&quot;">​</a></h2><ul><li>1、查看所有的表空间：SELECT * FROM DBA_TABLESPACES;</li><li>2、查看某个用户的默认表空间：SELECT DEFAULT_TABLESPACE,USERNAME FROM DBA_USERS WHERE USERNAME=&#39;username&#39;;</li><li>3、查看表空间剩余容量：SELECT TABLESPACE_NAME,SUM(BYTES) FROM DBA_FREE_SPACE GROUP BY TABLESPACE_NAME;</li><li>4、查看表空间数据文件的信息：SELECT * FROM DBA_DATA_FILES;</li><li>5、创建表空间：CREATE TABLESPACE ODI DATAFILE &#39;D:\\ORACLE\\PRODUCT\\10.2.0\\ORADATA\\ORCL\\ODI.DBF &#39; SIZE 50M AUTOEXTEND ON NEXT 10M PERMANENT EXTENT MANAGEMENT LOCAL;</li><li>完整的建表空间语句：CREATE TABLESPACE tablespace_name DATAFILE &#39;filename&#39; SIZE size [AUTOEXTEND [ON NEXT size | OFF]] [MAXSIZE size][PERMANENT | TEMPORARY][EXTENT MANAGEMENT DICTIONARY | LOCAL];</li><li>6、重命名表空间：ALTER TABLESPACE oldname RENAME TO newname;</li><li>7、设置表空间的读写状态：ALTER TABLESPACE tablespace_name READ ONLY | WRITE;</li><li>8、设置表空间的可用状态：ALTER TABLESPACE tablespace_name ONLINE | OFFLINE [NORAML | TEMPORARY | IMMEDIATE];如果是联机状态，那么表空间就可以被用户操作，反之设置成脱机状态，表空间就不是不可用的，脱机状态还包括3种方式。</li><li>9、建立大文件表空间：CREATE BIGFILE TABLESPACE tablespace_name DATAFILE &#39;filename&#39; SIZE size;</li><li>10、删除表空间：DROP TABLESPACE tablespace_name [INCLUDING CONTENTS][CASCADE CONSTRAINTS];INCLUDING CONTENTS表示把表空间里的数据文件也删除，CASCADE CONSTRAINTS会把表空间中的完整性也删除。</li><li>11、临时表空间一般是指在数据库中存储数据，当内存不够时写入的空间，这个空间并不像一般的表空间，当执行完对数据库的操作后，该空间的内容自动清空。</li><li>12、创建临时表空间：CREATE TEMPORARY TABLESPACE tablespace_name TEMPFILE &#39;filename&#39; SIZE size;</li><li>13、设置临时表空间为默认表空间：ALTER DATABASE DEFAULT TEMPORARY TABLESPACE tablespace_name;</li><li>14、查询临时表空间：SELECT * FROM DBA_TMP_FILES;</li><li>15、创建临时表空间组：CREATE TEMPORARY TABLESPACE tablespace_name TMPFILE &#39;filename&#39; SIZE size TABLESPACE GROUP group_name;</li><li>16、移动临时表空间到表空间组：ALTER TABLESPACE tablespace_name TABLESPACE GROUP group_name;</li><li>17、查询临时表空间组：SELECT * FROM DBA_TABLESPACE_GROUPS;</li><li>18、删除临时表空间：DROP TABLESPACE tablespace_name INCLUDING CONTENTS AND DATAFILES;</li><li>19、删除表空间中的数据文件：ALTER TABLESPACE tablespace_name DROP DATAFILE &#39;filename&#39;;</li><li>20、向表空间里增加数据文件：ALTER TABLESPACE tablespace_name ADD DATAFILE &#39;filename&#39; SIZE size;</li><li>21、向表空间里新增数据文件，并且允许数据文件自动增长：ALTER TABLESPACE tablespace_name ADD DATAFILE &#39;filename&#39; SIZE 50M AUTOEXTEND ON NEXT 5M MAXSIZE 100M;</li><li>22、允许已存在的数据文件自动增长：ALTER DATABASE DATAFILE &#39;filename&#39; AUTOEXTEND ON NEXT 5M MAXSIZE 100M;</li><li>23、手工改变已存在数据文件的大小：ALTER DATABASE DATAFILE &#39;filename&#39; RESIZE 100M;</li></ul>',2),i=[l];function L(S,R,C,_,t,N){return A(),e("div",null,i)}const D=E(a,[["render",L]]);export{n as __pageData,D as default};
