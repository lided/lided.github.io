import{_ as t,c as e,o as s,ag as p}from"./chunks/framework.DPDPlp3K.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{"order":11},"headers":[],"relativePath":"linux/命令分隔符.md","filePath":"linux/命令分隔符.md"}'),n={name:"linux/命令分隔符.md"};function o(c,a,d,i,l,m){return s(),e("div",null,a[0]||(a[0]=[p('<p>分号 <code>;</code>：分号用于分隔多条命令，每个命令都会按照顺序执行，不管前一个命令是否成功。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;command1&gt; ; &lt;command2&gt; ; &lt;command3&gt;</span></span></code></pre></div><p>逻辑与 <code>&amp;&amp;</code>：逻辑与连接符表示前一个命令成功后才执行下一个命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;command1&gt; &amp;&amp; &lt;command2&gt; &amp;&amp; &lt;command3&gt;</span></span></code></pre></div><p>逻辑或 <code>||</code>：逻辑或连接符表示如果前一个命令失败，则执行下一个命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;command1&gt; || &lt;command2&gt; || &lt;command3&gt;</span></span></code></pre></div><p>后台执行 <code>&amp;</code>：在命令末尾添加 <code>&amp;</code> 可以使该命令在后台执行，而不会阻塞当前终端</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;command1&gt; &amp; &lt;command2&gt; &amp; &lt;command3&gt;</span></span></code></pre></div>',8)]))}const h=t(n,[["render",o]]);export{r as __pageData,h as default};
