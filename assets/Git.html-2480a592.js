import{_ as i,X as l,Y as d,Z as a,$ as e,a0 as t,a1 as s,F as r}from"./framework-dbbbcf5d.js";const c={},p=s(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="git-简介" tabindex="-1"><a class="header-anchor" href="#git-简介" aria-hidden="true">#</a> Git 简介</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git是一个分布式版本控制软件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>`,5),o={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},u=s(`<br><h2 id="git-软件操作" tabindex="-1"><a class="header-anchor" href="#git-软件操作" aria-hidden="true">#</a> Git 软件操作</h2><p>显示当前路径：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>进入目录，生成版本库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> inti
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>master分支放最新的代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;you@example.com&quot;</span>
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/20/lW9ioPUL457ZDEd.png" alt="image-20210620220849304" loading="lazy"></p><p><img src="https://i.loli.net/2021/06/20/eqxWL2s8nMSd1Ir.png" alt="image-20210620220651833" loading="lazy"></p><br><p>利用git init在文件夹内新建一个空白的仓库，或者叫版本库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/20/y3IBfqM2TzWXeH1.png" alt="image-20210620221258289" loading="lazy"></p><p><img src="https://i.loli.net/2021/06/20/4PJpANjBo2ruV7L.png" alt="image-20210620222131438" loading="lazy"></p><br><p>将暂存区的文件提交到分支：（m表示message，代表描述）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;第一次提交&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>分支操作</p><p>创建分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建+切换分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>合并某分支到当前分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除某分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/20/v6bI3XaKpiOsRFc.png" alt="image-20210620220106512" loading="lazy"></p><p><img src="https://i.loli.net/2021/06/20/Wvf3bKuCmgezlxA.png" alt="image-20210620220134753" loading="lazy"></p><p>在这获取项目地址，一般用ssh，比较安全。</p><p><img src="https://i.loli.net/2021/06/20/WyaHGp5kh69OPKB.png" alt="image-20210620220443484" loading="lazy"></p><p>远程库和本地库的连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin 地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git解除与远程分支的关联</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote remove origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新本地库，即将远程库的文件拉到本地</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://i.loli.net/2021/06/20/T5GwVxOQ1K9yre4.png" alt="image-20210620223155087" loading="lazy"></p><p>将本地库更新到远程库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,47);function g(m,h){const n=r("ExternalLinkIcon");return l(),d("div",null,[p,a("p",null,[e("到官网下载Git软件安装："),a("a",o,[e("https://git-scm.com/"),t(n)])]),u])}const b=i(c,[["render",g],["__file","Git.html.vue"]]);export{b as default};
