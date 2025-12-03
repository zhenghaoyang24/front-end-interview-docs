<template><div><h2 id="代码执行结果1" tabindex="-1"><a class="header-anchor" href="#代码执行结果1"><span>代码执行结果1</span></a></h2>
<p>下面的代码执行结果是什么？</p>
<ClientOnly>
  <JSRunner :code="code" :height="400" />
</ClientOnly>
<p>这段代码考察变量提升与优先级：函数声明会被提升到作用域顶部，<code v-pre>var</code> 也会被提升，但函数优先级更高，不会覆盖已经存在的同名函数声明。所以上面的代码在执行上下文阶段等效以下代码：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// var foo; ← 被忽略，因为 foo 已由函数声明定义</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 调用函数</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>foo</code> 调用时指向的是函数声明。</p>
</div></template>


<script setup>
let code = `foo()
var foo
function foo(){
  console.log(1)
}
`
</script>