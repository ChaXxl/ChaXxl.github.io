import{_ as l,X as r,Y as t,Z as s,$ as a,a0 as e,a1 as i,F as d}from"./framework-dbbbcf5d.js";const o={},c=s("h1",{id:"centos配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#centos配置","aria-hidden":"true"},"#"),a(" CentOS配置")],-1),p=s("p",null,[s("br"),s("br")],-1),u=s("h1",{id:"clash科学上网",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#clash科学上网","aria-hidden":"true"},"#"),a(" Clash科学上网")],-1),h={href:"https://github.com/Dreamacro/clash",target:"_blank",rel:"noopener noreferrer"},b=s("p",null,[s("br"),s("br")],-1),v=s("h1",{id:"python安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#python安装","aria-hidden":"true"},"#"),a(" Python安装")],-1),m={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},g=i(`<ol><li>进入src目录，因为我们要将 python 安装在 src 目录，当然你也可以安装到其它地方</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">wget</span> https://www.python.org/ftp/python/3.10.6/Python-3.10.6.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> Python-3.10.6.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入解压后的文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> Python-3.10.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>生成makefile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/src/python3.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建软链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/src/python3.10/bin/python3.10 /usr/bin/python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/src/python3.10/bin/pip3 /usr/bin/pip3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><br><p>验证是否安装完成：</p><p><img src="https://img-blog.csdnimg.cn/4891420d227246509757e0d2686295ef.png" alt="image-20220429083730778" loading="lazy"></p><p><br><br></p><h1 id="vim安装" tabindex="-1"><a class="header-anchor" href="#vim安装" aria-hidden="true">#</a> Vim安装</h1>`,8),k={href:"https://github.com/vim/vim",target:"_blank",rel:"noopener noreferrer"},f=i(`<p><code>.vimrc</code>常用配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> numbers <span class="token string">&quot; 显示行号
set ts=4	&quot;</span> 设置Tab键为4个空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="vim-plug插件库" tabindex="-1"><a class="header-anchor" href="#vim-plug插件库" aria-hidden="true">#</a> vim-plug插件库</h2>`,4),_={href:"https://github.com/junegunn/vim-plug",target:"_blank",rel:"noopener noreferrer"},x=i(`<p><code>.vimrc</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>call plug<span class="token comment">#begin(&#39;~/.vim/plugged&#39;)</span>

Plug <span class="token string">&#39;junegunn/vim-easy-align&#39;</span>

Plug <span class="token string">&#39;https://github.com/junegunn/vim-github-dashboard.git&#39;</span>

Plug <span class="token string">&#39;SirVer/ultisnips&#39;</span> <span class="token operator">|</span> Plug <span class="token string">&#39;honza/vim-snippets&#39;</span>

Plug <span class="token string">&#39;scrooloose/nerdtree&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;on&#39;</span><span class="token builtin class-name">:</span>  <span class="token string">&#39;NERDTreeToggle&#39;</span> <span class="token punctuation">}</span>
Plug <span class="token string">&#39;tpope/vim-fireplace&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;for&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;clojure&#39;</span> <span class="token punctuation">}</span>

Plug <span class="token string">&#39;rdnetto/YCM-Generator&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;branch&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;stable&#39;</span> <span class="token punctuation">}</span>

Plug <span class="token string">&#39;fatih/vim-go&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;tag&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;*&#39;</span> <span class="token punctuation">}</span>

Plug <span class="token string">&#39;nsf/gocode&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;tag&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;v.20150303&#39;</span>, <span class="token string">&#39;rtp&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;vim&#39;</span> <span class="token punctuation">}</span>

Plug <span class="token string">&#39;junegunn/fzf&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;dir&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;~/.fzf&#39;</span>, <span class="token string">&#39;do&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./install --all&#39;</span> <span class="token punctuation">}</span>

Plug <span class="token string">&#39;~/my-prototype-plugin&#39;</span>


call plug<span class="token comment">#end()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="ycm自动补全" tabindex="-1"><a class="header-anchor" href="#ycm自动补全" aria-hidden="true">#</a> YCM自动补全</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Plug <span class="token string">&#39;Valloric/YouCompleteMe&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="nerdtree目录树" tabindex="-1"><a class="header-anchor" href="#nerdtree目录树" aria-hidden="true">#</a> NERDTree目录树</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><br><br></p><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySql</h1>`,10),y={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},z=s("p",null,[s("br"),s("br")],-1),w=s("h1",{id:"mongodb",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),a(" MongoDB")],-1),q={href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"},P=s("p",null,[s("br"),s("br")],-1),C=s("h1",{id:"sqlite3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sqlite3","aria-hidden":"true"},"#"),a(" Sqlite3")],-1),S={href:"https://www.sqlite.org",target:"_blank",rel:"noopener noreferrer"},N=i(`<ol><li>下载</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://www.sqlite.org/2021/sqlite-autoconf-3370000.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>解压</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> zxvf  sqlite-autoconf-3370000.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>配置安装路径....</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local/src/sqlite3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>编译和安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>创建软链接</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/src/sqlite3/bin/sqlite3  /usr/bin/sqlite3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>检查是否安装好</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sqlite3 <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><hr><p>Configure是一个可执行脚本，它有很多选项，在待安装的源码路径下使用命令./configure–help输出详细的选项列表。其中，prefix选项是配置安装的路径，如果不配置该选项，安装后</p><ul><li><p>可执行文件默认放在 <code>/usr/local/bin</code></p></li><li><p>库文件默认放在 <code>/usr/local/lib</code></p></li><li><p>配置文件默认放在 <code>/usr/local/etc</code></p></li><li><p>其它的资源文件放在 <code>/usr/local/share</code></p></li></ul><p><br><br></p><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1>`,18),E={href:"http://nginx.org",target:"_blank",rel:"noopener noreferrer"},H=i(`<ol><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.20.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.20.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置安装路径和模块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/src/nginx-1.20.0 --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编译和安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建软链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> nginx-1.20.2/sbin/niginx /usr/bin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p><br><br></p><h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h1>`,3),V={href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},j=i(`<ol><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://npmmirror.com/mirrors/node/v16.13.2/node-v16.13.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvJf</span> node-v16.13.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p><br><br></p><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1>`,3),M={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},T=i(`<p><br><br></p><h1 id="终端美化" tabindex="-1"><a class="header-anchor" href="#终端美化" aria-hidden="true">#</a> 终端美化</h1><h2 id="安装-zsh" tabindex="-1"><a class="header-anchor" href="#安装-zsh" aria-hidden="true">#</a> 安装 zsh</h2><ol><li><p>安装 zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看当前 shell</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span> <span class="token comment"># 查看看当前使用的 shell</span>
<span class="token function">cat</span> /etc/shells <span class="token comment"># 查看系统是否安装了zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>切换 shell 为 zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chsh <span class="token parameter variable">-s</span> /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><br><h2 id="安装-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-oh-my-zsh" aria-hidden="true">#</a> 安装 oh-my-zsh</h2>`,6),D=i(`<li><p>安装 oh-my-zsh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> https://img-1307852539.cos.ap-guangzhou.myqcloud.com/temp/install.sh <span class="token parameter variable">-O</span> -<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),$=s("p",null,"更换主题",-1),B={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes#pygmalion",target:"_blank",rel:"noopener noreferrer"},G=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改 ZSH_THEME=&quot;robbyrussell&quot; 中双引号主题 <code>gnzh</code></p>`,2),L=i(`<br><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><h3 id="智能提示" tabindex="-1"><a class="header-anchor" href="#智能提示" aria-hidden="true">#</a> 智能提示</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/xs66/zsh-autosuggestions <span class="token variable">$ZSH</span>/plugins/zsh-autosuggestions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="语法高亮" tabindex="-1"><a class="header-anchor" href="#语法高亮" aria-hidden="true">#</a> 语法高亮</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/xs66/zsh-syntax-highlighting.git <span class="token variable">$ZSH</span>/plugins/zsh-syntax-highlighting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="载入配置" tabindex="-1"><a class="header-anchor" href="#载入配置" aria-hidden="true">#</a> 载入配置</h3><p><code>vim ~/.zshrc</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
   <span class="token function">git</span>
   extract
   <span class="token function">cp</span>
   safe-paste
   colored-man-pages
   
   zsh-syntax-highlighting
   zsh-autosuggestions
 <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><h1 id="安装-chrome-并使用-selenium" tabindex="-1"><a class="header-anchor" href="#安装-chrome-并使用-selenium" aria-hidden="true">#</a> 安装 Chrome 并使用 selenium</h1><ol><li><p>下载安装包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> google-chrome-stable_current_x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>版本</p></li></ol><p><img src="https://img-blog.csdnimg.cn/eec347d670c943eea9090160b6d2e940.png" alt="20220711195833" loading="lazy"></p>`,15),O={start:"3"},R=s("p",null,"下载驱动",-1),Y={href:"http://chromedriver.storage.googleapis.com/index.html",target:"_blank",rel:"noopener noreferrer"},Z=i(`<li><p>解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">unzip</span> chromedriver_linux64.zip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function I(F,J){const n=d("ExternalLinkIcon");return r(),t("div",null,[c,p,u,s("p",null,[a("GitHub官网："),s("a",h,[a("https://github.com/Dreamacro/clash"),e(n)])]),b,v,s("p",null,[a("官网："),s("a",m,[a("https://www.python.org/"),e(n)])]),g,s("p",null,[s("a",k,[a("Vim GitHub 主页"),e(n)])]),f,s("p",null,[s("a",_,[a("vim-plug GitHub 主页"),e(n)])]),x,s("p",null,[a("官网："),s("a",y,[a("https://www.mysql.com/"),e(n)])]),z,w,s("p",null,[a("官网："),s("a",q,[a("https://www.mongodb.com/"),e(n)])]),P,C,s("p",null,[s("a",S,[a("Sqlite 官网"),e(n)])]),N,s("p",null,[s("a",E,[a("Nginx 官网"),e(n)])]),H,s("p",null,[s("a",V,[a("Nodejs 中文官网"),e(n)])]),j,s("p",null,[s("a",M,[a("Redis 官网"),e(n)])]),T,s("ol",null,[D,s("li",null,[$,s("p",null,[s("a",B,[a("主题列表"),e(n)])]),G])]),L,s("ol",O,[s("li",null,[R,s("p",null,[s("a",Y,[a("下载地址"),e(n)])])]),Z])])}const A=l(o,[["render",I],["__file","CentOSConfig.html.vue"]]);export{A as default};