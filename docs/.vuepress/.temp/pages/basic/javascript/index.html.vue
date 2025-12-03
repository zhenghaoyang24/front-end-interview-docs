<template><div><h2 id="_1-基础语法与数据类型" tabindex="-1"><a class="header-anchor" href="#_1-基础语法与数据类型"><span>1. 基础语法与数据类型</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/bhm4jxoq/#%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E">变量声明的方式与它们的区别？</VPLink></li>
<li><VPLink href="/qa/javascript/bhm4jxoq/#for-in-%E4%B8%8E-for-of"><code v-pre>for...in</code> 与 <code v-pre>for...of</code> 的区别？</VPLink></li>
<li><VPLink href="/qa/javascript/bhm4jxoq/#%E6%95%B0%E6%8D%AE%E8%A7%A3%E6%9E%84">如何解构数据？</VPLink></li>
</ul>
<h2 id="_2-函数与作用域" tabindex="-1"><a class="header-anchor" href="#_2-函数与作用域"><span>2. 函数与作用域</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/zo3adust/#%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89">定义函数有哪些方法，它们有什么区别？</VPLink></li>
<li><VPLink href="/qa/javascript/zo3adust/#%E4%BB%80%E4%B9%88%E6%98%AF%E9%97%AD%E5%8C%85">什么是闭包？闭包有什么用途？</VPLink></li>
<li><VPLink href="/qa/javascript/zo3adust/#%E4%BD%9C%E7%94%A8%E5%9F%9F-scope">什么是作用域？</VPLink></li>
<li><VPLink href="/qa/javascript/zo3adust/#%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE-scope-chain">什么是作用域链？</VPLink></li>
</ul>
<h2 id="_3-对象与原型" tabindex="-1"><a class="header-anchor" href="#_3-对象与原型"><span>3. 对象与原型</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/ndncesqk/#%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE">原型与原型链是什么？</VPLink></li>
</ul>
<h2 id="_4-异步与事件" tabindex="-1"><a class="header-anchor" href="#_4-异步与事件"><span>4. 异步与事件</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/01obwm1d/#%E4%B8%8D%E4%BC%9A%E5%86%92%E6%B3%A1%E7%9A%84%E4%BA%8B%E4%BB%B6">不会冒泡的事件有哪些？</VPLink></li>
<li><VPLink href="/qa/javascript/01obwm1d/#mouseenter-%E4%B8%8E-mouseover"><code v-pre>mouseenter</code> 与 <code v-pre>mouseover</code> 有什么区别？</VPLink></li>
<li><VPLink href="/qa/javascript/01obwm1d/#async-%E4%B8%8E-await-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">async 与 await 的实现原理</VPLink></li>
<li><VPLink href="/qa/javascript/01obwm1d/#%E8%8A%82%E6%B5%81%E4%B8%8E%E9%98%B2%E6%8A%96">什么是节流与防抖？</VPLink></li>
<li><VPLink href="/qa/javascript/01obwm1d/#%E7%AB%9E%E6%80%81%E9%97%AE%E9%A2%98">什么是竞态问题？如何解决竞态问题？</VPLink></li>
</ul>
<h2 id="_5-高级特性与api" tabindex="-1"><a class="header-anchor" href="#_5-高级特性与api"><span>5. 高级特性与API</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/f528v9fu/#proxy-%E8%83%BD%E5%A4%9F%E7%9B%91%E5%90%AC%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%9A%84%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%BC%95%E7%94%A8%E5%90%97">Proxy 能够监听对象中的对象的引用吗？</VPLink></li>
<li><VPLink href="/qa/javascript/f528v9fu/#apply%E3%80%81call%E3%80%81bind">apply、call、bind 的区别？</VPLink></li>
</ul>
<h2 id="_6-编码与实现" tabindex="-1"><a class="header-anchor" href="#_6-编码与实现"><span>6. 编码与实现</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/spnc724u/#%E4%BB%A3%E7%A0%81%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C1">下面代码的执行结果是什么？</VPLink><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">var</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> foo</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_7-dom-与浏览器" tabindex="-1"><a class="header-anchor" href="#_7-dom-与浏览器"><span>7. DOM 与浏览器</span></a></h2>
<ul>
<li>暂无问题</li>
</ul>
<h2 id="_8-模块化与工程化" tabindex="-1"><a class="header-anchor" href="#_8-模块化与工程化"><span>8. 模块化与工程化</span></a></h2>
<ul>
<li><VPLink href="/qa/javascript/ix80vlwr/#commonjs-%E4%B8%8E-es6-%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97%E7%9A%84%E5%8C%BA%E5%88%AB">CommonJS 与 ES6 导入模块的区别？</VPLink></li>
<li><VPLink href="/qa/javascript/ix80vlwr/#mvc%E3%80%81mvvm%E3%80%81mvp">什么是MVC模式？什么是MVVM模式？什么是MVP模式？</VPLink></li>
</ul>
</div></template>


