import{_ as i,c as a,o as t,ag as e}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"用户","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/user and authority.md","filePath":"database/mysql/user and authority.md"}'),n={name:"database/mysql/user and authority.md"};function l(h,s,p,k,d,r){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="用户" tabindex="-1">用户 <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户&quot;">​</a></h1><p>mysql中用户表主键有俩个user和host,在语句中对用户操作时,格式如下</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- user 用户名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- host 允许连接方式 有localhost和%俩个</span></span></code></pre></div><p>也可以不写host默认host</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span></span></code></pre></div><h3 id="新建用户" tabindex="-1">新建用户 <a class="header-anchor" href="#新建用户" aria-label="Permalink to &quot;新建用户&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> identified </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user_password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="删除用户" tabindex="-1">删除用户 <a class="header-anchor" href="#删除用户" aria-label="Permalink to &quot;删除用户&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>也可以删除多个,用逗号隔开</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[,&#39;user&#39;@&#39;host&#39;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="修改密码" tabindex="-1">修改密码 <a class="header-anchor" href="#修改密码" aria-label="Permalink to &quot;修改密码&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user() identified </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;new_password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- user() 获取当前用户的函数</span></span></code></pre></div><p>也可以指定用户修改(修改他人需要权限)</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> identified </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;new_password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>也可以通过delete,update,insert语句操作用户表(不推荐),并且需要刷新</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flush privileges;</span></span></code></pre></div><h3 id="密码过期策略" tabindex="-1">密码过期策略 <a class="header-anchor" href="#密码过期策略" aria-label="Permalink to &quot;密码过期策略&quot;">​</a></h3><h4 id="全局参数" tabindex="-1">全局参数 <a class="header-anchor" href="#全局参数" aria-label="Permalink to &quot;全局参数&quot;">​</a></h4><p>mysql中有一个<strong>default_password_lifetime</strong>参数,表示全局密码过期时间,超过此时间强制过期(默认0,永不过期)</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> persist default_password_lifetime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 180</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 设置为180天</span></span></code></pre></div><p>也可以在my.cnf中指定</p><div class="language-cnf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cnf</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>default_password_lifetime = 180</span></span></code></pre></div><h4 id="单独操作" tabindex="-1">单独操作 <a class="header-anchor" href="#单独操作" aria-label="Permalink to &quot;单独操作&quot;">​</a></h4><p>root用户可以手动设置某用户密码过期时间</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> expire[interval 90 day|never|default];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 通过interval指定时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- never 从不过期</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- default 使用全局参数</span></span></code></pre></div><p>也可以设置某用户立马过期</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> expire;</span></span></code></pre></div><p>设置后,该用户可以正常登录,但是不能sql操作.只能重新设置密码</p><h2 id="权限" tabindex="-1">权限 <a class="header-anchor" href="#权限" aria-label="Permalink to &quot;权限&quot;">​</a></h2><p>查看有哪些权限</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show privileges;</span></span></code></pre></div><h3 id="授权" tabindex="-1">授权 <a class="header-anchor" href="#授权" aria-label="Permalink to &quot;授权&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">grant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 权限1[,权限2]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">table</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [identified by &#39;new_password&#39;]?;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 多个权限之间用逗号隔开 all指定所有权限</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- database 指定数据库 *指定所有数据库</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- table  指定表 *指定数据库下所有表</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 如指定密码可以同时创建用户</span></span></code></pre></div><h3 id="查看权限" tabindex="-1">查看权限 <a class="header-anchor" href="#查看权限" aria-label="Permalink to &quot;查看权限&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show grants [for &#39;user&#39;@&#39;host&#39;]?;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查看指定用户权限,不指定为当前用户</span></span></code></pre></div><h3 id="收回权限" tabindex="-1">收回权限 <a class="header-anchor" href="#收回权限" aria-label="Permalink to &quot;收回权限&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">revoke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 权限1[,权限2]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">table</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;host&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,38)]))}const c=i(n,[["render",l]]);export{g as __pageData,c as default};
