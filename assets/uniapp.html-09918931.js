import{_ as p,X as o,Y as l,Z as n,$ as s,a0 as t,a2 as e,F as c}from"./framework-c5cbeb87.js";const i={},u=e(`<h2 id="uniapp" tabindex="-1"><a class="header-anchor" href="#uniapp" aria-hidden="true">#</a> uniapp</h2><h3 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sendGet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">v-on:</span>cli</span><span class="token punctuation">&gt;</span></span>&gt;发送请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">sendGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://map.chachal.xyz/api/test&quot;</span><span class="token punctuation">,</span>
                    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong># 微信小程序开发</strong></p>`,4),r={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<p><strong>##　&lt;<strong>font color</strong>=<strong><strong>&quot;lightblue&quot;</strong></strong>&gt;配置小程序&lt;/<strong>font</strong>&gt;</strong></p><p>小程序根目录下的 <code>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等</p><p><img src="https://i.loli.net/2021/06/29/KpJuHBO9mVR3z74.png" alt="image-20210508092214458" loading="lazy"></p><p>每一个小程序页面也可以使用同名 <code>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>例如：

<span class="token punctuation">{</span>

  *<span class="token string">&quot;navigationBarBackgroundColor&quot;</span>*<span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>

  *<span class="token string">&quot;navigationBarTextStyle&quot;</span>*<span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>

  *<span class="token string">&quot;navigationBarTitleText&quot;</span>*<span class="token operator">:</span> <span class="token string">&quot;微信接口功能演示&quot;</span><span class="token punctuation">,</span>

  *<span class="token string">&quot;backgroundColor&quot;</span>*<span class="token operator">:</span> <span class="token string">&quot;#eeeeee&quot;</span><span class="token punctuation">,</span>

  *<span class="token string">&quot;backgroundTextStyle&quot;</span>*<span class="token operator">:</span> <span class="token string">&quot;light&quot;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),k={href:"https://blog.csdn.net/xiaoye319/article/details/78416762/",target:"_blank",rel:"noopener noreferrer"};function v(g,m){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[s("官方文档 : "),n("a",r,[s("https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html"),t(a)])]),d,n("p",null,[s("js中数组push对象，前面的值总是被最后一次的值覆盖的问题 "),n("a",k,[s("https://blog.csdn.net/xiaoye319/article/details/78416762/"),t(a)])])])}const h=p(i,[["render",v],["__file","uniapp.html.vue"]]);export{h as default};
