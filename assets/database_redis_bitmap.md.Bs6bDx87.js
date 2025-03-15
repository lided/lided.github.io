import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/redis/bitmap.md","filePath":"database/redis/bitmap.md"}'),t={name:"database/redis/bitmap.md"};function i(l,s,c,o,d,r){return p(),n("div",null,s[0]||(s[0]=[e(`<p>bitmap就是string,不过是以二进制的视角进行操作</p><div class="language-redis vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">redis</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改key指定位的值</span></span>
<span class="line"><span>setbit key offset [0|1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建k1,第12位设置为1,其他位(&lt;12)为默认值0</span></span>
<span class="line"><span>127.0.0.1:6379&gt; setbit k1 12 1</span></span>
<span class="line"><span>(integer) 1</span></span></code></pre></div><ul><li>如果key不存在则创建,长度为offset</li><li>offset最小为0,最大为2^32 -1,限制最大为512MB(即string限制)</li></ul><div class="language-redis vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">redis</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 获取key指定位的值</span></span>
<span class="line"><span>getbit key offset</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看k1第12位的值</span></span>
<span class="line"><span>127.0.0.1:6379&gt; getbit k1 12</span></span>
<span class="line"><span>(integer) 1</span></span></code></pre></div><div class="language-redis vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">redis</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查询指定范围字节/比特中1的数量</span></span>
<span class="line"><span>bitcount key [start end [byte | bit]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询k1从2-&gt;倒2 字节中1的数量</span></span>
<span class="line"><span># foobar 二进制: 01100110 01101111 01101111 01100010 01100001 01110010</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set k1 foobar</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379&gt; bitcount k1 2 -2 byte</span></span>
<span class="line"><span>(integer) 12</span></span></code></pre></div><div class="language-redis vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">redis</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 将多个bitmap按照指定方式运算,结果赋给new_key</span></span>
<span class="line"><span>bitop &lt;and | or | xor | not&gt; new_key [key]...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将k1 k2 与操作赋值给nk</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set k1 a # 01100001</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set k2 b # 01100010</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379&gt; bitop and nk k1 k2</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379&gt; get nk</span></span>
<span class="line"><span>&quot;\`&quot; # 01100000</span></span></code></pre></div><ul><li>当多个bitmap长度不一致时,会填充0</li><li>当给出的key不存在时,也会填充0</li><li>not运算有且只能提供一个key</li></ul><blockquote><p>bitop会遍历所有位,对于长数据会比较耗时,推荐使用集群,从库只读,在从库中执行bitop</p></blockquote><div class="language-redis vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">redis</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查询指定范围第一个0/1的位置,不存在返回-1</span></span>
<span class="line"><span>bitpos key &lt;0|1&gt; [start [end [BYTE | BIT]]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询k从2-&gt;倒1字节中第一个0的位置</span></span>
<span class="line"><span>127.0.0.1:6379&gt; set k foobar</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379&gt; bitpos k 0 2 -1 byte</span></span>
<span class="line"><span>(integer) 16</span></span></code></pre></div><ul><li>start,end可以为负数(-2为倒数第二个)</li></ul>`,10)]))}const k=a(t,[["render",i]]);export{g as __pageData,k as default};
