<template><div><h2 id="vue3-中响应式系统的原理" tabindex="-1"><a class="header-anchor" href="#vue3-中响应式系统的原理"><span>Vue3 中响应式系统的原理？</span></a></h2>
<p>Vue 3 的响应式系统是其核心架构的重大革新，它采用现代 JavaScript 的 <strong>Proxy API</strong> 替代了 Vue 2 的 <code v-pre>Object.defineProperty</code>，实现了更高效、更全面的数据响应能力。</p>
<p>当使用 <code v-pre>reactive()</code> 包装一个对象时，Vue 3 会为其创建一个 <strong>Proxy 代理</strong>。这个代理能够<strong>拦截对象的所有操作</strong>——包括属性的读取（get）、设置（set）、添加、删除等。每当您访问响应式对象的属性时，系统会通过 <code v-pre>track()</code> 函数<strong>自动收集依赖</strong>（即哪些组件或计算属性依赖于此数据）；而当您修改数据时，则会通过 <code v-pre>trigger()</code> 函数<strong>精确触发所有相关依赖的更新</strong>。</p>
<p>对于原始值（如字符串、数字），Vue 3 提供了 <code v-pre>ref()</code> API，它将值包装在一个具有 <code v-pre>.value</code> 属性的对象中，内部同样利用响应式系统进行依赖追踪。而 <code v-pre>computed()</code> 则基于此系统构建，它会自动缓存计算结果，仅在依赖发生变化时才重新计算。</p>
<p>整个系统围绕 <strong>effect 副作用函数</strong> 运作，组件的渲染、计算属性的求值、侦听器的回调都被包装成 effect。当响应式数据变化时，Vue 3 不会立即执行更新，而是通过<strong>调度器（scheduler）</strong> 将这些更新排队，在下一个微任务中批量执行，这大大提升了性能并避免了不必要的重复渲染。</p>
<p>了解更多响应式系统信息，请参阅 <VPLink href="/web/vue/principle/#%E5%93%8D%E5%BA%94%E7%B3%BB%E7%BB%9F">Vue-设计与实现-响应式系统</VPLink>。</p>
</div></template>


