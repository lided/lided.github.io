import{_ as r,c as t,o,ag as e}from"./chunks/framework.DPDPlp3K.js";const d=JSON.parse('{"title":"背景","description":"","frontmatter":{},"headers":[],"relativePath":"java/juc/LockSupport.md","filePath":"java/juc/LockSupport.md"}'),p={name:"java/juc/LockSupport.md"};function n(c,a,i,l,s,u){return o(),t("div",null,a[0]||(a[0]=[e('<h1 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h1><p>wait/notify,await/signal 使用时必须在同步代码快中,并且顺序不能变,有很大的限制</p><h1 id="locksupport" tabindex="-1">locksupport <a class="header-anchor" href="#locksupport" aria-label="Permalink to &quot;locksupport&quot;">​</a></h1><h6 id="为什么可以不用遵守调用顺序" tabindex="-1">为什么可以不用遵守调用顺序? <a class="header-anchor" href="#为什么可以不用遵守调用顺序" aria-label="Permalink to &quot;为什么可以不用遵守调用顺序?&quot;">​</a></h6><p>locksupport有一个通行凭证来确定线程是否阻塞,可以先unpark获得凭证,当再次park阻塞时就会直接放行(不会阻塞)</p><h6 id="为什么连续unpark俩次后不能park俩次" tabindex="-1">为什么连续unpark俩次后不能park俩次? <a class="header-anchor" href="#为什么连续unpark俩次后不能park俩次" aria-label="Permalink to &quot;为什么连续unpark俩次后不能park俩次?&quot;">​</a></h6><p>凭证最多只能有一个</p>',7)]))}const h=r(p,[["render",n]]);export{d as __pageData,h as default};
