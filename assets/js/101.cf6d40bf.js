(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{464:function(s,n,e){"use strict";e.r(n);var a=e(26),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"nginx配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("user nginx nginx ;\n#Nginx用户及组：用户 组。window下不指定\n\nworker_processes 8;\n#工作进程：数目。根据硬件调整，通常等于CPU数量或者2倍于CPU。\n\n \n\nerror_log  logs/error.log;  \nerror_log  logs/error.log  notice;  \nerror_log  logs/error.log  info;  \n#错误日志：存放路径。\n\npid logs/nginx.pid;\n#pid（进程标识符）：存放路径。\n\nworker_rlimit_nofile 204800;\n#指定进程可以打开的最大描述符：数目。\n#这个指令是指当一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n 的值保持一致。\n#现在在Linux 2.6内核下开启文件打开数为65535，worker_rlimit_nofile就相应应该填写65535。这是因为nginx调度时分配请求到进程并不是那么的均衡，所以假如填写10240，总并发量达到3-4万时就有进程可能超过10240了，这时会返回502错误。\n\nevents\n{\nuse epoll;\n#使用epoll的I/O 模型。linux建议epoll，FreeBSD建议采用kqueue，window下不指定。\n\nworker_connections 204800;\n#没个工作进程的最大连接数量。根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为。worker_processes*worker_connections\n\nkeepalive_timeout 60;\n#keepalive超时时间。\n\n#client_header_buffer_size 4k;\n#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求头的大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。\n#分页大小可以用命令getconf PAGESIZE 取得。\n\nopen_file_cache max=65535 inactive=60s;\n#这个将为打开文件指定缓存，默认是没有启用的，max指定缓存数量，建议和打开文件数一致，inactive是指经过多长时间文件没被请求后删除缓存。\n\nopen_file_cache_valid 80s;\n#这个是指多长时间检查一次缓存的有效信息。\n\nopen_file_cache_min_uses 1;\n#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的，如上例，如果有一个文件在inactive时间内一次没被使用，它将被移除。\n}\n\n##设定http服务器，利用它的反向代理功能提供负载均衡支持\nhttp\n{\ninclude mime.types;\n#设定mime类型,类型由mime.type文件定义\n\ndefault_type application/octet-stream;\n\nlog_format main '$remote_addr - $remote_user [$time_local] \"$request\" '\n\n'$status $body_bytes_sent \"$http_referer\" '\n\n'\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\nlog_format log404 '$status [$time_local] $remote_addr $host$request_uri $sent_http_location';\n#日志格式设置。\n#$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；\n#$remote_user：用来记录客户端用户名称；\n#$time_local： 用来记录访问时间与时区；\n#$request： 用来记录请求的url与http协议；\n#$status： 用来记录请求状态；成功是200，\n#$body_bytes_sent ：记录发送给客户端文件主体内容大小；\n#$http_referer：用来记录从那个页面链接访问过来的；\n#$http_user_agent：记录客户浏览器的相关信息；\n#通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。\n\naccess_log  logs/host.access.log  main;\naccess_log  logs/host.access.404.log  log404;\n#用了log_format指令设置了日志格式之后，需要用access_log指令指定日志文件的存放路径；\n\nserver_names_hash_bucket_size 128;\n#保存服务器名字的hash表是由指令server_names_hash_max_size 和server_names_hash_bucket_size所控制的。参数hash bucket size总是等于hash表的大小，并且是一路处理器缓存大小的倍数。在减少了在内存中的存取次数后，使在处理器中加速查找hash表键值成为可能。如果hash bucket size等于一路处理器缓存的大小，那么在查找键的时候，最坏的情况下在内存中查找的次数为2。第一次是确定存储单元的地址，第二次是在存储单元中查找键 值。因此，如果Nginx给出需要增大hash max size 或 hash bucket size的提示，那么首要的是增大前一个参数的大小.\n\nclient_header_buffer_size 4k;\n#客户端请求头部的缓冲区大小。这个可以根据你的系统分页大小来设置，一般一个请求的头部大小不会超过1k，不过由于一般系统分页都要大于1k，所以这里设置为分页大小。分页大小可以用命令getconf PAGESIZE取得。\n\nlarge_client_header_buffers 8 128k;\n#客户请求头缓冲大小。nginx默认会用client_header_buffer_size这个buffer来读取header值，如果\n#header过大，它会使用large_client_header_buffers来读取。\n\nopen_file_cache max=102400 inactive=20s;\n#这个指令指定缓存是否启用。\n#例: open_file_cache max=1000 inactive=20s; \nopen_file_cache_valid 30s; \nopen_file_cache_min_uses 2; \nopen_file_cache_errors on;\n#语法:open_file_cache_errors on | off 默认值:open_file_cache_errors off 使用字段:http, server, location 这个指令指定是否在搜索一个文件是记录cache错误.\n#语法:open_file_cache_min_uses number 默认值:open_file_cache_min_uses 1 使用字段:http, server, location 这个指令指定了在open_file_cache指令无效的参数中一定的时间范围内可以使用的最小文件数,如果使用更大的值,文件描述符在cache中总是打开状态.\n语法:open_file_cache_valid time 默认值:open_file_cache_valid 60 使用字段:http, server, location 这个指令指定了何时需要检查open_file_cache中缓存项目的有效信息.\n\nclient_max_body_size 300m;\n#设定通过nginx上传文件的大小\n\nsendfile on;\n#sendfile指令指定 nginx 是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。\n\ntcp_nopush on;\n#此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用\n\nproxy_connect_timeout 90; \n#后端服务器连接的超时时间_发起握手等候响应超时时间\n\nproxy_read_timeout 180;\n#连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）\n\nproxy_send_timeout 180;\n#后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据\n\nproxy_buffer_size 256k;\n#设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小\n\nproxy_buffers 4 256k;\n#设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k\n\nproxy_busy_buffers_size 256k;\nproxy_temp_file_write_size 256k;\n#设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长\n\nproxy_temp_path /data0/proxy_temp_dir;\n#proxy_temp_path和proxy_cache_path指定的路径必须在同一分区\n\nproxy_cache_path /data0/proxy_cache_dir levels=1:2 keys_zone=cache_one:200m inactive=1d max_size=30g;\n#设置内存缓存空间大小为200MB，1天没有被访问的内容自动清除，硬盘缓存空间大小为30GB。\n\nkeepalive_timeout 120;\n#keepalive超时时间。\n\ntcp_nodelay on;\n\nclient_body_buffer_size 512k;\n#如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。\n#无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误\n\nproxy_intercept_errors on;\n#表示使nginx阻止HTTP应答代码为400或者更高的应答。\n\nupstream bakend {\nserver 127.0.0.1:8027;\nserver 127.0.0.1:8028;\nserver 127.0.0.1:8029;\nhash $request_uri;\n}\n\n#nginx的upstream目前支持4种方式的分配\n#1、轮询（默认）\n#每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。\n#2、weight\n#指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。\n#例如：\n#upstream bakend {\n#server 192.168.0.14 weight=10;\n#server 192.168.0.15 weight=10;\n#}\n\n#2、ip_hash\n#每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。\n#例如：\n#upstream bakend {\n#ip_hash;\n#server 192.168.0.14:88;\n#server 192.168.0.15:80;\n#}\n#3、fair（第三方）\n#按后端服务器的响应时间来分配请求，响应时间短的优先分配。\n#upstream backend {\n#server server1;\n#server server2;\n#fair;\n#}\n#4、url_hash（第三方）\n#按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。\n#例：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法\n#upstream backend {\n#server squid1:3128;\n#server squid2:3128;\n#hash $request_uri;\n#hash_method crc32;\n#}\n\n#tips:\n#upstream bakend{#定义负载均衡设备的Ip及设备状态}{\n#ip_hash;\n#server 127.0.0.1:9090 down;\n#server 127.0.0.1:8080 weight=2;\n#server 127.0.0.1:6060;\n#server 127.0.0.1:7070 backup;\n#}\n#在需要使用负载均衡的server中增加\n#proxy_pass http://bakend/;\n\n#每个设备的状态设置为:\n#1.down表示单前的server暂时不参与负载\n#2.weight为weight越大，负载的权重就越大。\n#3.max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream模块定义的错误\n#4.fail_timeout:max_fails次失败后，暂停的时间。\n#5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。\n\n#nginx支持同时设置多组的负载均衡，用来给不用的server来使用。\n#client_body_in_file_only设置为On 可以讲client post过来的数据记录到文件中用来做debug\n#client_body_temp_path设置记录文件的目录 可以设置最多3层目录\n#location对URL进行匹配.可以进行重定向或者进行新的代理 负载均衡\n\n##配置虚拟机\nserver\n{\nlisten 80;\n#配置监听端口\n\nserver_name image.***.com;\n#配置访问域名\n\nlocation ~* \\.(mp3|exe)$ {\n#对以“mp3或exe”结尾的地址进行负载均衡\n\nproxy_pass http://img_relay$request_uri;\n#设置被代理服务器的端口或套接字，以及URL\n\nproxy_set_header Host $host;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n#以上三行，目的是将代理服务器收到的用户的信息传到真实服务器上\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br"),e("span",{staticClass:"line-number"},[s._v("125")]),e("br"),e("span",{staticClass:"line-number"},[s._v("126")]),e("br"),e("span",{staticClass:"line-number"},[s._v("127")]),e("br"),e("span",{staticClass:"line-number"},[s._v("128")]),e("br"),e("span",{staticClass:"line-number"},[s._v("129")]),e("br"),e("span",{staticClass:"line-number"},[s._v("130")]),e("br"),e("span",{staticClass:"line-number"},[s._v("131")]),e("br"),e("span",{staticClass:"line-number"},[s._v("132")]),e("br"),e("span",{staticClass:"line-number"},[s._v("133")]),e("br"),e("span",{staticClass:"line-number"},[s._v("134")]),e("br"),e("span",{staticClass:"line-number"},[s._v("135")]),e("br"),e("span",{staticClass:"line-number"},[s._v("136")]),e("br"),e("span",{staticClass:"line-number"},[s._v("137")]),e("br"),e("span",{staticClass:"line-number"},[s._v("138")]),e("br"),e("span",{staticClass:"line-number"},[s._v("139")]),e("br"),e("span",{staticClass:"line-number"},[s._v("140")]),e("br"),e("span",{staticClass:"line-number"},[s._v("141")]),e("br"),e("span",{staticClass:"line-number"},[s._v("142")]),e("br"),e("span",{staticClass:"line-number"},[s._v("143")]),e("br"),e("span",{staticClass:"line-number"},[s._v("144")]),e("br"),e("span",{staticClass:"line-number"},[s._v("145")]),e("br"),e("span",{staticClass:"line-number"},[s._v("146")]),e("br"),e("span",{staticClass:"line-number"},[s._v("147")]),e("br"),e("span",{staticClass:"line-number"},[s._v("148")]),e("br"),e("span",{staticClass:"line-number"},[s._v("149")]),e("br"),e("span",{staticClass:"line-number"},[s._v("150")]),e("br"),e("span",{staticClass:"line-number"},[s._v("151")]),e("br"),e("span",{staticClass:"line-number"},[s._v("152")]),e("br"),e("span",{staticClass:"line-number"},[s._v("153")]),e("br"),e("span",{staticClass:"line-number"},[s._v("154")]),e("br"),e("span",{staticClass:"line-number"},[s._v("155")]),e("br"),e("span",{staticClass:"line-number"},[s._v("156")]),e("br"),e("span",{staticClass:"line-number"},[s._v("157")]),e("br"),e("span",{staticClass:"line-number"},[s._v("158")]),e("br"),e("span",{staticClass:"line-number"},[s._v("159")]),e("br"),e("span",{staticClass:"line-number"},[s._v("160")]),e("br"),e("span",{staticClass:"line-number"},[s._v("161")]),e("br"),e("span",{staticClass:"line-number"},[s._v("162")]),e("br"),e("span",{staticClass:"line-number"},[s._v("163")]),e("br"),e("span",{staticClass:"line-number"},[s._v("164")]),e("br"),e("span",{staticClass:"line-number"},[s._v("165")]),e("br"),e("span",{staticClass:"line-number"},[s._v("166")]),e("br"),e("span",{staticClass:"line-number"},[s._v("167")]),e("br"),e("span",{staticClass:"line-number"},[s._v("168")]),e("br"),e("span",{staticClass:"line-number"},[s._v("169")]),e("br"),e("span",{staticClass:"line-number"},[s._v("170")]),e("br"),e("span",{staticClass:"line-number"},[s._v("171")]),e("br"),e("span",{staticClass:"line-number"},[s._v("172")]),e("br"),e("span",{staticClass:"line-number"},[s._v("173")]),e("br"),e("span",{staticClass:"line-number"},[s._v("174")]),e("br"),e("span",{staticClass:"line-number"},[s._v("175")]),e("br"),e("span",{staticClass:"line-number"},[s._v("176")]),e("br"),e("span",{staticClass:"line-number"},[s._v("177")]),e("br"),e("span",{staticClass:"line-number"},[s._v("178")]),e("br"),e("span",{staticClass:"line-number"},[s._v("179")]),e("br"),e("span",{staticClass:"line-number"},[s._v("180")]),e("br"),e("span",{staticClass:"line-number"},[s._v("181")]),e("br"),e("span",{staticClass:"line-number"},[s._v("182")]),e("br"),e("span",{staticClass:"line-number"},[s._v("183")]),e("br"),e("span",{staticClass:"line-number"},[s._v("184")]),e("br"),e("span",{staticClass:"line-number"},[s._v("185")]),e("br"),e("span",{staticClass:"line-number"},[s._v("186")]),e("br"),e("span",{staticClass:"line-number"},[s._v("187")]),e("br"),e("span",{staticClass:"line-number"},[s._v("188")]),e("br"),e("span",{staticClass:"line-number"},[s._v("189")]),e("br"),e("span",{staticClass:"line-number"},[s._v("190")]),e("br"),e("span",{staticClass:"line-number"},[s._v("191")]),e("br"),e("span",{staticClass:"line-number"},[s._v("192")]),e("br"),e("span",{staticClass:"line-number"},[s._v("193")]),e("br"),e("span",{staticClass:"line-number"},[s._v("194")]),e("br"),e("span",{staticClass:"line-number"},[s._v("195")]),e("br"),e("span",{staticClass:"line-number"},[s._v("196")]),e("br"),e("span",{staticClass:"line-number"},[s._v("197")]),e("br"),e("span",{staticClass:"line-number"},[s._v("198")]),e("br"),e("span",{staticClass:"line-number"},[s._v("199")]),e("br"),e("span",{staticClass:"line-number"},[s._v("200")]),e("br"),e("span",{staticClass:"line-number"},[s._v("201")]),e("br"),e("span",{staticClass:"line-number"},[s._v("202")]),e("br"),e("span",{staticClass:"line-number"},[s._v("203")]),e("br"),e("span",{staticClass:"line-number"},[s._v("204")]),e("br"),e("span",{staticClass:"line-number"},[s._v("205")]),e("br"),e("span",{staticClass:"line-number"},[s._v("206")]),e("br"),e("span",{staticClass:"line-number"},[s._v("207")]),e("br"),e("span",{staticClass:"line-number"},[s._v("208")]),e("br"),e("span",{staticClass:"line-number"},[s._v("209")]),e("br"),e("span",{staticClass:"line-number"},[s._v("210")]),e("br"),e("span",{staticClass:"line-number"},[s._v("211")]),e("br"),e("span",{staticClass:"line-number"},[s._v("212")]),e("br"),e("span",{staticClass:"line-number"},[s._v("213")]),e("br"),e("span",{staticClass:"line-number"},[s._v("214")]),e("br"),e("span",{staticClass:"line-number"},[s._v("215")]),e("br"),e("span",{staticClass:"line-number"},[s._v("216")]),e("br"),e("span",{staticClass:"line-number"},[s._v("217")]),e("br"),e("span",{staticClass:"line-number"},[s._v("218")]),e("br"),e("span",{staticClass:"line-number"},[s._v("219")]),e("br"),e("span",{staticClass:"line-number"},[s._v("220")]),e("br"),e("span",{staticClass:"line-number"},[s._v("221")]),e("br"),e("span",{staticClass:"line-number"},[s._v("222")]),e("br"),e("span",{staticClass:"line-number"},[s._v("223")]),e("br"),e("span",{staticClass:"line-number"},[s._v("224")]),e("br"),e("span",{staticClass:"line-number"},[s._v("225")]),e("br"),e("span",{staticClass:"line-number"},[s._v("226")]),e("br"),e("span",{staticClass:"line-number"},[s._v("227")]),e("br"),e("span",{staticClass:"line-number"},[s._v("228")]),e("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);