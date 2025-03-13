import{_ as a,c as e,o as r,ag as d}from"./chunks/framework.DPDPlp3K.js";const _=JSON.parse('{"title":"无锁","description":"","frontmatter":{},"headers":[],"relativePath":"java/juc/锁类型.md","filePath":"java/juc/锁类型.md"}'),n={name:"java/juc/锁类型.md"};function o(l,t,s,i,h,c){return r(),e("div",null,t[0]||(t[0]=[d('<h1 id="无锁" tabindex="-1">无锁 <a class="header-anchor" href="#无锁" aria-label="Permalink to &quot;无锁&quot;">​</a></h1><h1 id="偏向锁" tabindex="-1">偏向锁 <a class="header-anchor" href="#偏向锁" aria-label="Permalink to &quot;偏向锁&quot;">​</a></h1><p>为了减少线程切换消耗,偏向锁会偏向第一个获取锁的线程</p><p>大多数多线程情况下,不仅不存在线程竞争,而是由同一个线程多次获得锁</p><p>在只有一个线程时,不会释放锁,直接操作(减少消耗)</p><h1 id="轻量锁" tabindex="-1">轻量锁 <a class="header-anchor" href="#轻量锁" aria-label="Permalink to &quot;轻量锁&quot;">​</a></h1><p>多线程竞争下,任意时间只有一个线程,没有冲突</p><p>线程会通过cas竞争锁,而不是直接阻塞</p><p>jdk6之前: 当线程cas自旋达到10次后或自旋线程达到cpu核数一半时,轻量锁会升级为重量锁</p><p>jdk6之后: 能够根据当前运行时的情况来自动调整自旋等待的时间，以优化性能</p><h1 id="重量锁" tabindex="-1">重量锁 <a class="header-anchor" href="#重量锁" aria-label="Permalink to &quot;重量锁&quot;">​</a></h1><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h1><table tabindex="0"><thead><tr><th style="text-align:center;"></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td style="text-align:center;">偏向锁</td><td>加减锁不需要额外消耗</td><td>只适用于一个线程竞争锁</td></tr><tr><td style="text-align:center;">轻量锁</td><td>多线程竞争下不会阻塞,响应时间<strong>非常快</strong></td><td>长期自旋消耗资源</td></tr><tr><td style="text-align:center;">重量锁</td><td>不自旋,不消耗,总体<strong>吞吐量大</strong></td><td>线程阻塞,响应时间慢</td></tr></tbody></table>',13)]))}const u=a(n,[["render",o]]);export{_ as __pageData,u as default};
