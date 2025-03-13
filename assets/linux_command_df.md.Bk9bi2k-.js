import{_ as l,c as s,o as t,ag as p}from"./chunks/framework.DPDPlp3K.js";const e="/assets/Pasted%20image%2020250312200823.DTP3CrG8.png",a="/assets/Pasted%20image%2020250312201056.pD1cM8ZZ.png",o="/assets/Pasted%20image%2020250312203046.DYV4Ufet.png",n="/assets/Pasted%20image%2020250312210449.Dp6Dhfti.png",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/command/df.md","filePath":"linux/command/df.md"}'),c={name:"linux/command/df.md"};function r(d,i,m,_,g,u){return t(),s("div",null,i[0]||(i[0]=[p('<p>df 是一个用来查看当前系统下磁盘挂载以及使用情况</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [option]... [file]...</span></span></code></pre></div><ul><li>df会展示所有<strong>file</strong>所属的挂载信息</li><li>如果不提供<strong>file</strong>参数,将会展示所有已挂载的文件系统 <img src="'+e+'" alt=""></li></ul><p><em><strong>options</strong></em></p><ul><li><p>-h,--human-readable # 以人类可读方式展示(1G=1024M)</p></li><li><p>-H,--si # 同理,单位不同(1G=1000M) <img src="'+a+'" alt=""></p></li><li><p>-a # 还显示虚拟,重复,不可访问的文件系统</p></li><li><p>-l,--local # 只显示本地文件系统(不显示nfs等远程文件系统)</p></li><li><p>-B,--block-size # 修改block快大小(默认1k) , 同样可以提供俩种单位:</p><ul><li>1024 单位为K,M,G,T,P,E,Z,Y,R,Q</li><li>1000 单位为 KB,MB...</li></ul></li><li><p>-k # 等于**-B 1k** <img src="'+o+'" alt=""></p></li></ul><blockquote><p>block-size 默认值会受到环境变量DF_BLOCK_SIZE,BLOCK_SIZE,BLOCKSIZE影响</p></blockquote><ul><li><p>-i,--inodes # 显示inodes数量而不是blocks数量</p></li><li><p>-T,--print-type # 显示对应文件系统类型</p></li><li><p>-x,--exclude-type # 不显示的文件系统类型 k- -t,--type # 只显示的文件系统类型</p></li><li><p>-x,--exclude-type # 不显示的文件系统类型</p></li><li><p>--sync # 在执行之前强制调用<strong>sync</strong>命令将内存中的缓存数据写入磁盘</p></li><li><p>--no-sync # 默认行为,性能略高</p></li><li><p>--output # 自定义输出列,下面是所有支持字段名 <img src="'+n+'" alt=""></p></li><li><p>-P,--protability # 以POSIX格式输出</p></li><li><p>--total # 总计行</p></li></ul>',7)]))}const h=l(c,[["render",r]]);export{k as __pageData,h as default};
