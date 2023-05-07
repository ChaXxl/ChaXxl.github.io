import{_ as s,X as a,Y as e,a1 as n}from"./framework-dbbbcf5d.js";const i={},l=n(`<h1 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h1><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h2><blockquote><p>镜像和容器的区别：</p><p>1、镜像是包含了各种环境或者服务的一个模板，而容器是镜像的一个实例；</p><p>2、镜像是我们写的代码、是文件、是静态的、是不能运行的；而容器则是运行这个代码发起的进程、是动态的，本质是一个进程。</p></blockquote><p><img src="https://img-blog.csdnimg.cn/img_convert/dc1e809f20b5fc7df0f8cb793a7e0196.png" alt="" loading="lazy"></p><ol><li><p>查看版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docker-machine <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看 docker 系统信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>帮助命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看 CPU 概况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="docker-镜像相关的基本命令" tabindex="-1"><a class="header-anchor" href="#docker-镜像相关的基本命令" aria-hidden="true">#</a> docker 镜像相关的基本命令</h3><ol><li><p>查看镜像可用版本，以 nginx 为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>下载一个镜像，以 nginx 最新版为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:lates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行一个 nginx 服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">81</span>:80 <span class="token parameter variable">--name</span> webserver nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可选项：</p><ul><li><code>--name webserver</code>: 容器名称，用来区分容器</li><li><code>-p 81:80</code>：端口进行映射，将本地的 81 端口映射到容器内部的 80 端口</li><li><code>-v ~/nginx/html:/usr/share/nginx/html 数据卷挂载/ro/rw</code>：将主机项目中的目录挂载到容器的目录下，默认 rw 智能在宿主机外改变，容器内部不能改变</li><li><code>-d</code>：设置容器在后台一直运行</li><li><code>-it</code>：使用交互方式运行，进入容器查看内容</li><li><code>-p</code>：随机端口</li><li><code>-e</code>：环境配置设置</li></ul><p>注意：后台启动运行，必须要又一个前台进程，docker 发现没有应用，就会自动停止</p><p>重点：数据卷挂载分为 具名/指定路径挂载，容器数据卷挂载可以实现数据共享，容器的持久化和同步操作，可以使用 docker volumn 查看卷的情况，可以使用 volumnes-from 实现多个容器之间的数据共享</p></li><li><p>停止 nginx 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop webserver <span class="token comment">#（webserver 是容器ID）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除 nginx 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动、重启 nginx 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart webserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>列出所有镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可选项：</p><ul><li><code>-a</code>：列出所有镜像</li><li><code>-q</code>：只显示镜像的 ID</li></ul><p>注意：镜像 ID 是唯一标识符，一个镜像可以对应多个标签</p></li><li><p>查看镜像、容器、数据卷所占用的空间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除镜像</p><ul><li><p>指定镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token punctuation">[</span>镜像名称/镜像ID/镜像摘要<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>多个镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi 镜像ID 镜像ID 镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>全部镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rim <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><ol start="10"><li><p>删除所有仓库名为 redis 的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token function">ls</span> <span class="token parameter variable">-q</span> redis<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看镜像运行记录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">history</span> 镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li></ol><h3 id="docker-容器相关的基本命令" tabindex="-1"><a class="header-anchor" href="#docker-容器相关的基本命令" aria-hidden="true">#</a> docker 容器相关的基本命令</h3><ol><li><p>列出容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可选项：</p><ul><li><code>-a</code>：显示所有的容器，包括未运行的</li><li><code>-i</code>：显示最近创建的容器</li><li><code>-q</code>：只显示容器的编号</li></ul></li><li><p>进入容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器名称 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> attach 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>区别：</p><p>docker exec 进入容器后开启一个新的终端，可以在里面操作；</p><p>docker attach 进入容器正在执行的终端</p></li><li><p>退出容器</p><ul><li><p>容器停止，退回主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>容器不停止退出</p><p><kbd>Ctrl</kbd> + <kbd>p</kbd> + <kbd>q</kbd></p></li></ul></li><li><p>删除容器</p><ul><li><p>指定容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>多个容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> 容器ID 容器ID 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>所有容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span> <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>注意：不能删除正在运行的容器，要删除正在运行的容器需要加 <code>-f</code> 参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>启动、重启容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>停止、强制停止容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看容器日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--tail</span> <span class="token number">100</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--tail 后面必须加参数条数</p></li><li><p>查看容器中的进程信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看容器的元数据（重要命令）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从容器上拷贝数据到主机上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 容器ID:容器内路径 主机路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="dockerfile-的命令" tabindex="-1"><a class="header-anchor" href="#dockerfile-的命令" aria-hidden="true">#</a> Dockerfile 的命令</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> 基础镜像，一切从这里开始</span>

<span class="token instruction"><span class="token keyword">MAINTAINER</span> 镜像的作者 姓名&lt;邮箱&gt;</span>

<span class="token instruction"><span class="token keyword">RUN</span> 镜像构建需要运行的命令</span>

<span class="token instruction"><span class="token keyword">ADD</span> 步骤，添加内容</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> 镜像的工作目录</span>

<span class="token instruction"><span class="token keyword">VOLUME</span> 挂载的目录</span>

EXPOST 端口配置

<span class="token instruction"><span class="token keyword">CMD</span> 指定容器启动要运行的命令，只有最后一行会生效，可被替代</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> 指定这个容器启动要运行的命令，可以追加命令</span>

<span class="token instruction"><span class="token keyword">ONBUILD</span> 当构建一个被继承的 Dockerfile 时会运行</span>

<span class="token instruction"><span class="token keyword">COPY</span> 类似 ADD 将我们文件拷贝到镜像中</span>

<span class="token instruction"><span class="token keyword">ENV</span> 构建的时候设置环境变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function c(r,o){return a(),e("div",null,d)}const t=s(i,[["render",c],["__file","Docker.html.vue"]]);export{t as default};
