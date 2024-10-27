import{_ as n,X as i,Y as s,a0 as d,Z as e,$ as c,a2 as l,F as r}from"./framework-c5cbeb87.js";const t={},o=e("h2",{id:"c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c","aria-hidden":"true"},"#"),c(" C##")],-1),v=l(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  class MapView {
        public string a1 {
            get { return a; }	//返回a的值
            set { a  = value ; } //将用户设置的值传递给a
        }

        private string a = &quot;myname&quot;;
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> MapView m = new MapView();
 MessageBox.Show(m.a1);
 m.a1 = &quot;xxl&quot;; //用户设置的值
 MessageBox.Show(m.a1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(u,b){const a=r("Mermaid");return i(),s("div",null,[o,d(a,{id:"mermaid-3",code:"eJxLL0osyFDwCeJ6unHes4blL9btfzl93dOZK3R17RQcNdxTSzS5HIHsF33bn/ZPe7F+N5B81jHtxbqFz9dNx6YnOLWEC4hBWtbte753HUhxQ+vT/tVP22ZyAQBahDt2"}),v])}const _=n(t,[["render",m],["__file","CSharp.html.vue"]]);export{_ as default};
