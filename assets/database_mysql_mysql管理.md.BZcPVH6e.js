import{_ as s,c as i,o as l,ag as t}from"./chunks/framework.DPDPlp3K.js";const e="/assets/Pasted%20image%2020240223193455.BKfGWKyK.png",n="/assets/Pasted%20image%2020240224161541.wGKYgg_0.png",u=JSON.parse('{"title":"系统数据库","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/mysql管理.md","filePath":"database/mysql/mysql管理.md"}'),h={name:"database/mysql/mysql管理.md"};function p(o,a,d,r,k,c){return l(),i("div",null,a[0]||(a[0]=[t('<h1 id="系统数据库" tabindex="-1">系统数据库 <a class="header-anchor" href="#系统数据库" aria-label="Permalink to &quot;系统数据库&quot;">​</a></h1><p><img src="'+e+'" alt=""></p><h1 id="常用工具" tabindex="-1">常用工具 <a class="header-anchor" href="#常用工具" aria-label="Permalink to &quot;常用工具&quot;">​</a></h1><h2 id="mysql-client" tabindex="-1">mysql client <a class="header-anchor" href="#mysql-client" aria-label="Permalink to &quot;mysql client&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">database_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;?</span></span></code></pre></div><ul><li>[options] <ul><li>-h,--host 指定ip</li><li>-P,--port 指定端口</li><li>-p,--password 指定密码</li><li>-u,--user 指定登录用户</li><li>-e,--execute 指定要运行的sql,然后推出</li></ul></li></ul><h2 id="mysqladmin" tabindex="-1">mysqladmin <a class="header-anchor" href="#mysqladmin" aria-label="Permalink to &quot;mysqladmin&quot;">​</a></h2><h2 id="mysqlbinlog" tabindex="-1">mysqlbinlog <a class="header-anchor" href="#mysqlbinlog" aria-label="Permalink to &quot;mysqlbinlog&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqlbinlog [options] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log_file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log_file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;+</span></span></code></pre></div><ul><li>[options] <ul><li>-d,--database</li><li>-o,--offset 忽略日志前n行</li><li>-r,--result-file 输出到指定文件</li><li>-s,--short-form 简单格式</li><li>--start-datatime</li><li>--stop-datatime 指定日期间隔</li><li>--start-position</li><li>--stop-position 指定位置间隔</li></ul></li></ul><h2 id="mysqlshow" tabindex="-1">mysqlshow <a class="header-anchor" href="#mysqlshow" aria-label="Permalink to &quot;mysqlshow&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqlshow [options] [ database [ table [ filed] ] ]</span></span></code></pre></div><ul><li>[options] <ul><li>-i 显示状态信息</li><li>--count 显示统计信息</li></ul></li></ul><h2 id="mysqldump" tabindex="-1">mysqldump <a class="header-anchor" href="#mysqldump" aria-label="Permalink to &quot;mysqldump&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqldump [options] [database_table] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">file_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li>[options] <ul><li>--add-drop-database 在创建database前执行drop</li><li>--add-drop-table 同database(默认开启)</li><li>-n,--no-create-db 不包含create database</li><li>-t,--no-create-info 不包含create table</li><li>-d,--no-data 不包含数据</li><li>-T,--tab 将表结构和数据分开,并指定数据文件</li><li>--single-transaction innodb引擎不加锁保持数据一致性</li></ul></li><li>[database_table] <ul><li>&lt;database_name&gt; &lt;table_name&gt;? 指定database,table</li><li>--database,-B 指定多个database,逗号隔开</li><li>--all-databases,-A 所有database</li></ul></li></ul><h2 id="mysqlimport" tabindex="-1">mysqlimport <a class="header-anchor" href="#mysqlimport" aria-label="Permalink to &quot;mysqlimport&quot;">​</a></h2><p>导入mysqldump使用-T参数生成的数据文件</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqlimport [options] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;database&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;+</span></span></code></pre></div><h2 id="source" tabindex="-1">source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;source&quot;">​</a></h2><p>导入sql文件</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">source </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sql_file_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h1 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h1><ul><li>错误日志</li><li>二进制日志</li><li>查询日志</li><li>慢查询日志</li></ul><h2 id="错误日志" tabindex="-1">错误日志 <a class="header-anchor" href="#错误日志" aria-label="Permalink to &quot;错误日志&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show variables </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">like</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%log_error%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>默认路径</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/var/log/mysqld.log</span></span></code></pre></div><h2 id="二进制日志" tabindex="-1">二进制日志 <a class="header-anchor" href="#二进制日志" aria-label="Permalink to &quot;二进制日志&quot;">​</a></h2><p>记录所有DDL(定义),DML(操作)语句</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show variables </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">like</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;%log_bin%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to &quot;清理&quot;">​</a></h3><p><img src="'+n+'" alt=""></p><p>二进制日志过期时间</p><blockquote><p>binlog_expire_logs_seconds</p></blockquote><h2 id="查询日志" tabindex="-1">查询日志 <a class="header-anchor" href="#查询日志" aria-label="Permalink to &quot;查询日志&quot;">​</a></h2><p>记录所有sql,默认不开启</p><p>查询日志参数</p><blockquote><p>general_log</p></blockquote><blockquote><p>general_log_file</p></blockquote><h2 id="满查询日志" tabindex="-1">满查询日志 <a class="header-anchor" href="#满查询日志" aria-label="Permalink to &quot;满查询日志&quot;">​</a></h2><p>记录所以超过指定时间的查询sql</p><ul><li>slow_query_log 是否开启慢查询日志( 0 | 1 )</li><li>long_query_time 指定超时时间(default 10,单位s)</li><li>log_slow_admin_statements 是否记录管理sql</li><li>log_queries_not_using_indexes 是否记录不索引sql</li></ul>',43)]))}const b=s(h,[["render",p]]);export{u as __pageData,b as default};
