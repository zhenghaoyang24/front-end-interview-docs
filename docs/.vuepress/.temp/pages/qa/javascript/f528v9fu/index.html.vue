<template><div><h2 id="proxy-能够监听对象中的对象的引用吗" tabindex="-1"><a class="header-anchor" href="#proxy-能够监听对象中的对象的引用吗"><span>Proxy 能够监听对象中的对象的引用吗？</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">问题</p>
<p>Proxy 能够监听对象中的对象的引用吗？</p>
</div>
<hr>
<p><strong>不能直接监听。</strong></p>
<p><code v-pre>Proxy</code> 默认只代理对象的一层属性。如果对象的某个属性值本身是另一个对象（嵌套对象），那么对该嵌套对象 <strong>内部属性的读写操作</strong>，<strong>不会触发外层 Proxy 的拦截器（handler）</strong>，
因为嵌套对象本身 <strong>不是 Proxy</strong>，而是原始引用。</p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例：</span></a></h3>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  get</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">get</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">set</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 不会触发任何日志！</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：<code v-pre>proxy.a</code> 返回的是原始对象 <code v-pre>{ b: 1 }</code>，对它的 <code v-pre>.b = 2</code> 操作完全绕过了外层 Proxy。</p>
<hr>
<h3 id="如何监听嵌套对象" tabindex="-1"><a class="header-anchor" href="#如何监听嵌套对象"><span>如何监听嵌套对象？</span></a></h3>
<p>必须对<strong>每个嵌套对象也创建 Proxy</strong>，即实现 <strong>深度代理</strong>：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> reactive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">obj</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ===</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ||</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> obj</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> !==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">object</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  Object</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">keys</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">forEach</span><span style="--shiki-light:#999999;--shiki-dark:#666666">((</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> reactive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 递归代理</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  });</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">obj</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    get</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">get</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">      return</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> reactive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 返回也需代理</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">set</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">      target</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> reactive</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 新值也需代理</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">      return</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  });</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue 3 的 <VPLink href="/web/vue/vue3/#reactive">reactive()</VPLink> 就是基于这种深度 Proxy 实现的。Vue3 中的响应系统可<VPLink href="/web/vue/principle/#%E5%93%8D%E5%BA%94%E7%B3%BB%E7%BB%9F">阅读这里</VPLink>。</p>
<h2 id="apply、call、bind" tabindex="-1"><a class="header-anchor" href="#apply、call、bind"><span>apply、call、bind</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">问题</p>
<p>apply、call、bind 的区别？</p>
</div>
<hr>
<p><code v-pre>apply</code>、<code v-pre>call</code>、<code v-pre>、bind</code> 都是用来改变函数执行上下文的，也就是函数运行时 this 的指向。</p>
<h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply"><span>apply</span></a></h3>
<p><code v-pre>apply</code> 接收两个参数：<code v-pre>function.apply(thisArg, [argsArray])</code>。第一个参数是 this 的指向，第二个参数是函数接收的参数且以数组的形式传入。且第一个参数为 <code v-pre>null</code> 或 <code v-pre>undefined</code> 时 <code v-pre>this</code> 指向 window 。
<code v-pre>apply</code> 调用函数后会立即执行，且 this 指向只临时改变一次。</p>
<ClientOnly>
  <JSRunner :code="code1" />
</ClientOnly>
<h3 id="call" tabindex="-1"><a class="header-anchor" href="#call"><span>call</span></a></h3>
<p><code v-pre>call</code> 与 <code v-pre>bind</code> 很多相似之处：接收两个参数、调用函数后也会立即执行，且 this 指向只临时改变一次、当第一个参数为 <code v-pre>null</code> 或 <code v-pre>undefined</code> 时 <code v-pre>this</code> 指向 window 。它们的区别在于 <code v-pre>call</code> 传入的第二个参数是一个参数列表。</p>
<ClientOnly>
  <JSRunner :code="code2" />
</ClientOnly>
<h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind"><span>bind</span></a></h3>
<p><code v-pre>bind</code> 传入的参数与 <code v-pre>call</code> 一样，第一个为指定的 <code v-pre>this</code> ，第二个为 <strong>参数列表</strong>。区别在于它不是立即执行，而是返回一个永久改变
<code v-pre>this</code> 指向的函数，且第二个参数可以分多次传入（因为已经如同另一个函数）。</p>
<ClientOnly>
  <JSRunner :code="code3" />
</ClientOnly>
<h3 id="对比表" tabindex="-1"><a class="header-anchor" href="#对比表"><span>对比表</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>apply</th>
<th>call</th>
<th>bind</th>
</tr>
</thead>
<tbody>
<tr>
<td>参数</td>
<td>thisArg, [argsArray]</td>
<td>thisArg, arg1, arg2, ...</td>
<td>thisArg, arg1, arg2, ...</td>
</tr>
<tr>
<td>执行</td>
<td>立即执行</td>
<td>立即执行</td>
<td>返回一个改变 this 指向的函数</td>
</tr>
<tr>
<td>this</td>
<td>临时改变</td>
<td>临时改变</td>
<td>永久改变</td>
</tr>
<tr>
<td>参数列表</td>
<td>数组</td>
<td>参数列表</td>
<td>参数列表</td>
</tr>
</tbody>
</table>
</div></template>


<script setup>
let code3 = `function fn(...args){
  console.log(this)
  console.log(args)
}
let obj = { name: 'Hoey' }

const bindFn = fn.bind(obj, 1) // this 永久指向 obj , 参数为 [1]
bindFn(2,3) // 返回的函数可以分为多次传入，此时参数为 [1,2,3]
bindFn(4,5) // 返回的函数可以分为多次传入，此时参数为 [1,4,5]
fn(1,2,3,4) // 原函数的 this 仍然指向 Window
`

let code1 = `function fn(...args){
  console.log(this)
  console.log(args)
}
let obj = { name: 'Hoey' }

fn.apply(null, [1]) // this 指向 window , 参数为 [1]
fn.apply(obj, [1, 2]) // 临时改变 this 为 obj，参数为 [1, 2]
fn(1,2,3) // this 为 Window，参数为 [1, 2, 3]
`

let code2 = `function fn(...args){
  console.log(this)
  console.log(args)
}
let obj = { name: "Hoey" }

fn.call(obj, 1, 2, 3) // 临时改变 this 为 obj，参数为 [1, 2, 3]
fn(1,2) // this 为 Window，参数为 [1, 2]
`
</script>