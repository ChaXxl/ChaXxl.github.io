import{_ as t,X as p,Y as e,Z as n,$ as s,a0 as o,a2 as c,F as i}from"./framework-c5cbeb87.js";const l={},u=c(`<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h2><p>给select元素下拉框赋值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;6211125886667895&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6211125886667892&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6211125886667897&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dataList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> option <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;option&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//先创建好select里面的option元素</span>
    <span class="token comment">//转换DOM对象为JQ对象,好用JQ里面提供的方法 给option的value赋值</span>
    <span class="token function">$</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>dataList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//转换DOM对象为JQ对象,好用JQ里面提供的方法 给option的value赋值   </span>
    <span class="token function">$</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>dataList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//给option的text赋值,这就是你点开下拉框能够看到的东西   </span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#problemTypeId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取select 下拉框对象,并将option添加进select</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h4><h5 id="ajax以get方式请求数据" tabindex="-1"><a class="header-anchor" href="#ajax以get方式请求数据" aria-hidden="true">#</a> ajax以get方式请求数据</h5><p>方法一：代码行数比较少，看起来通俗易懂</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 各参数说明：https://www.cnblogs.com/zhang1f/p/12463738.html</span>
    <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8000/api/show?name=张三&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 发送ajax 请求 需要 五步            </span>
     <span class="token keyword">var</span> ajax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// （1）创建异步对象</span>
    
     ajax<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1:8000/api/show?name=肖寻亮&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     ajax<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// （3）发送请求</span>
         
  <span class="token comment">//（4）注册事件。 onreadystatechange事件，状态改变时就会调用。  //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。</span>
   
     ajax<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>       
         <span class="token keyword">if</span> <span class="token punctuation">(</span>ajax<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> ajax<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 为了保证 数据 完整返回，我们一般会判断 两个值</span>
             <span class="token comment">// 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的</span>
             <span class="token comment">// 5.在注册的事件中 获取 返回的 内容 </span>
             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据返回成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ajax<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 数据是保存在 异步对象的 属性中                   </span>
             document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> ajax<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span> <span class="token comment">// 修改页面的显示</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Django后台代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http<span class="token punctuation">.</span>response <span class="token keyword">import</span> HttpResponse<span class="token punctuation">,</span> JsonResponse

<span class="token keyword">def</span> <span class="token function">index1</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>  
    name <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>GET<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 获取网址中请求的name属性</span>
    sex <span class="token operator">=</span> <span class="token string">&quot;男&quot;</span>
    age <span class="token operator">=</span> <span class="token number">18</span>
    address <span class="token operator">=</span> <span class="token string">&#39;长沙&#39;</span>
    <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&#39;status&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span>name<span class="token punctuation">,</span>
        <span class="token string">&#39;sex&#39;</span><span class="token punctuation">:</span>sex<span class="token punctuation">,</span>
        <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span>age<span class="token punctuation">,</span>
        <span class="token string">&#39;address&#39;</span><span class="token punctuation">:</span>address
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ajax以post方式请求数据" tabindex="-1"><a class="header-anchor" href="#ajax以post方式请求数据" aria-hidden="true">#</a> ajax以post方式请求数据</h5>`,12),r={href:"https://www.cnblogs.com/qianguyihao/p/8485028.html",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const a=i("ExternalLinkIcon");return p(),e("div",null,[u,n("p",null,[s("参考文章："),n("a",r,[s("https://www.cnblogs.com/qianguyihao/p/8485028.html"),o(a)])])])}const b=t(l,[["render",k],["__file","JavaScript.html.vue"]]);export{b as default};
